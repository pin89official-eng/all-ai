import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductSpotlight from "@/components/ProductSpotlight";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import Process from "@/components/Process";
import CtaBanner from "@/components/CtaBanner";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ProductSpotlight />
        <Services />
        <WhyUs />
        <Process />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
