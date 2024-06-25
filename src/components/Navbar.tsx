import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

import {
  GradientText,
  Header,
  // NavbarTwoColumns,
  // NavMenu,
  // NavMenuItem,
  Section,
} from "@/astro-boilerplate-components/index";
// import { FaInstagram, FaFacebook } from "react-icons/fa";
// <FontAwesomeIcon icon="fa-duotone fa-xmark" />
// <FontAwesomeIcon icon="fa-duotone fa-chart-simple-horizontal" />

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <Section>
      <div className="flex items-center justify-between py-4">
        <div
          onClick={() => setOpen(!open)}
          className="absolute right-9 top-11 cursor-pointer text-3xl text-gray-200 md:hidden"
        >
          {!open ? <FontAwesomeIcon icon={faBars} /> : <></>}
        </div>

        <ul
          className={`transition-{text-gray-200 ease-in} absolute left-0 w-full pl-16 pt-1 duration-500 md:static md:z-auto  md:flex md:w-auto md:items-center md:bg-slate-900 md:pb-0 md:pl-0 md:transition-none ${
            open ? "top-0 bg-slate-800" : "top-[-490px]"
          }`}
        >
          <li
            onClick={() => setOpen(!open)}
            className="absolute right-9 cursor-pointer text-3xl text-gray-200 md:hidden"
          >
            {open ? <FontAwesomeIcon icon={faXmark} /> : <></>}
          </li>
          {Header.map((header) => (
            <li
              key={header.name}
              className=" my-5 text-xl capitalize md:my-0 md:mr-8"
            >
              <GradientText>
                <a
                  href={header.link}
                  className="duration-500 hover:text-white"
                  target={header.target}
                  rel="noopener noreferrer"
                >
                  {header.name}
                </a>
              </GradientText>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
};

export { Navbar };
