import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import {Link, Element} from 'react-scroll';
import { useState } from 'react';

const Header =()=>{
    const [brandName,setBrandName] =useState("Kishor Mohanty");
    const[menuLinks,setMenuLinks] =useState([
        {title:"Home",
            link:"/home",
            id:"home",
            href:"#home",
        },
        {title:"About",
            link:"/about",
            id:"about",
            href:"#about",
        },
        {title:"Services",
            link:"/portfolio",
            id:"services",
            href:"#services",
        },
        {title:"Skills",
            link:"/skills",
            id:"skills",
            href:"#skills",
        },
        {title:"Experience",
            link:"/experience",
            id:"experience",
            href:"#experience",
        },
        {title:"Education",
            link:"/education",
            id:"education",
            href:"#education",
        },
        {title:"Contact",
            link:"/contact",
            id:"contact",
            href:"#contact",
        },
    ])
    const handleHireMeClick = () => {
        alert ("Mail me or contact me on 7653966822 / mohantykishor27@gmail.com");
    }

    const downloadResume = () => {
        const link = document.createElement('a');
        link.href = '/Resume__Kishor__Mohanty.pdf'; // Replace with your PDF file path
        link.download = 'Kishor_resume.pdf'; // Specify the file name
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    return(
        <>
        
        <Navbar expand="lg" fixed="top" className="bg-body-tertiary">
        <Container>
            <Navbar.Brand style={{ marginRight: 'auto' }}><h1><i>{brandName}</i></h1></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto justify-content-center flex-grow-1" style={{ cursor: 'pointer' }}>
                    {menuLinks.map(link => (
                        <Nav.Link  key={link.id} as={Link} to={link.id} smooth={true} duration={500}>
                            {link.title}
                        </Nav.Link>
                    ))}
                </Nav>
                <Button variant="outline-success" className="me-2" onClick={handleHireMeClick}>Hire Me</Button>
                <Button variant="info" onClick={downloadResume}>Download Resume</Button>
            </Navbar.Collapse>
        </Container>
    </Navbar>
      
        </>
    )
}
export default Header;