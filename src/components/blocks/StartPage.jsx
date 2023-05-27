import React from "react";
import {IconTextBlockAnimated} from "../elements/IconTextBlockAnimated";
import 'animate.css';
import {startPageIcons} from "../../data/content";


export const StartPage = ({
                              onMouseLeaveHandler,
                              setHoveredIconHandler,
                              deviceType
                          }) => {

    const hoverableIconsRender = startPageIcons.map((item, ind) => (
        <IconTextBlockAnimated
            key={item.iconId + ind}
            iconsPath={item.path}
            text={item.text}
            iconId={item.iconId}
            setHoveredIconHandler={setHoveredIconHandler}
            onMouseLeaveHandler={onMouseLeaveHandler}
            deviceType={deviceType}
        />
    ))

    return (
        <section className='start-page app-content-container'>
            <h1 className='animate__animated animate__bounceInDown animate__delay-1s'>
                 Lorem ipsum dolor sit amet. <br/> maxime lorem <br/>quidem rem
            </h1>
            <div className='flex-default-start'>
                {hoverableIconsRender}
            </div>
        </section>
    )
}
