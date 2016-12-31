# You might (not) need a JavaScript library #

JavaScript today is like: _"Yeah great, and now you need Webpack, Babel, npm, yarn, React ..."_.

Redux? Relax.

Developing a front end web project of today can be a bit intimidating, especially when the home base is back end development. What about all those frameworks and tools, why use them?

I am currently learning about React, and I like it. React have JSX, ES 2016 and a nice logo. That is cool, but my favorite thing with React is how code is organized. A user interface is built with components: small and isolated "packages" of html & JavaScript. That is a pattern I like.


## Components with vanilla JavaScript? ##

When learning about React patterns, I started thinking about how this could be done without using React, ES 2016, Webpack or any of the other frameworks out there. Is that even possible? (Yes, of course it is)


## Okay, but why? ##

I want to learn and understand the problems that are solved using it. One way is to experience it the hard way, by writing code with plain old vanilla JavaScript, html, css and find out what pain is removed by which framework. Also, I think it is a fun challenge!


## So, show me the code ##
This code in the main branch of the repo does not require any build steps or npm package downloads. The "listItem component" is made of two parts: JavaScript in a code file and an html template in a separate file. The render() function (yes, the name is inspired by React) will create a DOM object containing the html from the template, injected with data from the function parameter. The result is passed to the callback function (the input parameter "done").

___listItem.js:___

```javascript
function render(props, done) {

    // load the template using a helper
    templates.load('/src/listItem/listItem.html', function (el) {

        // 'el' is the html template element
        el.textContent = props.data;
        el.addEventListener('click', props.onClick);

        // pass the element to be added to the DOM
        if (done) {
            done(el);
        }
    });
}

    return {
        render: render
    };
```

___The listItem.html template:___

```html
<li class="listItem" title="the listItem component"></li>
```

This is of course a very simplistic example with a single tag html template, but I think it already highlights issues: the data. To understand where data is added, we have to read and understand the contents of the render function. I think it would be nice if the data to be rendered is visible in the template.

___Something like this:___
```html
<li class="listItem" title="the listItem component">{{data}}</li>

```

How about adding a template render engine?

## Let's grow a Mustache ##
Here's the same component, using a template engine called Mustache.js. You will find the code in a separate branch of the repo (with-template-engine). [compare-länk]

```javascript
function render(props, done) {

    // just pass the data to a modified version of the template loader helper
    templates.load('/src/listItem/listItem.html', props.data, function (el) {
        el.addEventListener('click', props.onClick);

        if (done) {
            done(el);
        }
    });
}
```

The templates helper use Mustache to render the html from the template and the data.

___templates.js:___
```javascript
container.innerHTML = Mustache.render(template, data);
```

It is now possible to write html templates with placeholders for data like this:
```html
<li class="listItem" title="the listItem component">{{data}}</li>

```

## More issues? ##
If you check out the source code in the main branch you'll notice the vanilla JavaScript coding style called IIFE to write modules I have used. Also, every file is added with script tags in the html body of index.html. Some modules depend on others and have to be added in the correct order. That's not great!

## Solution: JavaScript AMD modules ##
In a separate branch, called with-amd [länk här], I have converted all of the immediately invoked function expressions (IIFE) to AMD modules. I use Require.js that will load the modules and resolve dependencies, using the define and require functions.

Instead of a very long list of html script tags, there is only an entry point defined.

___index.html___
```html
 <script data-main="src/app" src="lib/vendor/requirejs.js"></script>
```

The entry point loads the modules needed, and each individual sub module is loading dependencies like this:
```JavaScript
define(['templates', 'listItem/listItem'], function (templates, listItem)
```
Here is the listItem component as an AMD module:
```JavaScript
define(['templates'], function (templates) {

    function render(props, done) {

        templates.load('/src/listItem/listItem.html', props.data, function (el) {
            el.addEventListener('click', props.onClick);

            if (done) {
                done(el);
            }
        });
    }

    return {
        render: render
    };

});
```

## But wait. Don't we have native modules in Javascript now? ##

Oh, I forgot. It is 2017 and ECMAScript 2015 was released almost two years ago. A nice module system was included in it. In the branch with-es2017 [länk] I have rewritten the modules (again). The code is now dressed in ES2017 style, with arrow functions, the const keyword and the ES import feature.

Now, the listItem component looks like this:

```JavaScript
import load from 'templates';

export function render(props, done) {

    load('/src/listItem/listItem.html', props.data, (el) => {
        el.addEventListener('click', props.onClick);

        if (done) {
            done(el);
        }
    });
}
```

I think the code has improved a bit! ES2017 is great, but it comes with a tradeoff. The browsers don't have enough support for this version of JavaScript yet. To make it work in all kinds of browsers and devices we need a build step: compile the code from ES2017 to vanilla JavaScript with Babel.

The package.json file in the project now has quite a few scripts. In addition to dependencies like Mustache.js and require.js, there is a compile-to-vanilla step and a polyfill dependency added:
```json
"scripts": {
    "deps:lib": "mkdir -p -v lib/vendor",
    "deps:requirejs": "cp node_modules/requirejs/require.js lib/vendor/requirejs.js",
    "deps:mustache": "cp node_modules/mustache/mustache.min.js lib/vendor/mustache.min.js",
    "deps:polyfill": "cp node_modules/babel-polyfill/dist/polyfill.min.js lib/vendor/babel-polyfill.min.js",
    "deps": "npm run deps:lib && npm run deps:requirejs && npm run deps:mustache && npm run deps:polyfill",
    "transpile": "babel src --out-dir lib --source-maps",
    "lint": "eslint src",
    "build": "npm run lint && npm run transpile && npm run deps",
    "start": "npm run build && live-server"
  }
```

## Too heavy? ##
When browsing the page there is now a couple of third party libs loaded to the client, besides our own modules. This might cause a not so great experience for users with a slow connection.

### Bundling & minification ###
While we're at it, we might as well add another build step that will bundle all JavaScript files to one file. This will reduce the number of requests from the browser. With minification we can also loose a couple of Kb.

The entry point is now a bundled and minified JavScript file.
```html
<script data-main="lib/bundle/main" src="lib/vendor/requirejs.js"></script>
```

The package.json file now has a bundle script. The source code in this branch is compiled from ES2017 to browser friendly AMD modules. With Require.js, there is a tool for bundling & minification called r.js.

Note: as an alternative, babel can compile ES2017 code to plain vanilla JavaScript without modules and without any dependencies to a third party module system like require.js.
```json
"bundle": "node node_modules/.bin/r.js -o baseUrl=lib name=main out=lib/bundle/main.js"
```

### Where's Webpack? ###
The scripts section of the package.json file is massive and probably difficult to understand. By using Webpack, most of the build steps are no longer necessary. Webpack can do lot of things, it's like a swiss army knife!

___package.json with Webpack:___
```json
"scripts": {
    "lint": "eslint src",
    "build": "npm run lint && webpack",
    "start": "webpack-dev-server"
  }
```

How is that even possible? Okay, I forgot to mention Webpack.config. Sorry. Some of the build magic live in that file now.

## So, what difference did we make? ##
One nice thing is that we no longer need require.js. Webpack will resolve AMD modules and convert them to plain vanilla JavaScript. Also, Webpack has a dev server feature that I like. This will come at handy in the next step.
