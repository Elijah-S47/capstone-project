import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from 'react'

import { AboutPage, HomePage, MenuPage, ReservationsPage } from "./pages";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes basename="/capstone-project">
        <Route exact path="/capstone-project" element={<HomePage />} />
        <Route exact path="/homepage" element={<HomePage />} />
        <Route exact path="/aboutpage" element={<AboutPage />} />
        <Route exact path="/menupage" element={<MenuPage />} />
        <Route exact path="/reservationspage" element={<ReservationsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
