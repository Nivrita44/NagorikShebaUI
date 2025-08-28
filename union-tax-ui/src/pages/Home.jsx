import {
  AlertTriangle,
  HelpCircle,
  PhoneCall,
  ShieldAlert,
} from "lucide-react";

import Image1 from "../assets/1.webp";
import Image2 from "../assets/2.webp";
import landing_page_bg from "../assets/landing_page_bg.png";
import ServiceCard from "../components/ServiceCard";
import services from "../data/services.jsx";

const Home = () => {
  return (
    <div className="px-6 lg:px-12 py-4 flex flex-col gap-6 bg-[#f0fff4]">
      {/* Left (Image + Services) & Right (Officials) */}
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Left Side */}
        <div className="w-full lg:w-[78%] flex flex-col gap-6 px-2 lg:px-4">
          {/* Landing Image */}
          <div>
            <img
              src={landing_page_bg}
              alt="Main"
              className="w-full h-72 lg:h-[380px] object-cover rounded"
            />
          </div>

          {/* Services */}
          <div>
            <h2 className="text-lg font-semibold text-center bg-green-700 text-white p-2 rounded">
              সেবাসমূহ
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 mt-3 px-1">
              {services.map((service, index) => (
                <div className="p-1" key={index}>
                  <ServiceCard title={service.title} icon={service.icon} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side - Officials & Emergency */}
        <div className="w-full lg:w-1/5 flex flex-col gap-3">
          {/* Official 1 */}
          <div className="bg-white rounded-lg shadow-md hover:shadow-lg flex flex-col items-center overflow-hidden transition">
            <div className="bg-green-700 w-full h-8 flex items-center justify-center text-white text-sm font-semibold">
              উপদেষ্টা ও তত্ত্বাবধানে
            </div>
            <div className="p-2 w-52 h-52">
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
          <div className="bg-white rounded-lg shadow-md hover:shadow-lg flex flex-col items-center overflow-hidden transition">
            <div className="bg-green-700 w-full h-8 flex items-center justify-center text-white text-sm font-semibold">
              পরিকল্পনা ও বাস্তবায়নে
            </div>
            <div className="p-2 w-52 h-52">
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
          <div className="bg-white rounded-lg p-3 shadow-md hover:shadow-lg transition">
            <h3 className="text-md font-semibold text-green-700 text-center border-b pb-2">
              জরুরি হেল্পলাইন
            </h3>
            <ul className="mt-2 space-y-2 text-sm text-gray-700">
              <li className="flex items-center justify-between bg-green-50 p-2 rounded-lg">
                <div className="flex items-center gap-2">
                  <HelpCircle className="w-4 h-4 text-green-600" />
                  <span>সরকারি তথ্য ও সেবা</span>
                </div>
                <span className="font-bold text-green-700">৩৩৩</span>
              </li>
              <li className="flex items-center justify-between bg-red-50 p-2 rounded-lg">
                <div className="flex items-center gap-2">
                  <PhoneCall className="w-4 h-4 text-red-600" />
                  <span>জরুরি সেবা</span>
                </div>
                <span className="font-bold text-red-700">৯৯৯</span>
              </li>
              <li className="flex items-center justify-between bg-pink-50 p-2 rounded-lg">
                <div className="flex items-center gap-2">
                  <ShieldAlert className="w-4 h-4 text-pink-600" />
                  <span>নারী ও শিশু নির্যাতন</span>
                </div>
                <span className="font-bold text-pink-700">১০৯৮</span>
              </li>
              <li className="flex items-center justify-between bg-yellow-50 p-2 rounded-lg">
                <div className="flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-yellow-600" />
                  <span>দুর্যোগ বার্তা</span>
                </div>
                <span className="font-bold text-yellow-700">১০৯০</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
