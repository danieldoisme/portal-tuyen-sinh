import { useState } from "react";
import { useNavigate } from "react-router-dom";

const NopHoSoTrucTuyen = () => {
  const navigate = useNavigate();
  const [selectedType, setSelectedType] = useState("Chính quy");
  const [selectedYear, setSelectedYear] = useState("Năm tuyển sinh 2025");
  const [showNhapHocAlert, setShowNhapHocAlert] = useState(false);

  const handleLogout = () => {
    // Xử lý logic đăng xuất ở đây (ví dụ: xóa token, session)
    localStorage.removeItem("isStudentAuthenticated");
    console.log("Sinh viên đã đăng xuất");
    navigate("/");
  };

  const handleCardClick = (type) => {
    if (type === "xet-tuyen") {
      navigate("/nop-ho-so/xet-tuyen");
    } else if (type === "nhap-hoc") {
      setShowNhapHocAlert(true);
    }
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
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="relative text-center mb-8">
          <div className="absolute top-0 right-0">
            <button
              onClick={handleLogout}
              className="bg-red-700 text-white font-medium py-2 px-4 rounded-lg hover:bg-red-800 transition-colors duration-300"
            >
              Đăng xuất
            </button>
          </div>
          <h2 className="text-2xl font-bold text-red-600 mb-4 flex items-center justify-center pt-12 md:pt-0">
            Xin chào
            <span className="ml-2 text-3xl">👋</span>
          </h2>
          <p className="text-gray-600 mb-2">
            Bạn đang tham gia hệ thống xét tuyển trực tuyến của PTIT
          </p>
          <p className="text-gray-600">Vui lòng chọn mục đích để tiếp tục:</p>
        </div>

        <div className="flex justify-center space-x-4 mb-8">
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 max-w-6xl mx-auto">
          <div
            onClick={() => handleCardClick("xet-tuyen")}
            className="bg-white rounded-lg shadow-lg p-8 cursor-pointer hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                <svg
                  className="w-6 h-6 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800">
                Xét tuyển trực tuyến
              </h3>
            </div>

            <p className="text-gray-600 mb-6">
              Bạn đang tham gia hệ thống xét tuyển trực tuyến đại học của PTIT
            </p>

            <div className="relative">
              <img
                src="https://xettuyen.ptit.edu.vn/static/xettuyen.2db5cd5f.png"
                alt="Application illustration"
                className="w-full h-48 object-contain"
              />
            </div>

            <div className="mt-4 flex items-center text-red-600 hover:text-red-700">
              <span className="font-medium">Xem chi tiết</span>
              <svg
                className="w-4 h-4 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          </div>

          <div
            onClick={() => handleCardClick("nhap-hoc")}
            className="bg-white rounded-lg shadow-lg p-8 cursor-pointer hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                <svg
                  className="w-6 h-6 text-purple-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800">
                Nhập học trực tuyến
              </h3>
            </div>

            <p className="text-gray-600 mb-6">
              Bạn đang tham gia hệ thống nhập học trực tuyến đại học của PTIT
            </p>

            <div className="relative">
              <img
                src="https://xettuyen.ptit.edu.vn/static/nhaphoc.1931764e.png"
                alt="Enrollment illustration"
                className="w-full h-48 object-contain"
              />
            </div>

            <div className="mt-4 flex items-center text-red-600 hover:text-red-700">
              <span className="font-medium">Xem chi tiết</span>
              <svg
                className="w-4 h-4 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          </div>
        </div>

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
                  Tổng hợp một số ngành được yêu thích nhất qua các năm tuyển
                  sinh
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
                    <span
                      className={`inline-block px-2 py-1 text-xs font-bold text-white rounded mr-3 ${
                        major.color === "red" ? "bg-red-500" : "bg-green-500"
                      }`}
                    >
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
                    <span
                      className={`inline-block px-2 py-1 text-xs font-bold text-white rounded mr-3 ${
                        major.color === "green" ? "bg-green-500" : "bg-red-500"
                      }`}
                    >
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

      {showNhapHocAlert && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl p-8 max-w-sm w-full">
            <div className="flex items-start mb-4">
              <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                <svg
                  className="h-6 w-6 text-red-600"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  />
                </svg>
              </div>
              <div className="ml-4 text-left">
                <h3
                  className="text-lg leading-6 font-medium text-gray-900"
                  id="modal-title"
                >
                  Thông báo
                </h3>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">
                    Vui lòng chờ đến thời gian nhập học.
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
              <button
                type="button"
                onClick={() => setShowNhapHocAlert(false)}
                className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
              >
                OK
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NopHoSoTrucTuyen;
