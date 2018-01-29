import load from '../templates';
import renderListItem from '../listItem/listItem';

async function addListItem(data, ev) {
  const childProps = {
    data: data,
    onClick: ev
  };

  return await renderListItem(childProps);
}

async function render(props) {
  const el = await load('/src/list/list.html');

  for (let item of props.data) {
    const child = await addListItem(item, props.onClick);
    el.querySelector('ul').appendChild(child);
  }

  return el;
}

export default render;
