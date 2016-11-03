vanilla.listItem = (function (templates) {

    function create(data, done) {
        templates.get('/src/listItem/template.html', function (el) {
            el.textContent = data;
            done(el);
        });
    }

    return {
        create: create
    };

}(templates));
