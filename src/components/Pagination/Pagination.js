import React from 'react';
import service1 from '../../images/service/01.jpg'
import service2 from '../../images/service/02.jpg'
import service3 from '../../images/service/03.jpg'
import service4 from '../../images/service/04.jpg'
import service5 from '../../images/service/05.jpg'
import service6 from '../../images/service/06.jpg'
import service7 from '../../images/service/07.jpg'
import service8 from '../../images/service/08.jpg'
import service9 from '../../images/service/09.jpg'
import service10 from '../../images/service/10.jpg'
import service12 from '../../images/service/12.jpg'
import service13 from '../../images/service/13.jpg'

export const Pagination = () => {
    return (
        <div className="space-ptb">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8 col-md-10 ">
                        <div className="section-title text-center">
                            <h2 className="title">Консультации</h2>
                            <p className="lead"> Астролог нe предсказывает, а опираясь на сложный математический аппарат, консультирует клиента по возникающим вопросам в его жизни, помогает, опираясь на важные показатели в его карте, найти точку опоры, почувствовать уверенность в себе и разобраться как действовать в тех или иных жизненных ситуациях.</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="owl-carousel owl-nav-bottom-center" data-nav-dots="true" data-nav-arrow="false" data-items="3" data-md-items="3" data-sm-items="2" data-xs-items="1" data-space="30" data-autoheight="true">
                            <div className="item">
                                <div className="service-style-01">
                                    <img className="img-fluid" src={service1} alt="" />
                                    <div className="service-title">
                                        <i className="flaticon-idea"></i>
                                        <a href="service-detail.html">Вопрос-ответ</a>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="service-style-01">
                                    <img className="img-fluid" src={service2} alt="" />
                                    <div className="service-title">
                                        <i className="flaticon-help"></i>
                                        <a href="service-detail.html">Индивидуальная консультация</a>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="service-style-01">
                                    <img className="img-fluid" src={service3} alt="" />
                                    <div className="service-title">
                                        <i className="flaticon-portfolio"></i>
                                        <a href="service-detail.html">Прогноз на год</a>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="service-style-01">
                                    <img className="img-fluid" src={service4} alt="" />
                                    <div className="service-title">
                                        <i className="flaticon-passion"></i>
                                        <a href="service-detail.html">Гороскоп совместимости</a>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="service-style-01">
                                    <img className="img-fluid" src={service6} alt="" />
                                    <div className="service-title">
                                        <i className="flaticon-startup"></i>
                                        <a href="service-detail.html">Способности ребенка</a>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="service-style-01">
                                    <img className="img-fluid" src={service7} alt="" />
                                    <div className="service-title">
                                        <i className="flaticon-tree"></i>
                                        <a href="service-detail.html">Зачатие и деторождение</a>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="service-style-01">
                                    <img className="img-fluid" src={service8} alt="" />
                                    <div className="service-title">
                                        <i className="flaticon-staff"></i>
                                        <a href="service-detail.html">Профориентация школьника</a>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="service-style-01">
                                    <img className="img-fluid" src={service5} alt="" />
                                    <div className="service-title">
                                        <i className="flaticon-icon-554744"></i>
                                        <a href="service-detail.html">Отношения с партнером</a>
                                    </div>
                                </div>
                            </div>

                            <div className="item">
                                <div className="service-style-01">
                                    <img className="img-fluid" src={service10} alt="" />
                                    <div className="service-title">
                                        <i className="flaticon-charity"></i>
                                        <a href="service-detail.html">Удачные дни для свадьбы</a>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="item">
                                <div className="service-style-01">
                                    <img className="img-fluid" src={service9} alt="" />
                                    <div className="service-title">
                                        <i className="flaticon-global"></i>
                                        <a href="service-detail.html">Благоприятные дни для путешествий</a>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="service-style-01">
                                    <img className="img-fluid" src={service13} alt="" />
                                    <div className="service-title">
                                        <i className="flaticon-research"></i>
                                        <a href="service-detail.html">Анализ группы</a>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="service-style-01">
                                    <img className="img-fluid" src={service12} alt="" />
                                    <div className="service-title">
                                        <i className="flaticon-like"></i>
                                        <a href="service-detail.html">Общий помесячный прогноз на год </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>)
};