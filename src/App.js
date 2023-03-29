import { Route, Routes } from "react-router-dom";
import React, { useReducer, } from 'react'
import { fetchAPI, submitAPI } from "./api";
import { useNavigate } from "react-router-dom";

import { LandingPage, AboutPage, HomePage, MenuPage, ReservationsPage } from "./pages";
import "./App.css";

function App( ) {
  const navigate = useNavigate();

  const updateTimes = (state, { date }) => fetchAPI(date);

  const initializeTimes = () => fetchAPI(new Date());

  const [ availableTimes, dispatch ] = useReducer( updateTimes, [], initializeTimes )

  const submitForm = (formdata) => {
    if (submitAPI(formdata)) {
      const bookingData = JSON.parse(localStorage.getItem("bookingData")) ?? [];
      localStorage.setItem(
        "bookingData",
        JSON.stringify([...bookingData, formdata])
      );
      navigate("/confirmed-booking");
    }
  };

  return (
        <Routes basename='/' >
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/homepage" element={<HomePage />} />
          <Route exact path="/aboutpage" element={<AboutPage />} />
          <Route exact path="/menupage" element={<MenuPage />} />
          <Route exact path="/reservationspage" element={<ReservationsPage availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm} />} />
        </Routes>
  );
}

export default App;
