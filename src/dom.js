vanillaComponents.dom = (function () {

    function render(parent, child, done) {
        parent.appendChild(child);

        if (done) {
            done();
        }
    }

    return {
        render: render
    };
}());
