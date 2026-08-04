import { Link, NavLink } from "react-router-dom";

const linkClass = ({ isActive }) => `no-underline hover:underline ${isActive ? "italic" : ""}`;

const ASCII_ART = `⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣴⣿⠟⠉⠉⠉⠉⠛⠷⣦⣦⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣤⣶⠶⠾⠷⠶⣶⣦⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣾⡿⠁⠀⠀⠀⠀⠀⠀⠀⠈⠙⢿⣷⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⣴⡟⠋⠁⠀⠀⠀⠀⠀⠀⠹⣿⡆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡠⣻⠟⠁⠀⢀⣀⣤⣀⡀⠀⢀⡀⠀⠀⠹⣿⣷⣄⠀⠀⠀⠀⠀⢠⣾⠋⠉⠀⠀⠀⠀⠀⢀⣀⣀⣤⣀⣻⡿⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⢀⡴⠋⠀⠀⢀⣴⡦⠞⠉⠉⠻⢿⣷⣬⣉⠑⡦⠀⠀⠙⣿⣧⠀⠀⠀⣴⡿⠃⠀⠀⠀⠀⣠⣴⣾⣟⣋⣉⠉⠉⠉⠁⠈⣿⣶⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⢠⣮⣤⡀⠀⢊⣿⡏⠀⠀⠀⠀⠀⠀⠉⠛⠿⣿⣶⣤⣐⠂⠸⣛⡧⣤⣾⠟⠀⠀⢀⣠⣶⡿⠛⠁⠀⠀⠀⠈⠑⣄⣿⡀⠀⠀⠻⣿⣦⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⢸⣿⠸⠃⠀⢸⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢉⣻⣿⣯⢹⣿⣄⣈⣿⡷⠶⠾⢿⣋⣁⠀⠀⠀⠀⠀⠀⠀⠀⠈⣿⣧⠀⠀⠀⠘⣿⣇⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠸⣿⣦⡀⠀⠈⠻⣿⠄⠀⠀⠀⠀⢀⣠⣴⠖⠛⡛⡋⠉⢁⣰⣿⢻⣿⠋⣤⣀⠁⠀⠘⠛⠿⣷⣦⣄⡀⠀⠀⠀⠀⢹⣿⡖⠀⠀⢀⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠈⢿⠻⢶⣤⣄⣉⣣⣤⠤⠖⠛⠛⠉⣠⠖⠈⣁⣴⣾⠿⠋⣱⣿⡟⣧⠈⠻⣷⣄⠀⠀⠀⠀⠉⠻⣿⣶⣄⣀⣠⢿⠏⠑⡆⣠⣿⣿⠏⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⣴⡄⠈⠉⠉⠉⠉⠀⠀⠀⠀⠀⢗⣾⣾⠿⣛⡁⠀⠀⣼⠏⠹⡽⣆⠀⠀⠻⣿⣇⢚⠦⣄⠀⠀⠉⠛⠿⢷⣶⣥⣾⣾⣿⣹⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢻⣿⣄⡀⠀⠀⠀⠀⠀⠀⣠⣴⣿⢟⡵⠾⢿⣡⣞⡟⠁⠀⠀⠙⢿⣧⠀⠀⠀⠙⢿⣄⣄⣷⣦⡀⠀⠀⠀⣸⠂⡴⣣⣿⠏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⠻⠿⠷⠶⠶⠶⢟⡿⣯⠟⠱⠋⣰⣿⡾⠛⠉⠀⠀⠀⠀⠀⠀⠑⢝⢶⣄⠀⠀⠈⠿⢿⣛⠿⢶⣶⣶⣿⣴⡾⠟⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣀⣀⣀⣀⡤⠴⠒⠉⠈⠑⠋⢸⣹⡟⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠑⢾⣷⣤⣀⠀⠀⠙⢿⣿⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⢀⣠⢄⠀⠿⠟⠛⠛⠛⠛⠛⠛⠂⠀⠀⠀⠀⠀⠀⢀⣤⡾⠞⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠻⢽⡳⢤⣀⠀⠈⠛⠻⠷⢶⣦⣶⣶⣶⣦⣤⣤⣤⣤⣄⣀⠀⠀⠀
⠉⠚⠁⠀⢀⣀⣤⣤⣤⣤⣤⣤⣤⣀⣀⣠⣤⠤⠾⠋⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠓⠿⣷⣦⣄⣀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠉⠉⠙⠓⠀⢀
⢺⡄⢀⡾⠛⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠉⠛⠛⠻⠿⠛⠛⠛⠛⠛⠛⠻⢶⣦⣄⠀⠀⠀
⢾⡷⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⢯⡀⣼⠃
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀`;

function Nav() {
  return (
    <nav className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] items-center gap-y-2 text-lg font-normal">
      <Link to="/" className="no-underline leading-snug justify-self-start">
        <div>Camille Elliott</div>
        <div className="text-neutral-500">Frontend Developer &amp; UI Designer</div>
      </Link>

      <pre className="justify-self-center text-[2.5px] leading-[3px] md:text-[5px] md:leading-[6px] font-mono text-neutral-500">
        {ASCII_ART}
      </pre>

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
