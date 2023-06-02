import React, {useEffect} from "react";
import {NavLink} from "react-router-dom";
import {policyData} from "../../data/content";
import {animateScroll as scroll} from 'react-scroll';


export const PolicyPage = () => {

    useEffect(() => {
        scroll.scrollToTop();
    }, [])

    return (
        <div className='policy'>
            <div className='header'>
                <div className='img-container'>
                    <NavLink to='/'>
                        <img src="./images/case-modal/arrow-back-blue.png"
                             alt="arrow-back"
                        />
                    </NavLink>
                </div>
            </div>
            <div className='app-content-container'>
                <h2>
                    Lorem ipsum dolor sit amet.
                </h2>
                {policyData.map(item => (
                    <div style={{marginBottom: '20px'}}
                         key={item.id + item.title}
                    >
                        <h4>{item.id + '.' + item.title}</h4>
                        <ul>
                            {item.list.map((listItem, ind) => <li key={ind}>{listItem}</li>)}
                        </ul>
                    </div>
                ))}
            </div>
        </div>

    )
}
