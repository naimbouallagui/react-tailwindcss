import React from "react";

const Card = ({image}) => {
  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <img
            className="h-48 w-full object-cover md:w-48"
            src={image}
            alt="A cat looks further"
          />
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
            Cute Cat
          </div>
          <a
            href="#"
            className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
          >
            Finding cute cat for your new house
          </a>
          <p className="mt-2 text-gray-500">
            Getting a new house is a lot of hard work. Here
            are five ideas you can use to find your lovely cat.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
