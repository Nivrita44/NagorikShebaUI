import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Navbar() {
  return (
    <div className="w-full shadow-md bg-[#f0fff4] sticky top-0 z-50 ">
      {/* Main Navbar */}
      <div className="flex items-center justify-between px-8 py-6">
        {/* Left: Logo */}
        <div className="flex items-center px-20">
          <img src={logo} alt="logo" className="h-15 w-auto" />
        </div>

        {/* Middle: Menu Links */}
        <div className="hidden md:flex space-x-7 text-gray-800 text-base font-medium">
          <Link to="/" className="hover:text-green-600 transition">
            প্রথম পাতা
          </Link>
          <Link to="/status" className="hover:text-green-600 transition">
            আবেদনের অবস্থা জানুন
          </Link>
          <Link to="/holding-tax" className="hover:text-green-600 transition">
            হোল্ডিং ট্যাক্স যাচাই
          </Link>
          <Link to="/login" className="hover:text-green-600 transition">
            নাগরিক লগইন
          </Link>
        </div>

        {/* Right: Buttons */}
        <div className="flex items-center space-x-3">
          <Link
            to="/dashboard"
            className="bg-green-800 text-white px-5 py-2 rounded hover:bg-green-600 transition"
          >
            এডমিন ড্যাশবোর্ড
          </Link>

          <Link
            to="/signup"
            className="bg-orange-600 text-white px-5 py-2 rounded hover:bg-orange-600 transition"
          >
            সাইন আপ
          </Link>
        </div>
      </div>

      {/* Moving ticker bar */}
      <div className="bg-green-700 text-white font-medium text-sm py-2 overflow-hidden relative">
        <div className="whitespace-nowrap animate-marquee">
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
