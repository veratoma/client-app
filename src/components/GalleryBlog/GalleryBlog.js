import React from 'react';
import { usePagination } from '../../hoooks/Pagination'
import { Blog } from '../../Data/ServicesData';
import { Link } from 'react-router-dom';
import '../../scss/style.scss';


export const GalleryBlog = (props) => {
    const {
        firstContentIndex,
        lastContentIndex,
        nextPage,
        prevPage,
        page,
        setPage,
        totalPages,
    }
        = usePagination({
            contentPerPage: 6,
            count: Blog.length,
        });


    const trimText = (text) => {

        for (let index = 60; index < text.length; index++) {

            if (text[index] === ' ') {

                return text.substring(0, index)
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
            <div className="space-ptb">
                <div className="container">
                    <div className="row ">
                        {Blog
                            .slice(firstContentIndex, lastContentIndex)
                            .map(blog => (
                                <div key={blog.id} className="col-lg-4 col-md-6 mb-0 mb-lg-3">
                                    <div className="blog-post">
                                        <div className="blog-post-image">
                                            <img className="img-fluid" src={blog.img} alt="" />
                                        </div>
                                        <div className="blog-post-content">
                                            <h6 className="blog-post-title"><Link to={blog.id}>{trimTitle(blog.title)}</Link></h6>

                                            <p className="mb-0">{trimText(blog.text)}...</p>

                                        </div>
                                    </div>
                                </div>
                            ))};
                    </div>
                </div>

              
                <div className="row">
                    <div className="col-12 text-center mt-2 mt-md-4 mt-lg-5">
                        <ul className="pagination justify-content-center mb-0">

                            <li className="page-item"> <button onClick={prevPage} className="page-link ">Предыдущая</button> </li>

                            <li className="page-item item-list ">{[...Array(totalPages).keys()].map((el) => (
                                <button
                                    onClick={() => setPage(el + 1)}
                                    key={el}
                                    className={`" page-link "  ${page === el + 1 ? "page-link active " : ""}`}
                                >
                                    {el + 1}
                                </button>
                            ))}
                            </li>

                            <li className="page-item"> <button onClick={nextPage} className=" page-link" >Следующая</button> </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    )
};









