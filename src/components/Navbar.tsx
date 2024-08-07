// import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { useState } from "react";

// import { Header, Section } from "@/astro-boilerplate-components/index";

// const Navbar = () => {
//   const [open, setOpen] = useState(false);

//   return (
//     <Section>
//       <header className="mb-10">
//         <button
//           onClick={() => setOpen(!open)}
//           className="absolute right-5 z-50 cursor-pointer text-3xl text-gray-200 sm:hidden"
//         >
//           {!open ? <FontAwesomeIcon icon={faBars} /> : <></>}
//         </button>
//         <nav>
//           <ul
//             className={`fixed inset-y-0 right-0 z-10 -ml-6 flex flex-col gap-6 bg-slate-600/70 p-[min(20vh,3rem)4rem] text-center text-xl capitalize text-white backdrop-blur-lg transition duration-300 ease-in sm:static sm:z-auto sm:flex sm:w-auto sm:translate-x-0 sm:flex-row sm:items-center sm:justify-start sm:bg-transparent sm:p-2 sm:pb-0 sm:transition-none ${
//               open ? "translate-x-0" : "translate-x-full "
//             }`}
//           >
//             <li>
//               <button
//                 onClick={() => setOpen(!open)}
//                 className="absolute right-3 top-2 z-50 cursor-pointer text-3xl text-gray-200 sm:hidden"
//               >
//                 {open ? <FontAwesomeIcon icon={faXmark} /> : <></>}
//               </button>
//             </li>
//             {Header.map((header) => (
//               <li
//                 key={header.name}
//                 className="transition duration-200 hover:scale-125 focus:scale-125 md:my-0 md:mr-8"
//               >
//                 <a
//                   className="hover:text-sky-500 focus:text-sky-500"
//                   href={header.link}
//                   target={header?.target}
//                   rel="noopener noreferrer"
//                 >
//                   {header.name}
//                 </a>
//               </li>
//             ))}
//           </ul>
//         </nav>
//       </header>
//     </Section>
//   );
// };

// export { Navbar };
