import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import './index.css';
import App from './App';
import App1 from './App1';

import Services from './Services';
import Contact from './Contact';
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function Apps() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<App1 />} />
          
          <Route path="Services" element={<Services />} />
           <Route path="Contact" element={<Contact />} />
          {/* <Route path="*" element={<NoPage />} />  */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Apps />
    
  </React.StrictMode>
);

