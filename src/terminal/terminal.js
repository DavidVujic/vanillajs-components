import load from 'templates';

export async function render(data) {
  return await load('/src/terminal/terminal.html', data);
}
