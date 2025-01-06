import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800">
      <img
        src="https://static.vecteezy.com/system/resources/thumbnails/024/405/934/small/icon-tech-error-404-icon-isolated-png.png"
        alt="404 Not Found"
        className="w-96 h-auto mb-8"
      />
      <h1 className="text-4xl font-bold mb-4">Page Not Found</h1>
      <p className="text-lg mb-6">
        Oops! The page you are looking for does not exist.
      </p>
      <Link
        to="/"
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-500 transition"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
