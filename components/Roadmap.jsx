import React from "react";

function Roadmap() {
  // Get the current date and time
  const currentDate = new Date();

  // Get the hours and minutes
  let hours = currentDate.getHours();
  let minutes = currentDate.getMinutes();

  // Format the time as a string
  const formattedTime = `${hours}:${minutes}`;

  // Calculate the time plus 3 minutes
  const timePlus3Minutes = new Date(currentDate.getTime() + 3 * 60000); // 3 minutes in milliseconds
  const hoursPlus3 = timePlus3Minutes.getHours();
  const minutesPlus3 = timePlus3Minutes.getMinutes();
  const formattedTimePlus3 = `${hoursPlus3}:${minutesPlus3}`;

  // Calculate the time plus 30 minutes
  const timePlus30Minutes = new Date(currentDate.getTime() + 30 * 60000); // 30 minutes in milliseconds
  const hoursPlus30 = timePlus30Minutes.getHours();
  const minutesPlus30 = timePlus30Minutes.getMinutes();
  const formattedTimePlus30 = `${hoursPlus30}:${minutesPlus30}`;
  +2;
  return (
    <div>
      <section className="bg-gray-800 text-gray-100">
        <div className="container max-w-5xl px-4 py-12 mx-auto">
          <div className="grid gap-4 mx-4 sm:grid-cols-12">
            <div className="col-span-12 sm:col-span-3">
              <div className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:bg-blue-800">
                <h3 className="text-3xl font-semibold">3 Steps To build</h3>
                <span className="text-sm font-bold tracki uppercase text-gray-400">
                  Your Website In 30 minutes
                </span>
              </div>
            </div>
            <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
              <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:bg-gray-700">
                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-blue-800">
                  <h3 className="text-xl font-semibold tracki">Sign up</h3>
                  <time className="text-xs tracki uppercase text-gray-400">
                    Start now at {formattedTime}
                  </time>
                  <p className="mt-3">Sign up and create an account here </p>
                </div>
                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-blue-800">
                  <h3 className="text-xl font-semibold tracki">
                    Use our drag and drop tool
                  </h3>
                  <time className="text-xs tracki uppercase text-gray-400">
                    {formattedTimePlus3}
                  </time>
                  <p className="mt-3">
                    You can start from scratch building any website of your
                    choice or you choose from a variety of templates if you
                    would like to be finsihed in 30 minutes
                  </p>
                </div>
                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-blue-800">
                  <h3 className="text-xl font-semibold tracki">
                    Click On the "Host Your Website" button
                  </h3>
                  <time className="text-xs tracki uppercase text-gray-400">
                    {" "}
                    finish by {formattedTimePlus30}
                  </time>
                  <p className="mt-3">
                    After you have finished building your website to your taste,
                    click on the "host your website" buttton, You would be asked
                    whether to use a paid domain name of your choice or use a
                    free one provided by us.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Roadmap;
