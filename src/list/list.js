/*global templates, components, vanilla */

vanilla.list = (function (templates, componentHelper, listItem) {

    function create(data, done) {
        templates.load('/src/list/list.html', function (el) {

            componentHelper.each({
                component: listItem,
                data: data,
                container: el.querySelector('ul'),
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
