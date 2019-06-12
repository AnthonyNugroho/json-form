import React from 'react';

const RadioButton =({
  name,
  items,
  onChange,
  dependsOn,
  id,
  expectedValue,
  parent
}) => {
  // console.log(
  //   name,
  //   items,
  //   dependsOn,
  //   id,
  //   expectedValue,
  //   parent,
  // )


  // if( par &&  par.value === expectedValue)
  //   {
  //     return (
  //       items.map(item => (
  //         <label>
  //           <input
  //             id={id}
  //             name={name}
  //             value={item.value}
  //             type="radio"
  //             onChange={onChange}
  //           />
  //             {item.label}
  //           </label>
  //       ))
  //     )
  //   }
  //   else if (!dependsOn)
  //   {
  //     return (
  //       items.map(item => (
  //         <label>
  //           <input
  //             id={id}
  //             name={name}
  //             value={item.value}
  //             type="radio"
  //             onChange={onChange}
  //           />
  //             {item.label}
  //           </label>
  //       ))
  //     )
  //   }
  //   else 
  //   {
  //     return (
  //       <div>
  //       </div>
  //     )
  //   }
  // console.log(parent)
  return(
    <div id={id}>
      {
        ( parent && 
          parent.value === expectedValue &&
          parent.childVisible === true )
         ?
         items.map(item => (
          <label>
            <input
              id={id}
              name={name}
              value={item.value}
              type="radio"
              onChange={onChange}
            />
              {item.label}
            </label>
        ))
        : (!dependsOn) ? 
        items.map(item => (
          <label>
            <input
              id={id}
              name={name}
              value={item.value}
              type="radio"
              onChange={onChange}
            />
              {item.label}
            </label>
        )) 
        // ?
        // (parent && parent.value !== expectedValue )
        // {

        // } 
        :
        <div>
        </div>
        // console.log(
        //   name,
        //   items,
        //   dependsOn,
        //   id,
        //   expectedValue,
        //   parent,
        //   )
      }
    </div>
  )
};



export default RadioButton;
