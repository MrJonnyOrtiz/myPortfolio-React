import { useEffect } from 'react';

import Card from '../components/Card';

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

  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="grid gap-8 p-4">
      <h1 className="text-center text-3xl font-bold text-gray-800 md:text-5xl lg:text-7xl">
        Projects
      </h1>
      <ul className="my-5 grid gap-8 lg:grid-cols-2">
        {projects.map((project) => (
          <Card page="projects" data={project} key={project.title} />
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
