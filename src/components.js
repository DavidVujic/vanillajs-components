var components = (function () {

    function add(component, data, container, onAdded) {
        component.create(data, function (el) {
            container.appendChild(el);

            if (onAdded) {
                onAdded(el);
            }
        });
    }

    function each(obj) {
        var isDone;
        obj.index = obj.index || 0;

        add(obj.component, obj.data[obj.index], obj.container, function (added) {
            obj.index++;

            isDone = obj.data.length <= obj.index;

            obj.callback({
                el: added,
                done: isDone
            });

            if (isDone) {
                return;
            }

            each(obj);
        });
    }

    return {
        add: add,
        each: each
    };
}());
