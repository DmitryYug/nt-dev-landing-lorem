import React, {useEffect, useState} from "react";
import arrowBackBlue from '../../images/case-modal/arrow-back-blue.png'


export const CaseModal = ({hideModal, show, currentCardProps}) => {

    let [displayClass, setDisplayClass] = useState('d-none')

    useEffect(() => {
        if (show !== null) {
            setDisplayClass(show ? 'animate__animated animate__slideInRight' : 'animate__animated animate__slideOutRight')
        }

        window.scrollTo(0, 0);
        document.addEventListener("keydown", closeModalOnEscape, false);

        return () => {
            document.removeEventListener("keydown", closeModalOnEscape, false);
        }
        //eslint-disable-next-line
    }, [show])


    const chipTags = currentCardProps.chipTags?.map((tag, ind) => {
        return (
            <div className="chip-tag" key={tag + ind}>{tag}</div>
        )
    })

    const statusRender = currentCardProps.status?.map((status, ind) => {
        return (
            <h4 key={ind + status} className="title">
                <img src="/src/images/case-modal/icon-1.png" alt="icon-1"/>
                {status}
            </h4>
        )
    })

    const stackRender = currentCardProps.stack?.map((stack, ind) => {
        return (
            <span key={ind + stack}>{stack} </span>
        )
    })

    const featuresRender = currentCardProps.features?.map((feature, ind) => {
        return (
            <li key={ind + feature}>{feature}</li>
        )
    })
    const hideModalHandler = () => {
        hideModal();
    }

    const closeModalOnEscape = (e) => {
        if (e.key === "Escape" && show) {
            hideModalHandler()
        }
    }

    return (
        <div className={`case-modal ${displayClass}`}>
            <div className="header">
                <button onClick={hideModalHandler}>
                    <img src={arrowBackBlue}
                         alt="arrow-back-blue"
                    />
                </button>
            </div>
            <div className="title-block">
                <div className="chip">
                    {currentCardProps.chipTitle}
                </div>
                <h3 className="title">
                    {currentCardProps.title}
                </h3>
            </div>
            <div className="content-container">
                <div className="text-block">
                    <div className="paragraph">
                        {statusRender}
                        <p>
                            {currentCardProps.description}
                        </p>
                    </div>

                    {currentCardProps.features.length
                        ? <div className="list">
                            <h4 className="title">
                                Enim id itaque
                            </h4>
                            <ul>
                                {featuresRender}
                            </ul>
                        </div>
                        : null
                    }

                    {currentCardProps.stack.length
                        ? <div className="stack">
                            <h4>Maxime</h4>
                            {stackRender}
                        </div>
                        : null
                    }

                    <div className="chips">
                        {chipTags}
                    </div>
                </div>
                <div className="scheme">
                    <img src={currentCardProps.schemePath} alt={currentCardProps.schemePath}/>
                </div>
            </div>
        </div>
    )
}




