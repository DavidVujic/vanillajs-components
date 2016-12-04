import React from 'react';
import ListItem from 'listItem/listItem';

function List(props) {
    return <section className='list' title='The list component'>
        <ul>
            {props.data.map((item) => <ListItem data={item} action={props.action}/>)}
        </ul>
    </section>;
}

export default List;
