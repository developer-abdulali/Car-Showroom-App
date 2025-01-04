"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

import {
  MdOutlineBuildCircle,
  MdOutlineDirectionsCar,
  MdOutlineMapsHomeWork,
} from "react-icons/md";
import { fadeIn } from "../../../variants";

const About = () => {
  const [ref, InView] = useInView({
    threshold: 0.5,
  });
  return (
    <section id="about" ref={ref} className="section flex items-center">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:justify-between">
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.6 }}
            className="flex-1 mb-8 xl:mb-0"
          >
            {/* image */}
            <Image
              src={"/images/about/car01.png"}
              alt="car"
              width={600}
              height={448}
            />
          </motion.div>
          {/* text & stats */}
          <div className="flex-1 flex items-start xl:justify-center">
            <div className="xl:max-w-[517px]">
              <motion.h2
                variants={fadeIn("up", 0.4)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.6 }}
                className="h2"
              >
                Car services simplified
              </motion.h2>
              <motion.p
                variants={fadeIn("up", 0.6)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.6 }}
                className="mb-[42px] max-w-md"
              >
                Rent, choose, and repair with ease. Our convenient locations
                diverse acar types, and reliable repair points ensure a seamless
                car experrience.
              </motion.p>
              {/* stats */}
              <motion.div
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.2 }}
                className="flex items-center gap-x-8 mb-12"
              >
                {/* car types */}
                <div className="flex flex-col w-[100px]">
                  <MdOutlineDirectionsCar className="text-5xl text-accent" />
                  <div className="text-3xl font-black mb-2">
                    {InView ? (
                      <CountUp start={0} end={50} duration={3} delay={1} />
                    ) : null}
                    +
                  </div>
                  <div className="uppercase text-[13px] font-semibold text-secondary">
                    car <br /> types
                  </div>
                </div>

                {/* rental outlets */}
                <div className="flex flex-col w-[100px]">
                  <MdOutlineMapsHomeWork className="text-5xl text-accent" />
                  <div className="text-3xl font-black mb-2">
                    {InView ? (
                      <CountUp start={0} end={135} duration={3} delay={1} />
                    ) : null}
                    +
                  </div>
                  <div className="uppercase text-[13px] font-semibold text-secondary">
                    rental <br /> outlets
                  </div>
                </div>

                {/* car points */}
                <div className="flex flex-col w-[100px]">
                  <MdOutlineBuildCircle className="text-5xl text-accent" />
                  <div className="text-3xl font-black mb-2">
                    {InView ? (
                      <CountUp start={0} end={35} duration={3} delay={1} />
                    ) : null}
                    +
                  </div>
                  <div className="uppercase text-[13px] font-semibold text-secondary">
                    repair <br /> points
                  </div>
                </div>
              </motion.div>
              {/* button */}
              <motion.button
                variants={fadeIn("up", 1)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.6 }}
                className="hidden xl:block bg-accent hover:bg-accent-hover rounde-[10px] w-full h-16 uppercase font-medium text-white tracking-[2px] text-[13px] max-w-[184px]"
              >
                Sell all cars
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
