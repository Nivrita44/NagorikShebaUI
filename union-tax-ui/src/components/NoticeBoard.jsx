import { Calendar, Megaphone } from "lucide-react";

export default function NoticeBoard() {
  const notices = [
    {
      id: 1,
      title: "জাতীয় পরিচয়পত্র আপডেটের সময়সূচি ঘোষণা",
      date: "২৭ আগস্ট ২০২৫",
      link: "#",
    },
    {
      id: 2,
      title: "বন্যার্ত এলাকায় বিশেষ সেবা কার্যক্রম চালু",
      date: "২৫ আগস্ট ২০২৫",
      link: "#",
    },
    {
      id: 3,
      title: "নতুন অনলাইন সেবা: বিবাহ নিবন্ধন সার্টিফিকেট",
      date: "২০ আগস্ট ২০২৫",
      link: "#",
    },
    {
      id: 4,
      title: "কৃষি ভর্তুকি সংক্রান্ত গুরুত্বপূর্ণ বিজ্ঞপ্তি",
      date: "১৫ আগস্ট ২০২৫",
      link: "#",
    },
  ];

  return (
    //<div className="w-full bg-gradient-to-r from-[#f0faff] to-white py-14"></div>
    <div className="w-full bg-[#f0fff4] to-white py-14">
      <div className="max-w-5xl mx-auto px-6">
        {/* Section Heading */}
        <div className="flex items-center justify-center gap-2 mb-10">
          <Megaphone className="w-7 h-7 text-green-600" />
          <h2 className="text-3xl font-extrabold text-green-700">
            নোটিশ বোর্ড
          </h2>
        </div>

        {/* Notice List */}
        <div className="bg-white rounded-2xl shadow-lg border border-green-100 divide-y">
          {notices.map((notice) => (
            <a
              key={notice.id}
              href={notice.link}
              className="flex items-center justify-between px-6 py-4 hover:bg-green-50 transition group"
            >
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-600 rounded-full group-hover:scale-125 transition"></div>
                <span className="text-gray-800 font-medium group-hover:text-green-700">
                  {notice.title}
                </span>
              </div>
              <div className="flex items-center gap-1 text-gray-500 text-sm">
                <Calendar className="w-4 h-4" />
                {notice.date}
              </div>
            </a>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-8">
          <a
            href="#"
            className="inline-block bg-green-600 text-white px-8 py-3 rounded-full font-semibold shadow hover:bg-green-700 hover:shadow-md transition"
          >
            সব নোটিশ দেখুন
          </a>
        </div>
      </div>
    </div>
  );
}
