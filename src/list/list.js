import * as templates from 'templates';
import * as componentHelper from 'components';
import * as listItem from 'listItem/listItem';

export function create(data, done) {
    templates.load('/src/list/list.html', null, (el) => {

        componentHelper.each({
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
