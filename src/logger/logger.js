vanilla.logger = (function (components, Printer, terminal) {

    function create(data, done) {

        templates.get('/src/logger/template.html', function (el) {
            components.add({
                component: terminal,
                data: data,
                container: el,
                callback: function (child) {
                    var printer = Printer(child.querySelector('.log'));
                    done(el, printer);
                }
            });
        });

    }

    return {
        create: create
    };

}(components, Printer, vanilla.terminal));
