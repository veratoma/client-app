
import React from 'react';
import {
  Link
} from "react-router-dom";
import { Contact } from '../../Data/ServicesData';


import '../../scss/style.scss';


export const MenuList = (props) => {
  return (
    <div>

      <header className="header">
        {/* Topbar */}
        <div className="topbar">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="d-block d-md-flex align-items-center text-center">
                  <div className="mr-3 d-inline-block">
                    <a href={"mailto:" + Contact.email}><i className="far fa-envelope mr-2 fa-flip-horizontal"></i>{Contact.email}</a>
                  </div>
                  <div className="mr-auto d-inline-block">
                    <a href={"tel:" + Contact.tel}><i className="fa fa-phone mr-2 fa fa-flip-horizontal"></i>{Contact.tel}</a>
                  </div>
                  <div className="social d-inline-block">
                    <ul className="list-unstyled">
                      <li><a href="https://ru-ru.facebook.com//lrina.levandovskaya"><i className="fab fa-facebook-f"></i></a></li>
                      <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                      <li><a href="https://www.instagram.com/lrina.levandovskaya"><i className="fab fa-instagram"></i></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Topbar */}

        {/* Nav */}
        <nav className="navbar navbar-static-top navbar-expand-lg header-sticky">
          <div className="container">
            <button type="button" className="navbar-toggler" data-toggle="collapse" data-target=".navbar-collapse"><i className="fas fa-align-left"></i></button>
            <a className="navbar-brand" href="index.html">
            <img />
          </a>
            <div className="navbar-collapse collapse justify-content-center">
              <ul className="nav navbar-nav">
                <li className="nav-item dropdown active">
                  <Link className="nav-link dropdown-toggle" id="navbarDropdo#wn"  to="/">Главная</Link>

                </li>
                <li className="dropdown nav-item">
                  <Link className="nav-link dropdown-toggle" to="../services">Услуги</Link>

                </li>
                <li className="dropdown nav-item">
                  <Link className="nav-link dropdown-toggle" to="../blog">Блог</Link>
                </li>
                <li className="nav-item dropdown">
                  <Link className="nav-link dropdown-toggle" to="../personality">Обо мне</Link>

                </li>
                
              </ul>
            </div>
          </div>
        </nav>

      </header>
    </div>
  )
};