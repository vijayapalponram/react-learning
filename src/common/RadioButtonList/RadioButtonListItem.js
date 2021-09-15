import React from 'react';

export const RadioButtonListItem = (props)=>{
    return (
      <div><input type="radio" value={props.value} /> { props.displayText }</div>
    )
  }
