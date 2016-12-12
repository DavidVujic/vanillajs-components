import React from 'react';
import List from 'list/list';

function Nav(props) {
    return <nav className='nav'><List data={props.data} onClick={props.onClick}/></nav>;
}

export default Nav;
