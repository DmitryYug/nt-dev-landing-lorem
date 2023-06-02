import React, {useEffect, useState} from "react";
import {CaseCard} from "../elements/CaseCard";
import {NavLink, useParams} from "react-router-dom";
import {CaseModal} from "../elements/CaseModal";
import {portfolioCards, profileCases} from "../../data/content";


export const CasesPage = () => {

    let [showModal, setShowModal] = useState(null);
    let [currentCardProps, setCurrentCardProps] = useState({features: [], stack: []});
    let [currentHeader, setCurrentHeader] = useState({})
    let modalState = showModal ? 'fixed-scroll' : ''

    let currentProject = useParams()

    useEffect(() => {
        window.scrollTo(0, 0);
        setCurrentHeader(portfolioCards.filter(card => card.cardId === currentProject.projectId)[0])

        return (() => {
            localStorage.setItem('prevPage', 'casesPage')
        })
    }, [currentProject.projectId])

    const renderCasesCardsAutomation = profileCases[currentProject.projectId].map(card => {
        return (
            <CaseCard
                key={card.id}
                cardId={card.id}
                title={card.header}
                chipTags={card.tags}
                chipTitle={card.headerChip}
                stack={card.stack}
                status={card.status}
                description={card.caseDescription}
                features={card.features}
                schemePath={card.scheme}
                imagePath={card.parentBackground}
                showModal={() => setShowModal(true)}
                getCurrentCardProps={(props) => setCurrentCardProps(props)}
            />
        )
    })

    return (
        <div className={`modal-wrapper ${showModal ? 'faded' : ''}`}>
            <div className='cases-header'>
                <div className='app-content-container'>
                    <NavLink to='/'>
                        <img src="/src/images/portfolio-block/cases-page/arrow-back-white.png"
                             alt="arrow-back-white"
                        />
                    </NavLink>
                </div>
            </div>
            <div className={`cases ${modalState}`}>
                <div className="description">
                    <h3 className="description-title">
                        {currentHeader.title}
                    </h3>
                    <p className="description-subtitle">
                        {currentHeader.description}
                    </p>
                </div>
                <div className="cases-cards app-content-container">
                    {renderCasesCardsAutomation}
                </div>
            </div>
            <CaseModal show={showModal}
                       hideModal={() => setShowModal(false)}
                       currentCardProps={currentCardProps}
            />
        </div>
    )
}
