import React from 'react';
 import '../../scss/style.scss';

import about1 from '../../images/about/01.png';
import avatar1 from '../../images/avatar/01.jpg';
import avatar2 from '../../images/avatar/02.jpg';
import avatar3 from '../../images/avatar/03.jpg';
import blog1 from '../../images/blog/01.jpg';
import blog2 from '../../images/blog/02.jpg';
import blog3 from '../../images/blog/03.jpg';
import blog4 from '../../images/blog/04.jpg';
import blog5 from '../../images/blog/05.jpg';
import blog6 from '../../images/blog/06.jpg';
import { MenuList } from '../../components/MenuList/MenuList';
import { FooterList} from '../../components/FooterList/FooterList';
import { Pagination } from '../../components/Pagination/Pagination';
import { Link } from 'react-router-dom';
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
                                                <h6 className="animated text-primary  mb-4" data-swiper-animation="fadeInUp" data-duration="1.5s" data-delay="0.25s">— Добро пожаловать на сайт Psycare</h6>
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
                                <Link className="btn-link" to="/" >Читать больше <i className="fas fa-chevron-right pl-2" ></i></Link>
                            </div>
                        </div>
                        <div className="col-md-4 order-md-1">
                            <img className="img-fluid" src={about1} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            {/*================================== About */}

            {/*================================== Action-box */}
            <div>
                <div className="container-fuild p-0">
                    <div className="row no-gutters">
                        <div className="col-md-6 bg-dark d-flex justify-content-center align-items-center text-center p-xl-6 p-lg-5 p-4">
                            <div className="position-relative px-xl-6">
                                <i className="flaticon-call text-primary display-6"></i>
                                <h4 className="text-white font-weight-normal mb-5 mt-4">
                                    <span className="d-block text-primary">+7(916)339-10-19 </span>
                                </h4>
                                <a href="tel:=+79163391019" className="btn btn-primary">Позвонить</a>
                            </div>
                        </div>

                        <div className="col-md-6 text-center bg-primary p-xl-6 p-lg-5 p-4">
                            <div className="blockquote-quote">
                                <i className="flaticon-quote"></i>
                                <div>
                                    <p className="lead mb-5 lead-text">"Планеты – это знаки препинания, которые бог расставляет в предложениях человеческих судеб, записанных в созвездиях" </p>
                                </div>
                            </div>
                            <div className="blockquote-content">

                                <div className="author-signature mt-3">
                                    <p className="lead mb-0 lead-name">- Джеймс Лендалл Басфорд, американский писатель, астролог, часовщик и ювелир. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*================================== Action-box */}

            {/*================================== Step */}
            <div className="space-ptb">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10 col-md-12 ">
                            <div className="div-title text-center">
                                <h2 className="title">С чего начать!</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <ul className="feature-step-list mt-3">
                                <li>
                                    <div className="feature-step text-center">
                                        <div className="feature-step-divider">
                                            <div className="feature-step-icon">
                                                <span className="feature-step-number">1</span>
                                                <i className="flaticon-icon-992595"></i>
                                            </div>
                                        </div>
                                        <div className="feature-info-content">
                                            <h4 className="feature-info-title">Решение</h4>
                                            <p className="mb-0">Решить какой вопрос вы хотите проработать, даже если его нет в озвученном на сайте списке услуг, это может быть любая тема или ряд мелких ситуаций требующих решения!</p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="feature-step text-center">
                                        <div className="feature-step-divider">
                                            <div className="feature-step-icon">
                                                <span className="feature-step-number">2</span>
                                                <i className="flaticon-mail"></i>
                                            </div>
                                        </div>
                                        <div className="feature-info-content">
                                            <h4 className="feature-info-title">Обращение</h4>
                                            <p className="mb-0">Написать на электронную почту, позвонить или же связаться через  любой мессенджер (WhatsApp, Telegram, Instagram....) Для получения любого астрологического прогноза вам необходимо указать дату и точное время рождения!  </p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="feature-step text-center">
                                        <div className="feature-step-divider">
                                            <div className="feature-step-icon">
                                                <span className="feature-step-number">3</span>
                                                <i className="flaticon-love-letter"></i>
                                            </div>
                                        </div>
                                        <div className="feature-info-content">
                                            <h4 className="feature-info-title">Ответ</h4>
                                            <p className="mb-0">Вы получите развернутое описание на ваш запрос с наилучшими способами решения тех или иных задач в любой удобной для вас форме!</p>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {/*================================== Step */}





            {/*================================== Contact */}
            <div className="space-lg-ptb bg-light half-overlay left-position position-relative">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6 mb-md-0 mb-4">
                            <div className="position-relative z-index-9 mr-md-3">
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="div-title">
                                <h2 className="title">Давайте начнем диалог!</h2>
                                <p className="lead">Если вам нужна какая-либо помощь, у вас есть вопрос или вы хотели бы обсудить решение, которое вы уже приняли, но не решаетесь озвучить. Я буду рада разобрать ситуацию и оказать максимальную поддержку!</p>
                            </div>
                            <form>
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <input type="text" className="form-control" id="name" placeholder="Имя" />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <input type="email" className="form-control" id="inputEmai" placeholder="Email" />
                                    </div>

                                    <div className="form-group col-md-12">
                                        <textarea className="form-control" rows="4" placeholder="Сообщение"></textarea>
                                    </div>
                                    <div className="col-md-12">
                                        <a className="btn btn-primary" href="#">Отправить</a>
                                    </div>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
            {/*================================== Contact */}

            {/*================================== Testimonial */}
            <div className="space-sm-pb space-pt">
                <div className="container">
                    <div className="row m-0 justify-content-center">
                        <div className="col-md-12">
                            {/* owl-carousel */}
                            <div className="owl-carousel testimonial-center owl-nav-dots-bottom-center" data-nav-arrow="false" data-nav-dots="true" data-items="1" data-md-items="1" data-sm-items="1" data-xs-items="1" data-xx-items="1" data-space="0" data-autoheight="true">
                                {/* item-01 START */}
                                <div className="item">
                                    <div className="testimonial">
                                        <div className="avatar avatar-md">
                                            <img className="img-fluid " src={avatar1} alt="" />
                                        </div>
                                        <div className="testimonial-info">
                                            <div className="testimonial-quote">
                                                <i className="flaticon-quote"></i>
                                            </div>
                                            <div className="testimonial-content">
                                                I don't always clop, but when I do, it's because of Psycare. Web service saved my business. This is simply unbelievable!
                                            </div>
                                            <div className="testimonial-name">
                                                <h6>Alice Williams</h6>
                                                <span className="text-muted">- Manager</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* item-01 END */}

                                {/* item-02 START */}
                                <div className="item">
                                    <div className="testimonial">
                                        <div className="avatar avatar-md">
                                            <img className="img-fluid " src={avatar2} alt="" />
                                        </div>
                                        <div className="testimonial-info">
                                            <div className="testimonial-quote">
                                                <i className="flaticon-quote"></i>
                                            </div>
                                            <div className="testimonial-content">
                                                We can't understand how we've been living without Psycare. I don't know what else to say. Definitely worth the investment.
                                            </div>
                                            <div className="testimonial-name">
                                                <h6>Mellissa Doe</h6>
                                                <span className="text-muted">- Marketing Expert</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* item-02 END */}

                                {/* item-03 START */}
                                <div className="item">
                                    <div className="testimonial">
                                        <div className="avatar avatar-md">
                                            <img className="img-fluid " src={avatar3} alt="" />
                                        </div>
                                        <div className="testimonial-info">
                                            <div className="testimonial-quote">
                                                <i className="flaticon-quote"></i>
                                            </div>
                                            <div className="testimonial-content">
                                                I don't always clop, but when I do, it's because of Psycare. Web service saved my business. This is simply unbelievable!
                                            </div>
                                            <div className="testimonial-name">
                                                <h6>Michael Bean</h6>
                                                <span className="text-muted">- Team Leader</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* item-03 END */}
                            </div>
                            {/* owl-carousel */}
                        </div>
                    </div>
                </div>
            </div>
            {/*================================== Testimonial */}



            {/* blog --> */}
            <section className="space-pb">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 col-md-10">
                            <div className="section-title text-center">
                                <h2>Последние новости и вдохновляющие истории</h2>
                                <p className="lead">Ознакомьтесь с  последними сообщениями в блоге, статьями и важными объявлениями</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            {/* <!-- owl-carousel --> */}
                            <div className="owl-carousel owl-nav-bottom-center" data-nav-dots="true" data-nav-arrow="false" data-items="3" data-md-items="2" data-sm-items="2" data-xs-items="1" data-space="30" data-autoheight="true">
                                {/* <!-- Blog-post-01 START --> */}
                                <div className="item">
                                    <div className="blog-post">
                                        <div className="blog-post-image">
                                            <img className="img-fluid" src={blog1} alt="" />
                                        </div>
                                        <div className="blog-post-content blog-post-content-height">
                                            <div className="blog-post-info">
                                                <div className="blog-post-author">
                                                    <a href="#"><i className="far fa-user-circle"></i>Harry Russell</a>
                                                </div>
                                                <div className="blog-post-date"><i className="far fa-clock"></i>Oct 06, 2020</div>
                                                <div className="blog-post-comment">
                                                    <a href="#"><i className="far fa-comment"></i>(12)</a>
                                                </div>
                                            </div>
                                            <h6 className="blog-post-title"><a href="blog-detail.html">Пять способов стать счастливее прямо сейчас</a></h6>
                                            <p className="mb-0">Есть простой способ дать мозгу новую пищу для размышлений: прямо сейчас сделайте паузу и подумайте о чем-то хорошем.</p>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- Blog-post-01 END --> */}

                                {/* <!-- Blog-post-02 START --> */}
                                <div className="item">
                                    <div className="blog-post">
                                        <div className="blog-post-image">
                                            <img className="img-fluid" src={blog2} alt="" />
                                        </div>
                                        <div className="blog-post-content blog-post-content-height">
                                            <div className="blog-post-info">
                                                <div className="blog-post-author">
                                                    <a href="#"><i className="far fa-user-circle"></i> Sara lisbon </a>
                                                </div>
                                                <div className="blog-post-date"><i className="far fa-clock"></i>Oct 15, 2020</div>
                                                <div className="blog-post-comment">
                                                    <a href="#"><i className="far fa-comment"></i>(12)</a>
                                                </div>
                                            </div>
                                            <h6 className="blog-post-title"><a href="blog-detail.html">Психотипы личности</a></h6>
                                            <p className="mb-0">Многие люди, в том числе семейные пары часто жалуются на взаимное непонимание. Но, чтобы хорошо понимать других и даже близких, нам, для начала, следует научиться понимать себя.</p>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- Blog-post-02 END --> */}

                                {/* <!-- Blog-post-03 START --> */}
                                <div className="item">
                                    <div className="blog-post">
                                        <div className="blog-post-image">
                                            <img className="img-fluid" src={blog3} alt="" />
                                        </div>
                                        <div className="blog-post-content blog-post-content-height">
                                            <div className="blog-post-info">
                                                <div className="blog-post-author">
                                                    <a href="#"><i className="far fa-user-circle"></i> Sara lisbon </a>
                                                </div>
                                                <div className="blog-post-date"><i className="far fa-clock"></i>Oct 20, 2020</div>
                                                <div className="blog-post-comment">
                                                    <a href="#"><i className="far fa-comment"></i>(12)</a>
                                                </div>
                                            </div>
                                            <h6 className="blog-post-title"><a href="blog-detail.html">Скидка 30% </a></h6>
                                            <p className="mb-0">У меня для вас прекрасное предложение. Скидка 30% на повторную консультацию! большая часть моих клиентов к моей большой радости возвращается ко мне для решения других вопросов!</p>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- Blog-post-03 END --> */}

                                {/* <!-- Blog-post-04 START --> */}
                                <div className="item">
                                    <div className="blog-post">
                                        <div className="blog-post-image">
                                            <img className="img-fluid" src={blog4} alt="" />
                                        </div>
                                        <div className="blog-post-content blog-post-content-height">
                                            <div className="blog-post-info">
                                                <div className="blog-post-author">
                                                    <a href="#"><i className="far fa-user-circle"></i> Sara lisbon </a>
                                                </div>
                                                <div className="blog-post-date"><i className="far fa-clock"></i>Nov 06, 2020</div>
                                                <div className="blog-post-comment">
                                                    <a href="#"><i className="far fa-comment"></i>(12)</a>
                                                </div>
                                            </div>
                                            <h6 className="blog-post-title"><a href="blog-detail.html">How Google’s BERT Algorithm...</a></h6>
                                            <p className="mb-0">Franklin can up with a method to grade himself on his daily actions. In a journal he drew a table.</p>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- Blog-post-04 END --> */}

                                {/* <!-- Blog-post-05 START --> */}
                                <div className="item">
                                    <div className="blog-post">
                                        <div className="blog-post-image">
                                            <img className="img-fluid" src={blog5} alt="" />
                                        </div>
                                        <div className="blog-post-content blog-post-content-height">
                                            <div className="blog-post-info">
                                                <div className="blog-post-author">
                                                    <a href="#"><i className="far fa-user-circle"></i> Sara lisbon </a>
                                                </div>
                                                <div className="blog-post-date"><i className="far fa-clock"></i>Nov 10, 2020</div>
                                                <div className="blog-post-comment">
                                                    <a href="#"><i className="far fa-comment"></i>(12)</a>
                                                </div>
                                            </div>
                                            <h6 className="blog-post-title"><a href="blog-detail.html">Five reasons why you must...</a></h6>
                                            <p className="mb-0">The other virtues practice in succession by Franklin were silence, order, resolution, frugality, industry.</p>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- Blog-post-05 END -->

        <!-- Blog-post-06 START --> */}
                                <div className="item">
                                    <div className="blog-post">
                                        <div className="blog-post-image">
                                            <img className="img-fluid" src={blog6} alt="" />
                                        </div>
                                        <div className="blog-post-content blog-post-content-height">
                                            <div className="blog-post-info">
                                                <div className="blog-post-author">
                                                    <a href="#"><i className="far fa-user-circle"></i> Sara lisbon </a>
                                                </div>
                                                <div className="blog-post-date"><i className="far fa-clock"></i>Dec 07, 2020</div>
                                                <div className="blog-post-comment">
                                                    <a href="#"><i className="far fa-comment"></i>(12)</a>
                                                </div>
                                            </div>
                                            <h6 className="blog-post-title"><a href="blog-detail.html">Five initial steps you must...</a></h6>
                                            <p className="mb-0">In order to do the work thoroughly he decided to attempt each virtue and a quarter of its importance.</p>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- Blog-post-06 END --> */}
                            </div>
                            {/* <!-- owl-carousel --> */}
                        </div>
                    </div>
                </div>
            </section>

            
            {/* <!--=================================
blog --> */}




<FooterList></FooterList>

        </div >


    )
};