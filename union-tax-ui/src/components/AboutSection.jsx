import { Globe, Target, Users } from "lucide-react";

export default function AboutSection() {
  return (
    <div className="w-full bg-[#f0fff4] py-12">
      {" "}
      {/* Reduced vertical padding */}
      <div className="max-w-5xl mx-auto px-4 text-center">
        {" "}
        {/* Slightly narrower container */}
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-bold text-green-700 mb-3">
          আমাদের সম্পর্কে
        </h2>
        <p className="text-gray-700 text-base md:text-lg max-w-2xl mx-auto mb-8 leading-snug">
          <span className="font-semibold text-green-700">uniontax.gov.bd</span>
          হলো একটি সমন্বিত ডিজিটাল সেবা প্ল্যাটফর্ম যা নাগরিকদের ঘরে বসেই সরকারি
          সেবা গ্রহণের সুযোগ করে দিচ্ছে। আমাদের লক্ষ্য হলো সহজ, দ্রুত ও স্বচ্ছ
          সেবা প্রদান।
        </p>
        {/* Mission & Vision Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-6">
          {" "}
          {/* Smaller gap */}
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition transform hover:-translate-y-1">
            <Target className="w-10 h-10 text-green-600 mx-auto mb-3" />
            <h3 className="text-lg font-semibold text-green-700 mb-1">
              আমাদের লক্ষ্য
            </h3>
            <p className="text-gray-700 text-sm">
              সহজ, স্বচ্ছ ও ডিজিটাল সেবা নিশ্চিত করা যাতে প্রত্যেক নাগরিক তার
              ন্যায্য সেবা পান।
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition transform hover:-translate-y-1">
            <Globe className="w-10 h-10 text-green-600 mx-auto mb-3" />
            <h3 className="text-lg font-semibold text-green-700 mb-1">
              আমাদের ভিশন
            </h3>
            <p className="text-gray-700 text-sm">
              একটি স্মার্ট ও ডিজিটাল বাংলাদেশ গড়ে তোলা যেখানে সকল নাগরিক সেবা
              হাতের নাগালে।
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition transform hover:-translate-y-1">
            <Users className="w-10 h-10 text-green-600 mx-auto mb-3" />
            <h3 className="text-lg font-semibold text-green-700 mb-1">
              আমাদের অঙ্গীকার
            </h3>
            <p className="text-gray-700 text-sm">
              নাগরিকবান্ধব সেবা প্রদান ও প্রশাসনকে আরও আধুনিক ও সহজলভ্য করা।
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
