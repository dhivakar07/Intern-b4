import Footer from "../Components/Footer";
import Hero from "../Components/Hero";
import Navbar from "../Components/Navbar";
import Pricing from "../Components/Pricing";

function Home() {
  return (
    <>
      <header className="container_wrap" id="top">
        <Navbar />
      </header>
      <main className="container_wrap">
        <Hero />
        <Pricing />
      </main>
      <Footer />
    </>
  );
}

export default Home;
