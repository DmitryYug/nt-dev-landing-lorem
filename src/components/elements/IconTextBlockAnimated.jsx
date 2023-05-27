import React, {useEffect, useRef, useState} from "react";
import 'animate.css';

export const IconTextBlockAnimated = ({
                                          onMouseLeaveHandler,
                                          setHoveredIconHandler,
                                          iconId,
                                          iconsPath,
                                          text,
                                          deviceType
                                      }) => {

    let iconContainer = useRef()
    let [currentAnimationClass, setCurrentAnimationClass] = useState('')
    let ifTouchDevice = deviceType === 'is-touch'

    useEffect(() => {
        let imagesFromRef = iconContainer.current.children
        let imgToMap = [];
        for (let i = 0; i < imagesFromRef.length; i++) {
            imgToMap.push(imagesFromRef[i])
        }

        imgToMap.map(img => img.className = currentAnimationClass)
    }, [currentAnimationClass])

    const iconCreator = iconsPath.map((path, ind) => {
        return (
            <img key={path + ind}
                 src={path}
                 alt={path + ind}
            >
            </img>
        )
    })

    const hoverHandler = () => {
        setHoveredIconHandler(iconId)
        setCurrentAnimationClass('hovered')
    }
    const activeHandler = () => {
        setHoveredIconHandler(iconId)
        setCurrentAnimationClass('')
    }

    const mouseLeaveHandler = () => {
        onMouseLeaveHandler()
        setCurrentAnimationClass('')
    }

    return (
        <div onMouseEnter={!ifTouchDevice ? hoverHandler : null}
             onMouseLeave={!ifTouchDevice ? mouseLeaveHandler : null}
             onClick={ifTouchDevice ? activeHandler : null}
             className='icon-text-block-column'
             id={iconId}
        >
            <div ref={iconContainer}
                 className={`icon-container ${iconId} animate__animated animate__zoomIn animate__delay-1s`}>
                {iconCreator}
            </div>
            <span className='animate__animated animate__bounceInUp animate__delay-1.5s'>{text}</span>
        </div>

    )
}
