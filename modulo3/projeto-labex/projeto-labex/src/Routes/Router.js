import React from "react";
import { AplicationForm } from '../Pages/ApplicationForm/ApplicationForm';
import { ListTrip } from '../Pages/ListTrip/ListTrip';
import { Login } from '../Pages/Login/Login';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import {Home} from "../Pages/Home/Home";
import { CreatTrip } from "../Pages/CreateTrip/CreatTrip";
import { TripDetails } from "../Pages/TripDetails/TripDetails";
import {AdmHomePage} from "../Pages/AdmHomePage/AdmHomePage"

export const Router = ()=>{

  return(
    <BrowserRouter>
    <Routes>
      <Route index element={<Home/>}/>
      <Route exact path="/trips/list" element={<ListTrip/>}/>
      <Route exact path="/trips/application/:id" element={<AplicationForm/>}/>
      <Route exact path="/login" element={<Login/>}/>
      <Route exact path="/admin/trips/list" element={<AdmHomePage/>}/>
      <Route exact path="/admin/trips/create" element={<CreatTrip/>}/>
      <Route exact path="/admin/trips/:id" element={<TripDetails/>}/>
    </Routes>
    </BrowserRouter>
  );
};
export default Router;