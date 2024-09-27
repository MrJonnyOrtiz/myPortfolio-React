import { useEffect } from 'react';
import { Link } from 'react-router-dom';

function PageNotFound() {
  useEffect(() => {
    // Check if the user has given consent for analytics in localStorage
    try {
      // Check if the user has given consent for analytics in localStorage
      const isConsentGiven = localStorage.getItem('cookieConsent') === 'true';

      if (isConsentGiven && window.gtag) {
        window.gtag('event', 'pageNotFoundPage');
      }
    } catch (error) {
      console.error('Analytics tracking error:', error);
    }
  }, []);

  return (
    <div className="grid gap-8 p-3 text-center">
      <h1 className="text-3xl font-bold text-[#00bf63] lg:text-6xl">404</h1>

      <h6 className="text-center text-2xl font-bold text-gray-800 md:text-3xl">
        <span className="text-red-700">Oops!</span>
        <span className="text-white"> Page not found.</span>
      </h6>

      <p className="text-center text-white md:text-lg">
        The page you&apos;re looking for doesn&apos;t exist.
      </p>

      <Link
        to="/"
        className="mx-auto my-3 w-fit animate-pulse rounded bg-white px-6 py-3 font-bold text-black hover:bg-gray-700 hover:text-white"
      >
        Go home
      </Link>
    </div>
  );
}

export default PageNotFound;
