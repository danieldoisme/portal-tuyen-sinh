import React, { useState, useEffect } from "react";

// SVG Icon cho mũi tên đi lên
const ArrowUpIcon = () => (
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
      d="M5 15l7-7 7 7"
    />
  </svg>
);

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Hàm này sẽ được gọi khi người dùng cuộn trang
  const toggleVisibility = () => {
    // Nếu vị trí cuộn > 300px, hiển thị nút. Ngược lại, ẩn đi.
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Hàm để cuộn lên đầu trang một cách mượt mà
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    // Thêm một event listener để theo dõi sự kiện cuộn trang
    window.addEventListener("scroll", toggleVisibility);

    // Dọn dẹp event listener khi component bị gỡ bỏ để tránh rò rỉ bộ nhớ
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-5 right-5 p-3 bg-red-700 text-white rounded-full shadow-lg hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-opacity duration-300 animate-fade-in"
          aria-label="Về đầu trang"
        >
          <ArrowUpIcon />
        </button>
      )}
    </>
  );
};

export default ScrollToTopButton;
