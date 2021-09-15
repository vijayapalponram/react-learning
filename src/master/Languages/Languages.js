import React from 'react';
import RadionButtonList from "../../common/RadioButtonList/RadioButtonList";

const Languages = [
    {value: "1", displayText: "English"},
    {value: "2", displayText: "Tamil"},
    {value: "3", displayText: "French"},
  ];

const LanguagesList = () => {
    return(
        <div>Laguages known <RadionButtonList dataSource={Languages} /></div>
    );
}

export default LanguagesList;
