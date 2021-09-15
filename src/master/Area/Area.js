import React from 'react';
import RadionButtonList from "../../common/RadioButtonList/RadioButtonList";

const AreaDataSource = [
    {value: "1", displayText: "Java"},
    {value: "2", displayText: ".NET"},
    {value: "3", displayText: "React"},
  ];

const AreaList = () => {
    return(
        <div>Area of Interest <RadionButtonList dataSource={AreaDataSource} /></div>
    );
}

export default AreaList;
