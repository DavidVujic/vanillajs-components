define(['templates'], function (templates) {

    function render(props, done) {

        templates.load('/src/listItem/listItem.html', props, function (el) {
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
