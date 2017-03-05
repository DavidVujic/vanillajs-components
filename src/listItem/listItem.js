import load from 'templates';

export async function render(props) {
  const el = await load('/src/listItem/listItem.html', props);

  el.addEventListener('click', props.onClick);

  return el;
}
