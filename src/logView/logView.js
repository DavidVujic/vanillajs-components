import load from 'templates';
import * as terminal from 'terminal/terminal';

export function render(data, done) {
  load('/src/logView/logView.html', null, (el) => {

    terminal.render(data, (child) => {
      el.appendChild(child);

      if (done) {
        done(el);
      }
    });
  });
}

