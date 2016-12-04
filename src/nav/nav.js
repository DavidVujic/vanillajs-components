import React from 'react';
import List from 'list/list';

function Nav(props) {
    return <List data={props.data} action={props.action}/>;
}

export default Nav;
