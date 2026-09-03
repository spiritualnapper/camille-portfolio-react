import { Link, NavLink } from "react-router-dom";

const linkClass = ({ isActive }) => `no-underline hover:underline ${isActive ? "italic" : ""}`;

function Nav() {
  return (
    <nav className="grid grid-cols-1 md:grid-cols-2 items-center gap-y-2 text-lg font-normal">
      <Link to="/" className="no-underline leading-snug justify-self-start">
        <div>Camille Elliott</div>
        <div className="text-neutral-500">Frontend Developer &amp; UI Designer</div>
      </Link>

      <ul className="flex flex-wrap gap-x-2 gap-y-1 p-0 m-0 justify-self-start md:justify-self-end">
        <li>
          <NavLink to="/about" className={linkClass}>
            About
          </NavLink>,
        </li>
        <li>
          <NavLink to="/contact" className={linkClass}>
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
