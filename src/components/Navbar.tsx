import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

import {
  GradientText,
  Header,
  // NavbarTwoColumns,
  // NavMenu,
  // NavMenuItem,
  Section,
} from '@/astro-boilerplate-components/index';
// import { FaInstagram, FaFacebook } from "react-icons/fa";

// <FontAwesomeIcon icon="fa-duotone fa-xmark" />
// <FontAwesomeIcon icon="fa-duotone fa-chart-simple-horizontal" />

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <Section>
      <div className="flex items-center justify-between px-7 py-4 md:px-10">
        <div
          onClick={() => setOpen(!open)}
          className="absolute right-9 top-11 cursor-pointer text-3xl text-gray-200 md:hidden"
          // className="text-3xl absolute right-9 md:hidden cursor-pointer text-gray-200"
        >
          {!open ? <FontAwesomeIcon icon={faBars} /> : <></>}
        </div>

        <ul
          // className={`text-gray-200 flex flex-col md:items-center m-auto absolute md:static z-10 left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-300 ease-in ${
          className={`transition-{text-gray-200 ease-in} absolute left-0 w-full pl-16 pt-12 duration-500 md:static md:z-auto  md:flex md:w-auto md:items-center md:bg-slate-900 md:pb-0 md:pl-0 md:transition-none  ${
            // open ? "top-20 bg-slate-900" : "top-[-490px]"
            open ? 'top-0 bg-slate-800' : 'top-[-490px]'
          }`}
        >
          <li
            onClick={() => setOpen(!open)}
            className="absolute right-9 cursor-pointer text-3xl text-gray-200 md:hidden"
          >
            {open ? <FontAwesomeIcon icon={faXmark} /> : <></>}
          </li>
          {Header.map((header) => (
            <li key={header.name} className=" my-5 text-xl md:my-0 md:ml-8">
              {header.name === 'Github' || header.name === 'LinkedIn' ? (
                <GradientText>
                  <a
                    href={header.link}
                    className="duration-500 hover:text-white"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {header.name}
                  </a>
                </GradientText>
              ) : (
                <GradientText>
                  <a
                    onClick={() => setOpen(false)}
                    href={header.link}
                    className="hover:text-white"
                  >
                    {header.name}
                  </a>
                </GradientText>
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
// DeprecationWarning: Invalid 'main' field in '/home/xusr/Documents/Portfolio/node_modules/react-icons/package.json' of 'lib'.
