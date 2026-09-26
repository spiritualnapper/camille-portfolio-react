import { Link, NavLink } from "react-router-dom";

const linkClass = ({ isActive }) => `no-underline hover:underline ${isActive ? "italic" : ""}`;

function Nav() {
  return (
    <nav className="grid grid-cols-1 md:grid-cols-2 items-end gap-y-2 text-lg font-normal">
      <ul className="flex flex-wrap gap-x-8 gap-y-1 p-0 m-0 list-none justify-self-start order-2 md:order-1">
        <li>
          <NavLink to="/" end className={linkClass}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className={linkClass}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className={linkClass}>
            Contact
          </NavLink>
        </li>
      </ul>

      <Link to="/" className="no-underline leading-snug justify-self-start md:justify-self-end order-1 md:order-2">
        <div>Camille Elliott</div>
        <div className="text-neutral-500">Frontend Developer &amp; UI Designer</div>
      </Link>
    </nav>
  );
}

export default Nav;
