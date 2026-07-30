import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { PROJECTS } from "../data/projects";

function Home() {
  const [hoveredId, setHoveredId] = useState(null);
  const videoRefs = useRef({});

  const handleEnter = (id) => {
    setHoveredId(id);
    const video = videoRefs.current[id];
    if (video) {
      video.currentTime = 0;
      video.play();
    }
  };

  const handleLeave = (id) => {
    setHoveredId(null);
    const video = videoRefs.current[id];
    if (video) {
      video.pause();
      video.currentTime = 0;
    }
  };

  return (
    <section className="w-full">
      <div className="max-w-3xl mx-auto space-y-16">
        {PROJECTS.map((project) => (
          <div
            key={project.id}
            className="group block"
            onMouseEnter={() => handleEnter(project.id)}
            onMouseLeave={() => handleLeave(project.id)}
          >
            <div className="relative overflow-hidden">
              <img
                src={project.stillImage}
                alt={project.title}
                className={`block w-full h-auto transition-opacity duration-300 ${
                  hoveredId === project.id ? "opacity-0" : "opacity-100"
                }`}
              />
              <video
                ref={(el) => (videoRefs.current[project.id] = el)}
                src={project.previewVideo}
                muted
                loop
                playsInline
                className={`absolute inset-0 block w-full h-full object-cover transition-opacity duration-300 ${
                  hoveredId === project.id ? "opacity-100" : "opacity-0"
                }`}
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
