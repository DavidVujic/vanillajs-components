(function (dom, list) {
    var container = document.querySelector('.vanillaComponents-list');

    list.create(['You', 'might', 'not', 'need', 'a', 'JavaScript', 'framework'], function (list) {
      dom.render(list, container);
    });

}(vanillaComponents.dom, vanillaComponents.list));
