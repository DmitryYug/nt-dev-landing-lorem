import React, {useEffect, useRef, useState} from "react";

export const DevDescription = () => {

    let backgroundWrapperRef = useRef()
    let [isInViewport, setIsInViewport] = useState(false)
    let loadedClass = isInViewport ? 'loaded' : ''

    useEffect(() => {
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                //Element in viewport
                if (entry.isIntersecting) {
                    setIsInViewport(true)
                }
            });
        });

        observer.observe(backgroundWrapperRef.current);
        return () => {
            observer.disconnect();
            setIsInViewport(false)
        };
    }, []);


    return (
        <section className='dev-description-block background-wrapper'>
            <div className={`image-position-wrapper ${loadedClass}`}
                 ref={backgroundWrapperRef}
            >
                <div className="dev-description-block-header app-content-container">
                    <h2 className='text white-32-20'>
                        Quidem rem
                    </h2>
                    <div className="description">
                        <article className='description-title'>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur debitis dolorum eveniet fugiat officia temporibus tenetur. Dolorem doloremque magni sequi.
                        </article>
                        <p className='description-subtitle'>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda consectetur consequuntur, corporis culpa cupiditate deleniti dolor dolore eligendi enim eum fuga in ipsum laborum libero, nihil provident sed veritatis vitae.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
