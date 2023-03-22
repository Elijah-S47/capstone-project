import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { AboutPage, HomePage, MenuPage, ReservationsPage } from "./pages";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/aboutpage" element={<AboutPage />} />
        <Route exact path="/menupage" element={<MenuPage />} />
        <Route exact path="/reservationspage" element={<ReservationsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
