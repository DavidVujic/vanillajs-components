(function (components, list) {

    var container = document.querySelector('.vanilla-list');
    var data = ['You', 'might', '(not)', 'need', 'a', 'JavaScript', 'framework'];

    list.on('click', function (e) {
        console.log('clicked!');
        console.log(e.target.innerHTML);
    });

    components.add(list, data, container);

}(components, vanilla.list));
