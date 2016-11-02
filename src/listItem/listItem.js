vanilla.listItem = (function (templates) {

    function create(data, done) {
        templates.get('/src/listItem/template.html', function (node) {
            node.textContent = data;
            done(node);
        });
    }

    return {
        create: create
    };

}(templates));
