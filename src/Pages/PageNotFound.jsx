import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 text-gray-800">
      <h1 className="mb-4 text-6xl font-bold">404</h1>
      <p className="mb-6 text-xl">
        Oops! The page you're looking for doesn't exist.
      </p>
      <Link
        to="/"
        className="rounded-lg bg-blue-500 !px-3 !py-3 text-white shadow transition hover:bg-blue-600"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default PageNotFound;
