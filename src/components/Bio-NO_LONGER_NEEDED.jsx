// import { Link } from 'react-router-dom';
// import headshot from '../assets/headshot.smallerSize.webp';

// export default function Bio() {
//   return (
//     <>
//       <img
//         src={headshot}
//         className="mx-auto h-auto w-1/2 rounded-xl sm:hidden"
//         alt="Jonny Ortiz headshot"
//       />
//       <ul className="grid gap-8 text-xl md:text-2xl lg:text-4xl">
//         <li className="mx-auto max-w-prose">
//           Full Stack Developer passionate about creating intuitive, functional
//           web apps that solve business needs.{' '}
//         </li>
//         <li className="mx-auto max-w-prose">
//           Lifelong learner specializing in serverless React apps on AWS.
//         </li>
//         <li>
//           <Link to="/projects">
//             <div className="mx-auto w-fit max-w-prose animate-pulse rounded-xl bg-[#ff914d] px-6 py-3 font-semibold text-[#0030ff] shadow-xl hover:animate-none hover:bg-white hover:text-black">
//               Check out my latest projects!
//             </div>
//           </Link>
//         </li>
//       </ul>
//     </>
//   );
// }

import { Link } from 'react-router-dom';
import headshot from '../assets/headshot.smallerSize.webp';

export default function Bio() {
  return (
    <section className="space-y-8">
      <img
        src={headshot}
        className="mx-auto h-auto w-1/3 rounded-full sm:hidden"
        alt="Jonny Ortiz smiling headshot"
      />
      <ul className="grid gap-6 text-lg text-gray-700 md:text-xl lg:text-2xl">
        <li className="mx-auto max-w-2xl">
          I&apos;m a Full Stack Developer with a passion for building
          user-friendly web apps that make life easier.
        </li>
        <li className="mx-auto max-w-2xl">
          A lifelong learner, currently specializing in serverless React
          applications on AWS.
        </li>
        <li>
          <Link to="/projects">
            <div className="mx-auto w-fit max-w-2xl rounded-lg bg-orange-300 px-6 py-3 font-medium text-blue-800 shadow-md transition duration-300 hover:bg-orange-400 hover:text-blue-900">
              Explore My Latest Projects
            </div>
          </Link>
        </li>
      </ul>
    </section>
  );
}
