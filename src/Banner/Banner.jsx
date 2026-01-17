import React from "react";
import banner from "../assets/banner-main.png";
import backgroundImg from "../assets/bg-shadow.png";

const Banner = () => {
  return (
    <div className="container mx-auto mt-8 px-8 md:px-16">
      <div
        className="w-full bg-cover bg-center bg-no-repeat rounded-3xl flex flex-col items-center justify-center py-16"
        style={{
          backgroundImage: `
            radial-gradient(circle at top right, rgba(255,140,200,0.35), transparent 55%),
            radial-gradient(circle at bottom left, rgba(120,160,255,0.35), transparent 55%),
            url(${backgroundImg})
          `,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <img
          className="relative z-10 max-h-full mb-6"
          src={banner}
          alt="Banner"
        />
        <h3 className="font-bold text-2xl">
          Assemble Your Ultimate Dream 11 Cricket Team
        </h3>
        <p className="my-4 text-lg">Beyond Boundaries Beyond Limits</p>
        <div className="border border-black rounded-xl inline-block">
          <button
            className="btn px-6 py-2 rounded-xl font-semibold text-black
  bg-linear-to-r from-pink-400 via-orange-400 to-yellow-400
  shadow-[0_0_15px_rgba(236,72,153,0.45)]
  border-2 border-white"
          >
            Claim Free Credit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
