(function (dom, list) {
    var container = dom.getContainer(document, '.vanillaComponents-list');

    list.render(container, dom.render);

}(vanillaComponents.dom, vanillaComponents.list));
