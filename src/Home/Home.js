
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
// import image1 from './jawin.jpg';
import image1 from './Home pic.png';
import backgroundIamge from './bg2.png'
import {Link, BrowserRouter, Routes, Route} from 'react-router-dom';
import About from '../About/about'
import Education from '../Education/education'
import Experience from '../Experience/experience'
import Skills from '../Skills/skills'
import Contact from '../Contact/contact'



function Home() {
   function click(){
     document.getElementById("home1").style.display="none"
   }

   function back(){
    document.getElementById("home1").style.display="block"
  }

  return (
    <div>
      <div className='body' >
        <nav>
        <BrowserRouter>
          <ul>
            <li onClick={back}><Link to='/home'> Home</Link></li>
            <li onClick={click}><Link to='/about'>about</Link></li>
            <li onClick={click}><Link to='/education'>Education</Link></li>
            <li onClick={click}><Link to='/experience'>Experience</Link></li>
            <li onClick={click}><Link to='/skills'>Skills</Link></li>
            <li onClick={click}><Link to='/contact'>Contact</Link></li>
          </ul>
          <Routes>
            <Route path='/about' element={<About/>}/>
          </Routes>
          <Routes>
            <Route path='/education' element={<Education/>}/>
          </Routes>
          <Routes>
            <Route path='/experience' element={<Experience/>}/>
          </Routes>
          <Routes>
            <Route path='/skills' element={<Skills/>}/>
          </Routes>
          <Routes>
            <Route path='/contact' element={<Contact/>}/>
          </Routes>
          </BrowserRouter>  
        </nav>
        <div id='home1'>
          <div className='name'>_JAWIN <span className='name2'>Arivumathi_</span></div>
        <div className='front' >
          <img className='image1' src={image1} alt="Description of the person" height={500} width={400} />
            <div className='content'>
              <p className='a1'>Hello</p>
              <p className='a1'>I AM <span className='dev'>Software Developer</span>|</p>
              <p className='a1'>Welcome<span className='exclamation'>!</span> to my Website</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;


