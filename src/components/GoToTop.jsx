import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa"; // Import an arrow icon from React Icons

const GoToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <section className="fixed bottom-5 right-5">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="bg-accent text-[#FFFFFF] p-3 rounded-full shadow-lg hover:bg-accent_secondary transition duration-300 font-normal"
        >
          <FaArrowUp size={24} />
        </button>
      )}
    </section>
  );
};

export default GoToTop;
