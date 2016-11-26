/*global templates */

vanilla.logView = (function (templates, terminal) {

    function render(data, done) {

        templates.load('/src/logView/logView.html', function (el) {

            terminal.render(data, function (child) {
                el.appendChild(child);

                if (done) {
                    done(el);
                }
            });
        });

    }

    return {
        render: render
    };

}(templates, vanilla.terminal));
