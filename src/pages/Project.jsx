import { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

function Project({ projects }) {
  const { projectId } = useParams();
  const navigate = useNavigate(); // Use navigate to redirect
  const project = projects?.find((p) => p.id === parseInt(projectId, 10));

  useEffect(() => {
    // Redirect to error page if project not found
    if (!project) {
      navigate('/error');
    }
  }, [project, navigate]);

  useEffect(() => {
    if (project) {
      try {
        // Check if the user has given consent for analytics in localStorage
        const isConsentGiven = localStorage.getItem('cookieConsent') === 'true';

        if (isConsentGiven && window.gtag) {
          window.gtag('event', project.title);
        }
      } catch (error) {
        console.error('Analytics tracking error:', error);
      }
    }
  }, [project]);

  if (!project) {
    return null; // Return nothing while redirecting
  }

  const { id, title, problem, solution, tech, description, url, github, site } =
    project;

  return (
    <div className="p-4">
      <div className="mx-auto grid max-w-[32ch] gap-6 sm:max-w-prose md:gap-8">
        <h1 className="text-center text-2xl font-bold text-gray-800 md:text-3xl">
          {title}
        </h1>
        {url.length > 0 && (
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
        <div className="mt-4 flex flex-col items-center space-y-4">
          {site && id !== 1 && (
            <a
              className="inline-block rounded-full bg-blue-500 px-4 py-2 font-semibold text-white shadow-md transition duration-300 hover:bg-blue-600"
              href={site}
              target="_blank"
              rel="noreferrer"
              aria-label={`Visit the website for ${title}`}
              title={`Visit the website for ${title}`}
              onClick={() => {
                try {
                  if (window.fathom) {
                    window.fathom.trackEvent(
                      `PROJECTS_WEBSITE_${title
                        .replace(/[^a-zA-Z0-9_]/g, '')
                        .toUpperCase()}`,
                    );
                    console.log(
                      `Fathom Event Tracked: PROJECTS_WEBSITE_${title
                        .replace(/[^a-zA-Z0-9_]/g, '')
                        .toUpperCase()}`,
                    );
                  }
                } catch (error) {
                  console.error('Analytics tracking error:', error);
                }
              }}
            >
              Website
            </a>
          )}
          {github && id !== 4 && (
            <a
              className="inline-block rounded-full bg-blue-500 px-4 py-2 font-semibold text-white shadow-md transition duration-300 hover:bg-blue-600"
              href={github}
              target="_blank"
              rel="noreferrer"
              aria-label={`View the GitHub repository for ${title}`}
              title={`View the GitHub repository for ${title}`}
              onClick={() => {
                try {
                  if (window.fathom) {
                    window.fathom.trackEvent(
                      `PROJECTS_GITHUB_${title
                        .replace(/[^a-zA-Z0-9_]/g, '')
                        .toUpperCase()}`,
                    );
                    console.log(
                      `Fathom Event Tracked: PROJECTS_GITHUB_${title
                        .replace(/[^a-zA-Z0-9_]/g, '')
                        .toUpperCase()}`,
                    );
                  }
                } catch (error) {
                  console.error('Analytics tracking error:', error);
                }
              }}
            >
              GitHub
            </a>
          )}
          {id === 1 && (
            <p className="text-center">
              <Link
                to="/contact"
                className="inline-block rounded-full bg-blue-500 px-4 py-2 font-semibold text-white shadow-md transition duration-300 hover:bg-blue-600"
                aria-label={`Contact me for more information about ${title}`}
                title={`Contact me for more information about ${title}`}
                onClick={() => {
                  try {
                    if (window.fathom) {
                      window.fathom.trackEvent(
                        `PROJECTS_CONTACT_${title
                          .replace(/[^a-zA-Z0-9]/g, '')
                          .toUpperCase()}`,
                      );
                      console.log(
                        `Fathom Event Tracked: PROJECTS_CONTACT_${title
                          .replace(/[^a-zA-Z0-9_]/g, '')
                          .toUpperCase()}`,
                      );
                    }
                  } catch (error) {
                    console.error('Analytics tracking error:', error);
                  }
                }}
              >
                <span>Contact</span>
              </Link>
              &nbsp;me for more information!
            </p>
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
