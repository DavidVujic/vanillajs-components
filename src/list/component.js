vanillaComponents.list = (function (loader, listItem) {

    function each(data, index, list, done) {
        listItem.create(data[index], function (item) {
            list.appendChild(item);

            index++;

            if (data.length <= index) {
                done(list);
                return;
            }

            each(data, index, list, done);
        });
    }

    function create(data, done) {
        loader.getTemplate('/src/list/template.html', function (list) {
            each(data, 0, list, done);
        });
    }

    return {
        create: create
    };
}(vanillaComponents.loader, vanillaComponents.listItem));
