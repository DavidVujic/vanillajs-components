vanillaComponents.dom = (function () {
    function getContainer(container, selector) {
        return container.querySelector(selector);
    }

    function append(child, parent) {
        parent.appendChild(child);

        return parent;
    }

    function render(parent, child, done) {
        parent.appendChild(child);

        if (done) {
            done();
        }
    }

    return {
        getContainer: getContainer,
        append: append,
        render: render
    };
}());
