define(['templates', 'components', 'listItem/listItem'], function (templates, componentHelper, listItem) {

    function render(data, done) {
        templates.load('/src/list/list.html', null, function (el) {

            componentHelper.each({
                component: listItem,
                data: data,
                container: el.querySelector('ul'),
                callback: function (res) {
                    if (res.done) {
                        done(el);
                    }
                }
            });
        });
    }

    return {
        render: render
    };
});
