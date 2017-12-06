import React from 'react';

const DisplayList = ({ list = [] }) => (
  <ul>
    {list.map((item, index) => <li key={`${item}${index}`}>{item}</li>)}
  </ul>
)

export default DisplayList;