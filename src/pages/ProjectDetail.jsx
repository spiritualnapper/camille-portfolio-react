import { Link, Navigate, useParams } from "react-router-dom";
import { PROJECTS } from "../data/projects";

function ProjectDetail() {
  const { id } = useParams();
  const project = PROJECTS.find((p) => p.id === id);

  if (!project) {
    return <Navigate to="/work" replace />;
  }

  return (
    <div className="w-full mt-24 scroll-mt-20">
      <Link to="/work" className="block text-sm text-neutral-500 hover:underline">
        &larr; Back to Work
      </Link>

      <section className="mt-10 max-w-3xl mx-auto">
        <h2 className="mb-6 text-sm font-normal text-neutral-500 uppercase tracking-widest">
          {project.title}
        </h2>

        <div className="flex flex-col md:flex-row md:items-start justify-center gap-2">
          {project.detailVideos.map((video, i) => (
            <video
              key={i}
              src={video}
              autoPlay
              loop
              muted
              playsInline
              className="block w-full h-auto md:flex-1 md:min-w-0"
            />
          ))}
        </div>

        <div className="mt-8 max-w-2xl">
          <p className="text-sm text-neutral-500">{project.subtitle}</p>
          <p className="mt-4 text-sm md:text-base text-neutral-800 leading-relaxed">
            {project.description}
          </p>
        </div>
      </section>
    </div>
  );
}

export default ProjectDetail;
