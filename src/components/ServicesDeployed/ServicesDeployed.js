import React from 'react';
import '../../scss/style.scss';
import { Contacts } from '../Contacts/Contacts';

export const ServicesDeployed = (props) => {

    const deployed = props.service

    return (
        <div>
            <div className="space-ptb">
                <div className="container">
                    <div className="row row-service">
                        <div className="col-lg-8 pl-lg-4 ">
                            <div>
                                <div className="mb-4 mb-md-5 ">
                                    <h4 className="mb-4">{deployed.title}</h4>
                                    <p>{deployed.decryption}</p>
                                </div>

                                <div>
                                    <h4 className=" mt-4 mt-md-5 text-primary">
                                        Стоимость услуги: <span className="span-price"> {deployed.price} </span></h4>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div><Contacts></Contacts></div>



            <div className="space-ptb slide-bg-17" >
                <div className="container">
                    <div className="row justify-content-start">
                        <div className="col-xl-9 col-lg-10 col-md-12">
                            <div className="section-title">
                                <h2>Why Choose Us</h2>
                            </div>
                            <div className="accordion" id="accordion-faq">

                                <div className="card">
                                    <div className="accordion-icon card-header" id="headingOne">
                                        <h4 className="mb-0">
                                            <button className="btn" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                How can I use this success to make a difference for others?
                                            </button>
                                        </h4>
                                    </div>
                                    <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion-faq">
                                        <div className="card-body">
                                            Introspection is the trick. Understand what you want, why you want it and what it will do for you. This is a critical factor, and as such, is probably the most difficult step.
                                        </div>
                                    </div>
                                </div>



                                <div className="card">
                                    <div className="accordion-icon card-header" id="headingTwo">
                                        <h4 className="mb-0">
                                            <button className="btn collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                How will this achievement change my life?
                                            </button>
                                        </h4>
                                    </div>
                                    <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion-faq">
                                        <div className="card-body">
                                            Focus is having the unwavering attention to complete what you set out to do. There are a million distractions in every facet of our lives. Telephones and e-mail, clients and managers, spouses and kids.
                                        </div>
                                    </div>
                                </div>

                                <div className="card">
                                    <div className="accordion-icon card-header" id="headingthree">
                                        <h4 className="mb-0">
                                            <button className="btn collapsed" type="button" data-toggle="collapse" data-target="#collapsethree" aria-expanded="false" aria-controls="collapsethree">
                                                How can I use this success to make a difference for others?
                                            </button>
                                        </h4>
                                    </div>
                                    <div id="collapsethree" className="collapse" aria-labelledby="headingthree" data-parent="#accordion-faq">
                                        <div className="card-body">
                                            Along with your plans, you should consider developing an action orientation that will keep you motivated to move forward at all times. This requires a little self-discipline, but is a crucial component to achievement.
                                        </div>
                                    </div>
                                </div>

                                <div className="card">
                                    <div className="accordion-icon card-header" id="headingfour">
                                        <h4 className="mb-0">
                                            <button className="btn collapsed" type="button" data-toggle="collapse" data-target="#collapsefour" aria-expanded="false" aria-controls="collapsefour">
                                                What steps are required to get you to the goals?
                                            </button>
                                        </h4>
                                    </div>
                                    <div id="collapsefour" className="collapse" aria-labelledby="headingfour" data-parent="#accordion-faq">
                                        <div className="card-body">
                                            Review it regularly and ensure that every step takes you closer to your Vision and Goals. If the plan doesn’t support the vision then change it!
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>

    )
};
