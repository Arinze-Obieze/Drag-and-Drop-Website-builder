import React from "react";

function Cta() {
  return (
    <div>
      <section className="py-6 bg-gray-800 text-gray-50">
        <div className="container mx-auto flex flex-col items-center justify-center p-4 space-y-8 md:p-10 lg:space-y-0 lg:flex-row lg:justify-between">
          <h1 className="text-3xl font-semibold leadi text-center lg:text-left">
            Still Have a question ?{" "}
          </h1>
          <button className="px-8 py-3 text-lg font-semibold rounded bg-blue-800 text-gray-200">
            Contact Us
          </button>
        </div>
      </section>
    </div>
  );
}

export default Cta;
