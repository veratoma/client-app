import React from 'react';
import '../../scss/style.scss'
import { MenuList } from '../../components/MenuList/MenuList';
import { FooterList } from '../../components/FooterList/FooterList';
import { MiniBanner } from '../../components/MiniBanner/MiniBanner';
import { Contact, ServData } from '../../Data/ServicesData';
import {
    Link
} from "react-router-dom";





export function Services(props) {

    return (

        <div>
            <MenuList></MenuList>
            <MiniBanner title={'Услуги'}></MiniBanner>
            <div>
                <div className="space-pt space-sm-pb">
                    <div className="container">
                        <div className="row justify-content-center ">
                            <div className="col-lg-8 col-md-10 ">
                                <div className="section-title text-center">
                                    <h2 className="title">Услуги</h2>
                                    <p className="lead">Консультации у астролога - услуга, востребованная у многих. К сожалению, мало кто из посетителей знает о всех возможностях астрологии, часто путая её с магией или гаданием. Другая часть клиентов обращается к астрологу лишь из-за любопытства. И совсем малый процент людей действительно понимают ценность консультации и пользу, которую они могут получить!</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">

                            {ServData.map(service =>

                                <div key={service.id} className="col-lg-4 col-md-6">
                                    <div className="service-style-01 mb-4">
                                        <img className="img-fluid" src={service.image} alt="" />
                                        <div className="service-title">
                                            <i className={service.icon}></i>
                                            <Link to={service.link}>{service.text} </Link>

                                        </div>
                                    </div>

                                </div>
                            )
                            }


                        </div >
                    </div >
                </div >

                <div>
                    <div className="space-sm-ptb bg-primary">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-6 col-md-10 text-center">
                                    <div className="section-title">
                                        <h2 className="title text-white">Позвоните сейчас!</h2>
                                        <i className="flaticon-call display-6 text-white"></i>
                                        <a href={"tel:" + Contact.tel}>  <p className="lead text-white lead-services text-hover">{Contact.tel}</p></a>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>

                {/* Step --> */}
                <div className="space-ptb">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-10 col-md-12 ">
                                <div className="section-title text-center">
                                    <h2 className="title">Что такое астрология!</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <ul className="feature-step-list mt-3">
                                    {/* <!-- Feature-Step-01 START --> */}
                                    <li>
                                        <div className="feature-step text-center">
                                            <div className="feature-step-divider">
                                                <div className="feature-step-icon">
                                                    <span className="feature-step-number">1</span>
                                                    <i className="flaticon-smartphone"></i>
                                                </div>
                                            </div>
                                            <div className="feature-info-content">
                                                <h4 className="feature-info-title">Натальная  <br /> астрология </h4>
                                                <p className="mb-0">Дословно астрология рождения — один из главных разделов астрологии, занимающийся прогнозированием судьбы человека по гороскопу, составленному на место и время рождения человека. Натальная астрология отвечает на вопрос об общих тенденциях судьбы, позволяет определить круг событий, которые могут произойти с человеком, и круг событий, которые не могут быть никогда. </p>
                                            </div>
                                        </div>
                                    </li>
                                    {/* <!-- Feature-Step-01 END --> */}

                                    {/* <!-- Feature-Step-02 START --> */}
                                    <li>
                                        <div className="feature-step text-center">
                                            <div className="feature-step-divider">
                                                <div className="feature-step-icon">
                                                    <span className="feature-step-number">2</span>
                                                    <i className="flaticon-mail"></i>
                                                </div>
                                            </div>
                                            <div className="feature-info-content">
                                                <h4 className="feature-info-title">Предсказательная астрология</h4>
                                                <p className="mb-0">Раздел астрологии, посвящённый событиям в жизни человека для заданного отрезка времени. Основным рабочим материалом предсказательной астрологии являются прогрессивные гороскопы — гороскопы, составленные по особым правилам относительно натального гороскопа и призванные описать события в жизни человека в тот или иной период жизни (обычно год). </p>
                                            </div>
                                        </div>
                                    </li>
                                    {/* <!-- Feature-Step-02 END --> */}

                                    {/* <!-- Feature-Step-03 START --> */}
                                    <li>
                                        <div className="feature-step text-center">
                                            <div className="feature-step-divider">
                                                <div className="feature-step-icon">
                                                    <span className="feature-step-number">3</span>
                                                    <i className="flaticon-like"></i>
                                                </div>
                                            </div>
                                            <div className="feature-info-content">
                                                <h4 className="feature-info-title">Синастрическая астрология</h4>
                                                <p className="mb-0">Дословно «астрология совмещённых звёзд» — раздел астрологии, изучающий взаимодействие двух натальных гороскопов различных субъектов для изучения отношений между ними. Основным методом синастрического анализа является изучение синастрического гороскопа, получаемого путём перенесения элементов натального гороскопа одного субъекта в натальный гороскоп другого субъекта. </p>
                                            </div>
                                        </div>
                                    </li>
                                    {/* <!-- Feature-Step-03 END --> */}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Step --> */}

                <FooterList></FooterList>

            </div >
        </div>
    )
};