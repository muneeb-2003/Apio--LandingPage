import React from "react";
import NavBar from "./components/navbar";
import Footer from "./components/Footer";
import ClientScroll from "./components/ClientScroll";

import "./App.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="main-content">
        {/* <ClientScroll /> 
             Additional main content can be added here */}
      </div>
      <Footer />
    </div>
  );
}

export default App;
