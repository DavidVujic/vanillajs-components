vanillaComponents.list = (function () {
    var templatePath = '/src/list/template.html';

    function renderItems(container) {
        var placeholder = vanillaComponents.dom.getPlaceholder(container, '.vanillaComponents-listItem');
        vanillaComponents.listItem.render(placeholder);
    }

    function render(placeholder) {
        vanillaComponents.loader.parseTemplate(templatePath, function (node) {
            vanillaComponents.dom.render(node, placeholder, function () {
                renderItems(node);
            });

        });
    }

    return {
        render: render
    }
}());
