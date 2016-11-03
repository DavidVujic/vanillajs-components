vanilla.list = (function (templates, components, events, listItem) {
    var actions = [];

    function create(data, done) {
        templates.get('/src/list/template.html', function (list) {

            list.addEventListener('click', function (e) {
                events.trigger(e, actions, e.type);
            });

            components.each(listItem, data, 0, list, done);
        });
    }

    function on(type, func) {
        actions.push({
            'type': type,
            'func': func
        });
    }

    return {
        create: create,
        on: on
    };

}(templates, components, events, vanilla.listItem));
