var logger = (function (components) {
    var logContainer = {};

    function log(message) {
        logContainer.innerHTML += '<br/>' + message;
    }

    function logEvent(e) {
        var message = e.target.nodeName + ' : ' + e.target.innerHTML;
        log(message);
    }

    function clear() {
        logContainer.innerHTML = '';
    }

    function create(component, container) {
        components.add(component, '', container, function (el) {
            logContainer = el.querySelector('.log');
        });
    }

    return {
        create: create,
        log: log,
        logEvent: logEvent,
        clear: clear
    };

}(components));
