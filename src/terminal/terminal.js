/*global templates, vanilla */

vanilla.terminal = (function (templates) {

    function create(data, done) {
        templates.load('/src/terminal/terminal.html', function (el) {
            el.querySelector('.cursor').textContent = data;

            if (done) {
                done(el);
            }
        });
    }

    return {
        create: create
    };

}(templates));
