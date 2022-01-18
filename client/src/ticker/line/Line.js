import React from 'react';

const Line = (props) => { // one row of a table

  const payload = props.payload;
  const headonly = props.headonly;

  return ( headonly===true ?
    <tr>{Object.entries(payload).map((item, id) => (<th key={id}>{item[0]}</th>))}</tr>
    :
    <tr>{Object.entries(payload).map((item, id) => (<td key={id}>{item[1]}</td>))}</tr>
  )
}

export default Line;
