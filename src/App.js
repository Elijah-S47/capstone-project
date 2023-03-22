import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from 'react'

import { AboutPage, HomePage, MenuPage, ReservationsPage } from "./pages";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/Elijah-S47.github.io/capstone-project/" element={<HomePage />} />
        <Route exact path="/Elijah-S47.github.io/capstone-project/aboutpage" element={<AboutPage />} />
        <Route exact path="/Elijah-S47.github.io/capstone-project/menupage" element={<MenuPage />} />
        <Route exact path="/Elijah-S47.github.io/capstone-project/reservationspage" element={<ReservationsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
