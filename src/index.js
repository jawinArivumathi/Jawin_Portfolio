import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './Home/Home';
import './Home/Home.css';
// Styles for routed pages (Home renders these routes).
// We import only CSS here (no JS component imports) to avoid ESLint CI errors.
import './About/about.css';
import './Education/education.css';
import './Experience/experience.css';
import './Skills/skills.css';
import './Contact/contact.css';
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

