import React from 'react';
import ReactDOM from 'react-dom';

import Nav from 'nav/nav';
import Terminal from 'terminal/terminal';
import LogView from 'logView/logView';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = ({
            navData: [
                'You',
                'might',
                '(not)',
                'need',
                'a',
                'JavaScript',
                'framework'
            ],
            logMessages: ['events:'],
            mainText: 'vanilla components'
        });

        this.action = this.action.bind(this);
    }

    action(e) {
        const messages = this.state.logMessages.slice();
        messages.push(`${e.type} : ${e.target.nodeName} : ${e.target.innerHTML}`);

        this.setState({mainText: e.target.textContent, logMessages: messages});
    }

    render() {
        return <section>
            <section id="left-menu">
                <Nav data={this.state.navData} action={this.action}/>
            </section>
            <section id="main">
                <Terminal text={this.state.mainText}/>
            </section>
            <section id="vanilla-terminal">
                <LogView logs={this.state.logMessages}/>
            </section>
        </section>;
    }
}

export default App;
