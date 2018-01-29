import React from 'react';
import ListItem from '../listItem/listItem';

function createKey(index) {
  return `listitem_${index}`;
}

function List(props) {
  return (
    <section className="list" title="The list component">
      <ul>
        {
          props.data.map((item, index) =>
            <ListItem key={createKey(index)} data={item} onClick={props.onClick} />)
        }
      </ul>
    </section>
  );
}

export default List;
