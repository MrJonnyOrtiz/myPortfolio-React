import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function Project({ projects }) {
  const { projectId } = useParams();
  const project = projects?.find((p) => p.id === parseInt(projectId, 10));

  const { id, title, problem, solution, tech, description, url, github, site } =
    project;

  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    try {
      // Check if the user has given consent for analytics in localStorage
      const isConsentGiven = localStorage.getItem('cookieConsent') === 'true';

      if (isConsentGiven && window.gtag) {
        window.gtag('event', title);
      }
    } catch (error) {
      console.error('Analytics tracking error:', error);
    }
  }, [title]);

  // Handle cases where the project is not found
  if (!project) {
    return (
      <div className="p-4 text-center">
        <h2 className="text-2xl font-bold text-gray-800">Project not found</h2>
        <Link to="/projects" className="text-blue-500 underline">
          Return to Projects
        </Link>
      </div>
    );
  }

  return (
    <div className="p-4">
      <div className="mx-auto grid max-w-[32ch] gap-6 sm:max-w-prose md:gap-8">
        {/* Title Section */}
        <h1 className="text-center text-2xl font-bold text-gray-800 md:text-3xl">
          {title}
        </h1>

        {/* Video Section */}
        {url && (
          <div className="my-4">
            <video
              controls
              name={title}
              className="mx-auto aspect-video w-full max-w-[300px] rounded-lg shadow-md sm:max-w-[400px] md:max-w-[620px]"
              aria-label={`Video showcasing ${title}`}
            >
              <source src={url} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        )}

        {/* Description Section */}
        <div className="space-y-4 text-gray-700">
          {problem && (
            <p>
              <span className="font-semibold">Need:</span> {problem}
            </p>
          )}
          {solution && (
            <p>
              <span className="font-semibold">Solution:</span> {solution}
            </p>
          )}
          {tech && (
            <p>
              <span className="font-semibold">Technologies:</span> {tech}
            </p>
          )}
          {description && (
            <p>
              <span className="font-semibold">Description:</span> {description}
            </p>
          )}
        </div>

        {/* Links Section */}
        <div className="mt-4 flex flex-col items-center space-y-4">
          {id === 1 && (
            <p className="text-center">
              <Link to="/contact">
                <span className="inline-block rounded-full bg-green-300 px-4 py-2 font-semibold text-gray-800 shadow-md transition duration-300 hover:bg-green-400">
                  Contact
                </span>
              </Link>
              &nbsp;me for more information!
            </p>
          )}
          {site && id !== 1 && (
            <a
              className="inline-block rounded-full bg-green-300 px-4 py-2 font-semibold text-gray-800 shadow-md transition duration-300 hover:bg-green-400"
              href={site}
              target="_blank"
              rel="noreferrer"
              aria-label={`Visit the website for ${title}`}
            >
              Website
            </a>
          )}
          {github && id !== 1 && id !== 4 && (
            <a
              className="inline-block rounded-full bg-green-300 px-4 py-2 font-semibold text-gray-800 shadow-md transition duration-300 hover:bg-green-400"
              href={github}
              target="_blank"
              rel="noreferrer"
              aria-label={`View the GitHub repository for ${title}`}
            >
              GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

Project.propTypes = {
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      problem: PropTypes.string,
      solution: PropTypes.string,
      tech: PropTypes.string,
      description: PropTypes.string,
      url: PropTypes.string,
      github: PropTypes.string,
      site: PropTypes.string,
    }),
  ).isRequired,
};

export default Project;
