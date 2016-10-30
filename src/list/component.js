vanillaComponents.list = (function (loader, listItem) {
    function render(container, add) {
        loader.getTemplate('/src/list/template.html', function (node) {
            add(container, node, function () {
                listItem.render(node, add);
            });
        });
    }

    return {
        render: render
    };
}(vanillaComponents.loader, vanillaComponents.listItem));
