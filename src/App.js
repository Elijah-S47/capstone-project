import { Route, Routes } from "react-router-dom";
import React from 'react'

import { LandingPage, AboutPage, HomePage, MenuPage, ReservationsPage } from "./pages";
import "./App.css";

function App() {
  return (
      <Routes basename='/capstone-project' >
        <Route exact path="/capstone-project" element={<LandingPage />} />
        <Route exact path="/homepage" element={<HomePage />} />
        <Route exact path="/aboutpage" element={<AboutPage />} />
        <Route exact path="/menupage" element={<MenuPage />} />
        <Route exact path="/reservationspage" element={<ReservationsPage />} />
      </Routes>
  );
}

export default App;
