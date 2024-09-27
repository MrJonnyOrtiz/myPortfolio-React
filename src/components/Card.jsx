import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function Card({ page, data }) {
  // Determine the link target
  const linkTarget = page === 'projects' ? `/${page}/${data.id}` : data.url;

  return (
    <li
      key={data.id}
      className="flex flex-col gap-2 rounded-lg bg-white/90 p-3 shadow-md transition duration-300  hover:shadow-lg"
    >
      {/* Title Section */}
      <div className="border-b pb-1">
        <h2 className="text-center text-lg font-semibold text-gray-800">
          {data.title}
        </h2>
      </div>

      {/* Video Section for Projects */}
      {page === 'projects' && data.url && (
        <div className="my-2 flex justify-center">
          <video
            controls
            name={data.title}
            className="aspect-video w-40 rounded-md shadow-sm"
          >
            <source src={data.url} type="video/mp4" />
          </video>
        </div>
      )}

      {/* Description Section */}
      {page === 'projects' && (
        <div className="space-y-1 text-sm">
          <p className="text-gray-700">
            <span className="font-semibold">Need</span>: {data.problem}
          </p>
          <p className="text-gray-700">
            <span className="font-semibold">Solution</span>: {data.solution}
          </p>
          <p className="text-gray-700">
            <span className="font-semibold">Tech</span>: {data.tech}
          </p>
        </div>
      )}

      {page === 'blogs' && (
        <div className="space-y-1 text-sm">
          <p className="italic text-gray-700">&quot;{data.description}&quot;</p>
          <p className="text-gray-700">Published: {data.published}</p>
          <p className="text-gray-700">{data.length}</p>
        </div>
      )}

      {/* Visual Cue for More Details */}
      <div className="mt-3 flex justify-center">
        {page === 'projects' ? (
          <Link
            to={linkTarget}
            className="mx-auto w-fit rounded-full bg-green-300 px-4 py-2 font-semibold text-gray-800 shadow-md transition duration-300 hover:bg-green-400"
          >
            Read more
            <span className="text-base">→</span>
          </Link>
        ) : (
          <a
            href={linkTarget}
            target="_blank"
            rel="noreferrer"
            className="mx-auto w-fit rounded-full bg-green-300 px-4 py-2 font-semibold text-gray-800 shadow-md transition duration-300 hover:bg-green-400"
          >
            Read more
            <span className="text-base">→</span>
          </a>
        )}
      </div>
    </li>
  );
}

Card.propTypes = {
  page: PropTypes.string.isRequired,
  data: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string.isRequired,
    problem: PropTypes.string,
    solution: PropTypes.string,
    tech: PropTypes.string,
    url: PropTypes.string.isRequired,
    description: PropTypes.string,
    published: PropTypes.string,
    length: PropTypes.string,
  }).isRequired,
};

export default Card;
