import { NavLink } from "react-router-dom";
import { PROJECTS } from "../data/projects";

const linkClass = ({ isActive }) => `no-underline hover:underline ${isActive ? "italic" : ""}`;

function ProjectList() {
  return (
    <ul className="pl-16 space-y-20 m-0 list-none text-lg">
      {PROJECTS.map((project) => (
        <li key={project.id}>
          <NavLink to={`/work/${project.id}`} className={linkClass}>
            {project.title}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}

export default ProjectList;
