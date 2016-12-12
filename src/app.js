import * as navigation from 'nav/nav';
import * as logView from 'logView/logView';
import * as terminal from 'terminal/terminal';

var printTargets = [];

loadLeftMenu();
loadMainView();
loadLogView();

function loadLeftMenu() {
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

    navigation.render(props, (el) => {
        document.querySelector('#left-menu').appendChild(el);
    });
}

function loadMainView(e) {
    const container = document.querySelector('#main');
    const data = {
        text: 'vanilla components'
    };

    if (e) {
        container.removeChild(container.firstChild);
        data.text = e.target.textContent;
    }

    terminal.render(data, (el) => container.appendChild(el));
}

function loadLogView() {
    const data = {
        text: 'events:'
    };

    logView.render(data, (el) => {
        printTargets.push(el.querySelector('.cursor'));
        document.querySelector('#vanilla-terminal').appendChild(el);
    });
}

function print(e) {
    var message = e.type + ' : ' + e.target.nodeName + ' : ' + e.target.innerHTML;

    printTargets.forEach(function(element) {
        element.innerHTML += '<br/>' + message;
    });
}
