import React, {useState, useEffect} from "react";
import { css } from "@emotion/react";
import RingLoader from "react-spinners/RingLoader";
import Header from "./components/header/Header.jsx";
import Footer from "./components/footer/Footer";
import Routes from "./routes";
import "./App.css";


const App = () => {


  const override = css`
  display: flex;
  position: absolute;
  margin:25rem 60rem 25rem;
  align-items: center;
  `;

  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div> 
      { 
        loading ? (
        <RingLoader
          css={override}
        />
       ) : (
        
        <>
          <Header />
          <Routes />
          <Footer />
        </>
       )
      }

    </div>
  );
};

export default App;
