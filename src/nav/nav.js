/*global templates */

vanilla.nav = (function (templates, list) {

    function render(data, done) {
        templates.load('/src/nav/nav.html', null, function (el) {

            list.render(data, function (child) {
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

}(templates, vanilla.list));
