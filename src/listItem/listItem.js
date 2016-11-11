/*global templates */

vanilla.listItem = (function (templates) {

    function create(data, done) {
        templates.load('/src/listItem/listItem.html', function (el) {
            el.textContent = data;

            if (done) {
                done(el);
            }
        });
    }

    return {
        create: create
    };

}(templates));
