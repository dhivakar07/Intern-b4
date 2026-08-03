import Features from "../Components/Features";
import Footer from "../Components/Footer";
import Hero from "../Components/Hero";
import Navbar from "../Components/Navbar";
import Pricing from "../Components/Pricing";
import Testimonial from "../Components/Testimonial";

function Home() {
  return (
    <>
      <header
        className="flex w-full flex-col items-center"
        id="top"
      >
        <Navbar />
      </header>
      <main className="flex w-full flex-col items-center">
        <Hero />
        <Features />
        <Testimonial />
        <Pricing />
      </main>
      <Footer />
    </>
  );
}

export default Home;
