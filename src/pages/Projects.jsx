/* eslint-disable react/prop-types */
import { useEffect } from 'react';

import { Link } from 'react-router-dom';

function Projects({ projects }) {
  useEffect(() => {
    window.gtag('event', 'projectsPage');
  }, []);

  return (
    <div className="grid gap-8">
      <h1 className="text-center text-3xl">Projects</h1>
      <h2 className="animate-pulse text-center text-xl font-semibold">
        Click on a project for more details!
      </h2>
      <ul className="my-5 grid gap-8 lg:grid-cols-2">
        {projects.map((project) => (
          <li
            key={project.id}
            className="grid gap-8 rounded-xl border p-5 shadow-xl"
          >
            <Link to={`/projects/${project.id}`}>
              <p className="text-center text-xl font-bold">{project.title}</p>
              <p>
                <span className="font-semibold">Need</span>: {project.problem}
              </p>
              <p>
                <span className="font-semibold">Solution</span>:{' '}
                {project.solution}
              </p>
              <p>
                <span className="font-semibold">Technologies</span>:{' '}
                {project.tech}
              </p>

              <div className="my-3 flex justify-center">
                <video controls name={project.title} className="aspect-video">
                  <source src={project.url} type="video/mp4" />
                </video>
              </div>
            </Link>
          </li>
        ))}
      </ul>
      <p className="text-center text-xl">More to come!</p>
    </div>
  );
}

export default Projects;
