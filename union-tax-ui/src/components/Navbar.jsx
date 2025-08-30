import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full shadow-md bg-[#E6EBF7] sticky top-0 z-50">
      {/* Main Navbar */}
      <div className="max-w-[1400px] mx-auto flex items-center justify-between px-6 lg:px-8 py-5">
        {/* Left: Logo */}
        <div className="flex items-center">
          <img src={logo} alt="logo" className="h-14 w-auto cursor-pointer" />
        </div>

        {/* Middle: Desktop Menu */}
        <div className="hidden md:flex space-x-7 text-gray-800 text-base font-medium">
          <Link to="/" className="hover:text-[#1A2A80] transition">
            প্রথম পাতা
          </Link>
          <Link to="/status" className="hover:text-[#1A2A80] transition">
            আবেদনের অবস্থা জানুন
          </Link>
          <Link to="/holding-tax" className="hover:text-[#1A2A80] transition">
            হোল্ডিং ট্যাক্স যাচাই
          </Link>
          <Link to="/login" className="hover:text-[#1A2A80] transition">
            নাগরিক লগইন
          </Link>
        </div>

        {/* Right: Buttons */}
        <div className="hidden md:flex items-center space-x-3 font-solaiman">
          <Link
            to="/dashboard"
            className="bg-[#1A2A80] hover:bg-[#3B38A0] text-white px-5 py-2 rounded-lg shadow-md transition duration-300"
          >
            এডমিন ড্যাশবোর্ড
          </Link>

          <Link
            to="/signup"
            className="bg-[#7A85C1] hover:bg-[#3B38A0] text-white px-5 py-2 rounded-lg shadow-md transition duration-300"
          >
            সাইন আপ
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg rounded-b-lg px-6 py-4 space-y-4">
          <Link
            to="/"
            className="block text-gray-700 text-lg font-medium hover:text-[#1A2A80]"
            onClick={() => setIsOpen(false)}
          >
            প্রথম পাতা
          </Link>
          <Link
            to="/status"
            className="block text-gray-700 text-lg font-medium hover:text-[#1A2A80]"
            onClick={() => setIsOpen(false)}
          >
            আবেদনের অবস্থা জানুন
          </Link>
          <Link
            to="/holding-tax"
            className="block text-gray-700 text-lg font-medium hover:text-[#1A2A80]"
            onClick={() => setIsOpen(false)}
          >
            হোল্ডিং ট্যাক্স যাচাই
          </Link>
          <Link
            to="/login"
            className="block text-gray-700 text-lg font-medium hover:text-[#1A2A80]"
            onClick={() => setIsOpen(false)}
          >
            নাগরিক লগইন
          </Link>

          {/* Mobile Buttons */}
          <div className="flex flex-col gap-3 pt-3">
            <Link
              to="/dashboard"
              className="bg-[#1A2A80] hover:bg-[#3B38A0] text-white px-5 py-2 rounded-lg shadow-md text-center"
              onClick={() => setIsOpen(false)}
            >
              এডমিন ড্যাশবোর্ড
            </Link>
            <Link
              to="/signup"
              className="bg-[#7A85C1] hover:bg-[#3B38A0] text-white px-5 py-2 rounded-lg shadow-md text-center"
              onClick={() => setIsOpen(false)}
            >
              সাইন আপ
            </Link>
          </div>
        </div>
      )}

      {/* Moving ticker bar */}
      <div className="bg-[#1A2A80] text-white font-medium text-sm py-2 overflow-hidden relative">
        <div className="whitespace-nowrap animate-marquee max-w-[1400px] mx-auto">
          ইউনিয়ন পরিষদের ডিজিটাল অনলাইন সেবা সিস্টেমে uniontax.gov.bd -এ আপনাকে
          স্বাগতম
        </div>
      </div>

      {/* Animation CSS */}
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(100%); }
            100% { transform: translateX(-100%); }
          }
          .animate-marquee {
            display: inline-block;
            padding-left: 100%;
            animation: marquee 15s linear infinite;
          }
        `}
      </style>
    </div>
  );
}
