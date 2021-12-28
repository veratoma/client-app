import React from 'react';
import '../../scss/style.scss';
import { Contact } from '../../Data/ServicesData';


export const BlogCard = (props) => {


    const card = props.blog

    const nextBlogId = props.nextBlogId;
    const prevBlogId = props.prevBlogId;

    return (
        <div>
            <div className="space-ptb">
                <div className="container">
                    <div className="row">

                        <div className="col-lg-4 mb-5 mb-lg-0 order-lg-1">
                            <div className="blog-sidebar">

                                <div className="widget">
                                    <div className="widget-title">
                                        <h4>Search</h4>
                                    </div>
                                    <div className="search">
                                        <i className="fas fa-search"></i>
                                        <input type="text" className="form-control" placeholder="Search here..." />
                                    </div>
                                </div>

                                <div className="widget">
                                    <div className="widget-title">
                                        <h4>About The Blog</h4>
                                    </div>
                                    <p>Commitment is something that comes from understanding that everything has its price and then having the willingness to pay that price.</p>
                                    <ol className="pl-3">
                                        <li className="mb-2">The price is something not defined. </li>
                                        <li className="mb-2">The point is that we must be fully.</li>
                                        <li className="mb-2">The majority of people carry with them.</li>
                                    </ol>
                                </div>



                                <div className="widget">
                                    <div className="widget-title">
                                        <h4>Recent Post</h4>
                                    </div>

                                    <div className="d-flex mb-0 align-items-start">
                                        <div className="avatar avatar-md">
                                            <img className="img-fluid" src="images/blog/01.jpg" alt="" />
                                        </div>
                                        <div className="ml-3 recent-posts">
                                            <a className="d-block date" href="#">September 19, 2020</a>
                                            <a className="mt-1" href="#"><b>How Google’s BERT Algorithm</b></a>
                                        </div>
                                    </div>

                                    <div className="d-flex mb-0 align-items-start">
                                        <div className="avatar avatar-md">
                                            <img className="img-fluid" src="images/blog/02.jpg" alt="" />
                                        </div>
                                        <div className="ml-3 recent-posts">
                                            <a className="d-block date" href="#">May 23, 2020</a>
                                            <a className="mt-1" href="#"><b>Five reasons why you must</b></a>
                                        </div>
                                    </div>

                                    <div className="d-flex mb-0 align-items-start">
                                        <div className="avatar avatar-md">
                                            <img className="img-fluid" src="images/blog/03.jpg" alt="" />
                                        </div>
                                        <div className="ml-3 recent-posts">
                                            <a className="d-block date" href="#">january 01, 2020</a>
                                            <a className="mt-1" href="#"><b>Corporations that Prove Data</b></a>
                                        </div>
                                    </div>

                                </div>

                                <div className="widget">
                                    <div className="widget-title">
                                        <h4>Categories</h4>
                                    </div>
                                    <div className="widget-categories">
                                        <ul className="list-unstyled list-style mb-0">
                                            <li><a href="#">Finance<span className="ml-auto">(3)</span></a></li>
                                            <li><a href="#">Marketing<span className="ml-auto">(5)</span></a></li>
                                            <li><a href="#">Operations<span className="ml-auto">(8)</span></a></li>
                                            <li><a href="#">Strategy<span className="ml-auto">(3)</span></a></li>
                                            <li><a href="#">People<span className="ml-auto">(3)</span></a></li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="widget">
                                    <div className="widget-title">
                                        <h5>Tags</h5>
                                    </div>
                                    <div className="tagcloud">
                                        <ul className="list-unstyled">
                                            <li><a href="#">beauty</a></li>
                                            <li><a href="#">clean</a></li>
                                            <li><a href="#">clinic</a></li>
                                            <li><a href="#">health</a></li>
                                            <li><a href="#">doctor</a></li>
                                            <li><a href="#">health</a></li>
                                            <li><a href="#">hospital</a></li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="widget">
                                    <div className="widget-title">
                                        <h4>Follow on</h4>
                                    </div>
                                    <div className="social">
                                        <ul className="list-unstyled">
                                            <li className="facebook">
                                                <a className="text-uppercase" href="#"> <i className="fab fa-facebook-f mr-3"></i>Facebook</a>
                                                <a className="follow ml-auto" href="#">Like </a>
                                            </li>
                                            <li className="twitter">
                                                <a className="text-uppercase" href="#"> <i className="fab fa-twitter mr-3"></i>twitter</a>
                                                <a className="follow ml-auto" href="#">followers </a>
                                            </li>
                                            <li className="youtube">
                                                <a className="text-uppercase" href="#"> <i className="fab fa-youtube mr-3"></i>youtube</a>
                                                <a className="follow ml-auto" href="#">Subscribers </a>
                                            </li>
                                            <li className="instagram">
                                                <a className="text-uppercase" href="#"> <i className="fab fa-instagram mr-3"></i>instagram</a>
                                                <a className="follow ml-auto" href="#">followers </a>
                                            </li>

                                        </ul>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className="col-lg-8">
                            <div className="blog-detail">

                                <div className="blog-post">
                                    <div className="blog-post-image">
                                        <img className="img-fluid" src={card.img} alt="" />


                                    </div>
                                    <div className="blog-post-content">


                                        <h6 className="blog-post-title mb-0">{card.title}</h6>
                                    </div>
                                </div>

                                <div className="blog-post-description">
                                    <p>{card.text}</p>

                                </div>




                                <div className="blog-post-navigation">
                                    <div className="navigation post-navigation">
                                        <div className="nav-link">
                                            <div className="nav-previous">
                                                <a href={prevBlogId}>

                                                    <i className="fas fa-chevron-left"></i>
                                                    <span className="pagi-text">Предыдущая</span>

                                                </a>

                                            </div>
                                            <div className="nav-next">
                                                <a href={nextBlogId}>
                                                    <i className="fas fa-chevron-right"></i>
                                                    <span className="pagi-text">Следующая</span>

                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="blog-post-author blog-author ">
                                    <div className="author author-color">

                                        <div className="author-detail">
                                            <h6 className="author-label">Ирина</h6>
                                            <span className="author-label">Астролог</span>
                                            <div className="author-content">
                                                “Качество — это делать что-либо правильно, даже когда никто не смотрит…
                                            </div>
                                            <div className="author-social">
                                                <ul>
                                                    <li> Телефон:  <a href={"tel:" + Contact.tel}>{Contact.tel}</a> </li>
                                                    <li>Email:  <a href={"mailto:" + Contact.email}>{Contact.email}</a></li>

                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>



                                <div className="row mt-4 mt-md-5">
                                    <div className="col-lg-12">
                                        <h4 className="mb-3">Related Post</h4>
                                        <div className="owl-carousel owl-nav-bottom-center" data-nav-dots="true" data-nav-arrow="false" data-items="2" data-md-items="2" data-sm-items="2" data-xs-items="1" data-space="30" data-autoheight="true">

                                            <div className="item">

                                                <div className="blog-post">
                                                    <div className="blog-post-image">
                                                        <img className="img-fluid" src="images/blog/02.jpg" alt="" />
                                                    </div>
                                                    <div className="blog-post-content">
                                                        <div className="blog-post-info">
                                                            <div className="blog-post-author">
                                                                <a href="#"><i className="far fa-user-circle"></i> Sara lisbon </a>
                                                            </div>
                                                            <div className="blog-post-date"><i className="far fa-clock"></i>Oct 15, 2020</div>
                                                            <div className="blog-post-comment">
                                                                <a href="#"><i className="far fa-comment"></i>(12)</a>
                                                            </div>
                                                        </div>
                                                        <h6 className="blog-post-title"><a href="blog-detail.html">How to Stay Ahead of The...</a></h6>
                                                        <p className="mb-0">He began with temperance, which included the moderating of every pleasure or inclination to develop.</p>
                                                    </div>
                                                </div>

                                            </div>
                                            <div className="item">

                                                <div className="blog-post">
                                                    <div className="blog-post-image">
                                                        <img className="img-fluid" src="images/blog/03.jpg" alt="" />
                                                    </div>
                                                    <div className="blog-post-content">
                                                        <div className="blog-post-info">
                                                            <div className="blog-post-author">
                                                                <a href="#"><i className="far fa-user-circle"></i>Sara lisbon </a>
                                                            </div>
                                                            <div className="blog-post-date"><i className="far fa-clock"></i>Oct 20, 2020</div>
                                                            <div className="blog-post-comment">
                                                                <a href="#"><i className="far fa-comment"></i>(12)</a>
                                                            </div>
                                                        </div>
                                                        <h6 className="blog-post-title"><a href="blog-detail.html">Corporations that Prove Data...</a></h6>
                                                        <p className="mb-0">because temperance “tends to procure that coolness and clearance and head that is so necessary constant.</p>
                                                    </div>
                                                </div>

                                            </div>
                                            <div className="item">

                                                <div className="blog-post">
                                                    <div className="blog-post-image">
                                                        <img className="img-fluid" src="images/blog/05.jpg" alt="" />
                                                    </div>
                                                    <div className="blog-post-content">
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
                                            <div className="item">

                                                <div className="blog-post">
                                                    <div className="blog-post-image">
                                                        <img className="img-fluid" src="images/blog/10.jpg" alt="" />
                                                    </div>
                                                    <div className="blog-post-content">
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
                                            <div className="item">

                                                <div className="blog-post">
                                                    <div className="blog-post-image">
                                                        <img className="img-fluid" src="images/blog/09.jpg" alt="" />
                                                    </div>
                                                    <div className="blog-post-content">
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
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>)
};