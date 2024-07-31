import { List } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <nav className="py-5 lg:fixed z-50 w-full bg-white transition-all duration-500 ">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="w-full flex flex-col lg:flex-row">
          <div className=" flex justify-between  lg:flex-row">
            <Link href="https://pagedone.io/" className="flex items-center">
              <Image
                width={120}
                height={40}
                src="logo.svg"
                alt="Logo"
                className="w-36"
              />
            </Link>
            <button
              data-collapse-toggle="navbar"
              type="button"
              className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
              aria-controls="navbar-default"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <List size={24} />
            </button>
          </div>
          <div
            className="hidden w-full lg:flex lg:pl-11 max-lg:py-4"
            id="navbar"
          >
            <ul className="flex lg:items-center flex-col max-lg:gap-4 mt-4 lg:mt-0 lg:flex-row max-lg:mb-4">
              <li>
                <Link
                  href="/"
                  className="text-gray-500 text-base lg:text-base font-medium hover:text-indigo-700 transition-all duration-500 mb-2 block lg:mr-6 md:mb-0 lg:text-left "
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/news"
                  className="text-gray-500 text-base lg:text-base font-medium hover:text-indigo-700 transition-all duration-500 mb-2 block lg:mr-6 md:mb-0 lg:text-left"
                >
                  News
                </Link>
              </li>
              <li>
                <Link
                  href="/events"
                  className="text-gray-500 text-base lg:text-base font-medium hover:text-indigo-700 transition-all duration-500 mb-2 block lg:mr-6 md:mb-0 lg:text-left"
                >
                  Events
                </Link>
              </li>
            </ul>
            <div className="flex lg:items-center justify-start flex-col lg:flex-row max-lg:gap-4 lg:flex-1 lg:justify-end">
              <button className=" bg-indigo-50 text-indigo-600 rounded-full cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 py-3 px-6 text-sm hover:bg-indigo-100">
                Login
              </button>
              <button className="bg-indigo-600 text-white rounded-full cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 py-3 px-6 text-sm lg:ml-5 hover:bg-indigo-700">
                Sign up{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
