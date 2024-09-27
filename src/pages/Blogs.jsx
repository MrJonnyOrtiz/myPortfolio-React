import { useEffect } from 'react';
import { blogs } from '../../data.js';

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

  return (
    <div className="grid gap-8 text-center">
      <h2 className="text-3xl md:text-5xl lg:text-7xl">Blog posts</h2>
      <ul className="grid gap-8">
        {blogs.map((blog) => (
          <a key={blog.title} href={blog.link} target="_blank" rel="noreferrer">
            <li className="mx-auto grid max-w-prose gap-3 rounded-xl border px-6 py-3 shadow-xl hover:bg-white hover:text-black ">
              <div className="text-xl md:text-2xl lg:text-4xl">
                {blog.title}
              </div>
              <div className="md:text-xl">&quot;{blog.description}&quot;</div>
              <div>Published: {blog.published}</div>
              <div>{blog.length}</div>
            </li>
          </a>
        ))}
      </ul>
      <a
        href="https://www.sarasotaremodeling.com/blog"
        target="_blank"
        rel="noreferrer"
        className="mx-auto inline-block w-fit rounded-full bg-green-300 px-4 py-2 font-semibold text-gray-800 shadow-md transition duration-300 hover:bg-green-400"
      >
        More articles for a client
      </a>
    </div>
  );
}

export default Blogs;
