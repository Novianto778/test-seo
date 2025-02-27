import React from "react";

type Props = {};

const NewsBanner = (props: Props) => {
  return (
    <div className="bg-gradient-to-r from-blue-700 to-[#B06AB3] font-sans px-6 py-12 rounded-lg">
      <div className="container mx-auto flex flex-col justify-center items-center text-center">
        <h2 className="text-white sm:text-4xl text-3xl font-bold mb-4">
          Discover Our New News
        </h2>
        <p className="text-white text-base text-center mb-8">
          We provide you with the latest news and updates about our company and
          industry.
        </p>
        <button
          type="button"
          className="bg-white text-sm text-blue-600 font-semibold py-3 px-6 rounded-lg hover:bg-slate-100"
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default NewsBanner;
