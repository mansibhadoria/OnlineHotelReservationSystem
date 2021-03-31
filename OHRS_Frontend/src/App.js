import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Footer from './Components/Footer';
import Main from './Components/Main'
import "./App.css"

const App=()=>{
  return(
    <div className=" app page-container" >
    <Router>
      <div id="content-wrap">
      <Main/>
      </div>
      <Footer className="footer"/>
    </Router>
    </div>
  );
};
export default App;
