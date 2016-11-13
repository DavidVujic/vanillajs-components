import * as navigation from 'nav/nav';
import * as logView from 'logView/logView';
import * as terminal from 'terminal/terminal';
import * as events from 'events';
import * as printer from 'Printer';

loadLeftMenu();
loadMainView();
loadLogView();

function loadLeftMenu() {
    const data = [
        'You',
        'might',
        '(not)',
        'need',
        'a',
        'JavaScript',
        'framework'
    ];

    navigation.create(data, (el) => {
        events.on('click', el.querySelectorAll('li'), [printer.print, loadMainView]);
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

    terminal.create(data, (el) => container.appendChild(el));
}

function loadLogView() {
    const data = {
        text: 'events:'
    };

    logView.create(data, (el) => {
        printer.addTarget(el.querySelector('.cursor'));
        document.querySelector('#vanilla-terminal').appendChild(el);
    });
}
