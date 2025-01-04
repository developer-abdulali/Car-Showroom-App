"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { fadeIn } from "../../../variants";

const Brands = () => {
  const allBrands = [
    { logo: "icons/brands/ford.svg", alt: "Ford" },
    { logo: "icons/brands/audi.svg", alt: "Audi" },
    { logo: "icons/brands/bmw.svg", alt: "BMW" },
    { logo: "icons/brands/vw.svg", alt: "Volkswagen" },
    { logo: "icons/brands/skoda.svg", alt: "Skoda" },
    { logo: "icons/brands/mazda.svg", alt: "Mazda" },
    // { logo: "icons/brands/hyundai.png", alt: "Hyundai" },
    // { logo: "icons/brands/kia.svg", alt: "Kia" },
    // { logo: "icons/brands/renault.svg", alt: "Renault" },
    // { logo: "icons/brands/nissan.svg", alt: "Nissan" },
  ];

  return (
    <section className="xl:mt-16 xl:h-[200px] bg-white flex flex-col justify-center">
      <motion.div
        variants={fadeIn("up", 0.4)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.6 }}
        className="container mx-auto"
      >
        <div className="grid grid-cols-3 gap-6 place-items-center xl:flex xl:flex-wrap xl:gap-x-6 xl:justify-between">
          {allBrands?.map((brand, i) => (
            <div key={i} className="flex items-center justify-center h-16 w-16">
              <Image
                src={brand.logo}
                width={60}
                height={60}
                alt={brand.alt}
                priority
              />
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Brands;
