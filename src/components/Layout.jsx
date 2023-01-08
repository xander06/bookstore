import React from 'react'
import NavBar from './NavBar';
import { Nav, Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";


const Layout = ({children}) => {
    return (
        <div>
        <Navbar collapseOnSelect expand="lg" variant="light">
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                <div className="logo">
                <img src="../img/logo.png" alt="Logo kruger" />
                <p>Kruger Start</p>
                </div>  
                <NavBar />
                </Nav>
            </Navbar.Collapse>
        </Navbar>  
                <div>{children}</div>
            
        </div>
      );
    }

export default Layout