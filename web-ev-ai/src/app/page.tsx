import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Showcase from "@/components/Showcase";
import ProductSpotlight from "@/components/ProductSpotlight";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import Process from "@/components/Process";
import CtaBanner from "@/components/CtaBanner";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import StickyContact from "@/components/StickyContact";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Showcase />
        <ProductSpotlight />
        <Services />
        <WhyUs />
        <Process />
        <CtaBanner />
      </main>
      <Footer />
      <BackToTop />
      <StickyContact />
    </>
  );
}
