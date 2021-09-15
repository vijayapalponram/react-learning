import React, { useState } from 'react';
import AreaList from '../../master/Area/Area';
import LanguagesList from '../../master/Languages/Languages';
import "./style.css";

const Registration = ()=>{

    const [advanceFlag, setAdvanceFlag] = useState(false);

    const onClick = (evt)=>{
        setAdvanceFlag(!advanceFlag);
    }

    const renderAdavanced = ()=>{
        if(advanceFlag){
            return (<div>Profile Summary <textarea cols="20" rows="5"></textarea></div>);
        }
    }

    return(
    <div>
        <h1>Register Here</h1>
        <div className="registration-form">
            <div>Name <input type="text"></input></div>
            <div>Date of Birth <input type="text"></input></div>
            <div>Area of Interest <AreaList /></div>
            <div>Known langages <LanguagesList /></div>

            <div>Married <input type="text"/> </div>


            <button onClick={onClick}>Advanced</button>
            {renderAdavanced()}

        </div>
    </div>
    );
}

export default Registration;
