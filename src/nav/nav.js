import load from 'templates';
import * as list from 'list/list';

export async function render(props) {
  const el = await load('/src/nav/nav.html');

  const child = await list.render(props);
  el.appendChild(child);
  return el;
}

