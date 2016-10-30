vanillaComponents.listItem = (function (loader) {
    function render(parent, add) {
        loader.getTemplate('/src/listItem/template.html', function (node) {
            add(parent, node);
        });
    }

    return {
        render: render
    };
}(vanillaComponents.loader));
