import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './Home/Home';
import './Home/Home.css';
import About from './About/about';
import './About/about.css';
import Education from './Education/education';
import './Education/education.css';
import Experience from './Experience/experience';
import './Experience/experience.css';
import Skills from './Skills/skills';
import './Skills/skills.css';
import Contact from './Contact/contact'
import './Contact/contact.css'



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

