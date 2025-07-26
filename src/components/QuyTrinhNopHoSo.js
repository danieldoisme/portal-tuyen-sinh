const QuyTrinhNopHoSo = () => {
  const processSteps = [
    {
      step: "B1",
      title: "Đăng ký tài khoản",
      description: "Đăng ký tài khoản trên hệ thống",
      hasLink: true,
      linkText: "https://xettuyen.ptit.edu.vn",
      linkUrl: "https://xettuyen.ptit.edu.vn",
      afterLink: " với địa chỉ email hoặc tài khoản Google, Facebook.",
      number: "1",
    },
    {
      step: "B2",
      title: "Khai báo thông tin",
      description:
        "Thí sinh thực hiện khai báo hồ sơ xét tuyển theo Thông báo tuyển sinh của Học viện với 4 phương thức xét tuyển: Xét tuyển tài năng, Xét tuyển dựa vào kết quả Chứng chỉ đánh giá năng lực quốc tế (Chứng chỉ SAT/ACT), Xét tuyển kết hợp, Xét tuyển dựa vào kết quả bài thi đánh giá năng lực hoặc đánh giá tư duy.",
      hasLink: false,
      number: "2",
    },
    {
      step: "B3",
      title: "Đăng ký nguyện vọng",
      description:
        "Thí sinh thực hiện đăng ký nguyện vọng xét tuyển trên hệ thống. Mỗi thí sinh được đăng ký tối đa 5 nguyện vọng.",
      hasLink: false,
      number: "3",
    },
    {
      step: "B4",
      title: "Thanh toán trực tuyến",
      description:
        "Thí sinh thực hiện thanh toán Lệ phí xét tuyển. Thí sinh có thể sử dụng phương thức thanh toán qua Mã định danh hoặc Mã QR.",
      hasLink: false,
      number: "4",
    },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-red-600 font-semibold tracking-wider uppercase">
            GIỚI THIỆU
          </p>
          <h2 className="text-4xl font-bold text-gray-800 mt-2">
            Quy trình nộp hồ sơ trực tuyến
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
          {processSteps.map((step, index) => (
            <div
              key={index}
              className={`relative p-4 ${index === 3 ? "lg:col-start-1" : ""}`}
            >
              <div className="absolute right-0 top-0 text-8xl font-bold text-red-200/50 opacity-50">
                {step.number}
              </div>
              <div className="relative z-10">
                <h3 className="mb-3 text-lg font-bold text-slate-800">
                  {step.step}: {step.title}
                </h3>
                <p className="text-base leading-relaxed text-slate-600">
                  {step.description}
                  {step.hasLink && (
                    <>
                      {" "}
                      <a
                        href={step.linkUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold text-red-600 hover:underline"
                      >
                        {step.linkText}
                      </a>
                      {step.afterLink}
                    </>
                  )}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuyTrinhNopHoSo;
