vanilla.nav = (function (components) {

    function create(obj, done) {
        templates.get('/src/nav/template.html', function (el) {
            components.add({
                component: obj.component,
                data: obj.data,
                container: el,
                callback: function (child) {
                    obj.callback(child);
                    done(el);
                }
            });
        });

    }

    return {
        create: create
    };

}(components));
