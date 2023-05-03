import Image from "next/image";
import React, { useState } from "react";
import Logo from "../public/logo.png";
import Link from "next/link";

const Navbar = ({ aboutRef, teamRef, contactRef }) => {
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);

  const scrollToAbout = () => {
    aboutRef.current.scrollIntoView({ behavior: "smooth" });
    toggleBurgerMenu();
  };

  const scrollToTeam = () => {
    teamRef.current.scrollIntoView({ behavior: "smooth" });
    toggleBurgerMenu();
  };

  const scrollToContact = () => {
    contactRef.current.scrollIntoView({ behavior: "smooth" });
    toggleBurgerMenu();
  };

  const toggleBurgerMenu = () => {
    setIsBurgerOpen(!isBurgerOpen);
  };

  return (
    <>
      <div className="flex justify-between items-center py-1 bg-[rgb(61,119,97)] px-3 navbar w-full fixed top-0">
        <div className="flex items-center">
          <Link
            href="/"
            className="absolute top-0 left-0 right-0 bottom-0 w-[85px] h-[85px]"
          ></Link>
          <Image
            alt="Logo"
            src={Logo}
            className="w-[25%] sm:w-[12%] justify-center"
          />
          <span
            className="cursor-pointer ml-3 hover:text-[#f2f2f2] sm:block hidden"
            onClick={scrollToTeam}
          >
            The Team
          </span>
          <span
            className="cursor-pointer ml-3 hover:text-[#f2f2f2] sm:block hidden"
            onClick={scrollToAbout}
          >
            About
          </span>
          <span
            className="cursor-pointer ml-3 hover:text-[#f2f2f2] sm:block hidden"
            onClick={scrollToContact}
          >
            Contact Me
          </span>
        </div>
        <div className="hidden sm:flex">
          <Link
            className="bg-color-2 hover:bg-color-3 text-[#000] px-3 py-2 rounded w-[40%] sm:w-[100%] text-center"
            href="../login"
          >
            Login || Register{" "}
          </Link>
        </div>
        <div className="sm:hidden">
          <button onClick={toggleBurgerMenu}>
            <span className="block w-6 h-1 bg-[#f2f2f2] mb-1"></span>
            <span className="block w-6 h-1 bg-[#f2f2f2] mb-1"></span>
            <span className="block w-6 h-1 bg-[#f2f2f2]"></span>
          </button>
        </div>
        {isBurgerOpen && (
          <div className="absolute top-[100%] left-0 w-full bg-[rgb(61,119,97)] sm:hidden">
            <span
              className="block cursor-pointer py-2 px-4 hover:text-[#f2f2f2]"
              onClick={scrollToTeam}
            >
              The Team
            </span>
            <span
              className="block cursor-pointer py-2 px-4 hover:text-[#f2f2f2]"
              onClick={scrollToAbout}
            >
              About
            </span>
            <span
              className="
              block cursor-pointer py-2 px-4 hover:text-[#f2f2f2]"
              onClick={scrollToContact}
            >
              Contact Me
            </span>
            <Link
              className="block cursor-pointer py-2 px-4 bg-color-2 hover:bg-color-3 text-[#000] rounded text-center"
              href="../login"
            >
              Login || Register
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
