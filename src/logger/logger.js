vanilla.logger = (function (components, terminal) {

    function createInstance(data, done) {
        var logger;

        templates.get('/src/logger/template.html', function (el) {
            components.add({
                component: terminal,
                data: data,
                container: el,
                callback: function (child) {
                    logger = child.querySelector('.log');

                    done({
                        log: log,
                        logEvent: logEvent,
                        clear: clear
                    }, el);
                }
            });
        });

        function log(message) {
            if (message === false) {
                logger.innerHTML = '';
                return;
            }

            logger.innerHTML += '<br/>' + message;
        }

        function logEvent(e) {
            var message = e.type + ' : ' + e.target.nodeName + ' : ' + e.target.innerHTML;
            log(message);
        }

        function clear() {
            log(false);
        }
    }

    return {
        createInstance: createInstance
    };

}(components, vanilla.terminal));
