import load from '../templates';
import renderListItem from '../listItem/listItem';

async function addListItem(data, ev) {
  const childProps = {
    data,
    onClick: ev,
  };

  return renderListItem(childProps);
}

async function renderFirstChild(el, data, ev) {
  const firstChild = await addListItem(data, ev);
  el.querySelector('ul').appendChild(firstChild);
}

async function render(props) {
  const el = await load('/src/list/list.html');
  const data = props.data.slice();

  await renderFirstChild(el, data.shift(), props.onClick);

  const results = [];
  for (let i = 0; i < data.length; i += 1) {
    const item = data[i];
    results.push(addListItem(item, props.onClick));
  }

  return Promise.all(results).then((children) => {
    for (let i = 0; i < children.length; i += 1) {
      const child = children[i];
      el.querySelector('ul').appendChild(child);
    }
    return el;
  });
}

export default render;
