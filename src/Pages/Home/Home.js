import React from 'react';
import '../../scss/style.scss';
import about1 from '../../images/about/01.png';
import { MenuList } from '../../components/MenuList/MenuList';
import { FooterList } from '../../components/FooterList/FooterList';
import { Pagination } from '../../components/Pagination/Pagination';
import { Link } from 'react-router-dom';
import { CarouselBlog } from '../../components/CarouselBlog/CarouselBlog';
import { Contacts } from '../../components/Contacts/Contacts';
import { Start } from '../../Data/ServicesData'
import { Reviews } from '../../Data/ServicesData'

export const HomePages = (props) => {
    return (
        <div>
            <MenuList></MenuList>

            <div className="slider-01 banner-01">
                <div id="main-slider" className="swiper-container">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide align-items-center d-flex slide-bg-01">
                            <div className="swipeinner container">
                                <div className="row justify-content-start text-left">
                                    <div className="col-xl-7 col-lg-7 col-md-10">
                                        <div className="slider-1">
                                            <div className="animated" data-swiper-animation="fadeInUp" data-duration="1s" data-delay="0.25s">
                                                <h6 className="animated text-primary  mb-4" data-swiper-animation="fadeInUp" data-duration="1.5s" data-delay="0.25s">— «Небесный свод, наполненный звездами, - не что иное, как открытая книга космического замысла»</h6>
                                                <h1 className="animated text-white display-6" data-swiper-animation="fadeInUp" data-duration="1.5s" data-delay="0.25s">Астролог Ирина</h1>
                                                <p className="animated lead text-white display-9" data-swiper-animation="fadeInUp" data-duration="1.5s" data-delay="0.25s">
                                                    Профессиональные консультации от квалифицированного астролога
                                                </p>
                                                <p></p>
                                                <div className="d-flex align-items-center mt-4 mt-md-5">
                                                    <Link className="animated4 btn btn-white" data-swiper-animation="fadeInUp" data-duration="3s" data-delay="0.25s" to="/services">Подробнее<span></span></Link>
                                                    <div className="animated4 video-btn-02 ml-4" data-swiper-animation="fadeInUp" data-duration="3s" data-delay="0.25s">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-slide align-items-center d-flex bg-overlay-black-60 slide-bg-02" >

                            <div className="swipeinner container">
                                <div className="row justify-content-end text-right text-md-left">
                                    <div className="col-xl-7 col-lg-7 col-md-8">
                                        <div className="slider-1">
                                            <div className="animated" data-swiper-animation="fadeInUp" data-duration="1s" data-delay="0.25s">
                                                <h6 className="animated text-primary  mb-4" data-swiper-animation="fadeInUp" data-duration="1.5s" data-delay="0.25s">— Добро пожаловать!</h6>
                                                <h1 className="animated text-white display-6" data-swiper-animation="fadeInUp" data-duration="1.5s" data-delay="0.25s">Личные встречи, онлайн консультации, ответы по email в удобноe для вас время!</h1>
                                                <p className="animated lead text-white display-9" data-swiper-animation="fadeInUp" data-duration="1.5s" data-delay="0.25s">С уважением и заботой к каждому клиенту</p>

                                                <Link className="animated4 btn btn-primary mt-2" data-swiper-animation="fadeInUp" data-duration="2.5s" data-delay="0.25s" to="/services">Подробнее</Link>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Pagination */}
                <div className="swiper-button-prev" tabIndex="0" role="button" aria-label="Previous slide"><i className="fas fa-chevron-left"></i>
                </div>
                <div className="swiper-button-next" tabIndex="0" role="button" aria-label="Next slide"><i className="fas fa-chevron-right"></i></div>
            </div>

            <div className="space-ptb space-ptb-min">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 col-md-10 col-mp ">
                            <div className="text-center col-mp">
                                <h2 className="title">Консультации</h2>
                                <p className="lead"> Астролог нe предсказывает, а опираясь на сложный математический аппарат, консультирует клиента по возникающим вопросам в его жизни, помогает, опираясь на важные показатели в его карте, найти точку опоры, почувствовать уверенность в себе и разобраться как действовать в тех или иных жизненных ситуациях.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div><Pagination></Pagination></div>

            {/*================================== Service */}

            {/*================================== About */}
            <div className="space-sm-pt bg-light about-half-overlay half-overlay left-position position-relative">
                <div className="container">
                    <div className="row align-items-end align-items-lg-center">
                        <div className="col-md-6 order-md-3">
                            <div className="section-title mb-0">
                                <h2 className="title">Астролог Ирина <br></br> <span className="text-primary title">15 лет </span> успешной работы</h2>
                                <p className="lead mb-6">Давайте знакомиться! Хочу рассказать о себе, своей семье, о том что сподвигло меня заниматься данным видом деятельности, успехах и достижениях в этой области!  </p>
                                <Link className="btn-link" to="/personality" >Читать больше <i className="fas fa-chevron-right pl-2" ></i></Link>
                            </div>
                        </div>
                        <div className="col-md-4 order-md-1">
                            <img className="img-fluid" src={about1} alt="" />
                        </div>
                    </div>
                </div>
            </div>

            <div><Contacts></Contacts></div>

            {/*================================== Step */}
            <div className="space-ptb">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10 col-md-12 ">
                            <div className="div-title text-center">
                                <h2 className="title h2-mg">С чего начать!</h2>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-lg-12">
                                <ul className="feature-step-list mt-3">
                                    {Start.map(start =>
                                        <li key={start.id}>
                                            <div className="feature-step text-center">
                                                <div className="feature-step-divider">
                                                    <div className="feature-step-icon">
                                                        <span className="feature-step-number">{start.num}</span>
                                                        <i className={start.icon}></i>
                                                    </div>
                                                </div>
                                                <div className="feature-info-content">
                                                    <h4 className="feature-info-title">{start.title}</h4>
                                                    <p className="mb-0">{start.text}</p>
                                                </div>
                                            </div>
                                        </li>
                                    )};
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*================================== Step */}


            {/*================================== Testimonial */}
            <div className="space-sm-pb space-ptb-app">
                <div className="container">
                    <div className="row m-0 justify-content-center">
                        <div className="col-md-12">

                            <div className="owl-carousel testimonial-center owl-nav-dots-bottom-center" data-nav-arrow="false" data-nav-dots="true" data-items="1" data-md-items="1" data-sm-items="1" data-xs-items="1" data-xx-items="1" data-space="0" data-autoheight="true">
                                {Reviews.map(reviews =>
                                    <div key={reviews.id} className="item">
                                        <div className="testimonial">
                                            <div className="avatar avatar-md">
                                                <img className="img-fluid " src={reviews.image} alt="" />
                                            </div>
                                            <div className="testimonial-info">
                                                <div className="testimonial-quote">
                                                    <i className="flaticon-quote"></i>
                                                </div>
                                                <div className="testimonial-content">
                                                    {reviews.text}
                                                </div>
                                                <div className="testimonial-name">
                                                    <h6>{reviews.name}</h6>
                                                    <span className="text-muted">{reviews.profession}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )};
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*================================== Testimonial */}

            <div><CarouselBlog></CarouselBlog></div>
            <div><FooterList></FooterList></div >
        </div >
    )
};