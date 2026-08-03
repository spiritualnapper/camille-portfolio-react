import { Link } from "react-router-dom";
import { PROJECTS } from "../data/projects";

function Home() {
  return (
    <section className="w-full">
      <div className="max-w-3xl mx-auto space-y-16">
        {PROJECTS.map((project) => (
          <div key={project.id} className="group block">
            <div className="relative overflow-hidden">
              <img
                src={project.stillImage}
                alt={project.title}
                className="block w-full h-auto"
              />
              <Link
                to={`/work/${project.id}`}
                className="absolute bottom-3 right-3 z-10 text-xs text-white bg-black/60 px-2 py-1 no-underline hover:underline opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                View case study &rarr;
              </Link>
            </div>
            <div className="mt-4">
              <h3 className="text-base font-normal">{project.title}</h3>
              <p className="text-sm text-neutral-500 mt-1">{project.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Home;
