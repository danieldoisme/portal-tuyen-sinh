import { useNavigate } from "react-router-dom";

const ArrowRightIcon = () => (
  <svg
    className="w-4 h-4"
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

const CheckmarkIcon = () => (
  <div className="flex-shrink-0 mt-1 bg-white/20 rounded-full p-1.5">
    <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
    </svg>
  </div>
);

const ThamGiaXetTuyen = () => {
  const navigate = useNavigate();
  const features = [
    "02 cơ sở đào tạo: Hà Nội và Thành phố Hồ Chí Minh.",
    "24 ngành/chương trình đào tạo đại học chất lượng cao, 05 chương trình Chất lượng cao.",
    "Học bổng lên đến 500 triệu đồng với các thí sinh tham dự kỳ thi chọn đội tuyển quốc gia dự thi Olympic quốc tế, thí sinh đạt giải Nhất, Nhì, Ba trong kỳ thi chọn học sinh giỏi quốc gia các môn Toán, Lý và Tin học.",
  ];

  return (
    <section className="py-16 bg-white flex justify-center items-center">
      <div className="max-w-6xl mx-auto bg-gradient-to-br from-red-600 to-red-800 rounded-2xl overflow-hidden shadow-2xl w-[95%]">
        <div className="grid lg:grid-cols-[55fr_45fr] min-h-[400px]">
          <div className="text-white p-6 sm:p-8 md:p-10 flex items-center">
            <div className="w-full max-w-md">
              <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-3">
                Tham gia ngay xét tuyển
              </h1>
              <p className="text-base md:text-lg opacity-90 mb-6 leading-relaxed">
                Trở thành 1 thành viên của PTIT, bạn sẽ biết thêm được về
              </p>

              <div className="space-y-4 mb-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckmarkIcon />
                    <p className="text-sm md:text-base leading-relaxed">
                      {feature}
                    </p>
                  </div>
                ))}
              </div>

              <button
                onClick={() => navigate("/dang-nhap")}
                className="bg-white text-red-700 font-semibold py-4 px-8 rounded-full text-base inline-flex items-center gap-2 transition-all hover:bg-gray-100 hover:-translate-y-0.5 hover:shadow-lg w-full sm:w-auto justify-center"
              >
                Nộp hồ sơ trực tuyến
                <ArrowRightIcon />
              </button>
            </div>
          </div>

          <div className="hidden lg:flex items-center justify-center p-6">
            <img
              src="https://tuyensinh.ptit.edu.vn/wp-content/uploads/sites/4/2024/08/tham-gia-xet-tuyen.png"
              alt="Trở thành một PTITer - Bạn có những cơ hội gì?"
              className="w-full h-auto max-w-sm object-contain bg-white rounded-xl p-4 shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThamGiaXetTuyen;
