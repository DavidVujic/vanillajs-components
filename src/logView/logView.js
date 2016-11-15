import load from 'templates';
import * as terminal from 'terminal/terminal';

export function create(data, done) {
    load('/src/logView/logView.html', null, (el) => {

        terminal.create(data, (child) => {
            el.appendChild(child);

            if (done) {
                done(el);
            }
        });
    });
}
