import { Link, Navigate, useParams } from "react-router-dom";
import { PROJECTS } from "../data/projects";

function groupMedia(media) {
  const rows = [];
  let halfBuffer = [];

  media.forEach((item) => {
    if (item.width === "half") {
      halfBuffer.push(item);
      if (halfBuffer.length === 2) {
        rows.push(halfBuffer);
        halfBuffer = [];
      }
    } else {
      if (halfBuffer.length) {
        rows.push(halfBuffer);
        halfBuffer = [];
      }
      rows.push([item]);
    }
  });

  if (halfBuffer.length) rows.push(halfBuffer);

  return rows;
}

function MediaItem({ item, alt, standalone }) {
  const className = standalone
    ? item.width === "quarter"
      ? "block w-1/4 mx-auto h-auto"
      : "block w-full h-auto"
    : "block w-full h-auto";

  return item.type === "video" ? (
    <video src={item.src} autoPlay loop muted playsInline className={className} />
  ) : (
    <img src={item.src} alt={alt} className={className} />
  );
}

function ProjectDetail() {
  const { id } = useParams();
  const project = PROJECTS.find((p) => p.id === id);

  if (!project) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="w-full mt-24 scroll-mt-20">
      <Link to="/" className="block text-sm text-neutral-500 hover:underline">
        &larr; Back
      </Link>

      <section className="mt-10 max-w-3xl mx-auto">
        <h2 className="mb-6 text-sm font-normal text-neutral-500 uppercase tracking-widest">
          {project.title}
        </h2>

        <div className="flex flex-col gap-6">
          {groupMedia(project.media).map((row, i) =>
            row.length === 2 ? (
              <div key={i} className="flex gap-6">
                {row.map((item, j) => (
                  <div key={j} className="flex-1">
                    <MediaItem item={item} alt={`${project.title} detail ${i}-${j}`} />
                  </div>
                ))}
              </div>
            ) : (
              <MediaItem key={i} item={row[0]} alt={`${project.title} detail ${i}`} standalone />
            )
          )}
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
