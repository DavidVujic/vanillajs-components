function on(type, nodes, actions) {
    const elements = Array.prototype.slice.call(nodes);

    elements.forEach((el) => {
        actions.forEach(function(action) {
            el.addEventListener(type, action);
        });
    });
}

export default on;
