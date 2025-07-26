import { useState } from "react";

const PhuongThucXetTuyen = () => {
  const [activeTab, setActiveTab] = useState(0);

  const data = [
    {
      id: 1,
      title: "Phương thức 1",
      subtitle: "Xét tuyển tài năng",
      content: [
        {
          text: "Xét tuyển thẳng và ưu tiên xét tuyển: Học viện thực hiện xét tuyển thẳng và ưu tiên xét tuyển theo Quy chế tuyển sinh đại học của Bộ Giáo dục và Đào tạo (có thông báo chi tiết riêng).",
        },
        {
          text: "Xét tuyển dựa vào hồ sơ năng lực đối với các thí sinh có Thành tích đoạt giải trong kỳ thi chọn học sinh giỏi THPT cấp quốc gia (giải Khuyến khích), cấp Tỉnh/Thành phố trực thuộc TW (Nhất, Nhì, Ba và Khuyến khích), thời gian đoạt giải không quá 3 năm tính tới thời điểm xét tuyển hoặc là học sinh tại các trường THPT chuyên chuyên hoặc hệ chuyên thuộc các trường THPT trọng điểm quốc gia.",
        },
      ],
    },
    {
      id: 2,
      title: "Phương thức 2",
      subtitle:
        "Xét tuyển dựa vào kết quả Chứng chỉ đánh giá năng lực quốc tế (Chứng chỉ SAT/ACT)",
      content: [
        {
          type: "html",
          text: `Thí sinh đã được công nhận tốt nghiệp trung học phổ thông (THPT) <em>hoặc tương đương</em> và có <strong>Chứng chỉ đánh giá năng lực quốc tế SAT từ 1130/1600 trở lên hoặc ACT từ 25/36 trở lên</strong>, trong thời hạn 02 năm (tính đến ngày xét tuyển).`,
        },
      ],
    },
    {
      id: 3,
      title: "Phương thức 3",
      subtitle:
        "Xét tuyển dựa vào kết quả bài thi đánh giá năng lực hoặc đánh giá tư duy",
      content: [
        {
          text: "Thí sinh có điểm thi đánh giá năng lực của Đại học quốc gia Hà Nội năm 2025 từ 75 điểm trở lên.",
        },
        {
          text: "Thí sinh có điểm thi đánh giá năng lực của Đại học quốc gia Hồ Chí Minh năm 2025 từ 600 điểm trở lên.",
        },
        {
          text: "Thí sinh có điểm thi đánh giá tư duy của Đại học Bách khoa Hà Nội năm 2025 từ 50 điểm trở lên.",
        },
        {
          text: "Thí sinh có điểm thi đánh giá năng lực của Trường Đại học Sư phạm Hà Nội (SPT) năm 2025 từ 15 điểm trở lên.",
        },
      ],
    },
    {
      id: 4,
      title: "Phương thức 4",
      subtitle: "Xét tuyển kết hợp",
      content: [
        {
          text: "Thí sinh có Chứng chỉ tiếng Anh quốc tế trong thời hạn (tính đến ngày xét tuyển) đạt IELTS 5.5 trở lên hoặc TOEFL iBT 65 trở lên hoặc TOEFL ITP 513 trở lên và có kết quả điểm trung bình chung học tập lớp 10, 11, 12 đạt từ 7,5 trở lên và có hạnh kiểm Khá trở lên.",
        },
      ],
    },
    {
      id: 5,
      title: "Phương thức 5",
      subtitle:
        "Phương thức xét tuyển dựa vào kết quả thi tốt nghiệp THPT năm 2025",
      content: [
        {
          text: "Xét tuyển theo ngành và theo tổ hợp bài thi/môn thi xét tuyển.",
        },
        {
          text: "Điểm trúng tuyển của các tổ hợp bài thi/môn thi trong cùng một ngành là bằng nhau (không có điểm chênh lệch giữa các tổ hợp trong cùng một ngành).",
        },
        {
          text: "Xét trúng tuyển từ thí sinh có kết quả cao xuống và đảm bảo chất lượng tuyển sinh.",
        },
        {
          text: "Xét tuyển các nguyện vọng bình đẳng (không có điểm chênh lệch giữa các nguyện vọng trong cùng một ngành), nếu thí sinh không trúng tuyển nguyện vọng ở thứ tự ưu tiên thứ nhất (nguyện vọng 1) thì sẽ được tự động xét tuyển ở nguyện vọng ưu tiên thứ hai (nguyện vọng 2) và kế tiếp.",
        },
        {
          text: "Thí sinh chỉ trúng tuyển vào 1 nguyện vọng ưu tiên cao nhất trong danh sách các nguyện vọng đã đăng ký, khi đã trúng tuyển ở nguyện vọng nào thì không được xét tuyển tiếp ở nguyện vọng sau.",
        },
        {
          text: "Điểm trúng tuyển được tính theo thang điểm 10 trên tổng điểm tối đa của 3 môn thi trong tổ hợp xét tuyển là 30 điểm.",
        },
        {
          text: "Đối với các thí sinh bằng điểm xét tuyển ở cuối danh sách, nếu vẫn còn vượt chỉ tiêu thì ưu tiên thí sinh có nguyện vọng cao hơn theo Quy chế tuyển sinh của Bộ Giáo dục & Đào tạo, Học viện không sử dụng tiêu chí phụ riêng để xét tuyển.",
        },
        {
          text: "Thí sinh trúng tuyển phải xác nhận nhập học trong thời gian quy định của Học viện. Nếu quá thời hạn này, thí sinh không xác nhận nhập học được xem là từ chối nhập học. Các điều kiện khác thực hiện theo Quy chế tuyển sinh đại học hệ chính quy hiện hành của Bộ Giáo dục và Đào tạo và của Học viện.",
        },
      ],
    },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-red-600 font-semibold tracking-wider uppercase">
            HỆ ĐẠI HỌC CHÍNH QUY
          </p>
          <h2 className="text-4xl font-bold text-gray-800 mt-2">
            Phương thức xét tuyển
          </h2>
        </div>

        <div className="overflow-hidden rounded-2xl bg-white shadow-xl">
          <div className="flex w-full overflow-x-auto border-b border-slate-200 bg-white">
            {data.map((method, index) => (
              <button
                key={method.id}
                className={`flex-1 whitespace-nowrap border-b-[3px] px-2 py-4 text-sm font-medium transition-all duration-300 ease-in-out hover:bg-red-50 hover:text-red-600 md:flex md:min-w-[150px] md:items-center md:justify-center md:gap-2 md:px-6 ${
                  activeTab === index
                    ? "border-red-600 bg-red-50 text-red-600"
                    : "border-transparent text-slate-500"
                }`}
                onClick={() => setActiveTab(index)}
              >
                <svg
                  className="mx-auto mb-1 h-5 w-5 flex-shrink-0 md:mx-0 md:mb-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2z"
                  />
                </svg>
                {method.title}
              </button>
            ))}
          </div>

          <div className="flex min-h-[400px] flex-col lg:min-h-[500px] lg:flex-row">
            <div className="flex h-[200px] w-full items-center justify-center bg-slate-50 lg:h-auto lg:w-1/2">
              <img
                src="https://tuyensinh.ptit.edu.vn/wp-content/uploads/sites/4/2024/08/phuong-thuc-1.png"
                alt="Công bố phương thức xét tuyển"
                className="h-auto w-[85%] object-contain"
              />
            </div>

            <div className="w-full bg-white lg:w-1/2">
              <div className="h-full overflow-y-auto p-6 md:p-8">
                <h3 className="mb-6 text-xl font-bold leading-tight text-slate-800 md:text-2xl">
                  {data[activeTab].subtitle}
                </h3>
                <div className="flex flex-col gap-4">
                  {data[activeTab].content.map((item, index) => (
                    <div key={index}>
                      <div className="flex items-start gap-3">
                        <svg
                          className="mt-1 h-5 w-5 flex-shrink-0 text-red-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <div className="m-0 flex-1 text-sm leading-relaxed text-slate-600 md:text-base [&_strong]:font-bold [&_strong]:text-slate-800 [&_em]:italic">
                          {item.type === "html" ? (
                            <p
                              dangerouslySetInnerHTML={{ __html: item.text }}
                            ></p>
                          ) : (
                            <p>{item.text}</p>
                          )}
                        </div>
                      </div>
                      {item.subItems && (
                        <ul className="mt-2 ml-8 flex flex-col gap-2">
                          {item.subItems.map((subItem, subIndex) => (
                            <li
                              key={subIndex}
                              className="flex items-start gap-2 text-sm text-slate-500 md:text-base"
                            >
                              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-slate-400"></span>
                              <span>{subItem}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhuongThucXetTuyen;
