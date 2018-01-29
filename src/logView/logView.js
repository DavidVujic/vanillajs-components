import React from 'react';
import Terminal from '../terminal/terminal';

function createKey(index) {
  return `logviewitem_${index}`;
}

function LogView(props) {
  return (
    <figure className="logView" title="The logView component">
      {
        props.logs.map((text, index) => <Terminal key={createKey(index)} text={text} />)
      }
    </figure>
  );
}

export default LogView;
