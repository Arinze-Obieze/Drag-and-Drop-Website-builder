import React from "react";

function MarkIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="#ffffff"
      className="w-7 h-7"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M5 13l4 4L19 7"
      ></path>
    </svg>
  );
}

function LandingPageBody() {
  return (
    <section className="p-4 lg:p-8 bg-gray-800 text-gray-100">
      <div className="container mx-auto space-y-12">
        <div>
          <h2 className="text-3xl font-bold tracki text-center sm:text-5xl dark:text-gray-50">
            Key Products
          </h2>
          <p className="max-w-3xl mx-auto mt-4 text-xl text-center dark:text-gray-400">
            Are you curious about what products we provide ?.
          </p>
        </div>

        <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
          <img
            src="https://source.unsplash.com/640x480/?1"
            alt=""
            className="h-80 bg-gray-500 aspect-video"
          />
          <div className="flex flex-col justify-center flex-1 p-6 bg-gray-900">
            <span className="text-xs uppercase text-gray-400"></span>
            <h3 className="text-3xl font-bold">Web X Builder</h3>
            <p className="my-6 text-gray-400">
              Get started from scratch or customize one of available templates
              with our drag and drop studio tool to build a website for your
              dream.
            </p>
            <button type="button" className="self-start bg-blue-800 px-6 py-3">
              Build Website
            </button>
          </div>
        </div>
        <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse">
          <img
            src="https://source.unsplash.com/640x480/?2"
            alt=""
            className="h-80 bg-gray-500 aspect-video"
          />
          <div className="flex flex-col justify-center flex-1 p-6 bg-gray-900">
            <span className="text-xs uppercase text-gray-400"></span>
            <h3 className="text-3xl font-bold">Web X domain</h3>
            <p className="my-6 text-gray-400">
              Purchase a Domain name and use it for your website or use it
              elsewhere.
            </p>
            <button type="button" className="self-start bg-blue-800 px-6 py-3">
              Purschase Domain
            </button>
          </div>
        </div>

        <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
          <img
            src="https://source.unsplash.com/640x480/?3"
            alt=""
            className="h-80 bg-gray-500 aspect-video"
          />
          <div className="flex flex-col justify-center flex-1 p-6 bg-gray-900">
            <h3 className="text-3xl font-bold">Web X Dropshipping Hub </h3>
            <p className="my-6 text-gray-400">
              Start Your dropshipping business simply by subscribing to a seller
              in our dropshipping hub.
            </p>
            <button type="button" className="self-start bg-gray-800 px-6 py-3">
              Coming Soon
            </button>
          </div>
        </div>

        <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse">
          <img
            src="https://source.unsplash.com/640x480/?2"
            alt=""
            className="h-80 bg-gray-500 aspect-video"
          />
          <div className="flex flex-col justify-center flex-1 p-6 bg-gray-900">
            <span className="text-xs uppercase text-gray-400"></span>
            <h3 className="text-3xl font-bold">Web X Referral</h3>
            <p className="my-6 text-gray-400">
              Earn Constant income Referraling People to us. You get 50% when
              they pay for Web X builder and 10% when they Purchase a domain
            </p>
            <button type="button" className="self-start bg-blue-800 px-6 py-3">
              Start Referraling
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LandingPageBody;
