import load from 'templates';
import { default as renderTerminal } from 'terminal/terminal';

async function render(data) {
  const el = await load('/src/logView/logView.html');

  const child = await renderTerminal(data);

  el.appendChild(child);

  return el;
}

export default render;
