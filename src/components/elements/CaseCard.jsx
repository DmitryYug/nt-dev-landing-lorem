import React, {useState} from "react";

export const CaseCard = (props) => {
    let [hoveredClass, setHoveredClass] = useState('')

    const iconCreator = props.imagePath.map((path, ind) => {
        return (
            <img key={path + ind}
                 src={path}
                 className={props.cardId + ' ' + hoveredClass}
                 alt={path + ind}
            >
            </img>
        )
    })

    const chipTagsElements = props.chipTags.map((chip, ind) => {
        return (
            <div className='tag' key={chip + ind}>
                {chip}
            </div>
        )
    })

    const hoverHandler = () => {
        setHoveredClass('hovered')
    }
    const mouseLeaveHandler = () => {
        setHoveredClass('')
    }

    const showModalHandler = () => {
        props.showModal()
        props.getCurrentCardProps(props)
    }

    return (
        <div className={`card-cases container ${hoveredClass}`}
             onMouseEnter={hoverHandler}
             onMouseLeave={mouseLeaveHandler}
             onClick={showModalHandler}
        >
            <div className={`image-container ${props.cardId} ${hoveredClass}`}>
                {iconCreator}
            </div>
            <div className='text-block'>
                <div>
                    <div className="chip title">
                        {props.chipTitle}
                    </div>
                    <span className='text blue-32-24-20'>
                        {props.title}
                    </span>
                </div>
                <div className="chip-tags">
                    {chipTagsElements}
                </div>
            </div>
        </div>
    )
}
