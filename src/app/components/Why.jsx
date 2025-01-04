"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { fadeIn } from "../../../variants";
import { MdHandshake, MdKey, MdTrendingUp } from "react-icons/md";

const Why = () => {
  return (
    <section id="why" className="section flex items-center">
      <div className="container mx-auto">
        <motion.h2
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.6 }}
          className="text-center h2"
        >
          Unmatched excellence and customer satisfacation
        </motion.h2>
        <motion.p
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.6 }}
          className="max-w-[680px] text-center mx-auto mb-2"
        >
          Our dedication to providing exceptional services sets us apart from
          the competition. From the moment you engage with us, we strive to
          exceed your expectations in every interaction.
        </motion.p>

        {/* car img */}
        <motion.div
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.6 }}
          className="xl:ml-20"
        >
          <Image
            src={"/images/why/car.svg"}
            width={1060}
            height={420}
            alt="car"
          />
        </motion.div>
        {/* grid items */}
        <motion.div
          variants={fadeIn("up", 0.8)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.4 }}
          className="flex flex-wrap justify-center xl:grid xl:grid-cols-3 gap-4 xl:gap-y-0 xl:gap-x-[30px]"
        >
          {/* item 1 */}
          <div className="flex flex-col items-center text-center max-w-[160px] xl:max-w-none p-2 xl:p-0">
            <MdKey className="text-[38px] text-accent mb-4" />
            <h3 className="h3">Rent simple and quickly</h3>
            <p className="hidden xl:flex">
              We prioritize your need and beyond to ensure your experience with
              us is nothing short of outstanding.
            </p>
          </div>

          {/* item 2 */}
          <div className="flex flex-col items-center text-center max-w-[160px] xl:max-w-none p-2 xl:p-0">
            <MdTrendingUp className="text-[38px] text-accent mb-4" />
            <h3 className="h3">Modern & well maintained vehicle</h3>
            <p className="hidden xl:flex">
              We prioritize your need and beyond to ensure your experience with
              us is nothing short of outstanding.
            </p>
          </div>

          {/* item 3 */}
          <div className="flex flex-col items-center text-center max-w-[160px] xl:max-w-none p-2 xl:p-0">
            <MdHandshake className="text-[38px] text-accent mb-4" />
            <h3 className="h3">Prompt & flexible services</h3>
            <p className="hidden xl:flex">
              We prioritize your need and beyond to ensure your experience with
              us is nothing short of outstanding.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
export default Why;
