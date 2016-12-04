import React from 'react';
import ReactDOM from 'react-dom';

import * as navigation from 'nav/nav';
import * as logView from 'logView/logView';
import * as terminal from 'terminal/terminal';
import on from 'events';
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

    navigation.render(data, (el) => {
        on('click', el.querySelectorAll('li'), [printer.print, loadMainView]);

        ReactDOM.render(<h1>hello react</h1>, document.querySelector('#left-menu'));
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
        printer.addTarget(el.querySelector('.cursor'));
        document.querySelector('#vanilla-terminal').appendChild(el);
    });
}
