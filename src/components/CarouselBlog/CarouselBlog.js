import React from 'react';
import { Blog } from '../../Data/ServicesData';
import '../../scss/style.scss';
import { Link } from 'react-router-dom';



export const CarouselBlog = (props) => {
    const  trimText = (text) => {

           
        for (let index = 60; index < text.length; index++) {

            if (text[index] === ' ') {
               
               return text.substring (0,index)
            }
            
        }
    }

    const trimTitle = (title) => {


        for (let index = 20; index < title.length; index++) {

            if (title[index] === ' ') {

                return title.substring(0, index)
            }

        }
    }

    return (
        <div>
            <div className="space-pb">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 col-md-10">
                            <div className="section-title text-center">
                                <h2>Последние новости и вдохновляющие истории</h2>
                                <p className="lead">Ознакомьтесь с  последними сообщениями в блоге, статьями и важными объявлениями</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            
                                <div className="owl-carousel owl-nav-bottom-center" data-nav-dots="true" data-nav-arrow="false" data-items="3" data-md-items="2" data-sm-items="2" data-xs-items="1" data-space="30" data-autoheight="true">
                                {Blog.map(blog => (
                                    <div className="item">
                                        <div className="blog-post">
                                            <div className="blog-post-image">
                                                <img className="img-fluid" src={blog.img} alt="" />
                                            </div>
                                            <div className="blog-post-content ">
                                                <h6 className="blog-post-title"><Link to={"../../blog/" + blog.id}>{trimTitle(blog.title)}</Link></h6>
                                                <p className="mb-0">{trimText(blog.text)}...</p>
                                            </div>
                                        </div>
                                    </div>
                                    ))};

                                </div>
                            
                        </div>
                    </div>

                </div>

            </div>
        </div>
       
    )
};