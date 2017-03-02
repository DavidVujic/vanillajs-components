import React from 'react';
import Terminal from 'terminal/terminal';

function LogView(props) {
  return <figure className='logView' title='The logView component'>
    {props.logs.map((text) => {
      return <Terminal text={text}/>;
    })}
  </figure>;
}

export default LogView;
