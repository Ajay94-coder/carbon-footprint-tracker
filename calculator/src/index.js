import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"
import { createRoot } from 'react-dom/client';
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const container = document.getElementById('root');
const root = createRoot(container); 

root.render(
  <React.StrictMode>
    <BrowserRouter>
     <Navbar></Navbar> 
      <App />
      {/* <Footer></Footer> */}
      <br></br>
      <br></br>
    
    </BrowserRouter>
  </React.StrictMode>
);
