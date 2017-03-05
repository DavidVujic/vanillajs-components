import load from 'templates';
import * as terminal from 'terminal/terminal';

export async function render(data) {
  const el = await load('/src/logView/logView.html');

  const child = await terminal.render(data);

  el.appendChild(child);

  return el;
}
