import './App.css';
import Routing from "./Routes/Routes"
import React from "react";
import Footer from "./utils/Footer/Footer"
import Header from "./utils/Header/Header"
import Navbar from "./components/navbar"

function App() {
  return (
    <div className="App">
      <Header />
        <Routing/>
      <Footer />
    </div>
  );
}

export default App;
