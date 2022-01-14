import React from "react";
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";

import { Blog } from "../../Pages/Blog/Blog";
import { HomePages } from "../../Pages/Home/Home";
import { Services } from "../../Pages/Services/Services";
import { Personality } from "../../Pages/Personality/Personality";
import { NotFound } from "../../Pages/NotFound/NotFound";
import { ServicesDetail } from "../../Pages/ServiceDetail/ServiceDetail";
import { BlogDetail } from "../../Pages/BlogDetail/BlogDetail";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop"


export default function Router(props) {
  return (
    <BrowserRouter  >

      <ScrollToTop />
      <Routes>

        <Route exact path="/" element={<HomePages />}></Route>

        <Route path="services" element={<Services />}></Route>

        <Route path="services/:text" element={<ServicesDetail />}></Route>

        <Route path="blog" element={<Blog />}></Route>

        <Route path="blog/:title" element={<BlogDetail />}></Route>

        <Route path="personality" element={<Personality />}></Route>

        <Route path="*" element={<NotFound />} />


      </Routes>
    </BrowserRouter>
  );
}

