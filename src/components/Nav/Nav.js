import { Link } from "react-router-dom";
import "./nav.css";
import { NavLink, useLocation } from "react-router";

function Nav() {
  const location = useLocation();

  const isLogin = location.pathname === "/login";

  const navLinks = [
    {
      path: "/posts",
      name: "POSTY",
    },
    {
      path: "/dashboard",
      name: "DASHBOARD",
    },
    {
      path: "/login",
      name: "LOGIN",
    },
  ];
  return isLogin ? null : (
    <nav>
      <span>LOGO</span>

      <div className="links">
        {navLinks.map((navLink) => (
          <NavLink
            to={navLink.path}
            className={({ isActive }) =>
              isActive ? "text-yellow font-bold" : "text-gray"
            }
          >
            {navLink.name}
          </NavLink>
        ))}

        <a href="https://wp.pl">WP.PL</a>
      </div>
    </nav>
  );
}

export default Nav;
