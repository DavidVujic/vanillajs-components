import {default as renderNavigation} from 'nav/nav';
import {default as renderLogView} from 'logView/logView';
import {default as renderTerminal} from 'terminal/terminal';

var printTargets = [];

async function loadLeftMenu() {
  const props = {
    data: [
      'You',
      'might',
      '(not)',
      'need',
      'a',
      'JavaScript',
      'framework'
    ],
    onClick: function(e) {
      print(e);
      loadMainView(e);
    }
  };

  const el = await renderNavigation(props);
  document.querySelector('#left-menu').appendChild(el);
}

async function loadMainView(e) {
  const container = document.querySelector('#main');
  const data = {
    text: 'vanilla components'
  };

  if (e) {
    container.removeChild(container.firstChild);
    data.text = e.target.textContent;
  }

  const el = await renderTerminal(data);
  container.appendChild(el);
}

async function loadLogView() {
  const data = {
    text: 'events:'
  };

  const el = await renderLogView(data);
  printTargets.push(el.querySelector('.cursor'));
  document.querySelector('#vanilla-terminal').appendChild(el);
}

function print(e) {
  var message = `${e.type} : ${e.target.nodeName} : ${e.target.innerHTML}`;

  printTargets.forEach(function(element) {
    element.innerHTML += `<br/>${message}`;
  });
}

loadLeftMenu().then(loadMainView).then(loadLogView);
