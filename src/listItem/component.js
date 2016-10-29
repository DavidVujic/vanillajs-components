vanillaComponents.listItem = (function () {
    var templatePath = '/src/listItem/template.html';

    function renderContent(node, placeholder) {
        vanillaComponents.dom.render(node, placeholder);
    }

    function render(placeholder) {
        vanillaComponents.loader.parseTemplate(templatePath, function (node) {
            renderContent(node, placeholder);
        });
    }

    return {
        render: render
    }
}());
