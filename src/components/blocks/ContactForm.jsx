import React, {useEffect, useRef, useState} from "react";
import InputMask from 'react-input-mask';
import axios from "axios";
import config from '../../config.json'
import {useForm} from "react-hook-form";
import successImg from "../../images/contact-form/success-sending.png"
import errorImg from "../../images/contact-form/error-sending.png"


export const ContactForm = () => {

    //Watch viewport
    let backgroundWrapperRefContacts = useRef()
    let [isInViewport, setIsInViewport] = useState(false)
    let loadedClass = isInViewport ? 'loaded' : ''

    //Form
    const [loading, setLoading] = useState(false)
    const [sendingStatus, setSendingStatus] = useState(null)
    const {
        register, handleSubmit, reset, getValues,
        formState, formState: {errors}, watch
    } = useForm();
    const watchAllFields = watch()
    const values = getValues()

    axios.defaults.baseURL = config.apiPath;

    useEffect(() => {
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                //Element show
                if (entry.isIntersecting) {
                    setIsInViewport(true)
                }
            });
        });

        observer.observe(backgroundWrapperRefContacts.current);

        return () => {
            observer.disconnect();
            setIsInViewport(false)
        };
    }, []);

    useEffect(() => {
        if (formState.isSubmitSuccessful) {
            reset();
            reset({phone: ''})
        }
    }, [formState, reset])

    useEffect(() => {
        if (values.name || values.company || values.email || values.message) {
            setSendingStatus(null)
        }
        //eslint-disable-next-line
    }, [watchAllFields])

    const contactFormSubmit = (data) => {
        setLoading(true)
        axios.post('/feedback/', data)
            .then(() => {
                setSendingStatus('success')
            })
            .catch((err) => {
                setSendingStatus('error')
                console.log(err.message)
            })
            .finally(() => {
                setLoading(false)
            })
    }

    const errorMessage = () => (
        <p className='error-validation-message'>Required field</p>
    )

    const successSendMessage = () => (
        <div className={`sending-status animate__animated animate__zoomIn animate__faster ${sendingStatus}`}>
            <img src={successImg} alt="success-sending"/>
            <span>Lorem ipsum dolor sit amet.</span>
        </div>
    )
    const errorSendMessage = () => (
        <div>
            <div className={`sending-status animate__animated animate__zoomIn animate__faster ${sendingStatus}`}>
                <img src={errorImg} alt="error-sending"/>
                <span>Error</span>
            </div>
        </div>
    )

    const numberCountCheck = (value) => {
        let counter = 0;
        for (let i = 0; i < value.length; i++) {
            if (!!Number(value[i])) {
                counter += 1
            }
        }
        if (counter < 9) {
            return false
        }
    }

    return (
        <section className='contact-form-block'>
            <div className="background-wrapper">
                <div className={`image-position-wrapper ${loadedClass}`}
                     ref={backgroundWrapperRefContacts}
                >
                    <div className="contact-form-block-header app-content-container">
                        <h2 className='title'>
                            Lorem ipsum dolor sit.
                        </h2>
                        <form onSubmit={handleSubmit(contactFormSubmit)}
                              className="form-container"
                        >
                            <label htmlFor="name">
                                {
                                    values.name
                                        ? <div className="d-flex">
                                            <span>Lorem ipsum.*</span>
                                            {errors.name && errorMessage()}
                                        </div>
                                        : <div className="d-flex empty">
                                            <span></span>
                                            {errors.name && errorMessage()}
                                        </div>
                                }

                                <input placeholder='lorem ipsum*'
                                       type="text"
                                       id="name"
                                       {...register("name", {
                                           required: true
                                       })}
                                       className={errors.name ? 'error' : ''}
                                />
                            </label>
                            <label htmlFor="company">
                                {
                                    values.company
                                        ? <div className="d-flex">
                                            <span>Lorem ipsum.*</span>
                                            {errors.company && errorMessage()}
                                        </div>
                                        : <div className="d-flex empty">
                                            <span></span>
                                            {errors.company && errorMessage()}
                                        </div>
                                }

                                <input placeholder='Quidem rem*'
                                       type="text"
                                       id="company"
                                       {...register("company", {
                                           required: true
                                       })}
                                       className={errors.company ? 'error' : ''}
                                />
                            </label>
                            <label htmlFor="phone">
                                {
                                    values.phone
                                        ? <div className="d-flex">
                                            <span>Maxime*</span>
                                            {errors.phone && <p className='error-validation-message'>Неправильный номер</p>}
                                        </div>
                                        : <div className="d-flex empty">
                                            <span></span>
                                            {errors.phone && errorMessage()}
                                        </div>
                                }

                                <InputMask mask='9-(999)-999-99-99'
                                           placeholder='Enim id itaque*'
                                           id="phone"
                                           maskChar={null}
                                           {...register("phone",
                                               {
                                                   required: true,
                                                   validate: v => numberCountCheck(v)
                                               })}
                                           className={errors.phone ? 'error' : ''}
                                />
                            </label>
                            <label htmlFor="email">
                                {
                                    values.email
                                        ? <div className="d-flex">
                                            <span>E-mail*</span>
                                            {errors.email && <p className='error-validation-message'>Неправильный адрес</p>}
                                        </div>
                                        : <div className="d-flex empty">
                                            <span></span>
                                            {errors.email && errorMessage()}
                                        </div>
                                }

                                <input placeholder='E-mail*'
                                       type="text"
                                       id="email"
                                       {...register("email",
                                           {
                                               required: true,
                                               pattern: /(.+)@(.+){2,}\.(.+){2,}/
                                           })}
                                       className={errors.email ? 'error' : ''}
                                />
                            </label>
                            <label htmlFor="message">
                                {
                                    values.message
                                        ? <div className="d-flex">
                                            <span>maxime perferendis quidem rem*</span>
                                            {errors.message && errorMessage()}
                                        </div>
                                        : <div className="d-flex empty">
                                            <span></span>
                                            {errors.message && errorMessage()}
                                        </div>
                                }

                                <textarea placeholder='maxime perferendis quidem rem*'
                                          id="message"

                                          className={errors.message ? 'error' : ''}
                                          {...register("message", {
                                              required: true
                                          })}
                                />
                            </label>
                            {/*<label htmlFor="upload">*/}
                            {/*    <input type="file" id="upload" name="file" multiple/>*/}
                            {/*    <img src='/images/contact-form/upload.png'/>*/}
                            {/*    <span className='upload-span'>Выбрать файл</span>*/}
                            {/*</label>*/}
                            <div className='d-flex'>
                                <button className='btn-black'
                                        id='sent'
                                        disabled={loading}
                                >
                                    Lorem ipsum.
                                </button>
                                {sendingStatus === 'success' ? successSendMessage() : errorSendMessage()}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
