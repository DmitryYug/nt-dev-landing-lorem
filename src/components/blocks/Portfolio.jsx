import React from "react";
import {CardPortfolioBlock} from "../elements/CardPortfolioBlock";
import {NavLink} from "react-router-dom";
import {portfolioCards} from "../../data/content";

export const Portfolio = () => {

    const portfolioCardsRender = portfolioCards.map(card => {
        return (
            <NavLink key={card.title + card.cardId}
                     to={`/${card.cardId}`}
            >
                <CardPortfolioBlock imagePath={card.backgroundIcons}
                                    title={card.title}
                                    description={card.description}
                                    cardId={card.cardId}
                />
            </NavLink>
        )
    })



    return (
        <section className='portfolio-block-cards app-content-container'>
            {portfolioCardsRender}
        </section>
    )
}
