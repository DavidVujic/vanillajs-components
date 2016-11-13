import * as templates from 'templates';
import * as terminal from 'terminal/terminal';

export function create(data, done) {
    templates.load('/src/logView/logView.html', null, (el) => {

        terminal.create(data, (child) => {
            el.appendChild(child);

            if (done) {
                done(el);
            }
        });
    });
}
