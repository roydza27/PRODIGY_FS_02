export default function Banner() {

   return (
      <div role="region" aria-label="Promotion"
         className="bg-[#111113] px-4 py-2.5 relative flex items-center justify-center text-center border-b border-[#27272A] md:px-6 dark:bg-[#111113] dark:border-[#27272A]">
         <p className="text-sm text-[#FAFAFA] font-medium pr-6 leading-relaxed"><span aria-hidden="true">🎉</span> Limited Time
            Offer! Enjoy 20% OFF your first purchase –
            <a href="/register"
               className="ml-1 underline underline-offset-6 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#27272A] rounded">
               Register Now!
            </a>
         </p>

         <button type="button" aria-label="Dismiss notification banner"
            className="absolute right-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#27272A] rounded">
            <svg xmlns="http://www.w3.org/2000/svg" className="size-3 cursor-pointer fill-[#FAFAFA]"
               aria-hidden="true" viewBox="0 0 329.269 329">
               <path
                  d="M194.8 164.77 323.013 36.555c8.343-8.34 8.343-21.825 0-30.164-8.34-8.34-21.825-8.34-30.164 0L164.633 134.605 36.422 6.391c-8.344-8.34-21.824-8.34-30.164 0-8.344 8.34-8.344 21.824 0 30.164l128.21 128.215L6.259 292.984c-8.344 8.34-8.344 21.825 0 30.164a21.27 21.27 0 0 0 15.082 6.25c5.46 0 10.922-2.09 15.082-6.25l128.21-128.214 128.216 128.214a21.27 21.27 0 0 0 15.082 6.25c5.46 0 10.922-2.09 15.082-6.25 8.343-8.34 8.343-21.824 0-30.164zm0 0" />
            </svg>
         </button>
      </div>
   );
};