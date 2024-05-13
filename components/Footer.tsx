import Link from "next/link";
import React from "react";
import { SocialIcon } from "react-social-icons";

const Footer = () => {
  return (
    <footer className="bg-zinc-500 lg:grid lg:grid-cols-5 text-white">
      <div className="px-4 py-16 sm:px-6 lg:col-span-3 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          <div>
            <p>
              <span className="text-3xl uppercase tracking-wide">
                {" "}
                Call us{" "}
              </span>

              <a className="block text-lg font-medium hover:opacity-75 sm:text-xl mb-2">
                (502)656-2835
              </a>
              <span className="text-3xl uppercase tracking-wide">
                {" "}
                Write us{" "}
              </span>

              <a className="block text-lg font-medium hover:opacity-75 sm:text-xl">
                tanjiro.kama2@gmail.com
              </a>
            </p>

            <ul className="mt-8 space-y-1 text-sm ">
              <li>Monday to Friday: 9am - 5pm</li>
              <li>Weekend: 9am - 3pm</li>
            </ul>
            <div className="flex px-3 gap-10 mt-10">
              <SocialIcon
                style={{ height: 30, width: 30 }}
                url="www.telegram.com"
                className="height-4"
              />

              <SocialIcon
                style={{ height: 30, width: 30 }}
                url="www.facebook.com"
                className="w-4 h-4"
              />
              <SocialIcon
                style={{ height: 30, width: 30 }}
                url="www.linkedin.com"
                className="w-4 h-4"
              />
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-100 pt-12">
          <div className="sm:flex sm:items-center sm:justify-between">
            <ul className="flex flex-wrap gap-4 text-xs">
              <li>
                <a href="#" className=" transition hover:opacity-75">
                  {" "}
                  Terms & Conditions{" "}
                </a>
              </li>

              <li>
                <a href="#" className=" transition hover:opacity-75">
                  {" "}
                  Privacy Policy{" "}
                </a>
              </li>
            </ul>

            <p className="mt-8 text-xs  sm:mt-0">
              &copy; 2024. Groot's Enterprise. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>

    /*<div className="sm:flex sm:pt-10 sm:bottom-0 flex-col bg-zinc-500 flex pt-4 bottom-0 text-white">
      <div className="flex justify-center px-3 gap-16">
        <SocialIcon
          style={{ height: 40, width: 40 }}
          url="www.telegram.com"
          className="height-4"
        />

        <SocialIcon
          style={{ height: 40, width: 40 }}
          url="www.facebook.com"
          className="w-4 h-4"
        />
        <SocialIcon
          style={{ height: 40, width: 40 }}
          url="www.linkedin.com"
          className="w-4 h-4"
        />
      </div>
      <div className="items-center p-4 text-center">
        © 2024 Copyright:
        <Link className=" ml-1" href="/">
          Groot's Enterprise
        </Link>
      </div>
    </div>*/
  );
};

export default Footer;
