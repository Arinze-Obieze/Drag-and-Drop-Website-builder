import React from "react";

function Hero() {
  return (
    <div>
      <section className="bg-gray-800 text-gray-100">
        <div className="container flex place-items-center flex-col justify-center p-6 mx-auto sm:py-12 lg:py-12 lg:flex-row lg:justify-between">
          <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
            <h1 className="text-5xl font-bold leading sm:text-6xl">
              From Websites
              <span className="text-blue-800"> to Success Stories</span> – Yours
              Starts Now.
            </h1>
            <p className="mt-6 mb-8 text-lg sm:mb-12">
              Utilize tools from Web X to build your website,
              <br className="hidden md:inline lg:hidden" />
              Buy a domain,Start Dropshipping or earn income from referrals.
            </p>
            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
              <a
                rel="noopener noreferrer"
                href="#"
                className="px-8 py-3 text-lg font-semibold font-serif rounded bg-blue-800 text-gray-200"
              >
                Get Started for free
              </a>
              <a
                rel="noopener noreferrer"
                href="#"
                className="px-8 py-3 text-lg font-semibold border rounded border-gray-100"
              >
                Login
              </a>
            </div>
          </div>
          <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
            <img
              src="./img/landing-page/hero.jpg"
              alt=""
              className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
