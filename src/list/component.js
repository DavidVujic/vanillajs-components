vanillaComponents.list = (function (loader, listItem) {

    function create(done) {
        loader.getTemplate('/src/list/template.html', function (list) {
            listItem.create(function (item) {
                list.appendChild(item);

                done(list);
            });
        });
    }

    return {
        create: create
    };
}(vanillaComponents.loader, vanillaComponents.listItem));
