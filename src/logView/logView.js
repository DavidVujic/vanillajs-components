vanilla.logView = (function (components, terminal) {

    function create(data, done) {

        templates.get('/src/logView/template.html', function (el) {
            components.add({
                component: terminal,
                data: data,
                container: el,
                callback: function () {
                    done(el);
                }
            });
        });

    }

    return {
        create: create
    };

}(components, vanilla.terminal));
