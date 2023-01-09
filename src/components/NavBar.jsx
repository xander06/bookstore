import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <>
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
    </>
  );
};

export default NavBar;