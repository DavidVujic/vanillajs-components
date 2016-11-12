define(['templates'], function (templates) {

    function create(data, done) {
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
        create: create
    };
});
