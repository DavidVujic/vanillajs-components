import * as navigation from 'nav/nav';
import * as logView from 'logView/logView';
import * as terminal from 'terminal/terminal';

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
    onClick: function (e) {
      print(e);
      loadMainView(e);
    }
  };

  const el = await navigation.render(props);
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

  const el = await terminal.render(data);
  container.appendChild(el);
}

async function loadLogView() {
  const data = {
    text: 'events:'
  };

  const el = await logView.render(data);
  printTargets.push(el.querySelector('.cursor'));
  document.querySelector('#vanilla-terminal').appendChild(el);
}

function print(e) {
  var message = e.type + ' : ' + e.target.nodeName + ' : ' + e.target.innerHTML;

  printTargets.forEach(function (element) {
    element.innerHTML += '<br/>' + message;
  });
}

loadLeftMenu()
  .then(loadMainView)
  .then(loadLogView);
