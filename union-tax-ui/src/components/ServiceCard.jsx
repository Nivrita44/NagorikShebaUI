const ServiceCard = ({ title, icon }) => {
  return (
    <div className="flex flex-col items-center justify-center bg-white shadow rounded-lg p-4 h-32 hover:shadow-2xl transition cursor-pointer">
      <div className="mb-2">{icon}</div>
      <p className="text-sm font-medium text-center text-blue-700">{title}</p>
    </div>
  );
};

export default ServiceCard;
