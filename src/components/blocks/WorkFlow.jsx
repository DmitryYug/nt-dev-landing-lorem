import React from "react";
import {CardWorkFlow} from "../elements/CardWorkFlow";
import {workFlowCards} from "../../data/content";

export const WorkFlow = () => {

    const workFlowCardsRender = workFlowCards.map((card, ind ) => (
        <CardWorkFlow key={card.title + ind}
                      title={card.title}
                      result={card.result}
                      descriptionList={card.descriptionList}
        />
    ))

    return (
        <section className='work-flow-background-wrapper'>
            <div className='app-content-container'>
                <h2>Enim id itaque</h2>
                <div className="cards-container">
                    {workFlowCardsRender}
                </div>
            </div>
        </section>
    )
}
