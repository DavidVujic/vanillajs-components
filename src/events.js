var events = (function () {

    function trigger(target, actions) {
        function filterByType(action) {
            return action.type === target.type;
        }

        target.preventDefault();

        actions.filter(filterByType).forEach(function (action) {
            action.func(target);
        });
    }

    return {
        trigger: trigger
    };

}());
