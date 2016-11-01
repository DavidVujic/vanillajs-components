(function (list) {

    var container = document.querySelector('.vanillaComponents-list');
    var data = ['You', 'might', '(not)', 'need', 'a', 'JavaScript', 'framework'];

    list.create(data, function (list) {
        container.appendChild(list);
    });

}(vanillaComponents.list));
