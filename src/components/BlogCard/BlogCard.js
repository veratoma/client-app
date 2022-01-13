import React from 'react';
import '../../scss/style.scss';
import { Contact } from '../../Data/ServicesData';
import { CarouselBlog } from '../CarouselBlog/CarouselBlog';


export const BlogCard = (props) => {


    const card = props.blog

    const nextBlogId = props.nextBlogId;
    const prevBlogId = props.prevBlogId;

    return (
        <div>
            <div className="space-ptb author-pad">
                <div className="container">
                    <div className="row row-service">



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
                                    <p className='author-marg'>{card.text}</p>

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

                                <div className="blog-post-author blog-author author-marg">
                                    <div className="author author-color">
                                        
                                        <div className="author-detail">
                                            <h6 className="author-label">Ирина</h6>
                                            <span className="author-label">Астролог</span>
                                            <div className="author-content">
                                                "Качество — это делать что-либо правильно, даже когда никто не смотрит…"
                                            </div>
                                            <div className="author-content">

                                                <span> Телефон:  <a className='text-wite' href={"tel:" + Contact.tel}>{Contact.tel}</a></span>  <br></br>

                                            </div>
                                            <div className="author-content">

                                                <span> Email:  <a className='text-wite' href={"mailto:" + Contact.email}>{Contact.email}</a> </span>

                                            </div>
                                            <div className="author-social">
                                                <ul>
                                                    <li><a href="https://ru-ru.facebook.com//lrina.levandovskaya"><i className="fab fa-facebook-f"></i></a></li>
                                                    <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                                    <li><a href="https://www.instagram.com/lrina.levandovskaya"><i className="fab fa-instagram"></i></a></li>


                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    < CarouselBlog></CarouselBlog>

                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>)
};