
import React from 'react';
import {
  Link
} from "react-router-dom";
import '../../scss/style.scss';



export const MiniBanner = (props) => {

  const isLink = props.text

  return (
    <div>

      <div className="inner-banner bg-overlay-black-70 slide-bg-09">
        <div className="container">
          <div className="row align-items-center intro-title ">
            <div className="col-md-6 mb-4 mb-md-0">
              <div className="text-center text-md-left ">
                {isLink && <h1 className="text-white mb-0"> {props.text}</h1>}
                {!isLink && <h1 className="text-white mb-0"> {props.title}</h1>}
              </div>
            </div>
            <div className="col-md-6 ">
              <div className="d-flex justify-content-center justify-content-md-end">
                <ol className="breadcrumb mb-0 p-0">


                  <Link className="breadcrumb-item" to="/">Главная</Link>
                  {isLink && <Link className="breadcrumb-item " to={"../" + props.url}> <span>{props.title} </span></Link>}
                  {isLink && <li className="breadcrumb-item active"><span>{props.text}</span></li>}

                  {!isLink && <li className="breadcrumb-item active"> <span>{props.title} </span></li>}

                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};
