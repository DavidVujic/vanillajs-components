import load from 'templates';
import * as list from 'list/list';

export function render(data, done) {
    load('/src/nav/nav.html', null, (el) => {

        list.render(data, (child) => {
            el.appendChild(child);

            if (done) {
                done(el);
            }
        });
        
    });
}
