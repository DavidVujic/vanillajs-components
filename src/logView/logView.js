import React from 'react';
import Terminal from 'terminal/terminal';

function LogView(props) {
  return <figure className='logView' title='The logView component'>
    {props.logs.map((text, index) => {
      return <Terminal key={index} text={text}/>;
    })}
  </figure>;
}

export default LogView;
