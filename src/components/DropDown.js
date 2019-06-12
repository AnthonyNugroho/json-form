import React from 'react';

const DropDown = ({
  name,
  items,
  id,
  value,
  onChange,
}) => (
  <select
    id={id}
    type="select"
    name={name}
    onChange={onChange}
    value={value}
  >
    {
      items.map(item => (
        <option value={item.value}>{item.label}</option>
      ))
    }
  </select>
);

export default DropDown;
