import { useEffect } from 'react';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';

function Projects({ projects }) {
  useEffect(() => {
    try {
      // Check if the user has given consent for analytics in localStorage
      const isConsentGiven = localStorage.getItem('cookieConsent') === 'true';

      if (isConsentGiven && window.gtag) {
        window.gtag('event', 'projectsPage');
      }
    } catch (error) {
      console.error('Analytics tracking error:', error);
    }
  }, []);

  return (
    <div className="grid gap-8 p-4">
      <h1 className="text-center text-3xl font-bold text-gray-800 md:text-5xl lg:text-7xl">
        Projects
      </h1>
      <h2 className="animate-pulse text-center text-xl font-semibold text-gray-700">
        Click on a project for more details!
      </h2>
      <ul className="my-5 grid gap-8 lg:grid-cols-2">
        {projects.map((project) => (
          <li
            key={project.id}
            className="grid gap-4 rounded-lg bg-white/90 p-5 shadow-lg transition duration-300 hover:shadow-xl"
          >
            <Link to={`/projects/${project.id}`}>
              <p className="py-2 text-center text-2xl font-bold text-gray-800">
                {project.title}
              </p>
              <p className="py-2 text-gray-700">
                <span className="font-semibold">Need</span>: {project.problem}
              </p>
              <p className="py-2 text-gray-700">
                <span className="font-semibold">Solution</span>:{' '}
                {project.solution}
              </p>
              <p className="py-2 text-gray-700">
                <span className="font-semibold">Technologies</span>:{' '}
                {project.tech}
              </p>
              <div className="my-3 flex justify-center">
                <video
                  controls
                  name={project.title}
                  className="aspect-video rounded-lg shadow-md"
                >
                  <source src={project.url} type="video/mp4" />
                </video>
              </div>
            </Link>
          </li>
        ))}
      </ul>
      <p className="text-center text-xl text-gray-800">More to come!</p>
    </div>
  );
}

export default Projects;

Projects.propTypes = {
  projects: PropTypes.array.isRequired,
};
