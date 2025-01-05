import { motion } from "framer-motion";
import { BiSolidQuoteLeft } from "react-icons/bi";
import { fadeInOnScroll } from "../../motion/variants";
const Testimonial = () => {
  const testimonialData = [
    {
      name: "John Doe",
      message:
        "This service was incredible! It exceeded all my expectations, and I couldn't be happier with the results.",
    },
    {
      name: "Jane Smith",
      message:
        "Absolutely amazing! The team was professional, and the quality of work was top-notch. Highly recommended!",
    },
    {
      name: "Robert Brown",
      message:
        "Great experience from start to finish. They truly cared about my needs and delivered beyond my expectations.",
    },
    {
      name: "Emily Davis",
      message:
        "I was blown away by their attention to detail and dedication. Everything was perfect!",
    },
    {
      name: "Michael Johnson",
      message:
        "A truly exceptional service! I’ll definitely be coming back for future needs. Thank you so much!",
    },
  ];

  return (
    <section className="px-4 w-full mb-24 xl:mb-32 flex items-center justify-center">
      <div className="overflow-hidden">
        {/* text */}
        <motion.div
          variants={fadeInOnScroll(0.2, 0.4)}
          initial="hidden"
          whileInView="visible"
        >
          <h2 className="h2 mb-6 text-center">What People Are Saying</h2>
          <p className="lead text-center mb-24">
            Hear directly from those who have improved their efficeincy and
            organization
          </p>
        </motion.div>

        {/* card */}
        <motion.div
          variants={fadeInOnScroll(0.2, 0.6)}
          initial="hidden"
          whileInView="visible"
        >
          <div className="flex">
            <motion.div
              initial={{ x: 0 }}
              animate={{ x: "-100%" }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="flex"
            >
              {testimonialData.map((item, i) => {
                return (
                  <div
                    key={i}
                    className="relative w-[460px] h-[300px] bg-[#0e11354e] mr-12 rounded-2xl flex flex-col justify-center px-14"
                  >
                    <BiSolidQuoteLeft className="text-accent mb-3 text-3xl" />
                    <p className="mb-4 text-lg text-white/80">{item.message}</p>
                    <p className="text-xl">{item.name}</p>
                  </div>
                );
              })}
            </motion.div>

            <motion.div
              initial={{ x: 0 }}
              animate={{ x: "-100%" }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="flex"
            >
              {testimonialData.map((item, i) => {
                return (
                  <div
                    key={i}
                    className="relative w-[460px] h-[300px] bg-[#0e11354e] mr-12 rounded-2xl flex flex-col justify-center px-14"
                  >
                    <BiSolidQuoteLeft className="text-accent mb-3 text-3xl" />
                    <p className="mb-4 text-lg text-white/80">{item.message}</p>
                    <p className="text-xl">{item.name}</p>
                  </div>
                );
              })}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
export default Testimonial;
