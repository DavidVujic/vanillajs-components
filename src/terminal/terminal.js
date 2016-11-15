import load from 'templates';

export function create(data, done) {
    load('/src/terminal/terminal.html', data, (el) => {
        if (done) {
            done(el);
        }
    });
}
