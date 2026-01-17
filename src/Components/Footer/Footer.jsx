import React from "react";
import bgImage from "../../assets/bg-shadow.png";
import footerLogo from "../../assets/logo-footer.png";

const Footer = () => {
  return (
    <footer className="container bg-[#06091A] mx-auto">
      <div className=" relative mt-96 text-center px-8 md:px-16">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-11/12 max-w-7xl">
          <div className="bg-white/20 backdrop-blur-2xl border border-white rounded-2xl p-4 shadow-2xl">
            <div
              style={{ backgroundImage: `url(${bgImage})` }}
              className="bg-white bg-cover bg-center rounded-xl py-20 px-4 text-center text-black"
            >
              <h2 className="text-3xl font-bold mb-4">
                Subscribe to our Newsletter
              </h2>
              <p className="text-gray-600 mb-8 text-lg">
                Get the latest updates and news right in your inbox!
              </p>
              <div className="flex flex-col md:flex-row justify-center gap-4 max-w-lg mx-auto">
                <input
                  type="text"
                  placeholder="Enter your email"
                  className="input input-bordered w-full rounded-xl"
                />
                <button className="btn bg-linear-to-r from-pink-400 to-yellow-500 border-none text-black font-bold px-8 rounded-xl shadow-md">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-60 pb-12 px-36">
          <img
            className="mx-auto h-36 w-36 pb-16"
            src={footerLogo}
            alt="Logo"
          />
          <div className="text-white grid grid-cols-2 md:grid-cols-3 gap-28">
            <div className="text-left">
              <h5 className="font-bold mb-5">About Us</h5>
              <p>
                We are a passionate team <br /> dedicated to providing the best{" "}
                <br /> services to our customers.
              </p>
            </div>
            <div className="text-left">
              <h5 className="font-bold mb-5">Quick Links</h5>
              <ul className="text-white">
                <li>Home</li>
                <li>Services</li>
                <li>About</li>
                <li>Contact</li>
              </ul>
            </div>
            <div className="text-left">
              <h5 className="font-bold mb-5">Subscribe</h5>
              <p className="mb-6">
                Subscribe to our newsletter for the <br /> latest updates.
              </p>
              <div className="flex flex-col md:flex-row md:justify-center ml-9 max-w-lg w-full join">
                <input
                  className="bg-white text-black px-8 rounded-l-xl"
                  type="text"
                  placeholder="Enter your email"
                />
                <button className="btn bg-linear-to-r from-pink-400 to-yellow-500 border-none text-black font-bold px-8 rounded-r-xl shadow-md">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="text-gray-100 py-6" />
      <p className="text-white text-center pb-10">
        @2024 Your Company All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
