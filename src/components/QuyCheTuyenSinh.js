import { useState, useEffect } from "react";
import ptitIcon from "../assets/icons/ptit-icon.png";

const data = [
  {
    title: "Quy chế 1",
    description: "Xét tuyển theo ngành và theo tổ hợp môn thi xét tuyển.",
  },
  {
    title: "Quy chế 2",
    description:
      "Điểm trúng tuyển của các tổ hợp môn thi trong cùng một ngành là bằng nhau.",
  },
  {
    title: "Quy chế 3",
    description:
      "Xét trúng tuyển từ thí sinh có kết quả cao xuống và đảm bảo chất lượng tuyển sinh.",
  },
  {
    title: "Quy chế 4",
    description:
      "Điểm trúng tuyển được tính theo thang điểm 10, tổng điểm tối đa của 3 bài thi trong tổ hợp xét tuyển là 30 điểm.",
  },
  {
    title: "Quy chế 5",
    description:
      "Xét tuyển các nguyện vọng bình đẳng theo kết quả thi (điểm trúng tuyển giữa các nguyện vọng là bằng nhau). Nếu thí sinh không trúng tuyển nguyện vọng ở thứ tự ưu tiên thứ nhất (nguyện vọng 1), hệ thống sẽ tự động xét tiếp ở nguyện vọng 2, 3... theo thứ tự đã đăng ký cho đến khi trúng tuyển hoặc hết nguyện vọng.",
  },
  {
    title: "Quy chế 6",
    description:
      "Học viện không sử dụng kết quả miễn thi bài thi môn ngoại ngữ và điểm thi được bảo lưu để xét tuyển.",
  },
];

const ArrowButton = ({ onClick, direction, disabled }) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className={`absolute top-1/2 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center rounded-full bg-white shadow-lg transition-all duration-300 hover:bg-gray-100 disabled:bg-gray-200 disabled:text-gray-400 disabled:cursor-not-allowed ${
      direction === "left" ? "-left-12 md:-left-12" : "-right-12 md:-right-12"
    }`}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d={direction === "left" ? "M15 19l-7-7 7-7" : "M9 5l7 7-7 7"}
      />
    </svg>
  </button>
);

const QuyCheTuyenSinh = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);

  useEffect(() => {
    const updateItemsPerPage = () => {
      if (window.innerWidth < 768) {
        setItemsPerPage(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(3);
      }
    };

    updateItemsPerPage();
    window.addEventListener("resize", updateItemsPerPage);
    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      Math.min(prevIndex + 1, data.length - itemsPerPage)
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const canGoPrev = currentIndex > 0;
  const canGoNext = currentIndex + itemsPerPage < data.length;

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-red-600 font-semibold tracking-wider uppercase">
            TUYỂN SINH
          </p>
          <h2 className="text-4xl font-bold text-gray-800 mt-2">
            Quy chế - Quy định tuyển sinh
          </h2>
        </div>
        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${
                  currentIndex * (100 / itemsPerPage)
                }%)`,
              }}
            >
              {data.map((reg, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 p-4"
                  style={{ width: `${100 / itemsPerPage}%` }}
                >
                  <div className="bg-white border border-red-100 rounded-xl p-6 shadow-md flex flex-col items-start min-h-[280px] h-full hover:-translate-y-1 transition-transform duration-200">
                    <div className="w-[70px] h-[70px] bg-red-50 rounded-full flex items-center justify-center overflow-hidden mb-2.5">
                      <img
                        src={ptitIcon}
                        alt="PTIT Icon"
                        className="w-[60px] h-[60px] object-cover rounded-full border border-red-500"
                      />
                    </div>
                    <h3 className="text-slate-800 text-xl font-bold my-4">
                      {reg.title}
                    </h3>
                    <p className="text-gray-700 text-base leading-relaxed flex-grow">
                      {reg.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {data.length > itemsPerPage && (
            <>
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
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default QuyCheTuyenSinh;
