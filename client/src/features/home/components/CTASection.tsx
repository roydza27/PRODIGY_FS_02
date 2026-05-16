export default function CTASection() {

   return (
      <section className="px-4 md:px-8">
         <div className="mx-auto max-w-7xl rounded-3xl border border-[#27272A] bg-[#111113]/70 px-6 py-12 backdrop-blur-sm md:px-10 md:py-14">
            <div className="mx-auto flex max-w-3xl flex-col items-center text-center gap-6">
               <h2 className="font-heading text-[clamp(2rem,5vw,4rem)] font-bold tracking-tight leading-[0.95] tracking-tight text-[#FAFAFA] md:text-4xl">
                  Ready to build?
               </h2>
               <p className="text-base text-[#FAFAFA] leading-relaxed"> Experience the future of our innovative solutions.
                  Create your account today to explore powerful features, and gain exclusive access to everything we offer.
               </p>


               <a
                  href="/register"
                  className="inline-flex items-center rounded-2xl bg-[#FAFAFA] !text-[#09090B] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#E4E4E7] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#27272A]"
               >
                  Get started
               </a>
            </div>
         </div>
      </section>
   );
}
