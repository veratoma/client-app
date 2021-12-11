import React from 'react';
import { MenuList } from '../../components/MenuList/MenuList';
import { FooterList } from '../../components/FooterList/FooterList';
import { MiniBanner } from '../../components/MiniBanner/MiniBanner';
import { Contact } from '../../Data/ServicesData';
import { Pagination } from '../../components/Pagination/Pagination';

export const Personality = (props) => {
    return (

        <div>
            <MenuList></MenuList>
            <MiniBanner title={'Обо Мне'}></MiniBanner>

            <div className="space-ptb">
                <div className="container">
                    <div className="row row-service">
                        <div className="col-lg-8 pl-lg-4 ">
                            <div>
                                <div className="mb-4 mb-md-5 ">
                                    <h4 className="mb-4">Здравствуйте! Меня зовут Ирина!</h4>
                                    <p>Хочу рассказать мою историю становления как астролога, мои достижения и возможности в этой сфере</p>
                                </div>

                                <div class="col-lg-6 mt-lg-0 mt-md-5 mt-4">
                                    <div class="list">
                                        <ul>
                                            <li><i class="fas fa-chevron-right"></i>Success isn’t really that difficult.</li>
                                            <li><i class="fas fa-chevron-right"></i>The first thing to remember about success</li>
                                            <li><i class="fas fa-chevron-right"></i>There are basically six key areas to higher...</li>
                                            <li><i class="fas fa-chevron-right"></i>believing in yourself and those around you.</li>
                                            <li><i class="fas fa-chevron-right"></i>If success is a process with a number...</li>
                                            <li><i class="fas fa-chevron-right"></i>We all know that nothing moves until someone...</li>
                                            <li><i class="fas fa-chevron-right"></i>This is a fundamental step, which most people...</li>
                                            <li><i class="fas fa-chevron-right"></i>Having clarity of purpose and a clear picture...</li>
                                        </ul>
                                    </div>


                                </div>

                                <div class="mt-4 mt-md-5">
                                    <h4 class="mb-4">We all carry a lot of baggage, thanks to our upbringing. The majority of people carry with them, an entire series.</h4>
                                    <p class="mb-0">We all carry a lot of baggage, thanks to our upbringing. The majority of people carry with them, an entire series of self-limiting beliefs that will absolutely stop, and hold them back from, success. Things like “I’m not good enough”, “I’m not smart enough”, “I’m not lucky enough”, and the worst, “I’m not worthy” are but a few of the self-limiting beliefs I have encountered. We carry them with us like rocks in a knapsack, and then use them to sabotage our success. So, how twisted is that?</p>
                                </div>


                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div><Pagination></Pagination></div>
            <section class="space-ptb space-ptb-app">
                <div class="container">
                    <div class="row justify-content-center mb-5">
                        <div class="col-lg-6 col-md-10">
                            <div class="section-title text-center">
                                <h2 class="title">Обратная связь</h2>
                                <p class="lead">«Когда я не могу управлять событиями, я предоставляю им самим управлять собой…»</p>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-4">

                            <div class="feature-item feature-item-shadow text-center">
                                <div class="feature-item-icon">
                                    <i class="flaticon-pin"></i>
                                </div>
                                <div class="feature-item-content">
                                    <h4 class="feature-item-title">Адрес</h4>
                                    <span class="text-primary">Россия, г. Москва</span>
                                </div>
                            </div>

                        </div>
                        <div class="col-md-4">

                            <div class="feature-item feature-item-shadow text-center">
                                <div class="feature-item-icon">
                                    <i class="flaticon-phone"></i>
                                </div>
                                <div class="feature-item-content">
                                    <h4 class="feature-item-title">Телефон</h4>
                                    <span ><a href={"tel:" + Contact.tel} className="text-primary">{Contact.tel}</a></span>

                                </div>
                            </div>

                        </div>
                        <div class="col-md-4">

                            <div class="feature-item feature-item-shadow text-center mb-0">
                                <div class="feature-item-icon">
                                    <i class="flaticon-message"></i>
                                </div>
                                <div class="feature-item-content">
                                    <h4 class="feature-item-title">Email</h4>
                                    <span><a href={"mailto:" + Contact.email}>{Contact.email}</a></span>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            <FooterList></FooterList>
        </div>

    )
};

