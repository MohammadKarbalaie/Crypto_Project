import React from "react";
import Image from "next/image";

function page() {
  return (
    <div className="container mx-auto py-10">
      <div>
        <div className="grid grid-cols-1 text-center">
          <h3 className="text-lg md:text-2xl font-bold bg-sky-400 py-3 rounded-2xl text-white">
            Contact Us
          </h3>
        </div>
      </div>
      <div className="w-full flex flex-col md:flex-row gap-4 mt-4">
        <div
          className="w-full grid grid-cols-1 sm:grid-cols-2
         md:grid-cols-3 lg:grid-cols-6 p-4"
        >
          <div className="col-span-6">
            <p className="text-3xl font-semibold text-sky-500 pb-4">
              How to Contact Us
            </p>

            <p className="text-xl font-semibold text-gray-800 pb-4">
              989190000000
            </p>

            <p className="text-xl font-semibold text-gray-800 pb-4">
              989190101010
            </p>

            <p className="text-xl font-semibold text-gray-800 pb-4">
              Tehran,Iran
            </p>
            <section className="bg-white dark:bg-gray-900 rounded-3xl">
              <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
                  Contact Us
                </h2>
                <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
                  Got a technical issue? Want to send feedback about a beta
                  feature? Need details about our Business plan? Let us know.
                </p>
                <form action="#" className="space-y-8">
                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Your email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                      placeholder="name@flowbite.com"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="subject"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                      placeholder="Let us know how we can help you"
                      required
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="message"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                    >
                      Your message
                    </label>
                    <textarea
                      id="message"
                      className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      placeholder="Leave a comment..."
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-gray-700 sm:w-fit hover:bg-gray-800 focus:ring-4 cursor-pointer focus:outline-none focus:ring-gray-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
                  >
                    Send message
                  </button>
                </form>
              </div>
            </section>
          </div>
        </div>

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 p-4">
          <div className="col-span-full mx-auto">
            <Image
              src="/assets/images/contact.png"
              alt="about"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
