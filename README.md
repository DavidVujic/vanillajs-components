Vanilla Components
==
#### _You might (not) need a JavaScript framework_ ####
In this repo, you will find examples on how to create a web site with reusable building blocks (aka components). When learning about React and components, I started thinking about how this could be done without using React, ES 2016, Webpack or any other framework out there. Is it possible? I think so.

### But why? ###
I want to understand the problems that are solved using React, and I guess one way is to experience it the hard way - to feel the pain - by writing code with plain old vanilla JavaScript, html and css.

The source code in this repo is written with Old School vanilla JavaScript, without any frameworks, without a build system and without a transpiler.

## Examples ##
The listItem.js component
````javascript
// the listItem component
vanilla.listItem = (function (templates) {

    // load the html, insert data, pass the node to be rendered to the DOM
    function create(data, done) {
        // load the html async, using a helper module
        templates.load('/src/listItem/listItem.html', function (el) {
            // insert data
            el.textContent = data;

            if (done) {
                // pass the node to be rendered to the DOM
                done(el);
            }
        });
    }

    return {
        create: create
    };

}(templates));

````

The listItem.html template
````html
<li class="listItem" title="the listItem component"></li>
````

#### An example web page with vanilla components: ####
https://davidvujic.github.io/vanillajs-components/

### What next? ###
To step by step add tools & frameworks, that will solve current issues and improve the quality & readability of the code base.

Something like this:
* :white_check_mark: a template engine [compare with vanilla code](https://github.com/DavidVujic/vanillajs-components/compare/with-template-engine)
* bundling & minification
* ES 2017 & transpiling with Babel
* Webpack as a build system
* React components with JSX
* Redux?
