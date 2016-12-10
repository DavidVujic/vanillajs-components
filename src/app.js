import React from 'react';
import ReactDOM from 'react-dom';

import Nav from 'nav/nav';
import Terminal from 'terminal/terminal';
import LogView from 'logView/logView';

loadLeftMenu();
loadMainView();
loadLogView();

function loadLeftMenu() {
    function action(e) {
        loadMainView(e);
        loadLogView(e);
    }
    const data = [
        'You',
        'might',
        '(not)',
        'need',
        'a',
        'JavaScript',
        'framework'
    ];

    ReactDOM.render(
        <Nav data={data} action={action}/>, document.querySelector('#left-menu'));
}

function loadMainView(e) {
    const text = (e
        ? e.target.textContent
        : 'vanilla components');

    ReactDOM.render(
        <Terminal text={text}/>, document.querySelector('#main'));
}

function loadLogView(e) {
    const text = (e
        ? `${e.type} : ${e.target.nodeName} : ${e.target.innerHTML}`
        : 'events:');

    ReactDOM.render(
        <LogView text={text}/>, document.querySelector('#vanilla-terminal'));
}
