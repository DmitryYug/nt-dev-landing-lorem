import React from "react";
import 'animate.css';

export const IconTextBlock = ({iconPath, text}) => {

    return (
        <div className='icon-text-block'>
            <img src={iconPath} alt={iconPath}/>
            <span>{text}</span>
        </div>
    )
}
