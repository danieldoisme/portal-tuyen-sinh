import { useState, useEffect } from "react";
import AdmissionCard from "./AdmissionCard";

const mockApiDataNorth = [
  {
    icon: "https://placehold.co/64x64/fef2f2/ef4444?text=ICON",
    title: "Trí tuệ nhân tạo vạn vật (AIoT)",
    codePrefix: "Mã ngành",
    code: "7520207",
    quota: 80,
  },
  {
    icon: "https://placehold.co/64x64/fef2f2/ef4444?text=ICON",
    title: "Công nghệ thông tin (cử nhân, định hướng ứng dụng)",
    codePrefix: "Mã ngành",
    code: "7480201_UDU",
    quota: 300,
  },
  {
    icon: "https://placehold.co/64x64/fef2f2/ef4444?text=ICON",
    title: "Ngành Trí tuệ nhân tạo",
    codePrefix: "Mã ngành",
    code: "7480107",
    quota: 150,
  },
  {
    icon: "https://placehold.co/64x64/fef2f2/ef4444?text=ICON",
    title: "Thiết kế và phát triển Game (ngành Công nghệ đa phương tiện)",
    codePrefix: "Mã ngành",
    code: "7329001_GAM",
    quota: 200,
  },
  {
    icon: "https://placehold.co/64x64/fef2f2/ef4444?text=ICON",
    title: "Chương trình Truyền thông đa phương tiện chất lượng cao",
    codePrefix: "Mã ngành",
    code: "7320104_CLC",
    quota: 90,
  },
  {
    icon: "https://placehold.co/64x64/fef2f2/ef4444?text=ICON",
    title: "Ngành Kỹ thuật Điện tử viễn thông",
    codePrefix: "Mã ngành",
    code: "7520207",
    quota: 430,
  },
];

const mockApiDataSouth = [
  {
    icon: "https://placehold.co/64x64/fef2f2/ef4444?text=ICON",
    title: "Ngành Công nghệ thông tin",
    codePrefix: "Mã ngành",
    code: "7480201",
    quota: 230,
  },
  {
    icon: "https://placehold.co/64x64/fef2f2/ef4444?text=ICON",
    title: "Ngành An toàn thông tin",
    codePrefix: "Mã ngành",
    code: "7480202",
    quota: 120,
  },
  {
    icon: "https://placehold.co/64x64/fef2f2/ef4444?text=ICON",
    title: "Ngành Kỹ thuật Điện tử viễn thông",
    codePrefix: "Mã ngành",
    code: "7520207",
    quota: 140,
  },
];

const ChiTieuTuyenSinh = () => {
  const [admissionsData, setAdmissionsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("north");

  useEffect(() => {
    const fetchData = () => {
      setLoading(true);
      setTimeout(() => {
        setAdmissionsData(
          activeTab === "north" ? mockApiDataNorth : mockApiDataSouth
        );
        setLoading(false);
      }, 500);
    };

    fetchData();
  }, [activeTab]);

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
              href="#"
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
              href="#"
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
            <p>Đang tải dữ liệu...</p>
          ) : (
            admissionsData.map((item, index) => (
              <AdmissionCard
                key={index}
                icon={item.icon}
                title={item.title}
                code={`Mã ngành: ${item.code}`}
                quota={`Chỉ tiêu tuyển sinh năm 2025: ${item.quota} chỉ tiêu`}
              />
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default ChiTieuTuyenSinh;
