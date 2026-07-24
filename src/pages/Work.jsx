import { Link } from "react-router-dom";
import { PROJECTS } from "../data/projects";

function Work() {
  return (
    <section id="work" className="mt-24 scroll-mt-20">
      <h2 className="text-sm font-normal mb-6 text-neutral-500 uppercase tracking-widest">Work</h2>
      <div className="max-w-3xl space-y-16">
        {PROJECTS.map((project) => (
          <Link key={project.id} to={`/work/${project.id}`} className="group block">
            <img
              src={project.stillImage}
              alt={project.title}
              className="block w-full h-auto group-hover:opacity-90 transition-opacity"
            />
            <div className="mt-4">
              <h3 className="text-base font-normal">{project.title}</h3>
              <p className="text-sm text-neutral-500 mt-1">{project.subtitle}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Work;
