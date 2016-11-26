/*global templates */

vanilla.listItem = (function (templates) {

    function render(data, done) {
        var templateData = {
            title: 'the listItem component',
            text: data
        };

        templates.load('/src/listItem/listItem.html', templateData, function (el) {
            if (done) {
                done(el);
            }
        });
    }

    return {
        render: render
    };

}(templates));
