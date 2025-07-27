import { useState } from "react";
import Card from "../../components/ui/Card";

const data = [
  {
    slug: "bang-quy-doi-tuong-duong-diem-trung-tuyen-2025",
    image:
      "https://tuyensinh.ptit.edu.vn/wp-content/uploads/sites/4/2025/05/1.png",
    date: "23/07/2025",
    title:
      "Bảng quy đổi tương đương điểm trúng tuyển giữa các phương thức xét tuyển đại học hệ chính quy đợt 1 năm 2025",
  },
  {
    slug: "nguong-dam-bao-chat-luong-dau-vao-2025",
    image:
      "https://tuyensinh.ptit.edu.vn/wp-content/uploads/sites/4/2025/05/1.png",
    date: "21/07/2025",
    title:
      "Ngưỡng đảm bảo chất lượng đầu vào trình độ đại học hệ chính quy đợt 1 năm 2025",
  },
  {
    slug: "ve-viec-dang-ky-nguyen-vong-xet-tuyen-2025",
    image:
      "https://tuyensinh.ptit.edu.vn/wp-content/uploads/sites/4/2025/05/1.png",
    date: "14/07/2025",
    title:
      "Về việc đăng ký nguyện vọng xét tuyển đại học chính quy trên Hệ thống hỗ trợ tuyển sinh chung của Bộ Giáo dục và Đào tạo",
  },
  {
    slug: "ket-qua-xet-tuyen-thang-va-utxt-2025",
    image:
      "https://tuyensinh.ptit.edu.vn/wp-content/uploads/sites/4/2025/05/1.png",
    date: "24/06/2025",
    title:
      "Kết quả xét tuyển thẳng và Ưu tiên xét tuyển vào đại học chính quy năm 2025",
  },
  {
    slug: "dieu-chinh-thoi-gian-dang-ky-xet-tuyen-2025",
    image:
      "https://tuyensinh.ptit.edu.vn/wp-content/uploads/sites/4/2025/05/1.png",
    date: "28/05/2025",
    title:
      "Sửa đổi, bổ sung một số nội dung của Đề án tuyển sinh và thông báo tuyển sinh đại học hệ chính quy năm 2025",
  },
  {
    slug: "thong-bao-mo-he-thong-xet-tuyen-2025",
    image:
      "https://tuyensinh.ptit.edu.vn/wp-content/uploads/sites/4/2025/05/1.png",
    date: "04/06/2025",
    title:
      "Về việc điều chỉnh thời gian đăng ký thông tin xét tuyển trực tuyến cho thí sinh đăng ký xét tuyển vào Đại học chính quy năm 2025",
  },
  {
    slug: "sua-doi-bo-sung-de-an-tuyen-sinh-2025",
    image:
      "https://tuyensinh.ptit.edu.vn/wp-content/uploads/sites/4/2025/05/1.png",
    date: "20/05/2025",
    title: "Thông báo tuyển sinh Đại học hệ chính quy năm 2025 (Dự kiến)",
  },
  {
    slug: "thong-tin-tuyen-sinh-chuong-trinh-chat-luong-cao-2025",
    image:
      "https://tuyensinh.ptit.edu.vn/wp-content/uploads/sites/4/2025/05/1.png",
    date: "15/05/2025",
    title:
      "Thông tin tuyển sinh các chương trình Chất lượng cao trình độ đại học năm 2025",
  },
  {
    slug: "huong-dan-dang-ky-xet-tuyen-ket-hop-2025",
    image:
      "https://tuyensinh.ptit.edu.vn/wp-content/uploads/sites/4/2025/05/1.png",
    date: "10/05/2025",
    title:
      "Hướng dẫn đăng ký xét tuyển kết hợp và xét tuyển dựa vào kết quả bài thi đánh giá năng lực, đánh giá tư duy năm 2025",
  },
  {
    slug: "thong-bao-nguong-diem-nhan-ho-so-xet-tuyen",
    image:
      "https://tuyensinh.ptit.edu.vn/wp-content/uploads/sites/4/2025/05/1.png",
    date: "05/05/2025",
    title:
      "Thông báo ngưỡng điểm nhận hồ sơ xét tuyển các phương thức (trừ phương thức thi tốt nghiệp THPT)",
  },
  {
    slug: "thong-bao-thi-cap-chung-chi-tieng-anh-pte-academic",
    image:
      "https://tuyensinh.ptit.edu.vn/wp-content/uploads/sites/4/2025/05/1.png",
    date: "01/05/2025",
    title:
      "Thông báo về việc tổ chức thi cấp Chứng chỉ tiếng Anh quốc tế PTE Academic",
  },
  {
    slug: "thong-bao-tuyen-sinh-lien-thong-cao-dang",
    image:
      "https://tuyensinh.ptit.edu.vn/wp-content/uploads/sites/4/2025/05/1.png",
    date: "25/04/2025",
    title:
      "Thông báo tuyển sinh liên thông từ trình độ cao đẳng lên trình độ đại học năm 2025",
  },
  {
    slug: "thong-bao-tuyen-sinh-dai-hoc-van-bang-2",
    image:
      "https://tuyensinh.ptit.edu.vn/wp-content/uploads/sites/4/2025/05/1.png",
    date: "20/04/2025",
    title: "Thông báo tuyển sinh đại học văn bằng 2, hệ chính quy năm 2025",
  },
  {
    slug: "chinh-sach-hoc-bong-ho-tro-tai-chinh-2025-2026",
    image:
      "https://tuyensinh.ptit.edu.vn/wp-content/uploads/sites/4/2025/05/1.png",
    date: "15/04/2025",
    title:
      "Chính sách học bổng và hỗ trợ tài chính cho sinh viên năm học 2025-2026",
  },
  {
    slug: "ngay-hoi-tu-van-tuyen-sinh-huong-nghiep-ptit-2025",
    image:
      "https://tuyensinh.ptit.edu.vn/wp-content/uploads/sites/4/2025/05/1.png",
    date: "10/04/2025",
    title: "Ngày hội tư vấn tuyển sinh - hướng nghiệp PTIT 2025",
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

const ThongBaoDaiHoc = () => {
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
                Tuyển sinh đại học
              </span>
            </li>
          </ol>
        </nav>

        <h1 className="text-4xl font-extrabold text-gray-800 mb-10">
          Tuyển sinh đại học
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {selectedData.map((item, index) => (
            <Card
              key={item.slug}
              image={item.image}
              date={item.date}
              title={item.title}
              href={`/thong-bao/tuyen-sinh-dai-hoc/${item.slug}`}
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

export default ThongBaoDaiHoc;
