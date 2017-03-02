import load from 'templates';

export function render(data, done) {
  load('/src/terminal/terminal.html', data, (el) => {
    if (done) {
      done(el);
    }
  });
}
