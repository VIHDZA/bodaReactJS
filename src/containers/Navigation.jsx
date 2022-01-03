import React, { useState, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

const Navigation = () => { 
  const [clientWindowHeight, setClientWindowHeight] = useState("");
  const [backgroundTransparacy, setBackgroundTransparacy] = useState(0); 
  const [boxShadow, setBoxShadow] = useState(0); 
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }); 

  const handleScroll = () => {
    setClientWindowHeight(window.scrollY);
  };

  useEffect(() => { 
    if (clientWindowHeight > 350) {
      const backgroundTransparacyVar = 1;  
      const boxShadowVar = 0.5;  
      setBackgroundTransparacy(backgroundTransparacyVar); 
      setBoxShadow(boxShadowVar);
      setScroll(true);
    } else {
      const backgroundTransparacyVar = 0; 
      const boxShadowVar = 0;  
      setBackgroundTransparacy(backgroundTransparacyVar); 
      setBoxShadow(boxShadowVar); 
      setScroll(false);
    }
  }, [clientWindowHeight]); 
  return (
    <Navbar
      collapseOnSelect
      expand="lg" 
      className="navbar navbar-light ftco_navbar  site-navbar-target pt-1" 
      id="ftco-navbar"
      style={{
        background: `rgba(255, 255, 255, ${backgroundTransparacy})`, 
        boxShadow: `rgb(0 0 0 / ${boxShadow}) 0px 0px 20px 6px`, 
      }} 
      fixed="top"
    >
      <Container>
        <Navbar.Brand className={scroll ? "text-black navbar-brand" : "text-white navbar-brand"} href="/#">
          Hookup 
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto" />
          <Nav> 
            <Nav.Link href="/#" className="nav-item" >
              <span className={scroll ? "text-black nav-link " : "text-white nav-link"}>Home</span>
            </Nav.Link>
            <Nav.Link href="/#">
              <span className={scroll ? "text-black nav-link" : "text-white nav-link"}>Groom &amp; Bride</span>
            </Nav.Link>
            <Nav.Link href="/#">
              <span className={scroll ? "text-black nav-link" : "text-white nav-link"}>Love Story</span>
            </Nav.Link>
            <Nav.Link href="/#">
              <span className={scroll ? "text-black nav-link" : "text-white nav-link"}>Greetings</span>
            </Nav.Link>
            <Nav.Link href="/#">
              <span className={scroll ? "text-black nav-link" : "text-white nav-link"}>People</span>
            </Nav.Link>
            <Nav.Link href="/#">
              <span className={scroll ? "text-black nav-link" : "text-white nav-link"}>When &amp; Where</span>
            </Nav.Link>
            <Nav.Link href="/#">
              <span className={scroll ? "text-black nav-link" : "text-white nav-link"}>RSVP</span>
            </Nav.Link>
            <Nav.Link href="/#">
              <span className={scroll ? "text-black nav-link" : "text-white nav-link"}>Gallery</span>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar> 
  );
};

export default Navigation;
