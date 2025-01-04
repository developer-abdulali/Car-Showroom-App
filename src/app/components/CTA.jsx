"use client";
import { motion } from "framer-motion";
import { fadeIn } from "../../../variants";
import Image from "next/image";

const CTA = () => {
  return (
    <section
      id="contact"
      className="pt-24 xl:pt-48 flex items-end pb-0 bg-[#b2b7c2]/10"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row xl:items-center">
          {/* text */}
          <div className="flex-1 text-center md:text-left mb-12 md:mb-0">
            <div className="max-w-[520px] mx-auto order-2 xl:order-none">
              <motion.h2
                variants={fadeIn("right", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.6 }}
                className="h2 text-3xl font-bold leading-tight mb-6"
              >
                Download Our App Now and Hit the Road with Ease
              </motion.h2>
              <motion.p
                variants={fadeIn("right", 0.4)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.6 }}
                className="mb-10 text-gray-700 leading-relaxed"
              >
                Experience seamless car rentals at your fingertips. With our
                app, you can book, track, and manage your rentals anytime,
                anywhere. Your next adventure is just a tap away!
              </motion.p>
              {/* btn */}
              <motion.div
                variants={fadeIn("up", 0.6)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.6 }}
                className="flex gap-x-3 justify-center md:justify-start"
              >
                <button className="btn-cta flex items-center justify-center">
                  <Image
                    src={"/icons/buttons/app-store.svg"}
                    width={132}
                    height={36}
                    alt="Download on the App Store"
                  />
                </button>
                <button className="btn-cta flex items-center justify-center">
                  <Image
                    src={"/icons/buttons/google-play.svg"}
                    width={132}
                    height={36}
                    alt="Get it on Google Play"
                  />
                </button>
              </motion.div>
            </div>
          </div>

          {/* img */}
          <motion.div
            variants={fadeIn("up", 0.8)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.2 }}
            className="flex-1 flex justify-center order-1 md:order-none"
          >
            <Image
              src={"/images/cta/phone.svg"}
              alt="App Preview on Phone"
              width={320}
              height={640}
              className="rounded-lg shadow-lg"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
export default CTA;
