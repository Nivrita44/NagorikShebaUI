import { Globe, Mail, Phone } from "lucide-react";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-[#1A2A80]">
      {/* Main Section */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 py-12 grid grid-cols-1 md:grid-cols-5 gap-12 md:gap-16 lg:gap-24 text-sm text-white">
        {/* Useful Links 1 */}
        <div>
          <h3 className="font-semibold mb-3">প্রয়োজনীয় লিঙ্ক সমূহ</h3>
          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
            <li className="whitespace-nowrap">
              <a href="#" className="hover:text-[#7A85C1]">
                সনদের অবস্থা যাচাই করুন
              </a>
            </li>
            <li className="whitespace-nowrap">
              <a href="#" className="hover:text-[#7A85C1]">
                হোল্ডিং ট্যাক্স যাচাই করুন
              </a>
            </li>
            <li className="whitespace-nowrap">
              <a href="#" className="hover:text-[#7A85C1]">
                নাগরিক লগইন
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-semibold mb-3">যোগাযোগ</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-white" />
              <span>+880 1328 799 711 (WhatsApp)</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-white" />
              <span>+880 1733 950 869</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-white" />
              <span>+880 1630 078 424</span>
            </li>
          </ul>
        </div>

        {/* Middle Column - Logo + Tagline */}
        <div className="flex flex-col items-center text-center">
          <img src={logo} alt="Smart Nagorik Logo" className="w-40 mb-4" />
          <p className="max-w-xs text-white text-sm leading-relaxed">
            সকল নাগরিক সেবা হাতের মুঠোয় এবং ইন্টারনেটের মাধ্যমে — স্মার্ট ও
            ডিজিটাল বাংলাদেশ আমাদের ভিশন।
          </p>
        </div>

        {/* Other Info */}
        <div>
          <h3 className="font-semibold mb-3">অন্যান্য তথ্য</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-white" />
              <a
                href="mailto:info.smartnagorik@gmail.com"
                className="hover:text-[#7A85C1]"
              >
                info.smartnagorik@gmail.com
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Globe className="w-4 h-4 text-white" />
              <a
                href="https://smartnagorik.com.bd"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#7A85C1]"
              >
                smartnagorik.com.bd
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        {/* Newsletter */}
        <div className="md:col-span-3 lg:col-span-1">
          <h3 className="font-semibold mb-3">আমাদের নিউজলেটার</h3>
          <p className="text-white mb-4 text-xs leading-relaxed break-words">
            সর্বশেষ আপডেট, বিশেষ অফার এবং নাগরিক সেবার জন্য সাবস্ক্রাইব করুন।
          </p>
          <div className="flex w-full gap-2">
            <input
              type="email"
              placeholder="আপনার ইমেইল দিন"
              className="flex-1 px-3 py-2 text-sm rounded-l-xl border border-[#7A85C1] bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-[#7A85C1]"
            />
            <button className="bg-[#3B38A0] hover:bg-[#7A85C1] text-white px-4 text-sm rounded-r-xl transition-colors">
              সাবমিট
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#3B38A0] py-3 text-center text-xs text-white">
        কপিরাইট © ২০২১-২০২৫ সর্বস্বত্ব সংরক্ষিত স্মার্ট নাগরিক
      </div>
    </footer>
  );
};

export default Footer;
