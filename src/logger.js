var logger = (function (components) {
    var logContainer = {};

    function log(message) {
        logContainer.innerHTML += '<br/>' + message;
    }

    function logEvent(e) {
        var message = e.type + ' : ' + e.target.nodeName + ' : ' + e.target.innerHTML;
        log(message);
    }

    function clear() {
        logContainer.innerHTML = '';
    }

    function create(component, container, done) {
        components.add({
            component: component,
            container: container,
            callback: function (el) {
                logContainer = el.querySelector('.log');

                done();
            }
        });
    }

    return {
        create: create,
        log: log,
        logEvent: logEvent,
        clear: clear
    };

}(components));
