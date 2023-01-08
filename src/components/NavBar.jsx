import { NavLink } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const NavBar = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" variant="light">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <div className="logo">
              <img src="../img/logo.png" alt="Logo kruger" />
              <p>Kruger Start</p>
            </div>
            <NavLink
              className={({ isActive }) =>
                isActive ? "navelementact" : "navelement"
              }
              to="/"
            >
              Homepage
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? "navelementact" : "navelement"
              }
              to="/create"
            >
              Create
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? "navelementact" : "navelement"
              }
              to="/view/:bookId"
            >
              View
            </NavLink>{" "}
         </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default NavBar;