import { Link } from 'react-router-dom';

export default function Notfound() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center text-center px-4 flex-col sm:flex-row mb-4">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-black-900 tracking-tight sm:pr-6 sm:mr-6 sm:border-r sm:border-black-900/10 sm:dark:border-black-300/10 dark:text-black-200">
          404
        </h1>
        <h2 className="mt-2 text-lg text-black-700 dark:text-black-400 sm:mt-0">
          This page could not be found.
        </h2>

        <br />
      </div>
      <Link className="bg-green-400 text-green-900 p-2 rounded" to="..">
        Go back
      </Link>
    </div>
  );
}
