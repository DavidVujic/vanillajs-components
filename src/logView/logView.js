import React from 'react';
import Terminal from 'terminal/terminal';

class LogView extends React.Component {
    constructor(props) {
        super(props);
        this.state = ({
            list: [props.text]
        });
    }

    componentWillReceiveProps(nextProps) {
        const copy = this.state.list.slice();
        copy.push(nextProps.text);
        this.setState({list: copy});
    }

    render() {
        return <figure className='logView' title='The logView component'>
            {this.state.list.map((text) => {
                return <Terminal text={text}/>;
            })}
        </figure>;
    }
}

export default LogView;
