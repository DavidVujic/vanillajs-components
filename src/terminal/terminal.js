define(['templates'], function (templates) {

    function create(data, done) {
        templates.load('/src/terminal/terminal.html', data, function (el) {
            if (done) {
                done(el);
            }
        });
    }

    return {
        create: create
    };
});
