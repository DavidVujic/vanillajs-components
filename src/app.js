(function (dom, list) {
    var container = document.querySelector('.vanillaComponents-list');

    list.create(function (list) {
      dom.render(list, container);
    });

}(vanillaComponents.dom, vanillaComponents.list));
