var nav = (function (components, events) {

    function create(component, data, container, logger, done) {
        components.add(component, data, container, function (el) {
            events.on('click', el.childNodes, logger.logEvent);

            done();
        });
    }

    return {
        create: create
    };

}(components, events));
