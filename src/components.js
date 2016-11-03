var components = (function () {

    function add(component, data, container, onAdded) {
        component.create(data, function (el) {
            container.appendChild(el);

            onAdded(el);
        })
    }

    function each(component, data, index, container, callback) {
        add(component, data[index], container, function (added) {
            index++;

            var isDone = data.length <= index;

            callback({
                el: added,
                done: isDone
            });

            if (isDone) {
                return;
            }

            each(component, data, index, container, callback);
        });
    }

    return {
        add: add,
        each: each
    };
}());
