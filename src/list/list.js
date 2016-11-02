vanilla.list = (function (templates, components, listItem) {

    function create(data, done) {
        templates.get('/src/list/template.html', function (list) {
            components.each(listItem, data, 0, list, done);
        });
    }

    return {
        create: create
    };

}(templates, components, vanilla.listItem));
