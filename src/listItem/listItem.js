import load from 'templates';

export function render(props, done) {
    const templateProps = {
        title: 'the listItem component',
        data: props.data
    };

    load('/src/listItem/listItem.html', templateProps, (el) => {
        el.addEventListener('click', props.onClick);
        if (done) {
            done(el);
        }
    });
}
