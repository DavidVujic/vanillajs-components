import load from 'templates';
import { default as renderList } from 'list/list';

async function render(props) {
  const el = await load('/src/nav/nav.html');

  const child = await renderList(props);
  el.appendChild(child);
  return el;
}

export default render;

