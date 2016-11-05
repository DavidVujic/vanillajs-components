vanilla.nav = (function (components, list) {

    function create(data, done) {
        templates.get('/src/nav/template.html', function (el) {

            components.add({
                component: list,
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

}(components, vanilla.list));
