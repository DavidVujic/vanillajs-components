vanillaComponents.list = (function (templateLoader, componentLoader, listItem) {

    function create(data, done) {
        templateLoader.getTemplate('/src/list/template.html', function (list) {
            componentLoader.each(listItem, data, 0, list, done);
        });
    }

    return {
        create: create
    };

}(vanillaComponents.templateLoader, vanillaComponents.componentLoader, vanillaComponents.listItem));
