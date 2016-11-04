var nav = (function (components, logger, events) {

    function create(component, data, container) {
        components.add(component, data, container, function (el) {
            events.on('click', el.childNodes, logger.logEvent);
        });
    }

    return {
        create: create
    };

}(components, logger, events));
