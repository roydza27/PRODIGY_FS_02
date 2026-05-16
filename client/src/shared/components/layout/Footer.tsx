const FOOTER_DATA = {
   sections: [
      {
         title: "Resources",
         links: [
            { name: "Graphic Design Tools", href: "#" },
            { name: "Video Editing Tools", href: "#" },
            { name: "Image Enhancer", href: "#" },
            { name: "Remove Backgrounds", href: "#" },
            { name: "Photo Enhancement", href: "#" },
            { name: "Explore All Tools", href: "#" },
         ],
      },
      {
         title: "Helpful Links",
         links: [
            { name: "Subscription Plans", href: "#" },
            { name: "Our Story", href: "#" },
            { name: "Developer API", href: "#" },
            { name: "Career Opportunities", href: "#" },
            { name: "Become a Contributor", href: "#" },
            { name: "Brand Guidelines", href: "#" },
            { name: "Upcoming Events", href: "#" },
            { name: "Search Insights", href: "#" },
            { name: "Latest Articles", href: "#" },
         ],
      },
      {
         title: "Policies",
         links: [
            { name: "Terms & Conditions", href: "#" },
            { name: "User Agreement", href: "#" },
            { name: "Data Privacy Policy", href: "#" },
            { name: "Copyright Notice", href: "#" },
            { name: "Cookie Usage Policy", href: "#" },
            { name: "Manage Cookies", href: "#" },
         ],
      },
   ],
   socials: [
      {
         label: "Facebook",
         href: "#",
         viewBox: "0 0 155.139 155.139",
         path: "M89.584 155.139V84.378h23.742l3.562-27.585H89.584V39.184c0-7.984 2.208-13.425 13.67-13.425l14.595-.006V1.08C115.325.752 106.661 0 96.577 0 75.52 0 61.104 12.853 61.104 36.452v20.341H37.29v27.585h23.814v70.761z",
      },
      {
         label: "LinkedIn",
         href: "#",
         viewBox: "0 0 24 24",
         path: "M23.994 24v-.001H24v-8.802c0-4.306-.927-7.623-5.961-7.623-2.42 0-4.044 1.328-4.707 2.587h-.07V7.976H8.489v16.023h4.97v-7.934c0-2.089.396-4.109 2.983-4.109 2.549 0 2.587 2.384 2.587 4.243V24zM.396 7.977h4.976V24H.396zM2.882 0C1.291 0 0 1.291 0 2.882s1.291 2.909 2.882 2.909 2.882-1.318 2.882-2.909A2.884 2.884 0 0 0 2.882 0",
      },
      {
         label: "X",
         href: "#",
         viewBox: "0 0 1226.37 1226.37",
         path: "M727.348 519.284 1174.075 0h-105.86L680.322 450.887 370.513 0H13.185l468.492 681.821L13.185 1226.37h105.866l409.625-476.152 327.181 476.152h357.328L727.322 519.284zM582.35 687.828l-47.468-67.894-377.686-540.24H319.8l304.797 435.991 47.468 67.894 396.2 566.721H905.661L582.35 687.854z",
      },
   ],
};

export default function Footer() {
   return (
      <footer className="bg-[#111113] dark:bg-[#111113] pt-16 pb-8 px-4 md:px-8">
         <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-12 gap-x-6 sm:gap-x-8">

               {/* Link Sections */}
               {FOOTER_DATA.sections.map((section) => (
                  <div key={section.title} className="space-y-6">
                     <h3 className="font-heading text-lg font-semibold tracking-tight text-[#FAFAFA]">{section.title}</h3>
                     <ul className="space-y-4 font-mono text-[11px] uppercase tracking-widest text-[#A1A1AA] font-medium">
                        {section.links.map((link) => (
                           <li key={link.name}>
                              <a
                                 href={link.href}
                                 className="hover:text-[#FAFAFA] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#27272A] rounded transition-all"
                              >
                                 {link.name}
                              </a>
                           </li>
                        ))}
                     </ul>
                  </div>
               ))}

               {/* Social Media & CTA Section */}
               <div className="space-y-6">
                  <h3 className="font-heading text-lg font-semibold tracking-tight text-[#FAFAFA]">Social Media</h3>
                  <ul className="flex flex-wrap gap-6">
                     {FOOTER_DATA.socials.map((social) => (
                        <li key={social.label}>
                           <a
                              href={social.href}
                              className="flex items-center bg-[#18181B] dark:bg-[#111113] w-8 h-8 p-2 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-[#27272A]"
                              aria-label={social.label}
                           >
                              <svg
                                 xmlns="http://www.w3.org/2000/svg"
                                 className="size-full fill-[#FAFAFA]"
                                 viewBox={social.viewBox}
                                 aria-hidden="true"
                              >
                                 <path d={social.path} />
                              </svg>
                           </a>
                        </li>
                     ))}
                  </ul>

                  <div className="!mt-8">
                     <h6 className="font-mono text-[11px] uppercase tracking-widest text-[#A1A1AA]">Get exclusive assets sent straight to your inbox</h6>
                     <div className="mt-6">
                        <a
                           href="#"
                           className="py-2 px-3.5 text-sm rounded-xl font-semibold inline-block cursor-pointer tracking-wide text-white border border-transparent bg-[#FAFAFA] !text-[#09090B] hover:bg-[#E4E4E7] transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#27272A]"
                        >
                           Sign up
                        </a>
                     </div>
                  </div>
               </div>
            </div>

            <hr className="my-8 border-[#27272A]" />

            <div className="text-center">
               <p className="text-[#A1A1AA] text-sm">© ReadymadeUI. All rights reserved.</p>
            </div>
         </div>
      </footer>
   );
}