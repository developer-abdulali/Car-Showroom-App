import Hero from "./components/Hero";
import Brands from "./components/Brands";
import Features from "./components/Features";
import Integration from "./components/Integration";
import Testimonial from "./components/Testimonial";
import Trial from "./components/Trial";
import Footer from "./components/Footer";
import GoToTop from "./components/GoToTop";

const Home = () => {
  return (
    <div className="bg-body bg-cover bg-center min-h-screen">
      <Hero />
      <Brands />
      <Features />
      <Integration />
      <Testimonial />
      <Trial />
      <Footer />
      <GoToTop />
    </div>
  );
};

export default Home;
