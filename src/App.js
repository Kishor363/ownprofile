import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap';
import Header from './components/Header';
import Banner from './components/Banner';
import About from './components/About';
import Services from './components/Services';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Education from './components/Education';
import { Element } from 'react-scroll';

function App() {
  return (
    <>
    <Header/>
    <Element name="home" id="home">
    <Banner/>
    </Element>
    <Element name="about" id="about">
    <About/>
    </Element>
    <Element name="services" id="services">
    <Services/>
    </Element>
    <Element name="skills" id="skills">
    <Skills/>
    </Element>
    <Element name="experience" id="experience">
    <Experience/>
    </Element>
    <Element name="education" id="education">
    <Education/>
    </Element>
    <Element name="contact" id="contact">
    <Contact/>
    </Element>
    <Footer/>
    
    </>
  );
}

export default App;
