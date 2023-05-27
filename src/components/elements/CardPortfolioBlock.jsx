import React, {useState} from "react";

export const CardPortfolioBlock = ({cardId, imagePath, title, description}) => {
    let [hoveredClass, setHoveredClass] = useState('')

    const hoverHandler = () => {
        setHoveredClass('hovered')
    }
    const mouseLeaveHandler = () => {
        setHoveredClass('')
    }


    const iconCreator = imagePath.map((path, ind) => {
        return (
            <img key={path + ind}
                 src={path}
                 className={cardId + ' ' + hoveredClass}
                 alt={path + ind}
                 loading='lazy'
            >
            </img>
        )
    })

    return (
        <div className={`card-portfolio-block wrapper ${hoveredClass}`}
             onMouseEnter={hoverHandler}
             onMouseLeave={mouseLeaveHandler}
        >
            {iconCreator}
            <div className='card-portfolio-block content'>
                <span className='text blue-32-24-20'>{title}</span>
                <p className="text-description black-small">{description}</p>
                <button className='btn-blue'>
                    Lorem ipsum.
                </button>
            </div>
        </div>
    )
}
