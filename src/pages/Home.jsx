import { Link } from "react-router-dom";
import { PROJECTS } from "../data/projects";

function Home() {
  return (
    <section className="w-full">
      <div className="max-w-3xl mx-auto space-y-16">
        {PROJECTS.map((project) => (
          <Link key={project.id} to={`/work/${project.id}`} className="group block">
            <div className="overflow-hidden">
              <img
                src={project.stillImage}
                alt={project.title}
                className="block w-full h-auto transition-transform duration-500 ease-out group-hover:scale-[1.04]"
              />
            </div>
            <div className="mt-4">
              <h3 className="text-base font-normal group-hover:underline underline-offset-4">
                {project.title}
              </h3>
              <p className="text-sm text-neutral-500 mt-1">{project.subtitle}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Home;
