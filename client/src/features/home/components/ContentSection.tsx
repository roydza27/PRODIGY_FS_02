export default function ContentSection() {
   return (
      <section className="px-4 md:px-8">
         <div className="grid items-center gap-12 max-w-2xl mx-auto lg:grid-cols-2 lg:max-w-7xl md:gap-16">

            <div className="max-w-xl mx-auto lg:mx-0 w-full bg-[#111113] px-3 py-6 rounded-2xl border border-[#27272A] dark:bg-[#111113]">
               <div className="w-full aspect-[18/12]">
                  <img
                     src="https://readymadeui.com/images/insights-illus.webp"
                     alt="Authentication dashboard"
                     className="rounded-2xl object-contain w-full h-full"
                  />
               </div>
            </div>

            <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
               <h2 className="font-heading text-[clamp(2rem,5vw,4rem)] font-bold tracking-tight leading-[0.95] mb-6 leading-tight text-[#FAFAFA] md:text-4xl">
                  Secure Authentication Built for Modern Applications
               </h2>

               <p className="text-base leading-relaxed text-[#A1A1AA]">
                  Build a secure and scalable authentication system with protected routes,
                  encrypted credentials, and seamless user access management. Designed to
                  help developers create reliable login experiences with confidence.
               </p>

               <ul className="list-none text-left text-sm font-medium space-y-4 mt-8 text-[#A1A1AA]">
                  <li className="flex items-center gap-2.5">
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="size-[18px] bg-[#18181B] fill-green-600 rounded-full p-1 overflow-visible dark:bg-[#18181B]/20 dark:fill-green-400"
                        viewBox="0 0 511.985 511.985"
                        aria-hidden="true"
                     >
                        <path d="M500.088 83.681c-15.841-15.862-41.564-15.852-57.426 0L184.205 342.148 69.332 227.276c-15.862-15.862-41.574-15.862-57.436 0s-15.862 41.574 0 57.436l143.585 143.585c7.926 7.926 18.319 11.899 28.713 11.899s20.797-3.963 28.723-11.899l287.171-287.181c15.862-15.851 15.862-41.574 0-57.435" />
                     </svg>
                     Secure user login and registration flows.
                  </li>

                  <li className="flex items-center gap-2.5">
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="size-[18px] bg-[#18181B] fill-green-600 rounded-full p-1 overflow-visible dark:bg-[#18181B]/20 dark:fill-green-400"
                        viewBox="0 0 511.985 511.985"
                        aria-hidden="true"
                     >
                        <path d="M500.088 83.681c-15.841-15.862-41.564-15.852-57.426 0L184.205 342.148 69.332 227.276c-15.862-15.862-41.574-15.862-57.436 0s-15.862 41.574 0 57.436l143.585 143.585c7.926 7.926 18.319 11.899 28.713 11.899s20.797-3.963 28.723-11.899l287.171-287.181c15.862-15.851 15.862-41.574 0-57.435" />
                     </svg>
                     Protect routes with role-based access control.
                  </li>

                  <li className="flex items-center gap-2.5">
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="size-[18px] bg-[#18181B] fill-green-600 rounded-full p-1 overflow-visible dark:bg-[#18181B]/20 dark:fill-green-400"
                        viewBox="0 0 511.985 511.985"
                        aria-hidden="true"
                     >
                        <path d="M500.088 83.681c-15.841-15.862-41.564-15.852-57.426 0L184.205 342.148 69.332 227.276c-15.862-15.862-41.574-15.862-57.436 0s-15.862 41.574 0 57.436l143.585 143.585c7.926 7.926 18.319 11.899 28.713 11.899s20.797-3.963 28.723-11.899l287.171-287.181c15.862-15.851 15.862-41.574 0-57.435" />
                     </svg>
                     Store passwords securely with hashing mechanisms.
                  </li>

                  <li className="flex items-center gap-2.5">
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="size-[18px] bg-[#18181B] fill-green-600 rounded-full p-1 overflow-visible dark:bg-[#18181B]/20 dark:fill-green-400"
                        viewBox="0 0 511.985 511.985"
                        aria-hidden="true"
                     >
                        <path d="M500.088 83.681c-15.841-15.862-41.564-15.852-57.426 0L184.205 342.148 69.332 227.276c-15.862-15.862-41.574-15.862-57.436 0s-15.862 41.574 0 57.436l143.585 143.585c7.926 7.926 18.319 11.899 28.713 11.899s20.797-3.963 28.723-11.899l287.171-287.181c15.862-15.851 15.862-41.574 0-57.435" />
                     </svg>
                     Manage authenticated sessions with confidence.
                  </li>
               </ul>

               <a
                  href="#"
                  className="inline-block mt-8 py-2 px-3.5 text-sm rounded-2xl font-semibold text-white border border-transparent bg-[#FAFAFA] !text-[#09090B] hover:bg-[#E4E4E7] transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#27272A]"
               >
                  Get started
               </a>
            </div>
         </div>
      </section>
   );
}