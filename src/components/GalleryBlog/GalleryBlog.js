// import React from 'react';
// import { Link } from 'react-router-dom';
// import { useState } from 'react';
// import { Counts } from '../../Data/ServicesData';




// export const GalleryBlog = () => {


//     return (<div>

//     <div class="space-ptb">
//       <div class="container">
//         <div class="row">
//           <div class="col-lg-4 col-md-6 mb-0 mb-lg-3">

//             <div class="blog-post">
//               <div class="blog-post-image">
//                 <img class="img-fluid" src="images/blog/01.jpg" alt=""/>
//               </div>
//               <div class="blog-post-content">
//                 <div class="blog-post-info">
//                   <div class="blog-post-author">
//                     <a href="#"><i class="far fa-user-circle"></i>Harry Russell</a>
//                   </div>
//                   <div class="blog-post-date"><i class="far fa-clock"></i>Oct 06, 2020</div>
//                   <div class="blog-post-comment">
//                     <a href="#"><i class="far fa-comment"></i>(12)</a>
//                   </div>
//                 </div>
//                 <h6 class="blog-post-title"><a href="blog-detail.html">From a small startup to a...</a></h6>
//                 <p class="mb-0">Benjamin Franklin, inventor, statesman, writer, publisher and economist relates in his that early.</p>
//               </div>
//             </div>

//           </div>
//           <div class="col-lg-4 col-md-6 mb-0 mb-lg-3">

//             <div class="blog-post">
//               <div class="blog-post-image">
//                 <img class="img-fluid" src="images/blog/02.jpg" alt=""/>
//               </div>
//               <div class="blog-post-content">
//                 <div class="blog-post-info">
//                   <div class="blog-post-author">
//                     <a href="#"><i class="far fa-user-circle"></i>Sara lisbon</a>
//                   </div>
//                   <div class="blog-post-date"><i class="far fa-clock"></i>Oct 15, 2020</div>
//                   <div class="blog-post-comment">
//                     <a href="#"><i class="far fa-comment"></i>(12)</a>
//                   </div>
//                 </div>
//                 <h6 class="blog-post-title"><a href="blog-detail.html">How to Stay Ahead of The...</a></h6>
//                 <p class="mb-0">He began with temperance, which included the moderating of every pleasure or inclination to develop.</p>
//               </div>
//             </div>

//           </div>
//           <div class="col-lg-4 col-md-6 mb-0 mb-lg-3">

//             <div class="blog-post">
//               <div class="blog-post-image">
//                 <img class="img-fluid" src="images/blog/03.jpg" alt=""/>
//               </div>
//               <div class="blog-post-content">
//                 <div class="blog-post-info">
//                   <div class="blog-post-author">
//                     <a href="#"><i class="far fa-user-circle"></i>Paul Flavius</a>
//                   </div>
//                   <div class="blog-post-date"><i class="far fa-clock"></i>Oct 20, 2020</div>
//                   <div class="blog-post-comment">
//                     <a href="#"><i class="far fa-comment"></i>(12)</a>
//                   </div>
//                 </div>
//                 <h6 class="blog-post-title"><a href="blog-detail.html">Corporations that Prove Data...</a></h6>
//                 <p class="mb-0">Because temperance “tends to procure that coolness and clearance and head that is so necessary constant.</p>
//               </div>
//             </div>

//           </div>
//           <div class="col-lg-4 col-md-6 mb-0 mb-lg-3">

//             <div class="blog-post">
//               <div class="blog-post-image">
//                 <img class="img-fluid" src="images/blog/05.jpg" alt=""/>
//               </div>
//               <div class="blog-post-content">
//                 <div class="blog-post-info">
//                   <div class="blog-post-author">
//                     <a href="#"><i class="far fa-user-circle"></i>Mellissa Doe</a>
//                   </div>
//                   <div class="blog-post-date"><i class="far fa-clock"></i>Nov 06, 2020</div>
//                   <div class="blog-post-comment">
//                     <a href="#"><i class="far fa-comment"></i>(12)</a>
//                   </div>
//                 </div>
//                 <h6 class="blog-post-title"><a href="blog-detail.html">How Google’s BERT Algorithm...</a></h6>
//                 <p class="mb-0">Franklin can up with a method to grade himself on his daily actions. In a journal he drew a table.</p>
//               </div>
//             </div>

//           </div>
//           <div class="col-lg-4 col-md-6 mb-0 mb-lg-3">

//             <div class="blog-post">
//               <div class="blog-post-image">
//                 <img class="img-fluid" src="images/blog/10.jpg" alt=""/>
//               </div>
//               <div class="blog-post-content">
//                 <div class="blog-post-info">
//                   <div class="blog-post-author">
//                     <a href="#"><i class="far fa-user-circle"></i>Michael Bean</a>
//                   </div>
//                   <div class="blog-post-date"><i class="far fa-clock"></i>Nov 10, 2020</div>
//                   <div class="blog-post-comment">
//                     <a href="#"><i class="far fa-comment"></i>(12)</a>
//                   </div>
//                 </div>
//                 <h6 class="blog-post-title"><a href="blog-detail.html">Five reasons why you must...</a></h6>
//                 <p class="mb-0">The other virtues practice in succession by Franklin were silence, order, resolution, frugality, industry.</p>
//               </div>
//             </div>

//           </div>
//           <div class="col-lg-4 col-md-6 mb-0 mb-lg-3">

//             <div class="blog-post">
//               <div class="blog-post-image">
//                 <img class="img-fluid" src="images/blog/09.jpg" alt="/"/>
//               </div>
//               <div class="blog-post-content">
//                 <div class="blog-post-info">
//                   <div class="blog-post-author">
//                     <a href="#"><i class="far fa-user-circle"></i>Felica Queen</a>
//                   </div>
//                   <div class="blog-post-date"><i class="far fa-clock"></i>Dec 07, 2020</div>
//                   <div class="blog-post-comment">
//                     <a href="#"><i class="far fa-comment"></i>(12)</a>
//                   </div>
//                 </div>
//                 <h6 class="blog-post-title"><a href="blog-detail.html">Five initial steps you must...</a></h6>
//                 <p class="mb-0">In order to do the work thoroughly he decided to attempt each virtue and a quarter of its importance.</p>
//               </div>
//             </div>

//           </div>
//           <div class="col-lg-4 col-md-6">

//             <div class="blog-post">
//               <div class="blog-post-image">
//                 <img class="img-fluid" src="images/blog/04.jpg" alt=""/>
//               </div>
//               <div class="blog-post-content">
//                 <div class="blog-post-info">
//                   <div class="blog-post-author">
//                     <a href="#"><i class="far fa-user-circle"></i>Ben Aguilar</a>
//                   </div>
//                   <div class="blog-post-date"><i class="far fa-clock"></i>Dec 07, 2020</div>
//                   <div class="blog-post-comment">
//                     <a href="#"><i class="far fa-comment"></i>(12)</a>
//                   </div>
//                 </div>
//                 <h6 class="blog-post-title"><a href="blog-detail.html">Top 10 proven approaches to...</a></h6>
//                 <p class="mb-0">I coach my clients to practice the 3 D’s – Defer, Delegate or Delete. Can the particular activity be done later.</p>
//               </div>
//             </div>

//           </div>
//           <div class="col-lg-4 col-md-6">

//             <div class="blog-post">
//               <div class="blog-post-image">
//                 <img class="img-fluid" src="images/blog/06.jpg" alt=""/>
//               </div>
//               <div class="blog-post-content">
//                 <div class="blog-post-info">
//                   <div class="blog-post-author">
//                     <a href="#"><i class="far fa-user-circle"></i>Anne Smith</a>
//                   </div>
//                   <div class="blog-post-date"><i class="far fa-clock"></i>Dec 07, 2020</div>
//                   <div class="blog-post-comment">
//                     <a href="#"><i class="far fa-comment"></i>(12)</a>
//                   </div>
//                 </div>
//                 <h6 class="blog-post-title"><a href="blog-detail.html">This is important because...</a></h6>
//                 <p class="mb-0">In order to do the work thoroughly he decided to attempt each virtue and a quarter of its importance.</p>
//               </div>
//             </div>

//           </div>
//           <div class="col-lg-4 col-md-6">

//             <div class="blog-post">
//               <div class="blog-post-image">
//                 <img class="img-fluid" src="images/blog/07.jpg" alt=""/>
//               </div>
//               <div class="blog-post-content">
//                 <div class="blog-post-info">
//                   <div class="blog-post-author">
//                     <a href="#"><i class="far fa-user-circle"></i>Aaron Sharp</a>
//                   </div>
//                   <div class="blog-post-date"><i class="far fa-clock"></i>Dec 07, 2020</div>
//                   <div class="blog-post-comment">
//                     <a href="#"><i class="far fa-comment"></i>(12)</a>
//                   </div>
//                 </div>
//                 <h6 class="blog-post-title"><a href="blog-detail.html">The price is something not...</a></h6>
//                 <p class="mb-0">The point is that we must be fully aware of the price and be willing to pay it, if we want to have success.</p>
//               </div>
//             </div>

//           </div>
//         </div>

//         <div class="row">
//           <div class="col-12 text-center mt-2 mt-md-4 mt-lg-5">
//             <ul class="pagination justify-content-center mb-0">


//               <li class="page-item disabled"> <span class="page-link b-radius-none">Prev</span> </li>
//               <li class="page-item active" aria-current="page"><span class="page-link active">1 </span> <span class="sr-only">(current)</span></li>
//               {Counts.map(count=>
//               <li class="page-item"><a class="page-link" href="#">{count.list}</a></li>
//               )};

//             //   {/* <li class="page-item"><a class="page-link" href="#">3</a></li>
//             //   <li class="page-item"><a class="page-link" href="#">...</a></li>
//             //   <li class="page-item"><a class="page-link" href="#">25</a></li>
//             //   <li class="page-item"> <a class="page-link" href="#">Next</a> </li> */}
//             </ul>
//           </div>
//         </div>

//       </div>
//     </div>

//     </div>)};

// import React, { Component, Fragment } from 'react';

// const LEFT_PAGE = 'LEFT';
// const RIGHT_PAGE = 'RIGHT';

// /**
//  * Helper method for creating a range of numbers
//  * range(1, 5) => [1, 2, 3, 4, 5]
//  */
// const range = (from, to, step = 1) => {
//     let i = from;
//     const range = [];

//     while (i <= to) {
//         range.push(i);
//         i += step;
//     }
// }


// class Pagination extends Component {
//     constructor(props) {
//         super(props);
//         const { totalRecords = null, pageLimit = 6, pageNeighbours = 0 } = props;

//         this.pageLimit = typeof pageLimit === 'number' ? pageLimit : 6;
//         this.totalRecords = typeof totalRecords === 'number' ? totalRecords : 0;

//         // pageNeighbours can be: 0, 1 or 2
//         this.pageNeighbours = typeof pageNeighbours === 'number'
//             ? Math.max(0, Math.min(pageNeighbours, 1))
//             : 0;

//         this.totalPages = Math.ceil(this.totalRecords / this.pageLimit);

//         this.state = { currentPage: 1 };
//     }
// }
// fetchPageNumbers = () => {
//     const totalPages = this.totalPages;
//     const currentPage = this.state.currentPage;
//     const pageNeighbours = this.pageNeighbours;

//     /**
//      * totalNumbers: the total page numbers to show on the control
//      * totalBlocks: totalNumbers + 2 to cover for the left(<) and right(>) controls
//      */
//     const totalNumbers = (this.pageNeighbours * 2) + 3;
//     const totalBlocks = totalNumbers + 2;

//     if (totalPages > totalBlocks) {
//         const startPage = Math.max(2, currentPage - pageNeighbours);
//         const endPage = Math.min(totalPages - 1, currentPage + pageNeighbours);
//         let pages = range(startPage, endPage);

//         /**
//          * hasLeftSpill: has hidden pages to the left
//          * hasRightSpill: has hidden pages to the right
//          * spillOffset: number of hidden pages either to the left or to the right
//          */
//         const hasLeftSpill = startPage > 2;
//         const hasRightSpill = (totalPages - endPage) > 1;
//         const spillOffset = totalNumbers - (pages.length + 1);

//         switch (true) {
//             // handle: (1) < {5 6} [7] {8 9} (10)
//             case (hasLeftSpill && !hasRightSpill): {
//                 const extraPages = range(startPage - spillOffset, startPage - 1);
//                 pages = [LEFT_PAGE, ...extraPages, ...pages];
//                 break;
//             }

//             // handle: (1) {2 3} [4] {5 6} > (10)
//             case (!hasLeftSpill && hasRightSpill): {
//                 const extraPages = range(endPage + 1, endPage + spillOffset);
//                 pages = [...pages, ...extraPages, RIGHT_PAGE];
//                 break;
//             }

//             // handle: (1) < {4 5} [6] {7 8} > (10)
//             case (hasLeftSpill && hasRightSpill):
//             default: {
//                 pages = [LEFT_PAGE, ...pages, RIGHT_PAGE];
//                 break;
//             }
//         }
//     }
// }
// render() {
//     if (!this.totalRecords || this.totalPages === 1) return null;

//     const { currentPage } = this.state;
//     const pages = this.fetchPageNumbers();
// }
// componentDidMount() {
//     this.gotoPage(1);
// }

// gotoPage = page => {
//     const { onPageChanged = f => f } = this.props;
//     const currentPage = Math.max(0, Math.min(page, this.totalPages));
//     const paginationData = {
//         currentPage,
//         totalPages: this.totalPages,
//         pageLimit: this.pageLimit,
//         totalRecords: this.totalRecords
//     };

//     this.setState({ currentPage }, () => onPageChanged(paginationData));
// }

// handleClick = page => evt => {
//     evt.preventDefault();
//     this.gotoPage(page);
// }

// handleMoveLeft = evt => {
//     evt.preventDefault();
//     this.gotoPage(this.state.currentPage - (this.pageNeighbours * 2) - 1);
// }

// handleMoveRight = evt => {
//     evt.preventDefault();
//     this.gotoPage(this.state.currentPage + (this.pageNeighbours * 2) + 1);
// }








// export default Pagination



import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Counts } from '../../Data/ServicesData';
import { usePagination } from '../../hoooks/Pagination'
import { Blog } from '../../Data/ServicesData';



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
                contentPerPage: 3,
                count: Blog.length,
            });

    return (
    <div>
    <div class="space-ptb">
            <div class="container">
                <div class="row">
                    <div class="col-lg-4 col-md-6 mb-0 mb-lg-3">
        {Blog
            .slice(firstContentIndex, lastContentIndex)
            .map(blog => (
                <div class="blog-post">
                <div class="blog-post-image">
                    <img class="img-fluid" src={blog.img} alt="" />
                </div>

                <h6 class="blog-post-title"><a href="blog-detail.html">{blog.title}</a></h6>
                <p class="mb-0">{blog.text}</p>
            </div>
 ))}
            </div>
            </div>
        </div>
    </div>
           

    

                       
                    

<div className="pagination">
    <p className="text">
        {page}/{totalPages}
    </p>
    <button onClick={prevPage} className="page">
        &larr;
    </button>

    {[...Array(totalPages).keys()].map((el) => (
        <button
            onClick={() => setPage(el + 1)}
            key={el}
            className={`page ${page === el + 1 ? "active" : ""}`}
        >
            {el + 1}
        </button>
    ))}
    <button onClick={nextPage} className="page">
        &rarr;
    </button>
</div>
</div>
   ) };


