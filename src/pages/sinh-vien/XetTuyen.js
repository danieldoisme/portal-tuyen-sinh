import { useState } from "react";
import { useNavigate } from "react-router-dom";

const XetTuyen = () => {
  const navigate = useNavigate();
  const [selectedType, setSelectedType] = useState("Chính quy");
  const [selectedYear, setSelectedYear] = useState("Năm tuyển sinh 2025");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMethod, setSelectedMethod] = useState(1);

  const phuongThucXetTuyen = [
    {
      id: 1,
      title: "Phương thức 1: Xét tuyển tài năng",
    },
    {
      id: 2,
      title: "Phương thức 2: Xét tuyển dựa vào kết quả thi THPT",
    },
    {
      id: 3,
      title:
        "Phương thức 3: Xét tuyển dựa vào kết quả bài thi đánh giá năng lực (ĐGNL) hoặc đánh giá tư duy (ĐGTD)",
    },
    {
      id: 4,
      title:
        "Phương thức 4: Xét tuyển kết hợp giữa chứng chỉ tiếng Anh quốc tế (chứng chỉ IELTS, TOEFL) với kết quả học tập ở bậc THPT",
    },
  ];

  const handleProceed = () => {
    navigate(
      `/nop-ho-so/xet-tuyen/them-moi-ho-so?phuong-thuc=${selectedMethod}`
    );
  };

  const hotMajors = [
    {
      name: "Khoa học máy tính (định hướng Trí tuệ nhân tạo)",
      tag: "HOT",
      color: "red",
    },
    {
      name: "Công nghệ thông tin (Cử nhân, định hướng Phần mềm)",
      tag: "HOT",
      color: "red",
    },
    { name: "Công nghệ thông tin", tag: "HOT", color: "red" },
    {
      name: "Kỹ thuật dữ liệu (ngành Mạng máy tính và truyền thông dữ liệu)",
      tag: "HOT",
      color: "red",
    },
  ];

  const newMajors = [
    {
      name: "Công nghệ thông tin (Cử nhân, định hướng An toàn thông tin)",
      tag: "NEW",
      color: "green",
    },
    {
      name: "Kỹ thuật dữ liệu (ngành Mạng máy tính và truyền thông dữ liệu)",
      tag: "NEW",
      color: "green",
    },
    {
      name: "Công nghệ thông tin (chất lượng cao)",
      tag: "NEW",
      color: "green",
    },
    {
      name: "Kế toán chất lượng cao (chuẩn quốc tế)",
      tag: "NEW",
      color: "green",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between px-4 max-w-6xl mx-auto mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 md:mb-0">
          Hồ sơ tuyển sinh
        </h2>

        <div className="flex space-x-4">
          <select
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            <option>Chính quy</option>
            <option>Liên thông</option>
            <option>Vừa học vừa làm</option>
          </select>

          <select
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            <option>Năm tuyển sinh 2025</option>
            <option>Năm tuyển sinh 2024</option>
          </select>
        </div>
      </div>
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8 flex flex-col items-center mb-12">
        <img
          src="https://cdn-icons-png.flaticon.com/512/3176/3176366.png"
          alt="Folder icon"
          className="w-32 h-32 mb-6 object-contain"
        />
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300"
        >
          Thêm mới hồ sơ
        </button>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl p-8 max-w-4xl w-full relative">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-3xl"
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold text-center mb-8">
              Chọn phương thức xét tuyển năm 2025
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {phuongThucXetTuyen.map((method) => (
                <div
                  key={method.id}
                  onClick={() => setSelectedMethod(method.id)}
                  className={`p-6 border rounded-lg cursor-pointer relative transition-all duration-200 flex items-start ${
                    selectedMethod === method.id
                      ? "border-red-500"
                      : "border-gray-300 hover:border-red-400"
                  }`}
                >
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center mr-4 text-sm font-bold flex-shrink-0 ${
                      selectedMethod === method.id
                        ? "bg-red-500 text-white"
                        : "bg-gray-200 text-gray-700"
                    }`}
                  >
                    {method.id}
                  </div>
                  <p
                    className={`font-semibold flex-grow ${
                      selectedMethod === method.id
                        ? "text-red-600"
                        : "text-gray-800"
                    }`}
                  >
                    {method.title}
                  </p>
                  {selectedMethod === method.id && (
                    <div className="absolute -top-3 -right-3 bg-white rounded-full">
                      <svg
                        className="w-7 h-7 text-green-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="flex justify-center">
              <button
                onClick={handleProceed}
                className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-8 rounded-lg shadow-md transition duration-300"
              >
                Khai báo hồ sơ
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex items-center mb-6">
            <img
              src="https://tuyensinh.ptit.edu.vn/wp-content/uploads/sites/4/2024/08/logo-tuyen-sinh.svg"
              alt="PTIT"
              className="h-8 w-auto mr-3"
            />
            <div>
              <h3 className="text-lg font-bold">
                Top ngành <span className="text-red-600">HOT</span> nhất
              </h3>
              <p className="text-sm text-gray-600">
                Tổng hợp một số ngành được yêu thích nhất qua các năm tuyển sinh
              </p>
            </div>
          </div>

          <div className="space-y-3">
            {hotMajors.map((major, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center">
                  <span className="inline-block px-2 py-1 text-xs font-bold text-white rounded mr-3 bg-red-500">
                    {major.tag}
                  </span>
                  <span className="text-sm text-gray-800">{major.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex items-center mb-6">
            <img
              src="https://tuyensinh.ptit.edu.vn/wp-content/uploads/sites/4/2024/08/logo-tuyen-sinh.svg"
              alt="PTIT"
              className="h-8 w-auto mr-3"
            />
            <div>
              <h3 className="text-lg font-bold">
                Top ngành <span className="text-green-600">MỚI</span> nhất
              </h3>
              <p className="text-sm text-gray-600">
                Tổng hợp một số ngành mới nhất hiện nay
              </p>
            </div>
          </div>

          <div className="space-y-3">
            {newMajors.map((major, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center">
                  <span className="inline-block px-2 py-1 text-xs font-bold text-white rounded mr-3 bg-green-500">
                    {major.tag}
                  </span>
                  <span className="text-sm text-gray-800">{major.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default XetTuyen;
