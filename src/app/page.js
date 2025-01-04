import About from "./components/About";
import Cars from "./components/Cars";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import GoToTop from "./components/GoToTop";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Testimonials from "./components/Testimonials";
import Why from "./components/Why";

const Home = () => {
  return (
    <main className="max-w-[1920px] bg-white mx-auto relative overflow-hidden">
      <Header />
      <Hero />
      <Cars />
      <About />
      <Why />
      <Testimonials />
      <CTA />
      <Footer />
      <GoToTop />
    </main>
  );
};
export default Home;
