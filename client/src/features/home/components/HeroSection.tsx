export default function HeroSection() {
  return (
    <section className="relative overflow-hidden px-4 py-16 sm:px-6 md:py-20 lg:px-8 lg:py-28">
      <div className="mx-auto flex max-w-7xl flex-col items-center text-center">
        <div className="max-w-3xl space-y-6">
          <span className="inline-flex rounded-full border border-white/10 bg-[#18181B] px-4 py-1 font-mono text-[10px] uppercase tracking-widest text-[#A1A1AA] font-semibold">
            Secure Authentication System
          </span>

          <h1 className="font-heading text-[clamp(2rem,5vw,4rem)] font-bold tracking-tight leading-[0.95] text-[#FAFAFA]">
            Build secure login and registration flows with confidence.
          </h1>

          <p className="mx-auto max-w-2xl text-base leading-7 text-[#A1A1AA] md:text-lg">
            Learn how authentication works end to end with protected routes,
            password hashing, and role-based access control.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <a
              href="/register"
              className="rounded-2xl bg-[#FAFAFA] !text-[#09090B] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#E4E4E7]"
            >
              Get Started
            </a>
            <a
              href="/login"
              className="rounded-2xl border border-[#27272A] px-5 py-3 text-sm font-semibold text-[#FAFAFA] transition hover:bg-[#18181B]"
            >
              Login
            </a>
          </div>
        </div>

        <div className="mt-14 w-full max-w-6xl">
          <div className="overflow-hidden rounded-3xl border border-[#27272A] bg-[#111113] shadow-2xl">
            <img
              src="https://readymadeui.com/images/kpis-dashboard-img.webp"
              alt="Authentication dashboard preview"
              className="h-auto w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}