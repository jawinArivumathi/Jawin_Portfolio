
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
// import image1 from './jawin.jpg';
import image1 from './Home pic.png';
// import backgroundIamge from './bg2.png'
import {Link, BrowserRouter, Routes, Route} from 'react-router-dom';
import About from '../About/about'
import Education from '../Education/education'
import Experience from '../Experience/experience'
import Skills from '../Skills/skills'
import Contact from '../Contact/contact'
import Nav from 'react-bootstrap/Nav';



function Home() {
   function click(){
     document.getElementById("home1").style.display="none"
   }

   function back(){
    document.getElementById("home1").style.display="block"
  }

  function TabsExample() {
    return (
      <Nav className='tabStyle' variant="tabs" defaultActiveKey="/home">
  <Nav.Item>
    <Nav.Link onClick={back} href="/home"><Link className='link' to='/home'>Home</Link></Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link onClick={click} eventKey="about"><Link className='link' to='/about'>About</Link></Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="education"><Link className='link' to='/education'>Education</Link></Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="experience"><Link className='link' to='/experience'>Experience</Link></Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="skills"><Link className='link' to='/skills'>Skills</Link></Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="contact"><Link className='link' to='/contact'>Contact</Link></Nav.Link>
  </Nav.Item>
</Nav>

    );
  }

  return (
    <div className="homePage">
      <div className='body'>
      <BrowserRouter>
      <TabsExample/>
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
        <div id='home1'>
          <div className='name'>_JAWIN <span className='name2'>Arivumathi_</span></div>
        <div className='front' >
          <img className='image1' src={image1} alt="Description of the person" />
            <div className='content'>
              <p className='a1'>Hello</p>
              <p className='a1'>I AM A <span className='dev'>Software Developer</span>|</p>
              <p className='a1'>Welcome<span className='exclamation'>!</span> to my Website</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;





