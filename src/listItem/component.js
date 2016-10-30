vanillaComponents.listItem = (function (loader, dom) {
    var parent;

    function renderNode(node) {
        dom.render(node, parent);
    }

    function parse(next) {
        loader.parseTemplate('/src/listItem/template.html', next);
    }

    function render(parentElement) {
        parent = parentElement;
        parse(renderNode);
    }

    return {
        render: render
    };
}(vanillaComponents.loader, vanillaComponents.dom));
