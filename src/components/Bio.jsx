import { Link } from 'react-router-dom';
import headshot from '../assets/headshot.smallerSize.webp';

export default function Bio() {
  return (
    <>
      <img
        src={headshot}
        className="mx-auto h-auto w-1/2 rounded-xl sm:hidden"
      />
      <ul className="grid gap-8 text-xl md:text-2xl lg:text-4xl">
        <li className="mx-auto max-w-prose">
          I&apos;m a Full Stack Web Developer with a passion for creating
          intuitive and functional web applications that provide a value-added
          solution to a business need.
        </li>
        <li className="mx-auto max-w-prose">
          I&apos;m a lifelong learner keen to explore new technologies, tools,
          and practices to continuously expand my skill set. I specialize in
          serverless React apps on AWS at the moment.
        </li>
        <li>
          <Link to="/projects">
            <div className="mx-auto w-fit max-w-prose animate-pulse rounded-xl bg-[#ff914d] px-6 py-3 font-semibold text-[#0030ff] shadow-xl hover:animate-none hover:bg-white hover:text-black">
              Check out my latest projects!
            </div>
          </Link>
        </li>
      </ul>
    </>
  );
}
