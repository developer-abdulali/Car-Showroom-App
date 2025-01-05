import { Link } from "react-router-dom";

const icons = [
  { src: "/footer/1.svg", to: "/" },
  { src: "/footer/2.svg", to: "/" },
  { src: "/footer/3.svg", to: "/" },
  { src: "/footer/4.svg", to: "/" },
  { src: "/footer/5.svg", to: "/" },
  { src: "/footer/6.svg", to: "/" },
  { src: "/footer/7.svg", to: "/" },
];

const Footer = () => {
  return (
    <footer className="bg-[#10112f] py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col xl:flex-row items-center gap-12 xl:justify-between">
          {/* Social links */}
          <div className="flex gap-5 flex-wrap justify-center xl:justify-start">
            {icons?.map((icon, i) => {
              return (
                <Link to={icon.to} key={i}>
                  <div className="relative w-6 h-6">
                    <img
                      src={icon.src}
                      alt={`icon-${i}`}
                      // width={24}
                      // height={24}
                    />
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Logo */}
          <Link to="/" className="relative w-[184px] h-[22px] flex-shrink-0">
            <img src="/logo.svg" alt="logo" className="object-contain" />
          </Link>

          {/* Copyright */}
          <p className="text-center xl:text-left text-white">
            &copy; 2025 Focus. Rantels. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
