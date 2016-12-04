import React from 'react';
import List from 'list/list';

function Nav(props) {
    return <nav className='nav'><List data={props.data} action={props.action}/></nav>;
}

export default Nav;
