import React from 'react';

function ListItem(props) {
    return <li className='listItem' title='the listItem component' onClick={props.action}>{props.data}</li>;
}

export default ListItem;
