import { useState, useEffect, useRef } from 'react';

export default function Navbar() {
   const [isMenuOpen, setIsMenuOpen] = useState(false);
   const menuRef = useRef(null);
   const lastFocusedElementRef = useRef(null);

   const openMenu = () => {
      lastFocusedElementRef.current = document.activeElement;
      setIsMenuOpen(true);

      // Move focus into menu after state update
      setTimeout(() => {
         menuRef.current?.focus();
      }, 0);
   };

   const closeMenu = () => {
      setIsMenuOpen(false);

      // Restore focus after state update
      setTimeout(() => {
         lastFocusedElementRef.current?.focus();
      }, 0);
   };

   useEffect(() => {
      const handleEscapeKey = (e) => {
         if (e.key === 'Escape' && isMenuOpen) {
            closeMenu();
         }
      };

      document.addEventListener('keydown', handleEscapeKey);

      return () => {
         document.removeEventListener('keydown', handleEscapeKey);
      };
   }, [isMenuOpen]);

   return (
      <nav
         className="fixed top-0 left-0 right-0 z-50 min-h-[68px] border-b border-[#27272A] bg-[#111113]/80 px-4 py-2 backdrop-blur-xl md:px-8"
         aria-label="Main navigation"
      >
         <div className="max-w-7xl mx-auto flex flex-wrap items-center gap-4 w-full">
            <div className="flex-1 flex">
               <a
                  href="#"
                  className="min-w-9 inline-block focus:outline-none focus-visible:ring-2 focus-visible:ring-[#27272A] rounded"
               >
                  <span className="sr-only">Your Company</span>
                  <img
                     src="https://readymadeui.com/logo-alt.svg"
                     alt="readymadeui logo"
                     className="h-9 w-auto"
                  />
               </a>
            </div>

            <div
               id="collapseMenu"
               ref={menuRef}
               tabIndex={-1}
               className={`${isMenuOpen ? "block" : "hidden"} lg:block max-lg:bg-[#111113] dark:max-lg:bg-[#111113] max-lg:border-l max-lg:border-[#27272A] dark:max-lg:border-[#27272A] max-lg:w-1/2 max-lg:fixed max-lg:top-0 max-lg:right-0 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto max-sm:w-full z-50 outline-none`}
            >
               <div className="py-2 px-4 flex justify-between items-center border-b border-[#27272A] sticky top-0 bg-[#111113] dark:border-[#27272A] dark:bg-[#111113] lg:hidden max-lg:min-h-[68px]">
                  <a
                     href="#"
                     className="inline-block focus:outline-none focus-visible:ring-2 focus-visible:ring-[#27272A] rounded"
                  >
                     <span className="sr-only">Your Company</span>
                     <img
                        src="https://readymadeui.com/logo-alt.svg"
                        alt="readymadeui logo dialog"
                        className="h-9 w-auto"
                     />
                  </a>
                  <button type="button" aria-controls="collapseMenu"
                     onClick={closeMenu}
                     id="toggleClose"
                     className="cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#27272A] rounded"
                  >
                     <span className="sr-only">Close main menu</span>
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="size-4 fill-[#FAFAFA] dark:fill-[#FAFAFA]"
                        aria-hidden="true"
                        viewBox="0 0 329.269 329"
                     >
                        <path
                           d="M194.8 164.77 323.013 36.555c8.343-8.34 8.343-21.825 0-30.164-8.34-8.34-21.825-8.34-30.164 0L164.633 134.605 36.422 6.391c-8.344-8.34-21.824-8.34-30.164 0-8.344 8.34-8.344 21.824 0 30.164l128.21 128.215L6.259 292.984c-8.344 8.34-8.344 21.825 0 30.164a21.27 21.27 0 0 0 15.082 6.25c5.46 0 10.922-2.09 15.082-6.25l128.21-128.214 128.216 128.214a21.27 21.27 0 0 0 15.082 6.25c5.46 0 10.922-2.09 15.082-6.25 8.343-8.34 8.343-21.824 0-30.164zm0 0"
                           data-original="#000000"
                        />
                     </svg>
                  </button>
               </div>

               <ul className="flex flex-col gap-8 font-medium text-sm text-[#FAFAFA] lg:flex-row max-lg:p-6">
                 <li>
                   <a
                     href="#hero"
                     className="transition-colors hover:text-[#A1A1AA] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#27272A] rounded"
                     aria-current="page"
                   >
                     Home
                   </a>
                 </li>

                 <li>
                   <a
                     href="#features"
                     className="transition-colors hover:text-[#A1A1AA] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#27272A] rounded"
                   >
                     Features
                   </a>
                 </li>

                 <li>
                   <a
                     href="#stats"
                     className="transition-colors hover:text-[#A1A1AA] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#27272A] rounded"
                   >
                     Stats
                   </a>
                 </li>

                 <li>
                   <a
                     href="#content"
                     className="transition-colors hover:text-[#A1A1AA] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#27272A] rounded"
                   >
                     About
                   </a>
                 </li>

                 <li>
                   <a
                     href="#cta"
                     className="transition-colors hover:text-[#A1A1AA] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#27272A] rounded"
                   >
                     Contact
                   </a>
                 </li>

                 <li>
                   <a
                     href="/login"
                     className="transition-colors hover:text-[#A1A1AA] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#27272A] rounded"
                   >
                     Log in
                   </a>
                 </li>
               </ul>
            </div>

            <div className="flex items-center gap-4 lg:ml-4">
               <a
                  href="/register"
                  className="py-2 px-3.5 text-sm rounded-xl font-semibold cursor-pointer text-white border border-transparent bg-[#FAFAFA] !text-[#09090B] hover:bg-[#E4E4E7] transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#27272A]"
               >
                  Sign up
               </a>

               <button
                  type="button"
                  aria-controls="collapseMenu"
                  aria-expanded={isMenuOpen}
                  aria-haspopup="true"
                  id="toggleOpen"
                  onClick={openMenu}
                  className="cursor-pointer lg:hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-[#27272A] rounded">
                  <span className="sr-only">Open main menu</span>
                  <svg
                     className="size-7 fill-[#FAFAFA] dark:fill-[#FAFAFA]"
                     aria-hidden="true"
                     viewBox="0 0 20 20"
                     xmlns="http://www.w3.org/2000/svg"
                  >
                     <path
                        fillRule="evenodd"
                        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                        clipRule="evenodd"
                     ></path>
                  </svg>
               </button>
            </div>
         </div>
      </nav>
   );
};