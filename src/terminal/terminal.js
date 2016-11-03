vanilla.terminal = (function (templates) {

    function create(data, done) {
        templates.get('/src/terminal/template.html', done);
    }

    return {
        create: create
    };

}(templates));
