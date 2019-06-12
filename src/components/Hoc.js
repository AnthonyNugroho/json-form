import React from 'react';

export const WithParent = ({ 
    dependsOn,
    parentState,
    parentValue
}) =>
     Component  => ({
         ...props 
})  => {
    
    if( dependsOn === parentState && parentValue === true ) 
    {
        return <Component {...props} />
    } else {
        return <div />
    }
} 
