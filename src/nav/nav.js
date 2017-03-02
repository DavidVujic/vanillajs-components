import load from 'templates';
import * as list from 'list/list';

export function render(props, done) {
  load('/src/nav/nav.html', null, (el) => {

    list.render(props, (child) => {
      el.appendChild(child);

      if (done) {
        done(el);
      }
    });

  });
}

