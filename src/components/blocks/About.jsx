import React from "react";
import {CardAboutBlock} from "../elements/CardAboutBlock";
import {aboutBlockCards} from "../../data/content";

export const About = (props) => {

    const aboutCardsRender = aboutBlockCards.map(card => (
        <CardAboutBlock key={card.cardId + card.title}
                        imagePath={card.imagePath}
                        title={card.title}
                        description={card.description}
                        cardId={card.cardId}
                        deviceType={props.deviceType}
        />
    ))
    return (
        <section className='about-block app-content-container'>
            <div className="about-block-header">
                <h2 className='text blue-32-24-20'>Lorem ipsum.</h2>
                <div className="description">
                    <article className='description-title'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </article>
                    <p className='description-subtitle'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium alias asperiores at cumque dolorem dolores in laborum optio perspiciatis provident, quibusdam quis quisquam quod repellendus saepe soluta ullam veniam voluptatibus?
                    </p>
                </div>
            </div>

            <div className='about-block-cards '>
                {aboutCardsRender}
            </div>
        </section>
    )
}
