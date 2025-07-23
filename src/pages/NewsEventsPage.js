import { useState } from "react";
import AnnouncementCard from "../features/announcements/AnnouncementCard";

const eventsNewsData = [
  {
    image:
      "https://tuyensinh.ptit.edu.vn/wp-content/uploads/sites/4/2024/08/anhDaiDien-1716377000540-untitled-1024x530.png",
    date: "22/05/2024",
    title:
      "BẢNG XẾP HẠNG SCIMAGO 2024 VIỆT NAM: PTIT XẾP THỨ 1 VỀ CHỈ SỐ ĐỔI MỚI",
  },
  {
    image:
      "https://tuyensinh.ptit.edu.vn/wp-content/uploads/sites/4/2024/08/anhDaiDien-1716377380939-untitled2.png",
    date: "22/05/2024",
    title:
      "PTIT VÀ 4 TRƯỜNG ĐẠI HỌC HÀN QUỐC TRANH TÀI TẠI CUỘC THI “PTIT-CAU HACKATHON 2024”",
  },
  {
    image:
      "https://tuyensinh.ptit.edu.vn/wp-content/uploads/sites/4/2024/08/anhDaiDien-1715841511649-untitled.png",
    date: "16/05/2024",
    title:
      "HỌC VIỆN CÔNG NGHỆ BƯU CHÍNH VIỄN THÔNG RA MẮT “CỔNG TRI THỨC PTIT”",
  },
  {
    image:
      "https://tuyensinh.ptit.edu.vn/wp-content/uploads/sites/4/2024/08/anhDaiDien-1715842204963-untitled.png",
    date: "16/05/2024",
    title:
      "Ý TƯỞNG DIGITAL HUMAN GIÀNH GIẢI NHẤT TẠI CHUNG KẾT CUỘC THI P-INNOVATION 2024",
  },
  {
    image:
      "https://tuyensinh.ptit.edu.vn/wp-content/uploads/sites/4/2024/08/anhDaiDien-1715755661388-1_12.jpg",
    date: "15/05/2024",
    title:
      "HỌC VIỆN CÔNG NGHỆ BƯU CHÍNH VIỄN THÔNG HỢP TÁC VỚI CÔNG TY CỔ PHẦN EON REALITY VIETNAM",
  },
  {
    image:
      "https://tuyensinh.ptit.edu.vn/wp-content/uploads/sites/4/2024/08/anhDaiDien-1715572583078-anh_tot_nghiep-1024x537.jpg",
    date: "13/05/2024",
    title:
      "HƠN 1.000 TÂN TIẾN SỸ, TÂN THẠC SỸ VÀ TÂN KỸ SƯ HỌC VIỆN CÔNG NGHỆ BƯU CHÍNH VIỄN THÔNG ĐƯỢC CẤP BẰNG TỐT NGHIỆP",
  },
  {
    image:
      "https://tuyensinh.ptit.edu.vn/wp-content/uploads/sites/4/2024/08/anhDaiDien-1715572656099-2_7_300x198.jpg",
    date: "13/05/2024",
    title:
      "HỌC VIỆN CÔNG NGHỆ BƯU CHÍNH VIỄN THÔNG CÙNG LÃNH ĐẠO TỈNH GUNMA (NHẬT BẢN) THẢO LUẬN VỀ HỢP TÁC GIÁO DỤC",
  },
  {
    image:
      "https://tuyensinh.ptit.edu.vn/wp-content/uploads/sites/4/2024/08/anhDaiDien-1715224042108-438263782_747347837562565_2366140221768122841_n.jpg",
    date: "09/05/2024",
    title: "LỄ KỶ NIỆM 25 NĂM THÀNH LẬP KHOA CÔNG NGHỆ THÔNG TIN 1 (1999-2024)",
  },
  {
    image:
      "https://tuyensinh.ptit.edu.vn/wp-content/uploads/sites/4/2024/08/anhDaiDien-1715135599419-tet_lao_1-1024x768.jpeg",
    date: "08/05/2024",
    title:
      "Học viện Công nghệ Bưu chính viễn thông tổ chức chúc mừng các Lưu học sinh Lào tốt nghiệp",
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

const NewsEventsPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  const totalPages = Math.ceil(eventsNewsData.length / itemsPerPage);

  const handleNext = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  const handlePrev = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const selectedData = eventsNewsData.slice(
    startIndex,
    startIndex + itemsPerPage
  );

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
              <a href="#" className="text-gray-500 hover:text-red-700">
                Tin tức
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
                Hoạt động & Sự kiện
              </span>
            </li>
          </ol>
        </nav>

        <h1 className="text-4xl font-extrabold text-gray-800 mb-10">
          Hoạt động & Sự kiện
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {selectedData.map((item, index) => (
            <AnnouncementCard
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

export default NewsEventsPage;
