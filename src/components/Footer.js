import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  const scrollToSection = (id,event) => {
    event.preventDefault();
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <footer className="bg-dark text-white py-4 pt-3  mt-3 p-2">
      <Container>
        <Row>
          <Col md={4} className="text-center">
            <h5>About Me</h5>
            <p>
            Java Full Stack Developer with 3.6 years of experience in designing and maintaining scalable applications using Java, Spring, Hibernate and React js. skilled in cross-functional collaboration and committed to delivering high-quality solutions on time.
            </p>
          </Col>
          <Col md={4} className="text-center">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a onClick={(e) => scrollToSection('home',e)} href="#home" className="text-white">Home</a></li>
              <li><a onClick={(e) => scrollToSection('about',e)} href="#about" className="text-white">About</a></li>
              <li><a onClick={(e) => scrollToSection('skills',e)} href="#skills"  className="text-white">Skills</a></li>
              <li><a onClick={(e) => scrollToSection('contact',e)} href="#contact" className="text-white">Contact</a></li>
            </ul>
          </Col>
          <Col md={4} className="text-center">
            <h5>Contact Me</h5>
            <p><i class="fa-solid fa-envelope"></i> Email: mohantykishor27@gmail.com</p>
            <p><i class="fa-solid fa-phone"></i> Phone: (+91) 7653966822</p>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col className="text-center">
            <p>&copy; {new Date().getFullYear()} Made By Kishor Mohanty With ❤️.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
