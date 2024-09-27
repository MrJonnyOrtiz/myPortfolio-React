// import { useEffect } from 'react';
// import { Link } from 'react-router-dom';

// import headshot from '../assets/headshot.smallerSize.webp';

// const skills = [
//   {
//     technologies:
//       'HTML5, CSS3, Javascript(ES6+), React.js, Rails (exploring), AWS',
//   },
//   {
//     tools: 'Git, Docker, Kanban, Business Process Modeling and Notation',
//   },
//   {
//     practices: 'Responsive design, RESTful API design, CI/CD pipeline',
//   },
// ];

// const education = [
//   'B.S. Computer Science, State University of New York, New Paltz',
//   'Software Engineering, State College of Florida powered by Flatiron School',
// ];

// export default function About() {
//   useEffect(() => {
//     // Check if the user has given consent for analytics in localStorage
//     const isConsentGiven = localStorage.getItem('cookieConsent') === 'true';

//     if (isConsentGiven && window.gtag) {
//       window.gtag('event', 'aboutPage');
//     }
//   }, []);

//   return (
//     <div className="grid gap-8 text-center">
//       <h2 className="text-3xl md:text-5xl lg:text-7xl">About me</h2>

//       <div className="sm:hidden">
//         <img
//           className="mx-auto my-3 rounded-lg"
//           src={headshot}
//           alt="Jonny Ortiz head shot"
//           width="150px"
//           height="150px"
//         />
//       </div>

//       <ul className="grid gap-8 text-xl md:text-2xl lg:text-4xl">
//         <li className="mx-auto max-w-prose ">
//           I have a strong command of the below technologies, tools, and
//           practices.
//         </li>
//         <li className="mx-auto max-w-prose ">
//           My academic background, combined with my practical experience, equips
//           me with a well-rounded skill set to tackle diverse challenges.
//         </li>
//         <li className="mx-auto max-w-prose ">
//           I&apos;m always open to new opportunities, collaborations, and
//           exciting projects so if you&apos;re looking for a solution-oriented
//           partner with the experience to understand your needs and make your
//           digital vision a reality,{' '}
//           <Link to="/contact">
//             <span className="animate-pulse rounded-xl bg-[#ff914d] px-2 py-1 hover:animate-none hover:bg-white hover:text-black md:py-0 ">
//               contact me!
//             </span>
//           </Link>
//         </li>
//       </ul>

//       <div className="mx-auto mt-5 w-fit rounded-xl border p-3 shadow-2xl">
//         <h3 className="mx-auto mb-2 w-fit border-b text-lg">Technologies</h3>
//         <ul>
//           {skills.map((skill, index) => (
//             <li className="" key={index}>
//               {skill.technologies}
//             </li>
//           ))}
//         </ul>
//       </div>

//       <div className="mx-auto w-fit rounded-xl border p-3 shadow-2xl">
//         <h3 className="mx-auto mb-2 w-fit border-b text-lg">Tools</h3>
//         <ul>
//           {skills.map((skill, index) => (
//             <li className="" key={index}>
//               {skill.tools}
//             </li>
//           ))}
//         </ul>
//       </div>

//       <div className="mx-auto w-fit rounded-xl border p-3 shadow-2xl">
//         <h3 className="mx-auto mb-2 w-fit border-b  text-lg">Practices</h3>
//         <ul>
//           {skills.map((skill, index) => (
//             <li className="" key={index}>
//               {skill.practices}
//             </li>
//           ))}
//         </ul>
//       </div>

//       <div className="mx-auto w-fit rounded-xl border p-3 shadow-2xl">
//         <h3 className="mx-auto mb-2 w-fit border-b  text-lg">Education</h3>
//         <ul>
//           {education.map((school) => (
//             <li className="pb-2 " key={school}>
//               {school}
//             </li>
//           ))}
//         </ul>
//       </div>

//       <div className="mx-auto w-1/5  rounded-xl sm:hidden">
//         <a
//           href="https://www.linkedin.com/in/jonny-ortiz/"
//           target="_blank"
//           rel="noreferrer"
//         >
//           <svg
//             role="img"
//             viewBox="0 0 24 24"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <title>LinkedIn</title>
//             <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
//           </svg>
//         </a>
//       </div>
//     </div>
//   );
// }

import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import headshot from '../assets/headshot.smallerSize.webp';

const skills = [
  {
    technologies:
      'HTML5, CSS3, Javascript (ES6+), React.js, Rails (exploring), AWS',
  },
  { tools: 'Git, Docker, Kanban, Business Process Modeling and Notation' },
  { practices: 'Responsive design, RESTful API design, CI/CD pipeline' },
];

const education = [
  'B.S. Computer Science, State University of New York, New Paltz',
  'Software Engineering, State College of Florida powered by Flatiron School',
];

export default function About() {
  useEffect(() => {
    try {
      // Check if the user has given consent for analytics in localStorage
      const isConsentGiven = localStorage.getItem('cookieConsent') === 'true';

      if (isConsentGiven && window.gtag) {
        window.gtag('event', 'aboutPage');
      }
    } catch (error) {
      console.error('Analytics tracking error:', error);
    }
  }, []);

  return (
    <div className="grid gap-8 p-4 text-center">
      <h2 className="text-3xl font-bold text-gray-800 md:text-5xl lg:text-7xl">
        About Me
      </h2>

      <div className="sm:hidden">
        <img
          className="mx-auto my-3 rounded-full shadow-md"
          src={headshot}
          alt="Jonny Ortiz head shot"
          width="150"
          height="150"
        />
      </div>

      <ul className="grid gap-8 text-lg text-gray-700 md:text-xl lg:text-2xl">
        <li className="mx-auto max-w-prose">
          I have a strong command of the below technologies, tools, and
          practices.
        </li>
        <li className="mx-auto max-w-prose">
          My academic background, combined with my practical experience, equips
          me with a well-rounded skill set to tackle diverse challenges.
        </li>
        <li className="mx-auto max-w-prose">
          I&apos;m always open to new opportunities, collaborations, and
          exciting projects. If you&apos;re looking for a solution-oriented
          partner with the experience to understand your needs and make your
          digital vision a reality,&nbsp;
          <Link to="/contact">
            <span className="inline-block rounded-full bg-green-300 px-3 py-2 font-semibold text-gray-800 shadow-md transition duration-300 hover:bg-green-400">
              contact me!
            </span>
          </Link>
        </li>
      </ul>

      {/* Skills section with responsive design */}
      <div className="flex flex-wrap items-start gap-3">
        <div className="mx-auto w-auto rounded-lg bg-white/90 p-4 shadow-lg">
          <h3 className="mb-2 border-b text-lg font-bold text-gray-800">
            Technologies
          </h3>
          <ul className="text-gray-700">
            {skills[0].technologies.split(', ').map((tech, index) => (
              <li key={index}>{tech}</li>
            ))}
          </ul>
        </div>

        <div className="mx-auto w-auto rounded-lg bg-white/90 p-4 shadow-lg">
          <h3 className="mb-2 border-b text-lg font-bold text-gray-800">
            Tools
          </h3>
          <ul className="text-gray-700">
            {skills[1].tools.split(', ').map((tool, index) => (
              <li key={index}>{tool}</li>
            ))}
          </ul>
        </div>

        <div className="mx-auto w-auto rounded-lg bg-white/90 p-4 shadow-lg">
          <h3 className="mb-2 border-b text-lg font-bold text-gray-800">
            Practices
          </h3>
          <ul className="text-gray-700">
            {skills[2].practices.split(', ').map((practice, index) => (
              <li key={index}>{practice}</li>
            ))}
          </ul>
        </div>

        <div className="mx-auto w-auto rounded-lg bg-white/90 p-4 shadow-lg">
          <h3 className="mb-2 border-b text-lg font-bold text-gray-800">
            Education
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

      <div className="mx-auto mt-4 w-1/5 sm:hidden">
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
            className="h-8 w-8 fill-current text-gray-800 transition duration-300 hover:text-green-400"
          >
            <title>LinkedIn</title>
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
        </a>
      </div>
    </div>
  );
}
