You might (not) need a JavaScript framework
==
In this repo, you will find examples on how to create a web site with reusable building blocks (aka components). When learning about React and components, I started thinking about how this could be done without using React, ES 2016, Webpack or any other framework out there. Is that even possible?

### Okay, but why? ###
I want to understand the problems that are solved using React, ES 201x, Webpack & friends. I guess one way is to experience it the hard way - _to feel the pain_ - by writing code with plain old vanilla JavaScript, html and css.

The source code in the main branch of this repo is written with __Old School vanilla JavaScript__, without any frameworks, without a build system and without a transpiler.


### Blog post ###
There is also a blog post related to this repo: http://davidvujic.blogspot.se/2017/01/you-might-not-need-a-javascript-library.html


## Examples ##
The listItem.js component
````javascript
vanilla.listItem = (function (templates) {

    function render(props, done) {

        // load the html using a template helper
        templates.load('/src/listItem/listItem.html', function (el) {

            // set data
            el.textContent = props.data;
            el.addEventListener('click', props.onClick);

            if (done) {
                // pass the node to be rendered to the DOM
                done(el);
            }
        });
    }

    return {
        render: render
    };

}(templates));


````

The listItem.html template
````html
<li class="listItem" title="the listItem component"></li>
````

#### Here's an example web page with vanilla components: ####
https://davidvujic.github.io/vanillajs-components/


### Setup ###
Clone this repo and start experimenting! To browse the example web page, run these commands:
````
npm install
npm start
````
When switching between the branches (see below), you might need to run the __npm install__ command again (because of the different dependencies used).

### What next? ###
To step by step add tools & frameworks, that will solve current issues and improve the quality & readability of the code base.

Something like this (each one in a separate branch):
* :white_check_mark: a template engine [compare with vanilla code](https://github.com/DavidVujic/vanillajs-components/compare/with-template-engine)
* :white_check_mark: AMD modules [compare](https://github.com/DavidVujic/vanillajs-components/compare/with-template-engine...with-amd-modules)
* :white_check_mark: ES 2017 & transpiling with Babel [compare](https://github.com/DavidVujic/vanillajs-components/compare/with-amd-modules...with-es2017)
* :white_check_mark: Minification and bundling [compare](https://github.com/DavidVujic/vanillajs-components/compare/with-es2017...with-bundling)
* :white_check_mark: Webpack (almost) all the things [compare](https://github.com/DavidVujic/vanillajs-components/compare/with-bundling...with-webpack)
* :tractor: React components with JSX [compare](https://github.com/DavidVujic/vanillajs-components/compare/with-webpack...with-react)
* Redux?
