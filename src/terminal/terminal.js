vanilla.terminal = (function (templates) {

    function create(data, done) {
        templates.load('/src/terminal/terminal.html', function (el) {
            el.querySelector('.cursor').innerHTML = data;

            if (done) {
                done(el);
            }
        });
    }

    return {
        create: create
    };

}(templates));
