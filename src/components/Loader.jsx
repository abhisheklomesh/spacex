import React from "react";

const Loader = () => {
  return (
    <div className="flex items-center justify-center mt-10 h-[50vh]">
      <div
        className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full"
        role="status"
      >
        <span className="visually-hidden text-white">Loading...</span>
      </div>
    </div>
  );
};

export default Loader;
