import renderNavigation from './nav/nav';
import renderLogView from './logView/logView';
import renderTerminal from './terminal/terminal';

const printTargets = [];

function print(e) {
  const message = `${e.type} : ${e.target.nodeName} : ${e.target.innerHTML}`;

  printTargets.forEach((element) => {
    const el = element;
    el.innerHTML += `<br/>${message}`;
  });
}

async function loadMainView(e) {
  const container = document.querySelector('#main');
  const data = {
    text: 'vanilla components',
  };

  if (e) {
    container.removeChild(container.firstChild);
    data.text = e.target.textContent;
  }

  const el = await renderTerminal(data);
  container.appendChild(el);
}

async function loadLeftMenu() {
  const props = {
    data: [
      'You',
      'might',
      '(not)',
      'need',
      'a',
      'JavaScript',
      'framework',
    ],
    onClick: (e) => {
      print(e);
      loadMainView(e);
    },
  };

  const el = await renderNavigation(props);
  document.querySelector('#left-menu').appendChild(el);
}

async function loadLogView() {
  const data = {
    text: 'events:',
  };

  const el = await renderLogView(data);
  printTargets.push(el.querySelector('.cursor'));
  document.querySelector('#vanilla-terminal').appendChild(el);
}

loadLeftMenu().then(loadMainView).then(loadLogView);
