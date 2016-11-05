vanilla.logger = (function (components, terminal) {

    function create(data, done) {

        templates.get('/src/logger/template.html', function (el) {
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
