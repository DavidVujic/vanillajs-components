export function add(obj) {
    obj.component.create(obj.data, function(el) {
        obj.container.appendChild(el);

        if (obj.callback) {
            obj.callback(el);
        }
    });
}

export function each(obj) {
    function onAdded(added) {
        obj.index++;

        var isDone = obj.data.length <= obj.index;

        obj.callback({el: added, done: isDone});

        if (isDone) {
            return;
        }

        each(obj);
    }

    obj.index = obj.index || 0;

    add({
        component: obj.component,
        data: obj.data[obj.index],
        container: obj.container,
        callback: onAdded
    });
}
