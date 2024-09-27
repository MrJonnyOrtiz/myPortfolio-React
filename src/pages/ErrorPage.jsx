import { Link } from 'react-router-dom';

function ErrorPage() {
  return (
    <div className="flex h-screen flex-col items-center justify-center text-center">
      <h1 className="mb-4 text-4xl font-bold text-gray-800">404 - Not Found</h1>
      <p className="mb-8 text-lg text-gray-600">
        The page you are looking for doesn&quot;t exist or an error occurred.
      </p>
      <Link
        to="/projects"
        className="mx-auto w-fit rounded-full bg-green-300 px-4 py-2 font-semibold text-gray-800 shadow-md transition duration-300 hover:bg-green-400"
      >
        Go Back to Projects
      </Link>
    </div>
  );
}

export default ErrorPage;
