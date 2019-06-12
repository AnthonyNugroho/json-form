import React from 'react';
import { Input } from 'reactstrap';
const Text = ({
  id,
  name,
  placeholder,
  value,
  onChange,
  required,
  dependsOn,
  parent,
  expectedValue
}) => {

  if(dependsOn && parent &&  parent.value === expectedValue)
  {
    return (
      <div>
      <Input
        type="text"
        id={id}
        value={value}
        name={name}
        required={required}
        placeholder={placeholder}
        onChange={onChange}
        />
      </div>
    )
  }
  else if (!dependsOn)
    {
      return (
        <div>
      <Input
        type="text"
        id={id}
        value={value}
        name={name}
        required={required}
        placeholder={placeholder}
        onChange={onChange}
        />
      </div>
      )
    }
  else
  {
    return (
      <div> </div>
    )
  }
  // <div>
  // <Input
  //   type="text"
  //   id={id}
  //   value={value}
  //   name={name}
  //   required={required}
  //   placeholder={placeholder}
  //   onChange={onChange}
  //   />
  // </div>
};

export default Text;
