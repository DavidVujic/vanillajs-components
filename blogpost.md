# You might (not) need a JavaScript library #

JavaScript today is like: _"Yeah great, and now you need Webpack, Babel, npm, yarn, React ..."_.

Redux? Relax.

Developing a front end web project of today can be a bit intimidating, especially when the home base is back end development. What about all those frameworks and tools, why use them?

I am currently learning about React, and I like it. React have JSX, ES2017 and a nice logo. That is cool, but my favorite thing with React is how code is organized. A user interface is built with components: small and isolated "packages" of html & JavaScript. That is a pattern I like.


## Components with vanilla JavaScript? ##

When learning about React patterns, I started thinking about how this could be done without using React, ES2017, Webpack or any of the other frameworks out there. Is that even possible?

## Okay, but why? ##

I want to learn and understand the problems that are solved using a framework. One way is to experience it the hard way, by writing code with plain old vanilla JavaScript, html, css and find out what pain is removed by which framework. Also, I think it is a fun challenge!

## Example code ##
You will find all code referenced in this blog post at my [GitHub page](https://github.com/DavidVujic/vanillajs-components/)

## No build step required ##
This code in the [main branch](https://github.com/DavidVujic/vanillajs-components/) of the repo does not require any build steps or npm package downloads. The "listItem component" is made of two parts: JavaScript in a code file and an html template in a separate file. The render function will create a DOM object containing the html from the template, with the data that is passed in to it. The result is returned in a callback function.

___code from listItem.js:___

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

This is of course a very simplistic example with a single tag html template, but I think it already highlights issues: where's the data added? To understand where data is added, we have to read & understand the contents of the render function. I think it would be nice if the data to be rendered is visible in the actual template.

## Time to grow a Mustache? ##
A template render engine can solve that. Here's the same component, using a template engine called Mustache.js. You will find the code in a separate branch of the GitHub repo.

```javascript
function render(props, done) {

    // just pass the data to a modified version of the template loader helper
    templates.load('/src/listItem/listItem.html', props, function (el) {
        el.addEventListener('click', props.onClick);

        if (done) {
            done(el);
        }
    });
}
```
[compare with the vanilla code](https://github.com/DavidVujic/vanillajs-components/compare/with-template-engine)

It is now possible to write html templates with placeholders for data like this:
```html
<li class="listItem" title="the listItem component">{{data}}</li>
```

The templates helper now use Mustache to render the html from the template and the data.

___code from the templates.js file:___
```javascript
container.innerHTML = Mustache.render(template, data);
```

## More issues? ##
If you look at the source code in the main branch you'll notice the JavaScript files is written with a coding style called IIFE (immediately invoked function expression). It is used to isolate code and makes it possible to write modules without using any framework. Also, every single file is added with a script tag in the html body of the main page (index.html). Some modules depend on others and have to be added in the correct order. That's not great.

```html
<script src="src/templates.js"></script>

<script src="src/listItem/listItem.js"></script>
<script src="src/list/list.js"></script>
<script src="src/terminal/terminal.js"></script>
<script src="src/nav/nav.js"></script>
<script src="src/logView/logView.js"></script>

<script src="src/app.js"></script>
```

## Solution: JavaScript AMD modules ##
In a separate branch, I have converted all of the immediately invoked function expressions (IIFE) to AMD modules. I use Require.js that takes care of module loading and dependencies. Instead of a very long list of html script tags, there is only an entry point defined.

___from the index.html file___
```html
 <script data-main="src/app" src="lib/vendor/requirejs.js"></script>
```

Here is the listItem component as an AMD module:
```JavaScript
define(['templates'], function (templates) {

    function render(props, done) {

        templates.load('/src/listItem/listItem.html', props, function (el) {
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

[compare it with the previous branch](https://github.com/DavidVujic/vanillajs-components/compare/with-template-engine...with-amd-modules)


## But wait. Don't we have native modules in Javascript now? ##

Oh, I forgot. It is 2017 and ECMAScript 2015 was released almost two years ago. A nice module system was included in it. Finally there is a common standard in the language! I have rewritten the code to ES2017 style - with arrow functions, the const keyword and most importantly, the ES import/export feature.

Now, the listItem component looks like this:

```JavaScript
import load from 'templates';

export function render(props, done) {

    load('/src/listItem/listItem.html', props, (el) => {
        el.addEventListener('click', props.onClick);

        if (done) {
            done(el);
        }
    });
}
```

[compare the ES2017 code with old school JavaScript](https://github.com/DavidVujic/vanillajs-components/compare/with-amd-modules...with-es2017)


I think the code has improved a bit. ES2017 is great, __but there are tradeoffs to be aware of__. Many browsers don't have enough support for this version of JavaScript yet. To make it work in all kinds of browsers and devices __we need to introduce a build step__: the code need to be compiled from ES2017 to vanilla JavaScript with Babel.

The package.json file in the project has quite a few scripts compared to the original framework-and-build-step-free version. In addition to dependencies like Mustache.js and Require.js, there is a compile step and a Babel polyfill dependency added:
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

## More frameworks, more problems? ##
When browsing the page there is now a couple of third party libraries loaded to the client, besides our own modules. This might cause a not so great experience for users with a slow connection.

### Bundling & minification ###
While we're at it, why not add another build step that will bundle all JavaScript files to one single file? This will reduce the number of requests from the browser. With minification we also will get rid of a couple of Kilobytes.

The entry point is now one bundled and minified JavScript file.
```html
<script data-main="lib/bundle/main" src="lib/vendor/requirejs.js"></script>
```

The source code in this branch is compiled from ES2017 to browser friendly AMD modules. With Require.js, there is a tool for bundling & minification included (called R.js) and used in this branch.

[compare the branches](https://github.com/DavidVujic/vanillajs-components/compare/with-es2017...with-bundling)

### Heard about Webpack? ###
The scripts section of the package.json file is quite massive now and probably difficult to understand. By using Webpack, most of those build steps are no longer necessary. Webpack does a lot of things, it's like a swiss army knife (that's both good and bad, I guess).

___package.json with Webpack:___
```json
"scripts": {
    "lint": "eslint src",
    "build": "npm run lint && webpack",
    "start": "webpack-dev-server"
  }
```

[compare the two branches, with bundling vs with Webpack](https://github.com/DavidVujic/vanillajs-components/compare/with-bundling...with-webpack)

Where did it all go, how is that even possible? Okay, I forgot to mention Webpack.config. Sorry. Some of the build magic live in that file now.

### So, did Webpack make any difference? ###
One nice thing with Webpack is that there is no longer any need for Require.js. Webpack will resolve ES2017 modules and convert them to plain vanilla JavaScript before the bundling & minification. Also, Webpack has a local dev server feature (with auto reloading on file change) that I like.

## Add React to the mix ##
This is how the listItem component looks like when converted to React. The template files are gone, everything is written in the JavaScript modules using the JSX syntax. There is no longer need for a custom template loader or mustaches. Compared to the source code in the previous branch, this one has less code. I like less code.


```JavaScript
import React from 'react';

function ListItem(props) {
    return <li className='listItem' title='the listItem component' onClick={props.onClick}>{props.data}</li>;
}

export default ListItem;
```

[React: Before vs After](https://github.com/DavidVujic/vanillajs-components/compare/with-webpack...with-react)

## Conslusion ##
By experimenting with one framework at a time, I have learned about the value added and also some of the tradeoffs that comes with using a tool or framework. Sometimes, maybe a plain vanilla JavaScript style is just enough, and sometimes a framework will make life easier. You might (not) need a JavaScript library.
