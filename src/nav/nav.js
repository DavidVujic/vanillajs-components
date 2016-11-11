/*global templates, vanilla */

vanilla.nav = (function (templates, list) {

    function create(data, done) {
        templates.load('/src/nav/nav.html', function (el) {

            list.create(data, function (child) {
                el.appendChild(child);

                if (done) {
                    done(el);
                }
            });

        });
    }

    return {
        create: create
    };

}(templates, vanilla.list));
