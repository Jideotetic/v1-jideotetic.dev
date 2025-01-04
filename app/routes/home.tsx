import { Link } from "react-router";
import type { Route } from "./+types/home";
import logo from "./JD.svg";
import illustration from "./3d-illustration.png";

import {
  Popover,
  PopoverBackdrop,
  PopoverButton,
  PopoverPanel,
} from "@headlessui/react";
import Nav from "~/components/nav";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Projects from "~/components/projects";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Abdulbasit Yusuf | Frontend Developer" }];
}

export default function Home() {
  return (
    <div className="">
      <header className="p-4 bg-white shadow-gray-900 shadow-sm fixed left-0 right-0 z-50">
        <div className="lg:container mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex shrink-0">
              <Link to="/" title="Go Home" className="flex">
                <img className="w-auto h-8" src={logo} alt="logo" />
              </Link>
            </div>

            <div className="flex md:hidden items-center justify-center">
              <Popover className="group">
                <PopoverButton className="focus:outline-none text-gray-900 text-2xl">
                  <AiOutlineClose className="hidden group-data-[open]:block" />
                  <AiOutlineMenu className="group-data-[open]:hidden" />
                </PopoverButton>
                <PopoverBackdrop
                  transition
                  className="fixed inset-0 bg-black/50 top-[64px] transition duration-300 ease-out data-[closed]:opacity-0"
                />
                <PopoverPanel
                  transition
                  className="flex flex-col justify-between absolute transition duration-300 ease-in-out left-0 data-[closed]:-translate-x-[100%] h-[calc(100vh-64px)] top-[64px] bg-white w-4/5 min-[425px]:w-1/2 p-4"
                >
                  {({ close }) => (
                    <>
                      <Nav close={close} />
                      <div className="flex">
                        <a
                          href="#"
                          title=""
                          onClick={() => close()}
                          className="inline-flex items-center justify-center px-6 py-2 sm:py-2.5 text-base font-semibold text-white transition-all duration-200 bg-gray-900 rounded-lg sm:text-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                          role="button"
                        >
                          <span className="shrink-0">VIEW RESUME</span>
                        </a>
                      </div>
                    </>
                  )}
                </PopoverPanel>
              </Popover>
            </div>

            <div className="hidden md:flex">
              <Nav />
            </div>

            <div className="hidden md:flex">
              <a
                href="#"
                title=""
                className="inline-flex items-center justify-center px-6 py-2 sm:py-2.5 text-base font-semibold text-white transition-all duration-200 bg-gray-900 rounded-lg sm:text-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                role="button"
              >
                <span className="shrink-0">VIEW RESUME</span>
              </a>
            </div>
          </div>
        </div>
      </header>

      <section
        className="py-[112px] bg-gradient-to-b from-gray-50 via-white to-gray-50"
        id="about"
      >
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid max-w-md grid-cols-1 mx-auto md:grid-cols-12 gap-x-6 gap-y-8 md:max-w-none">
            <div className="self-center md:col-span-6">
              <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl xl:text-5xl">
                Hey 👋 I am Abdulbasit Yusuf, Frontend Developer!
              </h1>
              <p className="mt-5 text-base font-normal leading-7 text-gray-500">
                A new day...another opportunity to become world class
              </p>

              <div className="relative inline-flex mt-9 space-x-2 text-xl">
                <Link to="https://github.com/Jideotetic" title="Github Profile">
                  <FaGithub />
                </Link>

                <Link
                  to="https://www.linkedin.com/in/jideotetic/"
                  title="LinkedIn Profile"
                >
                  <FaLinkedin />
                </Link>
              </div>
            </div>

            <div className="self-end md:col-span-6">
              <img
                className="w-full max-w-xs mx-auto"
                src={illustration}
                alt=""
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-[112px] bg-white" id="latest-projects">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold leading-tight tracking-widest text-gray-900 sm:text-4xl xl:text-5xl font-pj">
              LATEST PROJECTS
            </h2>
          </div>

          <div className="grid grid-cols-1 mt-10 text-center sm:mt-16 sm:grid-cols-2 md:grid-cols-3 md:gap-0 xl:mt-24">
            <Projects />

            {/* <div className="md:p-8 lg:p-14 md:border-t md:border-gray-200">
              <svg
                className="mx-auto"
                width="42"
                height="42"
                viewBox="0 0 42 42"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.66667 25H6C3.23858 25 1 27.2386 1 30V37C1 39.7614 3.23858 42 6 42H36C38.7614 42 41 39.7614 41 37V30C41 27.2386 38.7614 25 36 25H31.8333C30.2685 25 29 26.2685 29 27.8333C29 29.3981 27.7315 30.6667 26.1667 30.6667H15.3333C13.7685 30.6667 12.5 29.3981 12.5 27.8333C12.5 26.2685 11.2315 25 9.66667 25Z"
                  fill="#D4D4D8"
                />
                <path
                  d="M9 9H33"
                  stroke="#161616"
                  strokeWidth="2"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9 17H33"
                  stroke="#161616"
                  strokeWidth="2"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M1 25H13V31H29V25H41"
                  stroke="#161616"
                  strokeWidth="2"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M37 1H5C2.79086 1 1 2.79086 1 5V37C1 39.2091 2.79086 41 5 41H37C39.2091 41 41 39.2091 41 37V5C41 2.79086 39.2091 1 37 1Z"
                  stroke="#161616"
                  strokeWidth="2"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <h3 className="mt-12 text-xl font-bold text-gray-900 font-pj">
                Product
              </h3>
              <p className="mt-5 text-base text-gray-600 font-pj">
                Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim
                nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet.
              </p>
            </div>

            <div className="md:p-8 lg:p-14 md:border-l md:border-gray-200 md:border-t">
              <svg
                className="mx-auto"
                width="46"
                height="42"
                viewBox="0 0 46 42"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M30.562 18.4609C30.0511 17.9392 29.4292 17.5392 28.7426 17.2907C28.0559 17.0422 27.3221 16.9516 26.5956 17.0256C25.8692 17.0996 25.1687 17.3362 24.5462 17.718C23.9237 18.0998 23.3952 18.6169 23 19.2309C22.6049 18.6167 22.0764 18.0995 21.4539 17.7176C20.8315 17.3357 20.1309 17.099 19.4044 17.025C18.6779 16.951 17.944 17.0417 17.2573 17.2903C16.5706 17.5389 15.9488 17.939 15.438 18.4609C14.5163 19.4035 14.0002 20.6695 14.0002 21.9879C14.0002 23.3063 14.5163 24.5722 15.438 25.5149L23 33.1999L30.564 25.5159C31.485 24.5726 32.0004 23.3064 32 21.988C31.9997 20.6696 31.4835 19.4037 30.562 18.4609Z"
                  fill="#D4D4D8"
                  stroke="#161616"
                  strokeWidth="2"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M41 41H5C3.93913 41 2.92172 40.5786 2.17157 39.8284C1.42143 39.0783 1 38.0609 1 37V1H17L22 9H45V37C45 38.0609 44.5786 39.0783 43.8284 39.8284C43.0783 40.5786 42.0609 41 41 41Z"
                  stroke="#161616"
                  strokeWidth="2"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <h3 className="mt-12 text-xl font-bold text-gray-900 font-pj">
                Quality
              </h3>
              <p className="mt-5 text-base text-gray-600 font-pj">
                Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim
                nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet.
              </p>
            </div>

            <div className="md:p-8 lg:p-14 md:border-l md:border-gray-200 md:border-t">
              <svg
                className="mx-auto"
                width="44"
                height="44"
                viewBox="0 0 44 44"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M25 7C34.941 7 43 15.059 43 25C43 34.941 34.941 43 25 43C15.059 43 7 34.941 7 25"
                  stroke="#161616"
                  strokeWidth="2"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M19 1C9.059 1 1 9.059 1 19H19V1Z"
                  fill="#D4D4D8"
                  stroke="#161616"
                  strokeWidth="2"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <h3 className="mt-12 text-xl font-bold text-gray-900 font-pj">
                Result
              </h3>
              <p className="mt-5 text-base text-gray-600 font-pj">
                Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim
                nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet.
              </p>
            </div> */}
          </div>
        </div>
      </section>
    </div>
  );
}
