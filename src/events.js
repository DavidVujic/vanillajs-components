var events = (function () {
    function on(type, func) {
        actions.push({
            'type': type,
            'func': func
        });
    }

    function trigger(target, actions, type) {
        function filterByType(action) {
            return action.type === type;
        }

        target.preventDefault();

        actions.filter(filterByType).forEach(function (action) {
            action.func(target);
        });
    }

    return {
        on: on,
        trigger: trigger
    };

}());
