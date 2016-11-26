/*global templates */

vanilla.terminal = (function (templates) {

    function render(data, done) {
        templates.load('/src/terminal/terminal.html', function (el) {
            el.querySelector('.cursor').innerHTML = data;

            if (done) {
                done(el);
            }
        });
    }

    return {
        render: render
    };

}(templates));
