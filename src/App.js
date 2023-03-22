import { Route, Routes } from "react-router-dom";
import React from 'react'

import { LandingPage, AboutPage, HomePage, MenuPage, ReservationsPage } from "./pages";
import "./App.css";

function App() {
  return (
      <Routes basename='/capstone-project' >
        <Route exact path="/capstone-project" element={<LandingPage />} />
        <Route exact path="/capstone-project/homepage" element={<HomePage />} />
        <Route exact path="/capstone-project/aboutpage" element={<AboutPage />} />
        <Route exact path="/capstone-project/menupage" element={<MenuPage />} />
        <Route exact path="/capstone-project/reservationspage" element={<ReservationsPage />} />
      </Routes>
  );
}

export default App;
