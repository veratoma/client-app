import React from 'react';
import { Link } from 'react-router-dom';
import { ServData } from '../../Data/ServicesData';
import '../../scss/style.scss';


export const FooterList = () => {

    return (
        <div>
            <footer className="footer space-sm-pt bg-dark">
                <div className="container">
                    <div className="row row-new">
                        <div className="col-lg-3 col-md-6">
                            <div className="footer-link">
                                <h5 className="text-primary">Услуги</h5>
                                <ul className="list-unstyled mb-0">
                                    {ServData
                                        .slice(0, 5)
                                        .map(service =>
                                            <li key={service.id}>
                                                <Link to={"/services/" + service.link}>{service.text} </Link> <br />
                                            </li>
                                        )}
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 mt-4 mt-lg-0">
                            <div className="footer-contact-info">
                                <h5 className="text-primary">Контактная информация</h5>
                                <ul className="list-unstyled mb-0">
                                    <li><i className="fas fa-fw fa-map-marker-alt text-primary"></i><span>г. Москва</span></li>
                                    <li><i className="far fa-fw fa-envelope text-primary"></i><span>levirina123@gmail.com</span></li>
                                    <li><i className="fas fa-fw fa-phone-alt text-primary"></i><a href="tel:=+7916391019"><span>+7(916)339-10-19</span></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mt-4 mt-lg-0">
                            <div className="opening-time">
                                <h5 className="text-primary">Время приема звонков и сообщений</h5>
                                <ul className="list-unstyled">
                                    <li>Понедельник-Пятница<span className="float-right theme-color">10-00 до 20-00</span></li>
                                    <li>Суббота<span className="float-right theme-color">10-00 до 14-00</span></li>
                                    <li>Воскресенье <span className="float-right theme-color">Выходной</span></li>
                                    <li>Праздничные дни<span className="float-right theme-color">Выходной</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="footer-bottom">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-md-6 text-center copyright text-md-left mb-3 mb-md-0">
                                <p className="mb-0 text-white"> &copy; Copyright <span id="copyright"> </span> Все права защищены </p>
                            </div>
                            <div className="col-md-6 text-center text-md-right">
                                <div className="social-icon">
                                    <ul>
                                        <li><a href="https://ru-ru.facebook.com//lrina.levandovskaya"><i className="fab fa-facebook-f"></i></a></li>
                                        <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                        <li><a href="https://www.instagram.com/lrina.levandovskaya"><i className="fab fa-instagram"></i></a></li>
                                      
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </footer >

            <div id="back-to-top" className="back-to-top back-to-top-home">Вверх</div>
        </div>

    )
};
