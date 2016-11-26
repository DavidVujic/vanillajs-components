import load from 'templates';
import {each} from 'components';
import * as listItem from 'listItem/listItem';

export function render(data, done) {
    load('/src/list/list.html', null, (el) => {

        each({
            component: listItem,
            data: data,
            container: el.querySelector('ul'),
            callback: (res) => {
                if (res.done) {
                    done(el);
                }
            }
        });
    });
}
