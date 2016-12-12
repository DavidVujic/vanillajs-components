define(['templates'], function (templates) {

    function render(props, done) {
        var templateProps = {
            title: 'the listItem component',
            data: props.data
        };

        templates.load('/src/listItem/listItem.html', templateProps, function (el) {
            el.addEventListener('click', props.onClick);
            if (done) {
                done(el);
            }
        });
    }

    return {
        render: render
    };
});
