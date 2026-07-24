import { NavLink } from "react-router-dom";

const linkClass = ({ isActive }) => `no-underline hover:underline ${isActive ? "italic" : ""}`;

function Nav() {
  return (
    <nav className="text-sm font-normal">
      <ul className="flex flex-wrap gap-x-2 gap-y-1 p-0 m-0 text-black">
        <li>
          <NavLink to="/" end className={linkClass}>
            Home
          </NavLink>,
        </li>
        <li>
          <NavLink to="/about" className={linkClass}>
            About
          </NavLink>,
        </li>
        <li>
          <NavLink to="/work" className={linkClass}>
            Work
          </NavLink>,
        </li>
        <li>
          <a href="mailto:camille.elliott14@gmail.com" className="no-underline hover:underline">
            Contact&#8599;
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
