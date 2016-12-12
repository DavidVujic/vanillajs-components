import React from 'react';

function ListItem(props) {
    return <li className='listItem' title='the listItem component' onClick={props.onClick}>{props.data}</li>;
}

export default ListItem;
