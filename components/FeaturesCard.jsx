import React from "react";

function FeaturesCard() {
  function MarkIcon() {
    return (
      <>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
          className="flex-shrink-0 w-6 h-6 text-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 13l4 4L19 7"
          ></path>
        </svg>
      </>
    );
  }
  return (
    <div>
      <div className="bg-gray-800 text-gray-100">
        <div className="px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold sm:text-4xl">
              Web X Builder Feature
            </h2>
            <p className="mt-4 text-lg text-gray-400">
              Web X Builder was created to allow non programmers build amazing
              and highly functional website.
            </p>
          </div>
          <dl className="mt-12 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-4 lg:gap-x-8">
            <div className="flex">
              <MarkIcon />
              <div className="ml-3">
                <dt className="text-lg font-medium">
                  Domain Name intergretion
                </dt>
                <dd className="mt-2 text-gray-400">
                  Add your preferred website Name to your website easily.
                </dd>
              </div>
            </div>
            <div className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
                className="flex-shrink-0 w-6 h-6 text-violet-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
              <div className="ml-3">
                <dt className="text-lg font-medium">Whatsapp Intergretion</dt>
                <dd className="mt-2 text-gray-400">
                  Get Notifications, Customers orders,messages and complaints
                  sent to your whatsapp Dm
                </dd>
              </div>
            </div>
            <div className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
                className="flex-shrink-0 w-6 h-6 text-violet-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
              <div className="ml-3">
                <dt className="text-lg font-medium">CRM Intergration</dt>
                <dd className="mt-2 text-gray-400">
                  Get datas on website traffic, engagement and clicks to better
                  help you improve on your Lead Generation game.
                </dd>
              </div>
            </div>
            <div className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
                className="flex-shrink-0 w-6 h-6 text-violet-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
              <div className="ml-3">
                <dt className="text-lg font-medium">Fully Customizable</dt>
                <dd className="mt-2 text-gray-400">
                  The tool helps you build fully customizable websites that are
                  tailored to suit your brand needs.
                </dd>
              </div>
            </div>

            <div className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
                className="flex-shrink-0 w-6 h-6 text-violet-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
              <div className="ml-3">
                <dt className="text-lg font-medium">
                  Accept Multiple Currencies
                </dt>
                <dd className="mt-2 text-gray-400">
                  You can export your work to code, it can help programmers who
                  would like to speed up their work.
                </dd>
              </div>
            </div>
            <div className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
                className="flex-shrink-0 w-6 h-6 text-violet-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
              <div className="ml-3">
                <dt className="text-lg font-medium">
                  Export Your Website to Code
                </dt>
                <dd className="mt-2 text-gray-400">
                  You can export your work to code, it can help programmers who
                  would like to speed up their work.
                </dd>
              </div>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}

export default FeaturesCard;
