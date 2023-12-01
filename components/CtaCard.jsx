import Link from "next/link";
import React from "react";

function CtaCard() {
  return (
    <div className="bg-blue-800">
      <section className="m-4 md:m-8 bg-gray-800 text-gray-100">
        <div className="container p-4 mx-auto my-6 space-y-1 text-center">
          <span className="text-xs font-semibold tracki uppercase text-blue-400">
            shortcut to Sections
          </span>
          <h2 className="pb-3 text-3xl font-bold md:text-4xl">
            Want to see more about Web X Builder ?
          </h2>
          <p>
            Get started from scratch or customize one of available templates
            with our drag and drop studio tool to build a website for your dream
          </p>
        </div>
        <div className="container grid justify-center gap-4 mx-auto lg:grid-cols-2 xl:grid-cols-4">
          <div className="flex flex-col px-8 py-6">
            <h2 className="mb-2 text-lg font-semibold sm:text-xl title-font text-gray-100">
              Pricing
            </h2>
            <p className="flex-1 mb-4 text-base leadi text-gray-400">
              Our plans are tailored to fit individuals and organisation with
              specific needs and differnt currencies
            </p>
            <Link
              className="inline-flex items-center space-x-2 text-sm text-blue-400"
              href="/components"
            >
              <span>See Pricing</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-4 h-4"
              >
                <path
                  fillRule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </Link>
          </div>
          <div className="flex flex-col px-8 py-6 lg:border-none xl:border-solid">
            <h2 className="mb-2 text-lg font-semibold sm:text-xl title-font text-gray-100">
              Demos and Template
            </h2>
            <p className="flex-1 mb-4 text-base leadi text-gray-400">
              View live demos and already made templates available for your
              customization.
            </p>
            <a
              className="inline-flex items-center space-x-2 text-sm text-blue-400"
              href="/sections"
            >
              <span>View</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-4 h-4"
              >
                <path
                  fillRule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
          <div className="flex flex-col px-8 py-6">
            <h2 className="mb-2 text-lg font-semibold sm:text-xl title-font text-gray-100">
              Too busy to Build it yourself ?
            </h2>
            <p className="flex-1 mb-4 text-base leadi text-gray-400">
              We have a team that would be glad to help, You just have to
              provide your Brand name, color and idealogy, and our team would
              build it for you
            </p>
            <a
              className="inline-flex items-center space-x-2 text-sm text-blue-400"
              href="/templates"
            >
              <span>Contact Us</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-4 h-4"
              >
                <path
                  fillRule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
          <div className="flex flex-col px-8 py-6">
            <h2 className="mb-2 text-lg font-semibold sm:text-xl title-font text-gray-100">
              Have any Difficulty using the web X builder ?
            </h2>
            <p className="flex-1 mb-4 text-base leadi text-gray-400">
              Watch a tutorial
            </p>
            <a
              className="inline-flex items-center space-x-2 text-sm text-blue-400"
              href="/docs"
            >
              <span>Watch Tutorial</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-4 h-4"
              >
                <path
                  fillRule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CtaCard;
