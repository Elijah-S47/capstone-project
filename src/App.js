import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from 'react'

import { AboutPage, HomePage, MenuPage, ReservationsPage } from "./pages";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes basename="/capstone-project">
        <Route exact path="/capstone-project" element={<HomePage />} />
        <Route exact path="/capstone-project/homepage" element={<HomePage />} />
        <Route exact path="/capstone-project/aboutpage" element={<AboutPage />} />
        <Route exact path="/capstone-project/menupage" element={<MenuPage />} />
        <Route exact path="/capstone-project/reservationspage" element={<ReservationsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
