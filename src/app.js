(function (components, list) {

    var container = document.querySelector('.vanilla-list');
    var data = ['You', 'might', '(not)', 'need', 'a', 'JavaScript', 'framework'];

    components.add(list, data, container);

}(components, vanilla.list));
