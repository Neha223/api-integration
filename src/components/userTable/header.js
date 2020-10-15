import React from 'react';

export const Header = (props) => (
  <tr>
    {props.fields.map()}
    <th>Id</th>
    <th>Name</th>
    <th>Email</th>
  </tr>
);