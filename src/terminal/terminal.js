import * as templates from 'templates';

export function create(data, done) {
    templates.load('/src/terminal/terminal.html', data, (el) => {
        if (done) {
            done(el);
        }
    });
}
