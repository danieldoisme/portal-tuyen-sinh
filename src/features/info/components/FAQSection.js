import { useState } from "react";

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const data = [
    {
      id: 1,
      question:
        "Chào thầy cô! Tôi là phụ huynh có con thi Đại học năm nay, gia đình muốn cho cháu điều kiện vào ngành CNTT của Học viện. Vậy thầy cô cho hỏi nguyên tắc xét tuyển của HV năm nay như thế nào? Và HV có áp dụng tiêu chí phụ gì khi xét đối với các thí sinh đăng ký vào không? Tôi xin cảm ơn!",
      answer:
        "Chào Bác! Tổ tư vấn xin trả lời câu hỏi của Bác về nguyên tắc xét tuyển của HV như sau: I. Xét tuyển dựa vào kết quả thi THPT 2024: - Xét tuyển theo ngành và theo tổ hợp bài thi/môn thi xét tuyển; - Điểm trúng tuyển của các tổ hợp bài thi/môn thi trong cùng một ngành là bằng nhau (không có điểm chênh lệch giữa các tổ hợp trong cùng một ngành); - Xét trúng tuyển từ thí sinh có kết quả cao xuống và đảm bảo chất lượng tuyển sinh; - Xét tuyển các nguyện vọng bình đẳng (không có điểm chênh lệch giữa các nguyện vọng trong cùng một ngành), nếu thí sinh không trúng tuyển nguyện vọng ở thứ tự ưu tiên thứ nhất (nguyện vọng 1) thì sẽ được tự động xét tuyển ở nguyện vọng ưu tiên thứ hai (nguyện vọng 2) và kế tiếp; - Thí sinh chỉ trúng tuyển vào 1 nguyện vọng ưu tiên cao nhất trong danh sách các nguyện vọng đã đăng ký, khi đã trúng tuyển ở nguyện vọng nào thì không được xét tuyển tiếp ở nguyện vọng sau; - Điểm trúng tuyển được tính theo thang điểm 10 trên tổng điểm tối đa của 3 môn thi trong tổ hợp xét tuyển là 30 điểm; - Đối với các thí sinh bằng điểm xét tuyển ở cuối danh sách, nếu vẫn còn vượt chỉ tiêu thì ưu tiên thí sinh có nguyện vọng cao hơn theo Quy chế tuyển sinh của Bộ Giáo dục và Đào tạo, Học viện không sử dụng tiêu chí phụ riêng để xét tuyển; - Thí sinh trúng tuyển phải xác nhận nhập học trong thời gian quy định của Học viện. Nếu quá thời hạn này, thí sinh không xác nhận nhập học được xem là từ chối nhập học. - Các điều kiện khác thực hiện theo Quy chế tuyển sinh đại học hệ chính quy hiện hành của Bộ Giáo dục và Đào tạo và của Học viện.",
    },
    {
      id: 2,
      question: "Chương trình đào tạo tại miền Nam có khác với miền Bắc không?",
      answer:
        "Chương trình đào tạo của Học viện được áp dụng thống nhất ở cả 2 Cơ sở đào tạo Hà Nội và TP. Hồ Chí Minh",
    },
    {
      id: 3,
      question: "Trường mình có 2 cơ sở, vậy sẽ phân bố học sinh như thế nào?",
      answer:
        "Chỉ tiêu đào tạo của từng cơ sở đã được Học viện thông báo rộng rãi, em có thể tìm hiểu kỹ thêm tại Cổng thông tin tuyển sinh của Học viện.",
    },
    {
      id: 4,
      question:
        "Em đăng ký NV1 là ngành ATTT, NV2 là ngành CNTT nếu điểm thi của em đều đỗ vào cả 2 ngành thì em muốn học ngành CNTT mà không học ATTT có được không ạ?",
      answer:
        "Không được em nhé! Theo nguyên tắc xét tuyển thì thí sinh chỉ trúng tuyển vào 1 nguyện vọng ưu tiên cao nhất trong danh sách các nguyện vọng đã đăng ký, khi đã trúng tuyển ở nguyện vọng nào thì không được xét tuyển tiếp ở nguyện vọng sau. Do vậy khi em đã trúng tuyển ở NV1 ngành An toàn thông tin thì NV2 không được xét tuyển nữa.",
    },
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-red-600 font-semibold tracking-wider uppercase">
            TUYỂN SINH
          </p>
          <h2 className="text-4xl font-bold text-gray-800 mt-2">
            Câu hỏi thường gặp
          </h2>
        </div>

        <div className="mx-auto max-w-3xl">
          {data.map((item, index) => (
            <div
              key={item.id}
              className="mb-4 overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm"
            >
              <button
                className={`flex w-full cursor-pointer items-start justify-between gap-4 p-4 text-left transition-all duration-300 ease-in-out hover:bg-slate-50 md:p-6 ${
                  activeIndex === index ? "bg-slate-50" : ""
                }`}
                onClick={() => toggleAccordion(index)}
              >
                <span
                  className={`flex-1 text-base font-medium text-slate-700 transition-colors ${
                    activeIndex === index ? "!font-semibold !text-red-600" : ""
                  }`}
                >
                  {item.question}
                </span>
                <svg
                  className={`mt-1 h-6 w-6 flex-shrink-0 text-slate-500 transition-transform duration-300 ${
                    activeIndex === index ? "rotate-45 text-red-600" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  activeIndex === index ? "max-h-[1000px]" : "max-h-0"
                }`}
              >
                <div className="border-t border-slate-200 p-4 md:p-6">
                  <p className="text-base leading-relaxed text-slate-600">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a href="gioi-thieu/cau-hoi-thuong-gap">
            <button className="rounded-md bg-red-700 px-8 py-3 text-base font-medium text-white shadow-md shadow-red-700/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-red-700/30">
              Xem thêm
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
