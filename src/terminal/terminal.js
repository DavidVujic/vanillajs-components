import load from '../templates';

async function render(data) {
  return load('/src/terminal/terminal.html', data);
}

export default render;
