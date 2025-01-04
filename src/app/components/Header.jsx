"use client";
import { Link } from "react-scroll";
import MobileSearch from "./MobileSearch";
import { useMediaQuery } from "react-responsive";
import { useContext, useEffect, useState } from "react";
import Image from "next/image";

import { BiMenuAltRight, BiX } from "react-icons/bi";
import { SearchContext } from "../context/search";

const Header = () => {
  const { setSearchActive } = useContext(SearchContext);
  const [header, setHeader] = useState(false);
  const [nav, setNav] = useState(false);

  const desktopMode = useMediaQuery({
    query: "(min-width: 1300px)",
  });

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setHeader(true);
      } else {
        setHeader(false);
      }
    };

    //search
    if (window.scrollY > 800) {
      setSearchActive(true);
    } else {
      setSearchActive(false);
    }

    // add event listeners
    window.addEventListener("scroll", handleScroll);

    //remove event listeners
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <div
      className={`${
        header ? "bg-white shadow-md py-2" : "bg-transparent shadow-none py-4"
      } fixed w-full max-w-[1920px] mx-auto z-20 transition-all duration-300`}
    >
      <div className="xl:container mx-auto flex flex-col xl:flex-row xl:items-center xl:justify-between">
        {/* logo */}
        <div className="flex items-center justify-between px-4">
          <Link
            to="home"
            smooth={desktopMode}
            spy={true}
            className="cursor-pointer"
          >
            <Image src={"/icons/logo.svg"} alt="Logo" width={194} height={64} />
          </Link>

          {/* nav open menu*/}
          <div
            onClick={() => setNav(!nav)}
            className="cursor-pointer xl:hidden"
          >
            {nav ? (
              <BiX className="text-4xl" />
            ) : (
              <BiMenuAltRight className="text-4xl" />
            )}
          </div>
        </div>

        {/* nav */}
        <nav
          className={`${
            nav ? "max-h-max py-8 px-4 xl:py-0 xl:px-0" : "max-h-0 xl:max-h-max"
          } flex flex-col w-full bg-white gap-y-6 overflow-hidden font-bold xl:font-medium xl:flex-row xl:w-max xl:gap-x-8 xl:h-max xl:bg-transparent xl:pb-0 transition-all duration-150 text-center xl:text-left uppercase text-sm xl:text-[15px] xl:normal-case`}
        >
          <Link
            to="home"
            activeClass="active"
            smooth={desktopMode}
            spy={true}
            className="cursor-pointer"
          >
            Home
          </Link>
          <Link
            to="cars"
            activeClass="active"
            smooth={desktopMode}
            spy={true}
            className="cursor-pointer"
          >
            Cars
          </Link>
          <Link
            to="about"
            activeClass="active"
            smooth={desktopMode}
            spy={true}
            className="cursor-pointer"
          >
            About
          </Link>
          <Link
            to="why"
            activeClass="active"
            smooth={desktopMode}
            spy={true}
            className="cursor-pointer"
          >
            Why US
          </Link>
          <Link
            to="testimonials"
            activeClass="active"
            smooth={desktopMode}
            spy={true}
            className="cursor-pointer"
          >
            Testimonials
          </Link>
          <Link
            to="contact"
            activeClass="active"
            smooth={desktopMode}
            spy={true}
            className="cursor-pointer"
          >
            Contact
          </Link>
          <Link
            to="/"
            activeClass="active"
            smooth={desktopMode}
            spy={true}
            className="xl:hidden btn btn-primary btn-sm max-w-[164px] mx-auto"
          >
            See All Cars
          </Link>
          <MobileSearch />
        </nav>
      </div>
    </div>
  );
};
export default Header;
