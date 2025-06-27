import { useEffect } from 'react';
import { blogs } from '../../data.js';
import Card from '../components/Card';
import ScrollToTop from '../components/ScrollToTop';

function Blogs() {
  useEffect(() => {
    try {
      // Check if the user has given consent for analytics in localStorage
      const isConsentGiven = localStorage.getItem('cookieConsent') === 'true';

      if (isConsentGiven && window.gtag) {
        window.gtag('event', 'blogsPage');
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
    <div className="grid gap-8 p-4 text-center">
      <h2 className="text-3xl font-bold text-gray-800 md:text-5xl lg:text-7xl">
        Insights & Inspiration
      </h2>
      <ul className="my-5 grid gap-8 lg:grid-cols-2">
        {blogs.map((blog) => (
          <Card page="blogs" data={blog} key={blog.title} />
        ))}
      </ul>
      <a
        href="https://www.sarasotaremodeling.com/blog"
        target="_blank"
        rel="noreferrer"
        className="mx-auto inline-block w-fit rounded-full bg-blue-500 px-4 py-2 font-semibold text-white shadow-md transition duration-300 hover:bg-blue-600"
        aria-label="Visit Client's blog for more articles"
        title="Visit Client's blog for more articles"
        onClick={() => {
          try {
            if (window.fathom) {
              window.fathom.trackEvent('BLOGS_CLIENT_BLOGS');
            }
          } catch (error) {
            console.error('Analytics tracking error:', error);
          }
        }}
      >
        Client blogs
      </a>
      <ScrollToTop />
    </div>
  );
}

export default Blogs;
