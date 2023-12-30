/* eslint-disable react/prop-types */
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Project({ projects }) {
  const { projectId } = useParams();

  const project = projects?.find((p) => p.id === +projectId);

  const { title, problem, solution, tech, description, url, github, site } =
    project;

  useEffect(() => {
    window.gtag('event', `${project.title}`);
  }, [project.title]);

  return (
    <div>
      <div className="mx-auto grid max-w-[32ch] gap-6 sm:max-w-prose md:gap-8">
        <h1 className="max-w-[32ch] text-center text-xl font-bold sm:max-w-prose md:text-3xl">
          {title}
        </h1>
        <div>
          <video
            controls
            name={title}
            className="mx-auto aspect-video h-auto w-[300px] sm:w-[400px] md:w-[620px]"
          >
            <source src={url} type="video/mp4" />
          </video>
        </div>
        <p className="max-w-[32ch] sm:max-w-prose">
          <span className="font-semibold">Need</span>: {problem}
        </p>
        <p className="max-w-[32ch] sm:max-w-prose">
          <span className="font-semibold">Solution</span>: {solution}
        </p>
        <p className="max-w-[32ch] sm:max-w-prose">
          <span className="font-semibold">Technologies</span>: {tech}
        </p>
        <p className="max-w-[32ch] sm:max-w-prose">
          <span className="font-semibold">Description</span>: {description}
        </p>
        <p className="mx-auto max-w-[32ch] sm:max-w-prose">
          <a
            className=" animate-pulse rounded-xl bg-[#ff914d] px-4 py-2 font-semibold text-[#0030ff] shadow-xl hover:animate-none hover:bg-white hover:text-black"
            href={site}
            target="_blank"
            rel="noreferrer"
          >
            Website
          </a>
        </p>
        <p className="mx-auto max-w-[32ch] sm:max-w-prose">
          <a
            className="animate-pulse rounded-xl bg-[#ff914d] px-4 py-2 font-semibold text-[#0030ff] shadow-xl hover:animate-none hover:bg-white hover:text-black"
            href={github}
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
        </p>
      </div>
    </div>
  );
}

export default Project;
