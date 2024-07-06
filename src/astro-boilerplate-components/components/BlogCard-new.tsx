// import "./blogstyle.css";

// import type { MarkdownInstance } from "astro";

// import type { IFrontmatter } from "../types/IFrontMatter";

// type IBlogCardProps = {
//   instance: MarkdownInstance<IFrontmatter>;
// };

// const BlogCard = (props: IBlogCardProps) => (
//   <>
//     {console.log(props)}
//     <article className="min-h-card max-h-cardLarge rounded-16 bg-background-subtle border-border-subtlest-tertiary shadow-2 group relative flex h-full snap-start flex-col border p-2">
//       <div className="flex flex-1 flex-col">
//         <div className="mx-2 flex flex-col">
//           <div className="Card_header__ygcHv -mx-1.5 my-1 mt-2 flex h-8 items-center">
//             <a
//               aria-label="Community Picks"
//               className="flex min-w-0 shrink items-center no-underline"
//               href="https://app.daily.dev/sources/community"
//             >
//               <img
//                 className="size-8 rounded-full object-cover"
//                 loading="lazy"
//                 type="avatar"
//                 alt="community's profile"
//                 src="https://res.cloudinary.com/daily-now/image/upload/t_logo,f_auto/v1655817725/logos/community"
//               />
//             </a>
//             <span className="laptop:mouse:invisible laptop:mouse:group-hover:visible ml-auto flex flex-row">
//               <a
//                 target="_blank"
//                 href="https://api.daily.dev/r/rWz8jfJlf"
//                 className="btn focus-outline typo-callout rounded-10 btn-primary mr-2 inline-flex h-8 cursor-pointer select-none flex-row items-center justify-center border border-transparent px-3 font-bold no-underline shadow-none transition duration-200 ease-in-out"
//               >
//                 Read post
//                 <svg
//                   width="1em"
//                   height="1em"
//                   viewBox="0 0 24 24"
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="pointer-events-none -mr-2 ml-1 size-6 !h-6 !w-6 text-base"
//                 >
//                   <path
//                     d="M7.801 6.6c.66 0 1.196.535 1.196 1.196 0 .55-.376 1.02-.912 1.154l-.137.026-.145.009H6.89l-.118.003-.315.02c-.506.06-.92.434-1.028.917l-.022.134-.007.138V17.4c0 .57.399 1.052.927 1.17l.135.023.138.007h7.197c.57 0 1.052-.399 1.17-.917l.022-.131.008-1.352a1.2 1.2 0 012.392-.14l.008.14v1.2a3.602 3.602 0 01-3.18 3.575l-.21.019-.21.006H6.6a3.602 3.602 0 01-3.575-3.18l-.019-.21L3 17.4v-7.203a3.597 3.597 0 013.386-3.59l.211-.007h1.204zM19.797 3a1.2 1.2 0 011.192 1.06l.008.14v8.4a1.2 1.2 0 01-2.392.14l-.008-.14V7.094l-6.012 6.016a1.2 1.2 0 01-1.463.183l-.121-.084-.113-.1a1.2 1.2 0 01-.1-1.583l.1-.113L16.9 5.399l-5.503.001a1.2 1.2 0 01-1.168-.925l-.024-.135-.008-.14a1.2 1.2 0 011.06-1.192l.14-.008h8.4z"
//                     fill="currentcolor"
//                     fill-rule="evenodd"
//                   ></path>
//                 </svg>
//               </a>
//               <button
//                 aria-label="Options"
//                 className="btn focus-outline typo-callout iconOnly rounded-10 btn-tertiary my-auto inline-flex size-8 cursor-pointer select-none flex-row items-center justify-center border p-0 font-bold no-underline shadow-none transition duration-200 ease-in-out "
//               >
//                 <svg
//                   width="1em"
//                   height="1em"
//                   viewBox="0 0 24 24"
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="pointer-events-none size-6"
//                 >
//                   <path
//                     d="M12 17a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm0-6.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM12 4a1.5 1.5 0 110 3 1.5 1.5 0 010-3z"
//                     fill="currentcolor"
//                     fill-rule="evenodd"
//                   ></path>
//                 </svg>
//               </button>
//             </span>
//           </div>
//           <h3 className="Card_title__6axF8 multi-truncate text-text-primary typo-title3 mt-2 line-clamp-3 break-words font-bold text-white">
//             100 FREE Frontend Challenges
//           </h3>
//         </div>
//         <div className="relative flex flex-1 flex-col">
//           <div className="flex-1"></div>
//           <div className="tablet:mx-2 flex items-center">
//             <div className="rounded-8 border-border-subtlest-tertiary typo-footnote text-text-quaternary my-2 mr-2 flex h-6 items-center justify-center border px-2">
//               #webdev
//             </div>
//             <div className="rounded-8 border-border-subtlest-tertiary typo-footnote text-text-quaternary my-2 mr-2 flex h-6 items-center justify-center border px-2">
//               #javascript
//             </div>
//             <div className="rounded-8 border-border-subtlest-tertiary typo-footnote text-text-quaternary my-2 flex h-6 items-center justify-center border px-2">
//               +2 tags
//             </div>
//           </div>
//           <div className="text-text-tertiary typo-footnote mx-4 flex items-center">
//             <time
//               title="Wed Jul 03 2024 16:05:40 GMT+0800 (Australian Western Standard Time)"
//               datetime="2024-07-03T08:05:40.964Z"
//             >
//               Jul 03
//             </time>
//             <span className="mx-1">•</span>
//             <span>9m read time</span>
//           </div>
//         </div>
//         <div className="relative flex flex-1 flex-col">
//           <div className="pointer-events-none relative flex flex-1">
//             <img
//               loading="lazy"
//               className="rounded-12 my-2 h-40 w-full object-cover"
//               type="post"
//               alt="Post Cover image"
//               src="https://res.cloudinary.com/daily-now/image/upload/f_auto,q_auto/v1/posts/bc37c54b1538cf9d9daad63fc8b3ca4d?_a=AQAEuiZ"
//             />
//           </div>
//           <div className="flex flex-row items-center justify-between">
//             <div className="small btn-quaternary btn-tertiary-avocado flex !min-w-[4.625rem] select-none flex-row items-stretch">
//               <button
//                 aria-label="Upvote"
//                 id="post-rWz8jfJlf-upvote-btn"
//                 aria-pressed="false"
//                 className="btn focus-outline typo-callout iconOnly rounded-10 inline-flex size-8 cursor-pointer select-none flex-row items-center justify-center border p-0 font-bold no-underline shadow-none transition duration-200 ease-in-out"
//               >
//                 <svg
//                   width="1em"
//                   height="1em"
//                   viewBox="0 0 24 24"
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="pointer-events-none size-6"
//                 >
//                   <path
//                     d="M9.456 4.216l-5.985 7.851c-.456.637-.583 1.402-.371 2.108l.052.155a2.384 2.384 0 002.916 1.443l2.876-.864.578 4.042a2.384 2.384 0 002.36 2.047h.234l.161-.006a2.384 2.384 0 002.2-2.041l.576-4.042 2.877.864a2.384 2.384 0 002.625-3.668L14.63 4.33a3.268 3.268 0 00-5.174-.115zm3.57.613c.16.114.298.253.411.411l5.897 7.736a.884.884 0 01-.973 1.36l-3.563-1.069a.884.884 0 00-1.129.722l-.678 4.75a.884.884 0 01-.875.759h-.234a.884.884 0 01-.875-.76l-.679-4.75a.884.884 0 00-1.128-.72l-3.563 1.068a.884.884 0 01-.973-1.36L10.56 5.24a1.767 1.767 0 012.465-.41z"
//                     fill="currentcolor"
//                     fill-rule="evenodd"
//                   ></path>
//                 </svg>
//               </button>
//               <label
//                 for="post-rWz8jfJlf-upvote-btn"
//                 className="typo-callout flex cursor-pointer items-center font-bold"
//               >
//                 <span className="flex h-5 min-w-[1ch] flex-col overflow-hidden">
//                   156
//                 </span>
//               </label>
//             </div>
//             <div className="small btn-quaternary btn-tertiary-blueCheese flex !min-w-[4.625rem] select-none flex-row items-stretch">
//               <button
//                 aria-label="Comments"
//                 id="post-rWz8jfJlf-comment-btn"
//                 aria-pressed="false"
//                 className="btn focus-outline typo-callout iconOnly rounded-10 inline-flex size-8 cursor-pointer select-none flex-row items-center justify-center border p-0 font-bold no-underline shadow-none transition duration-200 ease-in-out"
//               >
//                 <svg
//                   width="1em"
//                   height="1em"
//                   viewBox="0 0 24 24"
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="pointer-events-none size-6"
//                 >
//                   <path
//                     d="M8.084 3.217a35.447 35.447 0 017.05-.078l.782.078.279.031c1.089.121 1.885.372 2.606.828a4.516 4.516 0 011.664 1.86c.336.69.5 1.423.53 2.361l.005.321v3.975a4.493 4.493 0 01-3.545 4.392l-.207.04-2.089.346-2.86 2.992-.147.135c-.986.789-2.399.623-3.205-.324-.532-.625-.616-1.34-.51-2.29l.029-.224.038-.254.033-.187-1.332-.189a5.011 5.011 0 01-1.677-.55l-.253-.146-.243-.16a4.777 4.777 0 01-1.491-1.721 4.935 4.935 0 01-.532-1.972l-.009-.3V8.618c0-1.096.162-1.915.535-2.683.375-.77.94-1.4 1.664-1.859.649-.41 1.359-.655 2.288-.788l.318-.04.28-.031zm7.666 1.491a33.948 33.948 0 00-6.752-.075l-.748.075-.28.031c-.915.102-1.481.297-1.97.606a3.016 3.016 0 00-1.116 1.247c-.228.468-.357.989-.38 1.76l-.004.266v3.563c0 .577.134 1.116.375 1.587.242.471.592.874 1.024 1.18.37.263.801.453 1.276.554l.242.043 1.98.283c.339.048.457.096.575.175.119.078.262.187.27.386l-.002.024-.013.08-.164.741-.064.333c-.111.63-.167 1.332.09 1.634.263.309.7.39 1.037.187l.089-.062 2.998-3.135.13-.101.092-.063.077-.04.08-.03.035-.01.087-.02L17 15.545a2.993 2.993 0 002.495-2.77l.005-.182V8.618c0-.921-.13-1.506-.384-2.026A3.016 3.016 0 0018 5.345c-.44-.278-.943-.464-1.706-.572l-.265-.034-.279-.03zm-.55 6.294l.093.005c.398.044.707.36.707.746 0 .38-.301.693-.691.743l-.109.007H8.8l-.093-.005c-.398-.044-.707-.36-.707-.745 0-.38.301-.694.691-.744l.109-.007h6.4zm0-3.5l.093.004c.398.044.707.36.707.746 0 .38-.301.693-.691.743l-.109.007H8.8l-.093-.005C8.309 8.953 8 8.637 8 8.252c0-.38.301-.694.691-.744l.109-.007h6.4z"
//                     fill="currentcolor"
//                     fill-rule="evenodd"
//                   ></path>
//                 </svg>
//               </button>
//               <label
//                 for="post-rWz8jfJlf-comment-btn"
//                 className="typo-callout flex cursor-pointer items-center font-bold"
//               >
//                 <span className="flex h-5 min-w-[1ch] flex-col overflow-hidden">
//                   7
//                 </span>
//               </label>
//             </div>
//             <div className="small btn-quaternary btn-tertiary-bun flex !min-w-[4.625rem] select-none flex-row items-stretch">
//               <button
//                 aria-label="Bookmark"
//                 id="post-rWz8jfJlf-bookmark-btn"
//                 aria-pressed="false"
//                 className="btn focus-outline typo-callout iconOnly rounded-10 inline-flex size-8 cursor-pointer select-none flex-row items-center justify-center border p-0 font-bold no-underline shadow-none transition duration-200 ease-in-out"
//               >
//                 <svg
//                   width="1em"
//                   height="1em"
//                   viewBox="0 0 24 24"
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="pointer-events-none size-6"
//                 >
//                   <path
//                     d="M15.874 3H8.126a3.357 3.357 0 00-3.35 3.152l-.772 12.77c-.028.459.106.915.38 1.286l.101.125c.666.764 1.818.9 2.647.287L12 17.023l4.868 3.597a1.964 1.964 0 003.128-1.7l-.771-12.767A3.358 3.358 0 0015.874 3zm0 1.5c.981 0 1.794.764 1.854 1.744l.771 12.768a.464.464 0 01-.74.402l-5.207-3.848a.929.929 0 00-1.104 0L6.24 19.414a.464.464 0 01-.74-.402l.773-12.768c.06-.98.872-1.744 1.853-1.744h7.748z"
//                     fill="currentcolor"
//                     fill-rule="evenodd"
//                   ></path>
//                 </svg>
//               </button>
//             </div>
//             <button
//               aria-label="Copy link"
//               className="btn focus-outline typo-callout iconOnly rounded-10 btn-tertiary-cabbage inline-flex size-8 cursor-pointer select-none flex-row items-center justify-center border p-0 font-bold no-underline shadow-none transition duration-200 ease-in-out"
//             >
//               <svg
//                 width="1em"
//                 height="1em"
//                 viewBox="0 0 24 24"
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="pointer-events-none size-6"
//               >
//                 <path
//                   d="M13.2 4.096a3.743 3.743 0 015.148-.137l.144.137 1.412 1.412a3.743 3.743 0 01.137 5.148l-.137.144-4.023 4.023a3.743 3.743 0 01-5.148.137l-.144-.137-.706-.706a.749.749 0 01.982-1.125l.076.067.706.705c.84.84 2.181.876 3.063.105l.113-.105 4.022-4.022c.84-.84.876-2.181.105-3.064l-.105-.112-1.411-1.411a2.246 2.246 0 00-3.063-.105l-.113.105L13.2 6.213a.749.749 0 01-1.126-.982l.067-.076L13.2 4.096zM8.119 9.177a3.743 3.743 0 015.148-.137l.144.137.706.706a.749.749 0 01-.982 1.125l-.076-.067-.706-.705a2.246 2.246 0 00-3.063-.105l-.113.105-4.022 4.022a2.246 2.246 0 00-.105 3.064l.105.112 1.411 1.411c.84.84 2.181.876 3.063.105l.113-.105 1.058-1.058a.749.749 0 011.126.982l-.067.076-1.059 1.059a3.743 3.743 0 01-5.148.137l-.144-.137-1.412-1.412a3.743 3.743 0 01-.137-5.148l.137-.144L8.12 9.177z"
//                   fill="currentcolor"
//                   fill-rule="evenodd"
//                 ></path>
//               </svg>
//             </button>
//           </div>
//         </div>
//       </div>
//     </article>
//   </>
// );

// export { BlogCard };
