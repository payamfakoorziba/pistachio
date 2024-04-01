import AboutUs from "@/components/sections/about-us";
import FrequentlyAskedQuestions from "@/components/sections/faq";
import Features from "@/components/sections/features";
import Hero from "@/components/sections/hero";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <FrequentlyAskedQuestions />
      <AboutUs />
    </>
  );
}
