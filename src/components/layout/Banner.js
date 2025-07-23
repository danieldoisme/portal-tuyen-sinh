const ArrowRightIcon = () => (
  <svg
    className="w-4 h-4 ml-2"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M14 5l7 7m0 0l-7 7m7-7H3"
    ></path>
  </svg>
);

const Banner = () => {
  return (
    <div className="relative bg-cover bg-center text-center text-gray-800">
      <div
        className="absolute inset-0 backdrop-blur-sm"
        style={{
          backgroundColor: "rgb(255, 255, 255)",
          backgroundImage:
            "radial-gradient(ellipse at center, rgba(239, 68, 68, 0.15) 0%, transparent 70%)",
        }}
      ></div>
      <div className="relative z-10 py-24">
        <div className="container mx-auto px-4">
          <p className="text-red-800 font-semibold uppercase tracking-wider mb-2">
            Tuyển sinh Học viện Công nghệ Bưu chính Viễn thông
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Đăng ký xét tuyển trực tuyến
          </h1>
          <p className="text-lg max-w-2xl mx-auto mb-8">
            Nộp hồ sơ trực tuyến để không bỏ lỡ bất kỳ cơ hội nào trở thành sinh
            viên của PTIT
          </p>
          <div className="flex justify-center items-center space-x-4">
            <a
              href="#"
              className="bg-red-700 text-white font-semibold px-6 py-3 rounded-md hover:bg-red-800 transition duration-300 ease-in-out flex items-center"
            >
              Cẩm nang Tuyển sinh đại học 2025
              <ArrowRightIcon />
            </a>
            <a
              href="#"
              className="bg-red-700 text-white font-semibold px-6 py-3 rounded-md hover:bg-red-800 transition duration-300 ease-in-out flex items-center"
            >
              Hướng dẫn ĐKXT
              <ArrowRightIcon />
            </a>
            <a
              href="#"
              className="bg-red-700 text-white font-semibold px-6 py-3 rounded-md hover:bg-red-800 transition duration-300 ease-in-out flex items-center"
            >
              Nộp hồ sơ trực tuyến
              <ArrowRightIcon />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
