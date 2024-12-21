"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white text-gray-800 p-5 shadow-md fixed top-0 left-0 w-full z-50">
      <div className="flex justify-between items-center max-w-screen-xl mx-auto">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="text-2xl font-bold text-gray-900">
            <span className="text-blue-600">Abbas </span>
            <span className="text-gray-800">Portfolio</span>
          </div>
        </div>

        {/* Hamburger Icon */}
        <div className="lg:hidden flex items-center">
          <motion.div
            className="cursor-pointer"
            onClick={toggleMenu}
            initial={false}
            animate={isOpen ? "open" : "closed"}
            variants={{
              closed: { rotate: 0 },
              open: { rotate: 45 }
            }}
          >
            <motion.div
              variants={{
                closed: { y: 0, rotate: 0 },
                open: { y: 6, rotate: 45 }
              }}
              className="w-8 h-1 bg-gray-800 rounded-full mb-1"
              transition={{ duration: 0.3 }}
            />
            <motion.div
              variants={{
                closed: { opacity: 1 },
                open: { opacity: 0 }
              }}
              className="w-8 h-1 bg-gray-800 rounded-full mb-1"
              transition={{ duration: 0.3 }}
            />
            <motion.div
              variants={{
                closed: { y: 0, rotate: 0 },
                open: { y: -6, rotate: -45 }
              }}
              className="w-8 h-1 bg-gray-800 rounded-full"
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        </div>

        {/* Navbar Links for Desktop */}
        <div className="hidden lg:flex space-x-8">
          <a href="#home" className="text-gray-800 hover:text-blue-600 transition duration-300">
            Home
          </a>
          <a href="#skills" className="text-gray-800 hover:text-blue-600 transition duration-300">
            Skills
          </a>
          <a href="#projects" className="text-gray-800 hover:text-blue-600 transition duration-300">
            Projects
          </a>
          <a href="#contact" className="text-gray-800 hover:text-blue-600 transition duration-300">
            Contact
          </a>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }} // Smooth animation for disappearing
            transition={{ duration: 0.5 }}
            className="lg:hidden fixed inset-0 right-0 left-auto w-1/2 bg-[aliceblue] z-50"
          >
            <div className="flex flex-col p-6 h-full relative">
              {/* Close Button */}
              <button
                className="absolute top-4 left-4 text-gray-900 text-base"
                onClick={toggleMenu}
              >
                ✕
              </button>

              <div className="space-y-2 font-medium text-gray-950 mt-12">
                <a href="#home" className="text-base block py-3" onClick={toggleMenu}>
                  Home
                </a>
                <a href="#skills" className="text-base block py-3" onClick={toggleMenu}>
                  Skills
                </a>
                <a href="#projects" className="text-base block py-3" onClick={toggleMenu}>
                  Projects
                </a>
                <a href="#contact" className="text-base block py-3" onClick={toggleMenu}>
                  Contact
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Header;
