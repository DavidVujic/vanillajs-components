vanillaComponents.listItem = (function (loader) {

    function create(done) {
        loader.getTemplate('/src/listItem/template.html', function (node) {
            done(node);
        });
    }

    return {
        create: create
    };
}(vanillaComponents.loader));
