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
          {/*   <NavLink
              className={({ isActive }) =>
                isActive ? "navelementact" : "navelement"
              }
              to="/view/:bookId"
            >
              View
            </NavLink> */}
    </>
  );
};

export default NavBar;