const CheckIcon = () => (
  <svg
    className="w-5 h-5 text-red-600 mr-2"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
    ></path>
  </svg>
);

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

const CallToAction = () => {
  return (
    <section className="py-20 bg-white">
      <div
        className="container mx-auto px-4 text-center bg-white rounded-lg shadow-lg py-16"
        style={{
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundColor: "#fdecea",
        }}
      >
        <div className="relative z-10">
          <p className="text-red-700 font-semibold uppercase tracking-wider mb-2">
            TUYỂN SINH
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
            Đăng ký xét tuyển trực tuyến
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Nộp hồ sơ trực tuyến để không bỏ lỡ bất kỳ cơ hội nào trở thành sinh
            viên của PTIT
          </p>
          <a
            href="/nop-ho-so"
            className="inline-flex items-center bg-red-700 text-white font-semibold px-8 py-3 rounded-md hover:bg-red-800 transition duration-300 ease-in-out text-lg"
          >
            Nộp hồ sơ trực tuyến
            <ArrowRightIcon />
          </a>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-left max-w-4xl mx-auto">
            <div className="flex items-center">
              <CheckIcon />
              <span className="text-gray-700">Cơ hội trúng tuyển cao</span>
            </div>
            <div className="flex items-center">
              <CheckIcon />
              <span className="text-gray-700">Quy trình đăng ký mạch lạc</span>
            </div>
            <div className="flex items-center">
              <CheckIcon />
              <span className="text-gray-700">
                Cập nhật thông báo nhanh chóng
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
