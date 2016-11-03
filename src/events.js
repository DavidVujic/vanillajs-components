var events = (function () {

    function on(type, nodes, action) {
        var elements = Array.prototype.slice.call(nodes);

        elements.forEach(function (el) {
            el.addEventListener(type, action);
        })
    }

    return {
        on: on
    };

}());
