import React from 'react';
import { MenuList } from '../../components/MenuList/MenuList';
import { FooterList } from '../../components/FooterList/FooterList';
import { Link } from 'react-router-dom';
import '../../scss/style.scss';


export const NotFound = () => {
    return (

        <div>
            <div><MenuList></MenuList></div>

            <div>
                <section class="space-ptb bg-overlay-black-70 slide-bg-19" >
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-lg-6 col-md-10 text-center">
                                <div class="error-404">
                                    <h1 class="error-text">4<span class="text-primary">0</span>4</h1>
                                    <h1 class="text-primary">Oops!</h1>
                                    <h3 class="text-white mb-3"> Извините, мы не можем найти эту страницу.</h3>
                                    <p class="lead text-white mb-4 mb-md-5">Страница, которую вы ищете, могла быть удалена или временно недоступна.</p>
                                    <Link className="btn btn-lg btn-primary" to="/">Главная</Link>
                                    {/* <a class="btn btn-lg btn-primary" href="index.html">Back to Home</a> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <FooterList></FooterList>
        </div>

    )
};
