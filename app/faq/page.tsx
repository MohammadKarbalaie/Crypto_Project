"use client";
import React, { JSX, useState } from "react";
import { TECollapse } from "tw-elements-react";

export default function AccordionFlush(): JSX.Element {
  const [activeElement, setActiveElement] = useState("");

  const handleClick = (value: string) => {
    if (value === activeElement) {
      setActiveElement("");
    } else {
      setActiveElement(value);
    }
  };
  return (
    <div className="px-10 py-10">
      <div id="accordionExample">
        <div
          className="roundedt-t-2xl border border-l-0
         border-r-0 border-t-0 border-neutral-200
          bg-white"
        >
          <h2 className="mb-0" id="headingOne">
            <button
              className={`${
                activeElement === "element1" &&
                `text-primary [box-shadow:inset_0_-1px_0_rgba(229,231,235)]`
              } group relative flex w-full items-center 
               border-0 bg-white rounded-t-2xl px-5 py-4 
               text-left text-base text-neutral-800 transitio
               n [overflow-anchor:none] hover:z-[2] focus:z-[3] f
               ocus:outline-none dark:bg-neutral-800 dark:text-white`}
              type="button"
              onClick={() => handleClick("element1")}
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              FAQ 1
              <span
                className={`${
                  activeElement === "element1"
                    ? `rotate-[-180deg] -mr-1`
                    : `rotate-0 fill-[#212529] dark:fill-white`
                } ml-auto h-5 w-5 shrink-0 fill-[#336dec] transition-transform duration-200 ease-in-out motion-reduce:transition-none dark:fill-blue-300`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </span>
            </button>
          </h2>
          <TECollapse
            show={activeElement === "element1"}
            className="!mt-0 !rounded-b-none !shadow-none"
          >
            <div className="px-5 py-4">
              <strong>This is the first items accordion body.</strong> Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eu
              rhoncus purus, vitae tincidunt nibh. Vivamus elementum egestas
              ligula in varius. Proin ac erat pretium, ultricies leo at, cursus
              ante. Pellentesque at odio euismod, mattis urna ac, accumsan
              metus. Nam nisi leo, malesuada vitae pretium et, laoreet at lorem.
              Curabitur non sollicitudin neque.
            </div>
          </TECollapse>
        </div>
      </div>
      <div
        className="rounded-none border border-l-0 border-r-0 border-t-0
       border-neutral-200 bg-white"
      >
        <h2 className="mb-0" id="headingTwo">
          <button
            className={`${
              activeElement === "element2" &&
              `text-primary [box-shadow:inset_0_-1px_0_rgba(229,231,235)] `
            } group relative flex w-full items-center rounded-none 
             border-0 bg-white px-5 py-4 text-left text-base
              text-neutral-800 transition [overflow-anchor:none]
               hover:z-[2] focus:z-[3] focus:outline-none
                dark:bg-neutral-800 dark:text-white`}
            type="button"
            onClick={() => handleClick("element2")}
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            FAQ 2
            <span
              className={`${
                activeElement === "element2"
                  ? `rotate-[-180deg] -mr-1`
                  : `rotate-0 fill-[#212529] dark:fill-white`
              } ml-auto h-5 w-5 shrink-0 fill-[#336dec] transition-transform duration-200 ease-in-out motion-reduce:transition-none dark:fill-blue-300`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </span>
          </button>
        </h2>
        <TECollapse
          show={activeElement === "element2"}
          className="!mt-0 !rounded-b-none !shadow-none"
        >
          <div className="px-5 py-4">
            <strong>This is the second items accordion body.</strong> Lorem
            ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eu
            rhoncus purus, vitae tincidunt nibh. Vivamus elementum egestas
            ligula in varius. Proin ac erat pretium, ultricies leo at, cursus
            ante. Pellentesque at odio euismod, mattis urna ac, accumsan metus.
            Nam nisi leo, malesuada vitae pretium et, laoreet at lorem.
            Curabitur non sollicitudin neque.
          </div>
        </TECollapse>
      </div>
      <div
        className="rounded border rounded-b-2xl border-b-1 border-l-1
       border-r-1 border-t-0 border-neutral-800 bg-white
       "
      >
        <h2 className="accordion-header mb-0" id="headingThree">
          <button
            className={`${
              activeElement === "element3"
                ? `text-primary [box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:!text-primary-400 dark:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]`
                : `transition-none rounded-b-[15px]`
            } group relative flex w-full items-center rounded-none border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white`}
            type="button"
            onClick={() => handleClick("element3")}
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            FAQ 3
            <span
              className={`${
                activeElement === "element3"
                  ? `rotate-[-180deg] -mr-1`
                  : `rotate-0 fill-[#212529] dark:fill-white`
              } ml-auto h-5 w-5 shrink-0 fill-[#336dec] transition-transform duration-200 ease-in-out motion-reduce:transition-none dark:fill-blue-300`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </span>
          </button>
        </h2>
        <TECollapse
          show={activeElement === "element3"}
          className="!mt-0 !shadow-none"
        >
          <div className="px-5 py-4">
            <strong>This is the third items accordion body.</strong> Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Vestibulum eu rhoncus
            purus, vitae tincidunt nibh. Vivamus elementum egestas ligula in
            varius. Proin ac erat pretium, ultricies leo at, cursus ante.
            Pellentesque at odio euismod, mattis urna ac, accumsan metus. Nam
            nisi leo, malesuada vitae pretium et, laoreet at lorem. Curabitur
            non sollicitudin neque.
          </div>
        </TECollapse>
      </div>
    </div>
  );
}
