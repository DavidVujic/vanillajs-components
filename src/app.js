(function (components, events, list, terminal) {

    var listContainer = document.querySelector('.vanilla-list');
    var terminalContainer = document.querySelector('.vanilla-terminal');

    var data = ['You', 'might', '(not)', 'need', 'a', 'JavaScript', 'framework'];

    var logger;

    components.add(list, data, listContainer, function (el) {
        events.on('click', el.childNodes, log);
    });

    components.add(terminal, null, terminalContainer, function (el) {
        logger = el.querySelector('.log');
    })

    function log(e) {
        var message = 'element: ' + e.target.nodeName + ' value: ' + e.target.innerHTML;
        logger.innerHTML += '<br/>' + message;
    }

}(components, events, vanilla.list, vanilla.terminal));
