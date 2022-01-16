import React from 'react';
import { Contact } from '../../Data/ServicesData';
import '../../scss/style.scss';


export const Contacts = () => {

    return (
        <div>
            <div className="space-ptb bg-holder bg-overlay-black-70 slide-bg-18">
                <div className="container">
                    <div className="row justify-content-center ">
                        <div className="col-lg-6 col-md-10 " >
                            <div className="position-relative text-center ">
                                <i className="flaticon-call text-primary display-6"></i>
                                <h4 className="text-white font-weight-normal mb-5 mt-4">
                                    <span className="d-block d-block-marg">
                                        Телефон:  <a href={"tel:" + Contact.tel} className="text-primary">{Contact.tel}</a>
                                    </span>
                                    <span>
                                        Email:  <a href={"mailto:" + Contact.email}>{Contact.email}</a>
                                    </span>
                                </h4>
                                <a href={"tel:" + Contact.tel} className="btn btn-primary">Позвонить</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};