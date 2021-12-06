import React from "react";
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import { Blog } from "../../Pages/Blog/Blog";
import { HomePages } from "../../Pages/Home/Home";
import { Services } from "../../Pages/Services/Services";
import { Personality } from "../../Pages/Personality/Personality";
import { Question } from "../../Pages/Question/Question";
import { NotFound } from "../../Pages/NotFound/NotFound";
import { ServicesDetail } from "../../Pages/ServiceDetail/ServiceDetail";

export default function Router() {
  return (
    <BrowserRouter>

      <Routes>

        <Route exact path="/" element={<HomePages />}>

        </Route>

        <Route path="services" element={<Services />}>

        </Route>

        <Route path="blog" element={<Blog />}>

        </Route>

        <Route path="personality" element={<Personality />}>

        </Route>

        <Route path="guestion" element={<Question />}>

        </Route>
{/* 
        <Route>
          <Route path="/:text" element={<ServicesDetail />} />

        </Route> */}

        <Route>
          <Route path="*" element={<NotFound />} />
        </Route>

        <Route>
          <Route path="/services/:text" element={<ServicesDetail />} />

        </Route>



      </Routes>
    </BrowserRouter>

  );

}

