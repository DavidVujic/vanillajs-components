vanillaComponents.list = (function (loader, listItem) {

    function create(data, done) {
        loader.getTemplate('/src/list/template.html', function (list) {
            listItem.create(data[0], function (item) {
                list.appendChild(item);

                done(list);
            });
        });
    }

    return {
        create: create
    };
}(vanillaComponents.loader, vanillaComponents.listItem));
