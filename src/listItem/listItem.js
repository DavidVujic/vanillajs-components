import load from 'templates';

export function render(props, done) {

  load('/src/listItem/listItem.html', props, (el) => {
    el.addEventListener('click', props.onClick);
    if (done) {
      done(el);
    }
  });
}
