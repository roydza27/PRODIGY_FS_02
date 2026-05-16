import Banner from "@/features/home/components/Banner";
import CTASection from "@/features/home/components/CTASection";
import ContentSection from "@/features/home/components/ContentSection";
import FeaturesSection from "@/features/home/components/FeaturesSection";
import HeroSection from "@/features/home/components/HeroSection";
import StatsSection from "@/features/home/components/StatsSection";

const HomePage = () => {
  return (
    <div className="flex flex-col overflow-hidden">

      <main className="flex flex-col">
        <section id="hero">
          <HeroSection />
        </section>

        <section
          id="features"
          className="pt-28 md:pt-36 scroll-mt-24"
        >
          <FeaturesSection />
        </section>

        <section
          id="stats"
          className="pt-32 md:pt-40 scroll-mt-24"
        >
          <StatsSection />
        </section>

        <section
          id="content"
          className="pt-32 md:pt-40 scroll-mt-24"
        >
          <ContentSection />
        </section>

        <section
          id="cta"
          className="pt-32 pb-24 md:pt-40 md:pb-32 scroll-mt-24"
        >
          <CTASection />
        </section>


      </main>
    </div>
  );
};

export default HomePage;