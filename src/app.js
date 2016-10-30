(function (dom, list) {
    var container = document.querySelector('.vanillaComponents-list');

    list.render(container, dom.render);

}(vanillaComponents.dom, vanillaComponents.list));
