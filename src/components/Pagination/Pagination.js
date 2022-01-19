import React from 'react';
import { ServData } from '../../Data/ServicesData';
import { Link } from 'react-router-dom';
import '../../scss/style.scss';

export const Pagination = () => {
    return (
        <div>
            <div className="space-ptb">
                <div className="container ">

                    <div className="row ">
                        <div className="col-lg-12">
                            <div className="owl-carousel owl-nav-bottom-center" data-nav-dots="true" data-nav-arrow="false" data-items="3" data-md-items="3" data-sm-items="2" data-xs-items="1" data-space="30" data-autoheight="true">

                                {ServData.map(pagination =>
                                    <div key={pagination.id} className="item">
                                        <div className="service-style-01">
                                            <img className="img-fluid" src={
                                                pagination.image} alt="" />
                                            <div className="service-title">
                                                <i className={pagination.icon}></i>
                                                <Link to={"/services/" + pagination.link}>{pagination.text} </Link>

                                            </div>
                                        </div>
                                    </div>
                                )}

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};