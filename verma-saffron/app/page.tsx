import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Stats from "@/components/Stats";
import About from "@/components/About";
import Speeches from "@/components/Speeches";
import HomeTimeline from "@/components/HomeTimeline";
import Gallery from "@/components/Gallery";
import Honours from "@/components/Honours";
import Legacy from "@/components/Legacy";
import QuoteSection from "@/components/QuoteSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Marquee />
      <Stats />
      <About />
      <Speeches />
      <HomeTimeline />
      <Gallery />
      <Honours />
      <Legacy />
      <QuoteSection />
      <Footer />
    </>
  );
}
