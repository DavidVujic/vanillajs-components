vanilla.list = (function (templates, components, listItem) {

    function create(data, done) {
        templates.get('/src/list/template.html', function (el) {

            components.each({
                component: listItem,
                data: data,
                container: el,
                callback: function (res) {
                    if (res.done) {
                        done(el);
                    }
                }
            });
        });
    }

    return {
        create: create
    };

}(templates, components, vanilla.listItem));
