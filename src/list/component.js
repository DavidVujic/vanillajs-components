vanillaComponents.list = (function (loader, dom) {
    var parent;

    function renderChildren(node) {
        var container = dom.getContainer(node, '.vanillaComponents-listItem');
        vanillaComponents.listItem.render(container);
    }

    function renderNode(node) {
        dom.render(node, parent, renderChildren);
    }

    function parse(next) {
        loader.parseTemplate('/src/list/template.html', next);
    }

    function render(parentElement) {
        parent = parentElement;
        parse(renderNode);
    }

    return {
        render: render
    };
}(vanillaComponents.loader, vanillaComponents.dom));
