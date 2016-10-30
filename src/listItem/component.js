vanillaComponents.listItem = (function (loader) {

    function create(data, done) {
        loader.getTemplate('/src/listItem/template.html', function (node) {
            node.textContent = data;
            done(node);
        });
    }

    return {
        create: create
    };

}(vanillaComponents.templateLoader));
