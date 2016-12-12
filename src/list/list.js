import load from 'templates';
import * as listItem from 'listItem/listItem';

export function render(props, done) {
    load('/src/list/list.html', null, (el) => {
        var data = props.data.slice();

        function addListItem() {
            var childProps = {
                data: data.shift(),
                onClick: props.onClick
            };

            listItem.render(childProps, (child) => {
                el.querySelector('ul').appendChild(child);
                next();
            });
        }

        function next() {
            if (data.length === 0) {
                done(el);
            } else {
                addListItem();
            }
        }

        next();
    });
}
