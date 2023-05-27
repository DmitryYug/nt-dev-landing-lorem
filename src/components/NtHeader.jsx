import React from "react";
import 'animate.css';
import {animateScroll as scroll, Link} from 'react-scroll';

export const NtHeader = () => {
    const scrollToTop = () => {
        scroll.scrollToTop();
    }

    return (
        <div className='animate__animated animate__bounceInDown flex-default-space-between app-content-container'>
            <nav>
                <h1 onClick={scrollToTop}>
                    Company logo
                </h1>

                {/*<div onClick={scrollToTop} className='main-logo'>*/}
                    {/*<img src="/images/main-logo.png"*/}
                    {/*     alt="main-logo"*/}
                    {/*/>*/}
                    {/*<img src="/images/main-logo-hovered.png"*/}
                    {/*     alt="main-logo-hovered"*/}
                    {/*/>*/}
                {/*</div>*/}
                <div className="nav-center">
                    <Link to='aboutBlock' spy={true} smooth={true} duration={500}>
                        Quidem rem
                    </Link>
                    <Link to='devDescription' spy={true} smooth={true} duration={500}>
                        Quidem
                    </Link>
                    <Link to='workFlow' spy={true} smooth={true} duration={500}>
                        Lorem ipsum.
                    </Link>
                </div>
            </nav>
            <Link to='contactForm' className="btn-white" spy={true} smooth={true} duration={500}>
                Enim id itaque
            </Link>
        </div>
    )
}
