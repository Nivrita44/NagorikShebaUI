import {
  AlertTriangle,
  HelpCircle,
  PhoneCall,
  ShieldAlert,
} from "lucide-react";

import Image1 from "../assets/1.webp";
import Image2 from "../assets/2.webp";
import img3 from "../assets/img3.png";
import landing_page_bg from "../assets/landing_page_bg.png";
import ServiceCard from "../components/ServiceCard";
import Slideshow from "../components/Slideshow.jsx";
import services from "../data/services.jsx";

const Home = () => {
  return (
    <div className="bg-[#F2F2F7]">
      {/* Main Container with max-width */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 py-4 flex flex-col gap-6">
        {/* Left (Image + Services) & Right (Officials) */}
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left Side */}
          <div className="w-full lg:w-[78%] flex flex-col gap-6">
            {/* Landing Image */}
            <div>
              <Slideshow
                images={[landing_page_bg, img3]}
                width="w-full"
                height="h-64 sm:h-72 lg:h-[380px]" // fixed height for all images
                interval={4000} // auto change every 4s
              />
            </div>

            {/* Services */}
            <div>
              <h2 className="text-lg font-semibold text-center bg-[#1A2A80] text-white p-2 rounded">
                সেবাসমূহ
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2 mt-3 px-1">
                {services.map((service, index) => (
                  <div className="p-1" key={index}>
                    <ServiceCard title={service.title} icon={service.icon} />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - Officials & Emergency */}
          <div className="w-full lg:w-1/5 flex flex-col gap-16">
            {/* Official 1 */}
            <div className="bg-white rounded-lg shadow-md hover:shadow-lg flex flex-col items-center overflow-hidden transition w-full sm:max-w-[240px] mx-auto">
              <div className="bg-[#1A2A80] w-full h-8 flex items-center justify-center text-white text-sm font-semibold">
                উপদেষ্টা ও তত্ত্বাবধানে
              </div>
              <div className="p-2 w-full h-48 sm:h-52">
                <img
                  src={Image1}
                  alt="জনাব মোঃ সাবেত আলী"
                  className="w-full h-full object-contain rounded"
                />
              </div>
              <div className="px-2 py-1 text-center">
                <p className="font-semibold text-sm">জনাব মোঃ সাবেত আলী</p>
                <p className="text-xs text-gray-600">
                  জেলা প্রশাসক ও জেলা ম্যাজিস্ট্রেট
                </p>
              </div>
            </div>

            {/* Official 2 */}
            <div className="bg-white rounded-lg shadow-md hover:shadow-lg flex flex-col items-center overflow-hidden transition w-full sm:max-w-[240px] mx-auto">
              <div className="bg-[#1A2A80] w-full h-8 flex items-center justify-center text-white text-sm font-semibold">
                পরিকল্পনা ও বাস্তবায়নে
              </div>
              <div className="p-2 w-full h-48 sm:h-52">
                <img
                  src={Image2}
                  alt="সোহাগ চন্দ্র সাহা"
                  className="w-full h-full object-contain rounded"
                />
              </div>
              <div className="px-2 py-1 text-center">
                <p className="font-semibold text-sm">সোহাগ চন্দ্র সাহা</p>
                <p className="text-xs text-gray-600">
                  সিনিয়র সহকারী সচিব (ওএসডি)
                </p>
                <p className="text-xs text-gray-600">জনপ্রশাসন মন্ত্রণালয়</p>
                <p className="text-xs text-gray-600">
                  প্রাক্তন উপজেলা নির্বাহী অফিসার তেঁতুলিয়া
                </p>
              </div>
            </div>

            {/* Emergency Helpline */}
            <div className="bg-white rounded-lg p-3 shadow-md hover:shadow-lg transition w-full sm:max-w-[240px] mx-auto">
              <h3 className="text-md font-semibold text-[#1A2A80] text-center border-b pb-2">
                জরুরি হেল্পলাইন
              </h3>
              <ul className="mt-2 space-y-2 text-sm text-gray-700">
                <li className="flex items-center justify-between bg-[#3B38A0]/20 p-2 rounded-lg">
                  <div className="flex items-center gap-2">
                    <HelpCircle className="w-4 h-4 text-[#3B38A0]" />
                    <span>সরকারি তথ্য ও সেবা</span>
                  </div>
                  <span className="font-bold text-[#3B38A0]">৩৩৩</span>
                </li>
                <li className="flex items-center justify-between bg-[#1A2A80]/20 p-2 rounded-lg">
                  <div className="flex items-center gap-2">
                    <PhoneCall className="w-4 h-4 text-[#1A2A80]" />
                    <span>জরুরি সেবা</span>
                  </div>
                  <span className="font-bold text-[#1A2A80]">৯৯৯</span>
                </li>
                <li className="flex items-center justify-between bg-[#7A85C1]/20 p-2 rounded-lg">
                  <div className="flex items-center gap-2">
                    <ShieldAlert className="w-4 h-4 text-[#7A85C1]" />
                    <span>নারী ও শিশু নির্যাতন</span>
                  </div>
                  <span className="font-bold text-[#7A85C1]">১০৯৮</span>
                </li>
                <li className="flex items-center justify-between bg-[#B2B0E8]/20 p-2 rounded-lg">
                  <div className="flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-[#1A2A80]" />
                    <span>দুর্যোগ বার্তা</span>
                  </div>
                  <span className="font-bold text-[#1A2A80]">১০৯০</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
