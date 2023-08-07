import React from "react";
import { Link } from "react-router-dom";

type Props = {};

const Header = (props: Props) => {
  return (
    <header className="bg-white border-b-[1px]">
      <div className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <div className="w-full text-gray-700 md:text-center text-2xl font-semibold">
            <Link to="/">
              <img
                src="https://nerman.com.vn/wp-content/uploads/2021/09/logo-header.svg"
                alt=""
                width={200}
              />
            </Link>
          </div>
          <div className="flex items-center justify-end w-full">
            <Link
              to={`/cart`}
              className="text-gray-600 focus:outline-none mx-4 sm:mx-0 relative flex"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
              </svg>
              <p className="absolute right-[-10px] bottom-0 px-1 text-[10px] text-white rounded-lg bg-red-500">
                1
              </p>
            </Link>

            <div className="flex sm:hidden">
              <button
                type="button"
                className="text-gray-600 hover:text-gray-500 focus:outline-none focus:text-gray-500"
                aria-label="toggle menu"
              >
                <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                  <path
                    fill-rule="evenodd"
                    d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
