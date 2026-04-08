import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './Home/Home';
import './Home/Home.css';
// Note: About/Education/Experience/Skills/Contact are currently not rendered.
// Keeping them imported would trigger ESLint `no-unused-vars` errors in CI (Vercel).
import './global.css';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Home/>
    {/* <About/> */}
    {/* <Education/> */}
    {/* <Experience/> */}
    {/* <Skills/> */}
    {/* <Contact/> */}

  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

