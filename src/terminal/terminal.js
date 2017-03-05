import load from 'templates';

async function render(data) {
  return await load('/src/terminal/terminal.html', data);
}

export default render;
