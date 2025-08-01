import { useState, useEffect } from "react";

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

const ChiTieuTuyenSinh = () => {
  const [admissionsData, setAdmissionsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState("north");

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(
          "http://localhost:8081/api/majors?page=1&size=10"
        );
        if (!response.ok) {
          throw new Error("Lỗi mạng hoặc không tìm thấy endpoint");
        }
        const result = await response.json();

        if (result.status === "success") {
          setAdmissionsData(result.data);
        } else {
          throw new Error("API trả về lỗi");
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-red-600 font-semibold tracking-wider uppercase">
            TUYỂN SINH
          </p>
          <h2 className="text-4xl font-bold text-gray-800 mt-2">
            Chỉ tiêu tuyển sinh
          </h2>
        </div>

        <div className="flex justify-center border-b mb-10">
          <div
            className={`pb-2 cursor-pointer ${
              activeTab === "north" ? "border-b-2 border-red-600" : ""
            }`}
            onClick={() => setActiveTab("north")}
          >
            <a
              href="/"
              onClick={(e) => e.preventDefault()}
              className={`font-semibold flex items-center ${
                activeTab === "north"
                  ? "text-gray-800"
                  : "text-gray-500 hover:text-gray-800"
              }`}
            >
              <svg
                className={`w-5 h-5 mr-2 ${
                  activeTab === "north" ? "text-red-600" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9"
                ></path>
              </svg>
              Cơ sở đào tạo phía Bắc (Km10, Nguyễn Trãi, Quận Hà Đông, Hà Nội)
            </a>
          </div>
          <div
            className={`ml-8 pb-2 cursor-pointer ${
              activeTab === "south" ? "border-b-2 border-red-600" : ""
            }`}
            onClick={() => setActiveTab("south")}
          >
            <a
              href="/"
              onClick={(e) => e.preventDefault()}
              className={`font-semibold flex items-center ${
                activeTab === "south"
                  ? "text-gray-800"
                  : "text-gray-500 hover:text-gray-800"
              }`}
            >
              <svg
                className={`w-5 h-5 mr-2 ${
                  activeTab === "south" ? "text-red-600" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9"
                ></path>
              </svg>
              Cơ sở đào tạo phía Nam (11 Nguyễn Đình Chiểu, Quận 1, TP.Hồ Chí
              Minh)
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {loading ? (
            <p className="text-center col-span-3">Đang tải dữ liệu...</p>
          ) : error ? (
            <p className="text-center col-span-3 text-red-500">Lỗi: {error}</p>
          ) : (
            admissionsData.map((major) => (
              <AdmissionCard
                key={major.majorCode}
                icon="https://placehold.co/64x64/fef2f2/ef4444?text=ICON"
                title={major.majorName}
                code={`Mã ngành: ${major.majorCode}`}
                quota={`Chỉ tiêu tuyển sinh năm 2025: ${major.quota} chỉ tiêu`}
              />
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default ChiTieuTuyenSinh;
