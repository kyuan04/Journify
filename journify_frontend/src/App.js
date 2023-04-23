import logo from "./logo.svg";
import "./App.scss";
// import APIService from "./component/APIService";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import SignUp from "./pages/SignUp/SignUp.js";
import LoginPage from "./pages/LoginPage/LoginPage.js";
import DestinationPage from "./pages/DestinationsPage/DestinationPage";
import DestinationInfo from "./pages/DestinationInfo/DestinationInfo";
import Itinerary from "./pages/Itinerary/Itinerary";

function App() {
  const [title, setTitle] = useState("THIS IS TITLE");
  const [body, setBody] = useState("THIS IS BODY");

  return (
    <Router>
      <Routes>
        {/* <Route exact path="/" element={<Navbar />} /> */}
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/explore" element={<DestinationPage />} />
        <Route exact path="/signup" element={<SignUp />} />
        <Route exact path="/login" element={<LoginPage />} />
        <Route
          exact path="/destinations-results" element={<DestinationPage />} />
        <Route exact path="/destination-info" element={<DestinationInfo />} />
        <Route exact path="/itinerary" element={<Itinerary />} />
      </Routes>
    </Router>
  );
}

export default App;
