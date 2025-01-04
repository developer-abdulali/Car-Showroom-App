"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import { fadeIn } from "../../../variants";
import { FaQuoteLeft } from "react-icons/fa";
import Image from "next/image";

const testimonialsData = [
  {
    message:
      "They truely exceeded my expectations and made my car rental experience delight",
    avatar: "/images/testimonial/avatar.png",
    name: "John Doe",
    job: "Photographer & Videographer",
  },
  {
    message:
      "They truely exceeded my expectations and made my car rental experience delight",
    avatar: "/images/testimonial/avatar.png",
    name: "John Doe",
    job: "Photographer & Videographer",
  },
];

const TestimonialSlider = () => {
  return (
    <motion.div
      variants={fadeIn("up", 0.4)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.6 }}
      className="container mx-auto"
    >
      <Swiper
        pagination={{ clickable: true, dynamicBullets: true }}
        modules={[Pagination]}
        className="h-[450px] xl:h-[400px]"
      >
        {testimonialsData.map((person, i) => {
          const { name, message, avatar, job } = person;
          return (
            <SwiperSlide key={i}>
              <div className="flex flex-col justify-center items-center">
                <FaQuoteLeft className="text-7xl text-accent mb-6" />
                <div className="text-2xl xl:text-4xl max-w-[874px] mb-12 font-medium">
                  {message}
                </div>
                <Image
                  src={avatar}
                  alt={name}
                  width={64}
                  height={64}
                  className="mb-4"
                />
                <div className="text-lg font-medium">{name}</div>
                <div className="text-secondary">{job}</div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </motion.div>
  );
};
export default TestimonialSlider;
