import React from "react";

function Offer() {
  function MarkIcon() {
    return (
      <>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          className="w-5 h-5 fill-current text-white"
        >
          <path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
          <polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
        </svg>
      </>
    );
  }
  return (
    <div>
      <div className="px-4 py-16 mx-auto  md:px-24 lg:px-8 lg:py-20 bg-blue-800 text-blue-100">
        <h2 className="mb-8 text-4xl font-bold leadi text-center">
          What can you build with Web X Builder?
        </h2>
        <ul className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          <li className="flex items-center space-x-2">
            <MarkIcon />
            <span>E-commerce website</span>
          </li>
          <li className="flex items-center space-x-2">
            <MarkIcon />
            <span> Dropshipping website</span>
          </li>
          <li className="flex items-center space-x-2">
            <MarkIcon />
            <span>Blog Websites</span>
          </li>
          <li className="flex items-center space-x-2">
            <MarkIcon />
            <span> Landing Page</span>
          </li>
          <li className="flex items-center space-x-2">
            <MarkIcon />
            <span>Personal Portfolio Website</span>
          </li>
          <li className="flex items-center space-x-2">
            <MarkIcon />
            <span>Real Estate Websites</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Offer;
