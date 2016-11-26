/*global templates */

vanilla.terminal = (function (templates) {

    function render(data, done) {
        templates.load('/src/terminal/terminal.html', data, function (el) {
            if (done) {
                done(el);
            }
        });
    }

    return {
        render: render
    };

}(templates));
