const CotMocTuyenSinh = () => {
  const timelineData = [
    {
      step: "1",
      date: "16/7/2025",
      title: "THÍ SINH ĐĂNG KÝ, ĐIỀU CHỈNH NGUYỆN VỌNG XÉT TUYỂN",
    },
    {
      step: "2",
      date: "29/7- 5/8/2025",
      title: "NỘP LỆ PHÍ XÉT TUYỂN TRỰC TUYẾN",
    },
    {
      step: "3",
      date: "22/8/2025",
      title: "THÔNG BÁO THÍ SINH TRÚNG TUYỂN ĐỢT 1",
    },
    {
      step: "4",
      date: "30/8/2025",
      title: "HOÀN THÀNH XÁC NHẬN NHẬP HỌC TRỰC TUYẾN ĐỢT 1 TRÊN HỆ THỐNG",
    },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-red-600 font-semibold tracking-wider uppercase">
            TUYỂN SINH
          </p>
          <h2 className="text-4xl font-bold text-gray-800 mt-2">
            Cột mốc tuyển sinh
          </h2>
        </div>

        <div className="relative mx-auto grid max-w-3xl grid-cols-1 gap-12 md:max-w-xl md:grid-cols-2 md:gap-x-8 md:gap-y-12 lg:max-w-7xl lg:grid-cols-4 lg:gap-8">
          <div className="absolute left-1/2 top-8 hidden h-[2px] w-3/4 -translate-x-1/2 bg-slate-200 lg:block"></div>

          {timelineData.map((item, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center text-center"
            >
              <div className="relative z-20 mb-6 flex h-14 w-14 items-center justify-center rounded-full border-4 border-red-600 bg-white md:h-16 md:w-16 md:mb-8">
                <span className="text-xl font-bold text-red-600 md:text-2xl">
                  {item.step}
                </span>
              </div>
              <div className="max-w-[250px] md:max-w-[300px]">
                <div className="mb-3 text-lg font-bold text-slate-800 md:text-xl">
                  {item.date}
                </div>
                <div className="text-sm font-semibold uppercase leading-snug tracking-wide text-slate-500">
                  {item.title}
                </div>
              </div>
              {index < timelineData.length - 1 && (
                <div className="absolute -bottom-12 left-1/2 h-12 w-0.5 -translate-x-1/2 bg-slate-200 md:hidden"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CotMocTuyenSinh;
