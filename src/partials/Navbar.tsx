import { useState } from "react";
import { Header } from "@/astro-boilerplate-components/index";
import {
  // NavbarTwoColumns,
  // NavMenu,
  // NavMenuItem,
  Section,
} from "@/astro-boilerplate-components/index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
// import { FaInstagram, FaFacebook } from "react-icons/fa";

// <FontAwesomeIcon icon="fa-duotone fa-xmark" />
// <FontAwesomeIcon icon="fa-duotone fa-chart-simple-horizontal" />

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <Section>
      <div className="flex items-center justify-between py-4 md:px-10 px-7">
        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-9 top-11 md:hidden cursor-pointer text-gray-200"
          // className="text-3xl absolute right-9 md:hidden cursor-pointer text-gray-200"
        >
          {!open ? <FontAwesomeIcon icon={faBars} /> : <></>}
        </div>

        <ul
          // className={`text-gray-200 flex flex-col md:items-center m-auto absolute md:static z-10 left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-300 ease-in ${
          className={`text-gray-200 md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto  left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            // open ? "top-20 bg-slate-900" : "top-[-490px]"
            open ? "bg-slate-800 top-0" : "top-[-490px]"
          }`}
        >
          <li
            onClick={() => setOpen(!open)}
            className="text-3xl absolute right-9 md:hidden cursor-pointer text-gray-200 px-3 py-6"
          >
            {open ? <FontAwesomeIcon icon={faXmark} /> : <></>}
          </li>
          {Header.map((header) => (
            <li key={header.name} className="md:ml-8 text-xl md:my-0 my-5">
              {header.name === "Github" ? (
                <a
                  href={header.link}
                  className="hover:text-white duration-500"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {header.name}
                </a>
              ) : (
                <a
                  onClick={() => setOpen(false)}
                  href={header.link}
                  className="hover:text-white duration-500"
                >
                  {header.name}
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
};

export { Navbar };

// {/* <NavbarTwoColumns> */}
// {/*   <a href="/"> */}
// {/*   </a> */}
// {/*   <NavMenu> */}
// {/*     <NavMenuItem href="/projects">Projects</NavMenuItem> */}
// {/*     <NavMenuItem href="/">GitHub</NavMenuItem> */}
// {/*     <NavMenuItem href="/about">About</NavMenuItem> */}
// {/*     <NavMenuItem href="/posts/post-1">post-1</NavMenuItem> */}
// {/*   </NavMenu> */}
// {/* </NavbarTwoColumns> */}
//
// {open ? (
//   <>
//     <FontAwesomeIcon icon={faXmark} />
//   </>
// ) : (
//   <></>
// )}
