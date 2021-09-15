import React from 'react';
import { RadioButtonListItem } from './RadioButtonListItem';

const RadionButtonList = (props) => {
    const dataSource = props.dataSource;
  
    const renderList = ()=>{
      const list = dataSource.map((item)=>{
        return <RadioButtonListItem value={item.value} displayText={item.displayText}></RadioButtonListItem>
      });
      console.log(list);
      return list;
    }
  
    return(
      <div>
        {renderList()}
      </div>
    )
  }

export default RadionButtonList;
