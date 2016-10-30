vanillaComponents.dom = (function () {
    function getContainer(container, selector) {
        return container.querySelector(selector);
    }

    function render(child, parent, done) {
        parent.appendChild(child);

        if (done) {
            done(child);
        }
    }

    return {
        getContainer: getContainer,
        render: render
    };
}());
