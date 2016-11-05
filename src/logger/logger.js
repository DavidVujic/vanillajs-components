vanilla.logger = (function (components, terminal) {

    function create(data, done) {

        templates.get('/src/logger/template.html', function (el) {
            components.add({
                component: terminal,
                data: data,
                container: el,
                callback: function (child) {
                    var instance = logInstance(child.querySelector('.log'));
                    done(el, instance);
                }
            });
        });

    }

    function logInstance(element) {

        function log(message) {
            if (typeof (message) === 'string') {
                logText(message);
                return;
            }

            logEvent(message);
        }

        function logText(text) {
            if (text === false) {
                element.innerHTML = '';
                return;
            }

            element.innerHTML += '<br/>' + text;
        }

        function logEvent(e) {
            var message = e.type + ' : ' + e.target.nodeName + ' : ' + e.target.innerHTML;
            logText(message);
        }

        function clear() {
            log(false);
        }

        return {
            log: log,
            clear: clear
        };
    }

    return {
        create: create
    };

}(components, vanilla.terminal));
