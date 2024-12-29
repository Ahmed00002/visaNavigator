import React from "react";

const FeaturesCard = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col items-start bg-white shadow-md p-6 rounded-lg hover:shadow-lg transition-shadow border relative">
      <div className="bg-blue-100 p-4 rounded-full mb-4 absolute">{icon}</div>
      <h4 className="text-gray-600 font-bold text-sm">{title}</h4>
      <p className="text-gray-800 font-medium text-2xl">{description}</p>
    </div>
  );
};

export default FeaturesCard;
