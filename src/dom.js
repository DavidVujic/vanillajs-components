vanillaComponents.dom = (function () {
    function getContainer(container, selector) {
        return container.querySelector(selector);
    }

    function render(parent, child, done) {
        parent.appendChild(child);

        if (done) {
            done();
        }
    }

    return {
        getContainer: getContainer,
        render: render
    };
}());
