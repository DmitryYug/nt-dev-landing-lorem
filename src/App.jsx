import React, {useCallback, useEffect, useRef, useState} from "react";
import {scroller, scrollSpy} from 'react-scroll';

import {NtHeader} from "./components/NtHeader";
import {NtFooter} from "./components/NtFooter";
import {StartPage} from "./components/blocks/StartPage";
import {About} from "./components/blocks/About";
import {DevDescription} from "./components/blocks/DevDescription";
import {Portfolio} from "./components/blocks/Portfolio";
import {WorkFlow} from "./components/blocks/WorkFlow";
import {ContactForm} from "./components/blocks/ContactForm";

import './App.css';
import './less/initial-styles/nullstyle.css'
import './less/initial-styles/normalize.css'
import {Route, Routes} from "react-router-dom";
import {CasesPage} from "./components/blocks/CasesPage";

function App() {

    const mainBackgroundRef = useRef()
    const hoveredBackgroundsRef = useRef()
    let [activeIconId, setActiveIconId] = useState('');
    let [delay, setDelay] = useState('animate__delay-1.5s')
    let [headerClass, setHeaderClass] = useState('')
    let [deviceTypeClassName, setDeviceTypeClassName] = useState('is-hover')
    let [imageLoadingState, setImageLoadingState] = useState({
        mainBackground: false,
        hoveredBackground1: false,
        hoveredBackground2: false,
        hoveredBackground3: false,
    })

    useEffect(() => {

        window.addEventListener('scroll', scrollHandler);
        scrollSpy.update();

        if ("ontouchstart" in document.documentElement) {
            setDeviceTypeClassName('is-touch')
        }

        if (localStorage.getItem('prevPage')) {
            scroller.scrollTo('portfolio')
        }

    }, [])

    useEffect(() => {
        onHoverBackgroundHandler();
        //eslint-disable-next-line
    }, [activeIconId])

    const removeAnimationClass = 'main-background animate__animated animate__bounceOutRight'
    const appearAnimationClass = `main-background animate__animated animate__bounceInRight ${delay}`
    const appearAnimationClassHovered = `main-background hovered animate__animated animate__bounceInRight ${delay}`
    const removeAnimationClassHovered = 'main-background hovered animate__animated animate__bounceOutRight'
    let displayNone = 'main-background d-none';
    const scrollHandler = (e) => {
        if (localStorage.getItem('prevPage')) {
            localStorage.clear()
        }
        if (e.currentTarget.scrollY > 0) {
            setHeaderClass('header no-background ')
        }
        if (e.currentTarget.scrollY === 0) {
            setHeaderClass('')
        }
    }

    const setHoveredIconHandler = (activeIconId) => {
        if (activeIconId === 'hover-icon-first') {
            setActiveIconId('hover-icon-first');
        }
        if (activeIconId === 'hover-icon-second') {
            setActiveIconId('hover-icon-second');
        }
        if (activeIconId === 'hover-icon-third') {
            setActiveIconId('hover-icon-third');
        }
    }

    const onHoverBackgroundHandler = () => {
        let imgCollection = hoveredBackgroundsRef.current.children;
        let imgArray = [];
        for (let i = 0; i < imgCollection.length; i++) {
            imgArray.push(imgCollection[i])
        }

        setDelay(null)

        if (!activeIconId) {
            mainBackgroundRef.current.className = appearAnimationClass
            if (imgArray.filter(img => img.className === appearAnimationClassHovered)[0]) {
                imgArray.filter(img => img.className === appearAnimationClassHovered)[0].className = removeAnimationClassHovered
            }
        }

        if (activeIconId === 'hover-icon-first') {
            mainBackgroundRef.current.className = removeAnimationClass
            imgArray.filter(img => img.alt === 'hover-background-1')[0].className = appearAnimationClassHovered
        }
        if (activeIconId === 'hover-icon-second') {
            mainBackgroundRef.current.className = removeAnimationClass
            imgArray.filter(img => img.alt === 'hover-background-2')[0].className = appearAnimationClassHovered
        }
        if (activeIconId === 'hover-icon-third') {
            mainBackgroundRef.current.className = removeAnimationClass
            imgArray.filter(img => img.alt === 'hover-background-3')[0].className = appearAnimationClassHovered
        }
    }

    const onMouseLeaveHandler = () => {
        setActiveIconId('')
    }
    const loadImageHandler = useCallback((id) => {
        setImageLoadingState(prevState => (
            {...prevState, [id]: true}
        ))
    }, [])

    return (
        <>
            <Routes>
                <Route path={'/:projectId'} element={<CasesPage/>}></Route>
            </Routes>
            <div className={deviceTypeClassName}>
                <header className={headerClass + deviceTypeClassName}>
                    <NtHeader/>
                </header>
                <div className="app">
                    <div className='app background-wrapper'>
                        {
                            imageLoadingState.mainBackground
                                ? <img src="/src/images/start-page/main-background.png"
                                       alt="mb"
                                       ref={mainBackgroundRef}
                                       className={appearAnimationClass}
                                />
                                : <img src="/src/images/start-page/main-background-blur.png"
                                       alt="mbb"
                                       ref={mainBackgroundRef}
                                       className={appearAnimationClass}
                                       onLoad={() => loadImageHandler('mainBackground')}
                                />
                        }
                        <div ref={hoveredBackgroundsRef}>
                            {
                                imageLoadingState.hoveredBackground1
                                    ? <img src="/src/images/start-page/hover-background-1.png"
                                           alt="hover-background-1"
                                           className={displayNone}
                                    />
                                    : <img src="/src/images/start-page/hover-background-1-blur.png"
                                           alt="hover-background-1"
                                           className={displayNone}
                                           onLoad={() => loadImageHandler('hoveredBackground1')}
                                    />
                            }
                            {
                                imageLoadingState.hoveredBackground2
                                    ? <img src="/src/images/start-page/hover-background-2.png"
                                           alt="hover-background-2"
                                           className={displayNone}
                                    />
                                    : <img src="/src/images/start-page/hover-background-2-blur.png"
                                           alt="hover-background-2"
                                           className={displayNone}
                                           onLoad={() => loadImageHandler('hoveredBackground2')}
                                    />
                            }
                            {
                                imageLoadingState.hoveredBackground3
                                    ? <img src="/src/images/start-page/hover-background-3.png"
                                           alt="hover-background-3"
                                           className={displayNone}
                                    />
                                    : <img src="/src/images/start-page/hover-background-3-blur.png"
                                           alt="hover-background-3"
                                           className={displayNone}
                                           onLoad={() => loadImageHandler('hoveredBackground3')}
                                    />
                            }
                        </div>
                        <StartPage setHoveredIconHandler={setHoveredIconHandler}
                                   onMouseLeaveHandler={onMouseLeaveHandler}
                                   deviceType={deviceTypeClassName}
                        />
                    </div>
                    <main>
                        <div id='aboutBlock' className={`aboutBlock ${deviceTypeClassName}`}>
                            <About deviceType={deviceTypeClassName}/>
                        </div>
                        <div id="devDescription" className='devDescription'>
                            <DevDescription/>
                        </div>
                        <div id="portfolio" className='portfolio'>
                            <Portfolio/>
                        </div>
                        <div id="workFlow" className='workFlow'>
                            <WorkFlow/>
                        </div>
                        <div id="contactForm" className='contactForm'>
                            <ContactForm/>
                        </div>

                    </main>
                    <footer>
                        <NtFooter/>
                    </footer>
                </div>
            </div>
        </>
    );
}

export default App;