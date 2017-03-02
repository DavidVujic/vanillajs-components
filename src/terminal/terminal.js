import React from 'react';

function Terminal(props) {
  return <figure className='terminal' title='the terminal component'>
    <span className='cursor'>{props.text}</span>
  </figure>;
}

export default Terminal;
