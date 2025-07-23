const AdmissionCard = ({ icon, title, code, quota }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 text-center shadow-md hover:shadow-xl transition-shadow">
      <div className="flex justify-center mb-4">
        <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center">
          <img src={icon} alt={`Icon for ${title}`} className="w-8 h-8" />
        </div>
      </div>
      <h4 className="text-xl font-bold text-gray-800 h-16 flex items-center justify-center">
        {title}
      </h4>
      <p className="text-gray-600 mt-2">{code}</p>
      <p className="text-gray-600 mt-1">{quota}</p>
    </div>
  );
};

export default AdmissionCard;
