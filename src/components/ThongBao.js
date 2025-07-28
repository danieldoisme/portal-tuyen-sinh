import { useState, useEffect } from "react";
import Card from "./ui/Card";

const mockData = {
  university: [
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
  ],
  postgraduate: [
    {
      image:
        "https://tuyensinh.ptit.edu.vn/wp-content/uploads/sites/4/2025/05/1.png",
      date: "15/06/2025",
      title: "Thông báo tuyển sinh Thạc sĩ ngành Quản trị kinh doanh",
    },
    {
      image:
        "https://tuyensinh.ptit.edu.vn/wp-content/uploads/sites/4/2025/05/1.png",
      date: "10/06/2025",
      title: "Hội thảo giới thiệu chương trình đào tạo Tiến sĩ CNTT",
    },
    {
      image:
        "https://tuyensinh.ptit.edu.vn/wp-content/uploads/sites/4/2025/05/1.png",
      date: "27/06/2025",
      title: "Thông báo tuyển sinh trình độ Tiến sĩ đợt 1 năm 2025",
    },
  ],
  other: [
    {
      image:
        "https://tuyensinh.ptit.edu.vn/wp-content/uploads/sites/4/2025/05/1.png",
      date: "20/06/2025",
      title:
        "Thông báo điểm chuẩn xét trúng tuyển và Quyết định phê duyệt danh sách thí sinh trúng tuyển Đại học theo hình thức Giáo dục từ xa đợt 3 năm 2025",
    },
    {
      image:
        "https://tuyensinh.ptit.edu.vn/wp-content/uploads/sites/4/2025/05/1.png",
      date: "20/06/2025",
      title: "Thông báo về các khóa học ngắn hạn cấp chứng chỉ",
    },
    {
      image:
        "https://tuyensinh.ptit.edu.vn/wp-content/uploads/sites/4/2025/05/1.png",
      date: "20/06/2025",
      title:
        "Thông báo điểm chuẩn xét trúng tuyển Đại học theo hình thức GDTX đợt 1 năm 2025 và QĐ phê duyệt danh sách trúng tuyển",
    },
    {
      image:
        "https://tuyensinh.ptit.edu.vn/wp-content/uploads/sites/4/2025/05/1.png",
      date: "20/06/2025",
      title:
        "Thông báo điểm chuẩn xét trúng tuyển Đại học theo hình thức GDTX đợt 2 năm 2025 và QĐ phê duyệt danh sách trúng tuyển",
    },
  ],
};

const TabButton = ({ active, onClick, children, icon }) => (
  <button
    onClick={onClick}
    className={`flex items-center justify-center w-64 px-4 py-2 font-semibold text-sm md:text-base transition-colors duration-300 ${
      active
        ? "text-red-700 border-b-2 border-red-700"
        : "text-gray-600 hover:text-red-700"
    }`}
  >
    {icon}
    {children}
  </button>
);

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
          d="M10 19l-7-7m0 0l7-7m-7 7h18"
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
          d="M14 5l7 7m0 0l-7 7m7-7H3"
        />
      </svg>
    )}
  </button>
);

const ThongBao = () => {
  const [activeTab, setActiveTab] = useState("university");
  const [announcements, setAnnouncements] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3;

  useEffect(() => {
    setAnnouncements(mockData[activeTab]);
    setCurrentIndex(0);
  }, [activeTab]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      Math.min(prevIndex + itemsPerPage, announcements.length - itemsPerPage)
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - itemsPerPage, 0));
  };

  const canGoPrev = currentIndex > 0;
  const canGoNext = currentIndex + itemsPerPage < announcements.length;

  const TabIcon = ({ className }) => (
    <svg
      className={`w-5 h-5 mr-2 ${className}`}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
      ></path>
    </svg>
  );

  return (
    <section className="py-16 bg-white">
      <div className="mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-red-700 font-semibold uppercase tracking-wider">
            XÉT TUYỂN
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mt-2">
            Thông báo
          </h2>
        </div>

        <div className="flex justify-center border-b mb-10">
          <TabButton
            active={activeTab === "university"}
            onClick={() => setActiveTab("university")}
            icon={
              <TabIcon
                className={
                  activeTab === "university" ? "text-red-600" : "text-gray-400"
                }
              />
            }
          >
            Tuyển sinh đại học
          </TabButton>
          <TabButton
            active={activeTab === "postgraduate"}
            onClick={() => setActiveTab("postgraduate")}
            icon={
              <TabIcon
                className={
                  activeTab === "postgraduate"
                    ? "text-red-600"
                    : "text-gray-400"
                }
              />
            }
          >
            Tuyển sinh sau đại học
          </TabButton>
          <TabButton
            active={activeTab === "other"}
            onClick={() => setActiveTab("other")}
            icon={
              <TabIcon
                className={
                  activeTab === "other" ? "text-red-600" : "text-gray-400"
                }
              />
            }
          >
            Tuyển sinh khác
          </TabButton>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                width: `${(announcements.length / itemsPerPage) * 100}%`,
                transform: `translateX(-${
                  (currentIndex / announcements.length) * 100
                }%)`,
                marginBottom: "2rem",
              }}
            >
              {announcements.map((item, index) => (
                <div
                  key={index}
                  className="px-4"
                  style={{ width: `${100 / announcements.length}%` }}
                >
                  <Card
                    key={item.slug}
                    image={item.image}
                    date={item.date}
                    title={item.title}
                    href={`/thong-bao/tuyen-sinh-dai-hoc/${item.slug}`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {announcements.length > itemsPerPage && (
          <div className="flex justify-center items-center mt-8 space-x-4">
            <ArrowButton
              onClick={handlePrev}
              direction="left"
              disabled={!canGoPrev}
            />
            <ArrowButton
              onClick={handleNext}
              direction="right"
              disabled={!canGoNext}
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default ThongBao;
