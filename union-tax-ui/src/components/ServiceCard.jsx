const ServiceCard = ({ title, icon }) => {
  return (
    <div className="flex flex-col items-center justify-center bg-white shadow-md rounded-xl p-4 h-32 hover:shadow-lg transition transform hover:-translate-y-1 cursor-pointer">
      {/* Icon with colored circle */}
      <div className="bg-[#B2B0E8] rounded-full p-3 mb-2 flex items-center justify-center">
        <div className="text-[#1A2A80] w-6 h-6 ">{icon}</div>
      </div>

      {/* Title */}
      <p className="text-base font-solaiman font-bold text-center text-[#1A2A80]">
        {title}
      </p>
    </div>
  );
};

export default ServiceCard;

// const ServiceCard = ({ title, icon }) => {
//   return (
//     <div className="flex flex-col items-center justify-center bg-white shadow rounded-lg p-4 h-32 hover:shadow-2xl transition cursor-pointer">
//       {" "}
//       <div className="mb-2">{icon}</div>{" "}
//       <p className="text-sm font-medium text-center text-blue-700">{title}</p>{" "}
//     </div>
//   );
// };
// export default ServiceCard;
