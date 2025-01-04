"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaEnvelope, FaPhone } from "react-icons/fa";
import { Link } from "react-scroll";
import { fadeIn } from "../../../variants";
import { useState } from "react";

const Footer = () => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputValue);
    setInputValue("");
  };
  return (
    <footer id="contact" className="pt-20 bg-white z-20">
      <div className="container mx-auto mb-24">
        {/* grid */}
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.6 }}
          className="flex flex-col lg:flex-row lg:justify-between gap-x-5 gap-y-14"
        >
          <div className="flex flex-col flex-1 gap-y-8">
            <Link
              to={"home"}
              smooth={true}
              spy={true}
              className="cursor-pointer"
            >
              <Image
                src={"/icons/logo.svg"}
                alt="logo"
                width={200}
                height={200}
              />
            </Link>
            {/* about short text */}
            <div className="text-secondary">
              Carland Rentals offers reliable, affordable, and hassle-free car
              rental services to suit all your travel needs. Choose from a wide
              range of vehicles and enjoy your journey with confidence.
            </div>

            {/* phone & email */}
            <div className="flex flex-col gap-y-4 font-semibold">
              <div className="flex items-center gap-x-[10px]">
                <FaPhone />
                <div className="font-medium">(123)456-7890</div>
              </div>
              {/* email */}
              <div className="flex items-center gap-x-[10px]">
                <FaEnvelope />
                <div className="font-medium">office@carland.com</div>
              </div>
            </div>
          </div>

          {/* links */}
          <div className="flex flex-1 flex-col xl:items-center">
            <div>
              <h3 className="h3 font-bold mb-8">Company</h3>
              <ul className="flex flex-col gap-y-4 font-semibold">
                <li>
                  <a href="#">New York</a>
                </li>
                <li>
                  <a href="#">Careers</a>
                </li>
                <li>
                  <a href="#">Mobile</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#">How we work</a>
                </li>
              </ul>
            </div>
          </div>

          {/* programs */}
          <div className="flex-1">
            <h3 className="h3 font-bold mb-8">Working hours</h3>
            <div className="flex flex-col gap-y-4">
              <div className="flex gap-x-2">
                <div className="text-secondary">Mon-Fri:</div>
                <div className="font-semibold">Mon-Fri:</div>
              </div>

              <div className="flex gap-x-2">
                <div className="text-secondary">Sat:</div>
                <div className="font-semibold">09:00Am - 07:00</div>
              </div>

              <div className="flex gap-x-2">
                <div className="text-secondary">Sun:</div>
                <div className="font-semibold">Closed</div>
              </div>
            </div>
          </div>

          {/* newsletter */}
          <div className="flex-1">
            <h3 className="h3 font-bold mb-8">Newsletter</h3>
            <div className="mb-9 text-secondary">
              Stay updated with the latest offers, travel tips, and car rental
              deals. Subscribe to our newsletter today!
            </div>

            {/* form */}
            <form onSubmit={handleSubmit} className="flex gap-x-2 h-14">
              <input
                type="email"
                name="email"
                placeholder="Your email"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className="outline-none bg-white h-full border rounded-lg pl-4 focus:border-accent"
              />

              <button type="submit" className="btn btn-sm btn-accent w-24">
                Submit
              </button>
            </form>
          </div>
        </motion.div>
      </div>
      {/* copyright */}
      <div className="text-center py-10 border-t text-sm">
        Copyright &copy; Carland 2025. All rights reserved.
      </div>
    </footer>
  );
};
export default Footer;
