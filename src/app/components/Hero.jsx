"use client";
import { useContext } from "react";
import { SearchContext } from "../context/search";
import Search from "./Search";
import Image from "next/image";
import { motion, easeInOut } from "framer-motion";
import { fadeIn } from "../../../variants";

const Hero = () => {
  const { searchActive } = useContext(SearchContext);

  return (
    <section id="home" className="h-screen xl:h-[90vh] bg-[#b2b7c2]/10">
      <div className="container mx-auto h-full xl:pt-10">
        {/* text img wrapper */}
        <div className="flex flex-col xl:flex-row justify-center items-center xl:justify-start h-full">
          {/* text */}
          <div className="text-center xl:max-w-xl xl:text-left mt-16 xl:mt-0">
            <motion.h1
              variants={fadeIn("down", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.6 }}
              className="h1"
            >
              Explore the Finest <span className="text-accent">Gobal</span>{" "}
              Offers
            </motion.h1>
            <motion.p
              variants={fadeIn("down", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.6 }}
              className="description max-w-[550px] mx-auto xl:mx-0 mb-6 xl:mt-0"
            >
              Find your ideal ride for any adventure with out diverse range of
              affordable and dependable car rentals
            </motion.p>

            {/* btns */}
            <motion.div
              variants={fadeIn("down", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.8 }}
              className="flex justify-center gap-x-3 xl:justify-start"
            >
              <button className="btn-cta">
                <Image
                  src={"/icons/buttons/app-store.svg"}
                  width={132}
                  height={36}
                  alt="app store"
                />
              </button>
              <button className="btn-cta">
                <Image
                  src={"/icons/buttons/google-play.svg"}
                  width={132}
                  height={36}
                  alt="google-play"
                />
              </button>
            </motion.div>
          </div>

          {/* img */}
          <motion.div
            variants={fadeIn("left", 0.6)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.2 }}
            className="relative w-full h-full max-h-[50vh] md:max-w-[70vw] xl:max-w-[860px] xl:max-h-[542px] xl:absolute xl:-right-[100px] min-[1680px]:right-[120px] xl:top-48"
          >
            <Image
              src={"/images/hero/car.svg"}
              fill
              alt="car"
              style={{ objectFit: "contain" }}
              priority
            />
          </motion.div>
        </div>
      </div>
      {searchActive ? (
        <motion.div
          initial={{ y: "-100%" }}
          animate={{ y: 0 }}
          transition={{ ease: easeInOut }}
          className="fixed top-[80px] z-10 w-full max-w-[1920px]"
        >
          <Search />
        </motion.div>
      ) : (
        <div className="-mt-12 w-full max-w-[1300px] mx-auto">
          <motion.div
            variants={fadeIn("up", 0.8)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.2 }}
            className="-mt-12 w-full max-w-[1300px] mx-auto"
          >
            <Search />
          </motion.div>
        </div>
      )}
    </section>
  );
};
export default Hero;
