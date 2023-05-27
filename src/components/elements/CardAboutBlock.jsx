import React, {useState} from "react";

export const CardAboutBlock = ({
                                   cardId,
                                   imagePath,
                                   title,
                                   description,
                                   deviceType
                               }) => {
    let [hoveredClass, setHoveredClass] = useState('')
    let ifTouchDevice = deviceType === 'is-touch'

    const iconCreator = imagePath.map((path, ind) => {
        return (
            <img key={path + ind}
                 src={path}
                 className={hoveredClass}
                 alt={path + ind}
                 loading='lazy'
            >
            </img>
        )
    })

    const hoverHandler = () => {
        setHoveredClass('hovered')
    }
    const activeHandler = () => {
        setHoveredClass('active')
    }
    const mouseLeaveHandler = () => {
        setHoveredClass('')
    }


    return (
        <div className="card-about-block container"
             onMouseEnter={!ifTouchDevice ? hoverHandler : null}
             onMouseLeave={!ifTouchDevice ? mouseLeaveHandler : null}
             onClick={ifTouchDevice ? activeHandler : null}
        >
            <div className={`image-container ${cardId} ${hoveredClass}`}>
                {iconCreator}
            </div>
            <div className='text-block'>
                <span className='text blue-32-24-20'>{title}</span>
                <p className="text-description black-small">{description}</p>
            </div>
        </div>
    )
}
