import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

import PropTypes from 'prop-types';

function Project({ projects }) {
  const { projectId } = useParams();
  const project = projects?.find((p) => p.id === +projectId);

  const { id, title, problem, solution, tech, description, url, github, site } =
    project;

  useEffect(() => {
    try {
      // Check if the user has given consent for analytics in localStorage
      const isConsentGiven = localStorage.getItem('cookieConsent') === 'true';

      if (isConsentGiven && window.gtag) {
        window.gtag('event', `${project.title}`);
      }
    } catch (error) {
      console.error('Analytics tracking error:', error);
    }
  }, [project.title]);

  return (
    <div className="p-4">
      <div className="mx-auto grid max-w-[32ch] gap-6 sm:max-w-prose md:gap-8">
        <h1 className="text-center text-2xl font-bold text-gray-800 md:text-3xl">
          {title}
        </h1>
        <div className="my-4">
          <video
            controls
            name={title}
            className="mx-auto aspect-video w-[300px] rounded-lg shadow-md sm:w-[400px] md:w-[620px]"
          >
            <source src={url} type="video/mp4" />
          </video>
        </div>
        <p className="text-gray-700">
          <span className="font-semibold">Need</span>: {problem}
        </p>
        <p className="text-gray-700">
          <span className="font-semibold">Solution</span>: {solution}
        </p>
        <p className="text-gray-700">
          <span className="font-semibold">Technologies</span>: {tech}
        </p>
        <p className="text-gray-700">
          <span className="font-semibold">Description</span>: {description}
        </p>
        {id !== 1 ? (
          <>
            <div className="text-center">
              <a
                className="inline-block rounded-full bg-green-300 px-4 py-2 font-semibold text-gray-800 shadow-md transition duration-300 hover:bg-green-400"
                href={site}
                target="_blank"
                rel="noreferrer"
              >
                Website
              </a>
            </div>
            {id !== 4 && (
              <div className="mt-4 text-center">
                <a
                  className="inline-block rounded-full bg-green-300 px-4 py-2 font-semibold text-gray-800 shadow-md transition duration-300 hover:bg-green-400"
                  href={github}
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              </div>
            )}
          </>
        ) : (
          <p className="py-4 text-center">
            <Link to="/contact">
              <span className="inline-block rounded-full bg-green-300 px-4 py-2 font-semibold text-gray-800 shadow-md transition duration-300 hover:bg-green-400">
                Contact
              </span>
            </Link>
            &nbsp;me for more information!
          </p>
        )}
      </div>
    </div>
  );
}

export default Project;

Project.propTypes = {
  projects: PropTypes.array.isRequired,
};
