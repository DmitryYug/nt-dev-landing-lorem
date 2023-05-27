import React from "react";
import {IconTextBlock} from "./IconTextBlock";

export const CardWorkFlow = ({title, descriptionList, result}) => {

    let descriptionListRender = descriptionList.map((item, i) => {
        return (
            <li key={i + item.text}
                className='text black-20-16'
            >
                <IconTextBlock text={item.text}
                               iconPath={item.icon}
                />
            </li>
        )
    })


    return (
        <div className='card-work-flow container'>
            <h3 className='card-work-flow container-item text blue-40-32-24-20'>{title}</h3>
            <ul className="card-work-flow container-item description-list-container">
                {descriptionListRender}
            </ul>
            <div className='card-work-flow container-item text-block'>
                <span className='text black-32-24-20'>Quidem rem</span>
                <p className='text black-20-16'>{result}</p>
            </div>
        </div>
    )
}
