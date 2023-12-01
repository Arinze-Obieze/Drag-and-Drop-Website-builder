import React from "react";

const FaqItem = ({ question, answer }) => (
  <details className="w-full border rounded-lg">
    <summary className="px-4 py-6 focus:outline-none focus-visible:ri">
      {question}
    </summary>
    <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-400">{answer}</p>
  </details>
);

const Faq = ({ faqData }) => (
  <div>
    <section className="bg-gray-800 text-gray-100">
      <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
        <h2 className="text-2xl font-semibold sm:text-4xl">
          Frequently Asked Questions
        </h2>
        <p className="mt-4 mb-8 text-gray-400">
          These are the most asked question which you may also want an answer
          to.
        </p>
        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <FaqItem key={index} {...faq} />
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default Faq;
