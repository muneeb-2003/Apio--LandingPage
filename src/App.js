import React from "react";
import NavBar from "./components/navbar";
// import Footer from "./components/Footer";
import RegistrationForm from "./components/registration";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

function App() {
    return (
        <Router>

            <Routes>
                <Route path="/" element={<NavBar />} />
                <Route path="/registration" element={<RegistrationForm />} />
            </Routes>
        </Router>
    );
}

export default App;
