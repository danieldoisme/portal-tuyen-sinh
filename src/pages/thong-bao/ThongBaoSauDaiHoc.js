import { useState } from "react";
import Card from "../../components/ui/Card";

const data = [
  {
    image:
      "https://tuyensinh.ptit.edu.vn/wp-content/uploads/sites/4/2025/05/1.png",
    date: "24/06/2025",
    title:
      "Kết quả Xét tuyển và quyết định trúng tuyển trình độ Thạc sĩ đợt 1 năm 2025",
  },
  {
    image:
      "https://tuyensinh.ptit.edu.vn/wp-content/uploads/sites/4/2025/05/1.png",
    date: "27/02/2025",
    title: "Thông báo tuyển sinh trình độ Tiến sĩ đợt 1 năm 2025",
  },
  {
    image:
      "https://tuyensinh.ptit.edu.vn/wp-content/uploads/sites/4/2025/05/1.png",
    date: "27/02/2025",
    title: "Thông báo tuyển sinh trình độ Thạc sĩ đợt 1 năm 2025",
  },
  {
    image:
      "https://tuyensinh.ptit.edu.vn/wp-content/uploads/sites/4/2025/05/1.png",
    date: "22/12/2024",
    title: "Thông báo Kế hoạch nhập học trình độ Thạc sĩ đợt 2 năm 2024",
  },
  {
    image:
      "https://tuyensinh.ptit.edu.vn/wp-content/uploads/sites/4/2025/05/1.png",
    date: "22/12/2024",
    title:
      "Quyết định phê duyệt Danh sách trúng tuyển trình độ thạc sĩ đợt 2 năm 2024",
  },
  {
    image:
      "https://tuyensinh.ptit.edu.vn/wp-content/uploads/sites/4/2025/05/1.png",
    date: "16/12/2024",
    title:
      "Thông báo kết quả đánh giá phân loại hồ sơ và định hướng chuyên môn cho NCS",
  },
  {
    image:
      "https://tuyensinh.ptit.edu.vn/wp-content/uploads/sites/4/2025/05/1.png",
    date: "09/10/2024",
    title: "Thông báo tuyển sinh trình độ Thạc sĩ đợt 2 năm 2024",
  },
  {
    image:
      "https://tuyensinh.ptit.edu.vn/wp-content/uploads/sites/4/2025/05/1.png",
    date: "09/10/2024",
    title: "Thông báo tuyển sinh trình độ Tiến sĩ đợt 2 năm 2024",
  },
  {
    image:
      "https://tuyensinh.ptit.edu.vn/wp-content/uploads/sites/4/2025/05/1.png",
    date: "11/07/2024",
    title:
      "Thông báo điểm chuẩn trúng tuyển và quyết định trúng tuyển trình độ Thạc sĩ đợt 1 năm 2024",
  },
  {
    image:
      "https://tuyensinh.ptit.edu.vn/wp-content/uploads/sites/4/2025/05/1.png",
    date: "11/07/2024",
    title:
      "Thông báo điểm chuẩn trúng tuyển và quyết định trúng tuyển trình độ Tiến sĩ đợt 1 năm 2024",
  },
  {
    image:
      "https://tuyensinh.ptit.edu.vn/wp-content/uploads/sites/4/2025/05/1.png",
    date: "11/07/2023",
    title:
      "Thông báo điểm chuẩn trúng tuyển và quyết định trúng tuyển trình độ Thạc sĩ đợt 1 năm 2023",
  },
  {
    image:
      "https://tuyensinh.ptit.edu.vn/wp-content/uploads/sites/4/2025/05/1.png",
    date: "11/07/2023",
    title:
      "Thông báo điểm chuẩn trúng tuyển và quyết định trúng tuyển trình độ Tiến sĩ đợt 1 năm 2023",
  },
  {
    image:
      "https://tuyensinh.ptit.edu.vn/wp-content/uploads/sites/4/2025/05/1.png",
    date: "01/07/2023",
    title: "Thông báo tuyển sinh trình độ Thạc sĩ đợt 1 năm 2023",
  },
];

const ArrowButton = ({ onClick, direction, disabled }) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className={`w-10 h-10 flex items-center justify-center rounded-md transition-colors duration-300 ${
      disabled
        ? "bg-gray-200 text-gray-400 cursor-not-allowed"
        : "bg-gray-100 text-gray-600 hover:bg-red-700 hover:text-white"
    }`}
  >
    {direction === "left" ? (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 19l-7-7 7-7"
        />
      </svg>
    ) : (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 5l7 7-7 7"
        />
      </svg>
    )}
  </button>
);

const ThongBaoSauDaiHoc = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handleNext = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  const handlePrev = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const selectedData = data.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="text-sm mb-8" aria-label="Breadcrumb">
          <ol className="list-none p-0 inline-flex">
            <li className="flex items-center">
              <a href="/" className="text-gray-500 hover:text-red-700">
                Trang chủ
              </a>
              <svg
                className="fill-current w-3 h-3 mx-3"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" />
              </svg>
            </li>
            <li className="flex items-center">
              <a href="/thong-bao" className="text-gray-500 hover:text-red-700">
                Thông báo
              </a>
              <svg
                className="fill-current w-3 h-3 mx-3"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" />
              </svg>
            </li>
            <li>
              <span className="text-gray-800 font-semibold">
                Tuyển sinh sau đại học
              </span>
            </li>
          </ol>
        </nav>

        <h1 className="text-4xl font-extrabold text-gray-800 mb-10">
          Tuyển sinh sau đại học
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {selectedData.map((item, index) => (
            <Card
              key={startIndex + index}
              image={item.image}
              date={item.date}
              title={item.title}
            />
          ))}
        </div>

        {totalPages > 1 && (
          <div className="flex justify-center items-center mt-12 space-x-4">
            <ArrowButton
              onClick={handlePrev}
              direction="left"
              disabled={currentPage === 1}
            />
            <span className="text-gray-700 font-semibold">
              Trang {currentPage} / {totalPages}
            </span>
            <ArrowButton
              onClick={handleNext}
              direction="right"
              disabled={currentPage === totalPages}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ThongBaoSauDaiHoc;
