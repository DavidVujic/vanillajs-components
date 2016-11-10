var events = (function () {

    function on(type, nodes, actions) {
        var elements = Array.prototype.slice.call(nodes);

        elements.forEach(function (el) {
            actions.forEach(function (action) {
                el.addEventListener(type, action);
            });
        })
    }

    return {
        on: on
    };

}());
