import Image from "next/image";
import Link from "next/link";
import React from "react";
import coffee from "../public/coffee.jpg";

const Hero = () => {
  return (
    <div className="bg-gradient-to-r from-[#e7dcdc] to-[#3c8469] text-black pt-20 sm:flex justify-between items-center sm:px-20 sm:pb-20 pb-10">
      <div className="sm:w-[50%]">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold mb-4">Welcome to Rewarders!</h1>
          <p className="text-lg">
            Introducing Rewarders, your go-to app for discovering rewards at
            your favorite stores locally. Collect points, access unique deals,
            and experience a personalized shopping experience.
          </p>
          <div className="mt-6">
            <Link
              href="/login"
              className="bg-color-3 py-3 px-8 rounded-md hover:bg-main"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
      <Image
        className="w-[25%] h-[25%] hidden sm:block"
        src={coffee}
        alt="Coffee"
      />
    </div>
  );
};

export default Hero;
