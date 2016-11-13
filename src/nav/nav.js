import * as templates from 'templates';
import * as list from 'list/list';

export function create(data, done) {
    templates.load('/src/nav/nav.html', null, (el) => {

        list.create(data, (child) => {
            el.appendChild(child);

            if (done) {
                done(el);
            }
        });

    });
}
