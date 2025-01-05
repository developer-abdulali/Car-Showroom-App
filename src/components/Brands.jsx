import { motion } from "framer-motion";
import { fadeInOnScroll } from "../../motion/variants";
import CountUp from "react-countup";

const brandImgs = [
  { src: "/brands/brand-1.svg" },
  { src: "/brands/brand-2.svg" },
  { src: "/brands/brand-3.svg" },
  { src: "/brands/brand-4.svg" },
  { src: "/brands/brand-5.svg" },
  { src: "/brands/brand-6.svg" },
  { src: "/brands/brand-7.svg" },
];

const Brands = () => {
  return (
    <section className="px-4 w-full h-[24vh] pt-24 flex items-center justify-center">
      <motion.div
        variants={fadeInOnScroll(0.2, 0.6)}
        initial="hidden"
        whileInView="visible"
        className="container mx-auto overflow-hidden"
      >
        <p className="lead text-center mb-6">
          Join <CountUp start={0} end={200} duration={5} />+ companies already
          growing
        </p>
        <div className="flex">
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="flex"
          >
            {brandImgs?.map((img, i) => (
              <div key={i} className="relative w-52 h-20 mr-12">
                <img src={img.src} alt="brand img" className="object-contain" />
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="flex"
          >
            {brandImgs?.map((img, i) => (
              <div key={i} className="relative w-52 h-20 mr-12">
                <img src={img.src} alt="brand img" className="object-contain" />
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Brands;
