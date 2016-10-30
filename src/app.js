(function (dom, list) {
    var container = document.querySelector('.vanillaComponents-list');

    list.create(['Hello component!'], function (list) {
      dom.render(list, container);
    });

}(vanillaComponents.dom, vanillaComponents.list));
