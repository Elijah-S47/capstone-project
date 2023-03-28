import { Route, Routes } from "react-router-dom";
import React, { useReducer, } from 'react'

import { LandingPage, AboutPage, HomePage, MenuPage, ReservationsPage } from "./pages";
import "./App.css";

function App( ) {

  function updateTimes ( availableTimes, action ) {
    return availableTimes;
  }

  function initializeTimes ( ) {
    return ["5:00", "6:00", "7:00", "8:00", "9:00", "10:00", "11:00"]
  }

  const [ availableTimes, dispatch ] = useReducer( updateTimes, [], initializeTimes )
  return (
      <Routes basename='/' >
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/homepage" element={<HomePage />} />
        <Route exact path="/aboutpage" element={<AboutPage />} />
        <Route exact path="/menupage" element={<MenuPage />} />
        <Route exact path="/reservationspage" element={<ReservationsPage availableTimes={availableTimes} dispatch={dispatch} />} />
      </Routes>
  );
}

export default App;
