import React from "react";
import Header from "./components/header/Header.jsx";
import Footer from "./components/footer/Footer";
import Routes from "./routes";
import "./App.css";

const App = () => {
  return (
    <>
      <Header />
      <Routes />
      <Footer />
    </>
  );
};

export default App;
