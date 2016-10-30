vanillaComponents.dom = (function () {

    function render(child, parent, done) {
        parent.appendChild(child);

        if (done) {
            done();
        }
    }

    return {
        render: render
    };
}());
