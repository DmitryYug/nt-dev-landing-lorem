import React from "react";
import {animateScroll as scroll, Link} from 'react-scroll';
import {NavLink} from "react-router-dom";

export const NtFooter = () => {
    const scrollToTop = () => {
        scroll.scrollToTop();
    }


    return (
        <div className="background-wrapper" >
            <div className='app-content-container'>
                <div className='top-container'>
                    {/*<div onClick={scrollToTop} className='main-logo'>*/}
                    {/*    <img src="nt-dev-landing-lorem/images/main-logo.png"*/}
                    {/*         alt="main-logo"*/}
                    {/*    />*/}
                    {/*</div>*/}
                    <h2 onClick={scrollToTop}>
                        Company logo
                    </h2>
                    <div className="phone-block">
                        <span className='number'>+1 (222) 333-44-55</span>
                        <span className='e-mail'>somemail@email.com</span>
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem consectetur dolorum iure maxime minus omnis quos recusandae soluta. Aliquam architecto aspernatur aut blanditiis dolor dolorem dolores eos explicabo hic id necessitatibus nisi quam qui, quis quos repudiandae sequi veritatis voluptatibus!
                    </p>
                </div>
                <div className="bottom-container">
                    <div className='empty'></div>
                    <div className="nav">

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
                    <NavLink to='/policy' className="disclaimer">
                        Lorem ipsum dolor sit.
                    </NavLink>
                </div>
            </div>
        </div>
    )
}
