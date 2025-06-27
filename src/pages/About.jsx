import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import headshot from '../assets/headshot.smallerSize.webp';
import { skills, education } from '../../data.js';
import ScrollToTop from '../components/ScrollToTop';

export default function About() {
  useEffect(() => {
    try {
      const isConsentGiven = localStorage.getItem('cookieConsent') === 'true';
      if (isConsentGiven && window.gtag) {
        window.gtag('event', 'aboutPage');
      }
    } catch (error) {
      console.error('Analytics tracking error:', error);
    }
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="grid gap-8 p-4 text-center">
      <h2 className="text-3xl font-bold text-gray-800 md:text-5xl lg:text-7xl">
        About Me
      </h2>

      <div className="sm:hidden">
        <img
          className="animate-fade-in mx-auto my-3 rounded-full shadow-lg"
          src={headshot}
          alt="Jonny Ortiz smiling headshot"
          width="150"
          height="150"
        />
      </div>

      <ul className="grid gap-8 text-lg text-gray-700 md:text-xl lg:text-2xl">
        <li className="mx-auto max-w-prose">
          Hi there! I&apos;m a tech enthusiast who loves exploring new
          technologies, tools, and practices. Below, you&apos;ll find a few of
          my favorite skills and experiences.
        </li>
        <li className="mx-auto max-w-prose">
          My academic journey, paired with hands-on experience, has equipped me
          with a versatile skill set. I&apos;m always eager to tackle exciting
          challenges and create meaningful solutions.
        </li>
        <li className="mx-auto max-w-prose">
          Looking for a partner to bring your digital vision to life?&nbsp;
          <Link to="/contact">
            <span className="inline-block rounded-full bg-blue-500 px-3 py-2 font-semibold text-white shadow-md transition duration-300 hover:bg-blue-600">
              Let&apos;s Chat!
            </span>
          </Link>
        </li>
      </ul>

      {/* Skills Section */}
      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((skillCategory, index) => (
          <div
            key={index}
            className="w-auto transform rounded-lg bg-white/90 p-6 shadow-lg transition duration-300 hover:scale-105"
          >
            <h3 className="mb-2 border-b pb-1 text-lg font-bold text-gray-800">
              {Object.keys(skillCategory)[0]}
            </h3>
            <ul className="text-gray-700">
              {skillCategory[Object.keys(skillCategory)[0]]
                .split(', ')
                .map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
            </ul>
          </div>
        ))}

        <div className="w-auto transform rounded-lg bg-white/90 p-6 shadow-lg transition duration-300 hover:scale-105">
          <h3 className="mb-2 border-b pb-1 text-lg font-bold text-gray-800">
            education
          </h3>
          <ul className="text-gray-700">
            {education.map((school, index) => (
              <li className="pb-2" key={index}>
                {school}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* LinkedIn Profile Button */}
      <div className="mx-auto mt-4 sm:hidden">
        <a
          href="https://www.linkedin.com/in/jonny-ortiz/"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn Profile"
        >
          <svg
            role="img"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 fill-current text-blue-600 transition duration-300 hover:text-blue-400"
          >
            <title>LinkedIn</title>
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
        </a>
      </div>
      <ScrollToTop />
    </div>
  );
}
