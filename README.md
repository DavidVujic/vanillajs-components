You might (not) need a JavaScript framework
==
In this repo, you will find examples on how to create a web site with reusable building blocks (aka components). When learning about React and components, I started thinking about how this could be done without using React, ES 2016, Webpack or any other framework out there. Is it possible? I think so.

### But why? ###
I want to understand the problems that are solved using React, and I guess one way is to experience it the hard way - to feel the pain - by writing code with plain old vanilla JavaScript, html and css.

The source code in the main branch of this repo is written with Old School vanilla JavaScript, without any frameworks, without a build system and without a transpiler.

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


### Setup ###
Clone this repo and experiment with the code! To start the example web page, run these commands:
````
npm install
npm start
````
When switching between the branches (see below), you might need to run the __npm install__ command again (because of the different dependencies used).

### What next? ###
To step by step add tools & frameworks, that will solve current issues and improve the quality & readability of the code base.

Something like this:
* :white_check_mark: a template engine [compare with vanilla code](https://github.com/DavidVujic/vanillajs-components/compare/with-template-engine)
* :white_check_mark: AMD modules [compare](https://github.com/DavidVujic/vanillajs-components/compare/with-template-engine...with-amd-modules)
* :white_check_mark: ES 2017 & transpiling with Babel [compare](https://github.com/DavidVujic/vanillajs-components/compare/with-amd-modules...with-es2017)
* :white_check_mark: Minification and bundling [compare](https://github.com/DavidVujic/vanillajs-components/compare/with-es2017...with-bundling)
* :white_check_mark: Webpack (almost) all the things [compare](https://github.com/DavidVujic/vanillajs-components/compare/with-bundling...with-webpack)
* React components with JSX
* Redux?
