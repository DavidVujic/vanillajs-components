import load from 'templates';

async function render(props) {
  const el = await load('/src/listItem/listItem.html', props);

  el.addEventListener('click', props.onClick);

  return el;
}

export default render;
