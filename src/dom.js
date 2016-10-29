vanillaComponents.dom = (function () {
    function getPlaceholder(container, selector) {
        return container.querySelector(selector);
    }

    function render(child, parent, done) {
        parent.appendChild(child);

        if (done) {
            done();
        }
    }

    return {
        getPlaceholder: getPlaceholder,
        render: render
    };
}());
