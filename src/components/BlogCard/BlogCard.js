import React from 'react';
import { Blog } from '../../Data/ServicesData';


export const BlogCard = props => {
 
    return (
        <div class="space-ptb">
            <div class="container">
                <div class="row">
                    <div class="col-lg-4 col-md-6 mb-0 mb-lg-3">

                        <div class="blog-post">
                            <div class="blog-post-image">
                                <img class="img-fluid" src={Blog.img} alt="" />
                            </div>

                            <h6 class="blog-post-title"><a href="blog-detail.html">{Blog.title}</a></h6>
                            <p class="mb-0">{Blog.text}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
};