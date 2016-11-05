vanilla.terminal = (function (templates) {

    function create(data, done) {
        templates.get('/src/terminal/template.html', function (el) {
          el.querySelector('.cursor').innerHTML = data;
          done(el);
        });
    }

    return {
        create: create
    };

}(templates));
