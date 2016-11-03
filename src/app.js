(function (components, events, list) {

    var container = document.querySelector('.vanilla-list');
    var data = ['You', 'might', '(not)', 'need', 'a', 'JavaScript', 'framework'];

    components.add(list, data, container, function (el) {
        events.on('click', el.childNodes, log);
    });

    function log(e) {
        console.log('element: ' + e.target.nodeName + ' value: ' + e.target.innerHTML);
    }


}(components, events, vanilla.list));
