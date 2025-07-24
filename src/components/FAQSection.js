import React, { useState } from 'react';
import '../style/FAQSection.css'

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    {
      id: 1,
      question: "Chào Thầy cô! Tôi là phụ huynh có con thi ĐH năm nay, GĐ muốn cho cháu đk vào ngành CNTT của HV. Vậy Thầy có cho hỏi nguyên tắc xét tuyển của HV năm nay ntn? Và HV có áp dụng tiêu chí phụ gì khi xét đối với các thí sinh đăng ký vào không? Tôi xin cảm ơn!",
      answer: "Chào Bác! Tổ tư vấn xin trả lời câu hỏi của Bác về nguyên tắc xét tuyển của HV như sau: I. Xét tuyển dựa vào kết quả thi THPT 2024: - Xét tuyển theo ngành và theo tổ hợp bài thi/môn thi xét tuyển; - Điểm trúng tuyển của các tổ hợp bài thi/môn thi trong cùng một ngành là bằng nhau (không có điểm chênh lệch giữa các tổ hợp trong cùng một ngành); - Xét trúng tuyển từ thí sinh có kết quả cao xuống và đảm bảo chất lượng tuyển sinh; - Xét tuyển các nguyện vọng bình đẳng (không có điểm chênh lệch giữa các nguyện vọng trong cùng một ngành), nếu thí sinh không trúng tuyển nguyện vọng ở thứ tự ưu tiên thứ nhất (nguyện vọng 1) thì sẽ được tự động xét tuyển ở nguyện vọng ưu tiên thứ hai (nguyện vọng 2) và kế tiếp; - Thí sinh chỉ trúng tuyển vào 1 nguyện vọng ưu tiên cao nhất trong danh sách các nguyện vọng đã đăng ký, khi đã trúng tuyển ở nguyện vọng nào thì không được xét tuyển tiếp ở nguyện vọng sau; - Điểm trúng tuyển được tính theo thang điểm 10 trên tổng điểm tối đa của 3 môn thi trong tổ hợp xét tuyển là 30 điểm; - Đối với các thí sinh bằng điểm xét tuyển ở cuối danh sách, nếu vẫn còn vượt chỉ tiêu thì ưu tiên thí sinh có nguyện vọng cao hơn theo Quy chế tuyển sinh của Bộ Giáo dục và Đào tạo, Học viện không sử dụng tiêu chí phụ riêng để xét tuyển; - Thí sinh trúng tuyển phải xác nhận nhập học trong thời gian quy định của Học viện. Nếu quá thời hạn này, thí sinh không xác nhận nhập học được xem là từ chối nhập học. - Các điều kiện khác thực hiện theo Quy chế tuyển sinh đại học hệ chính quy hiện hành của Bộ Giáo dục và Đào tạo và của Học viện."
    },
    {
      id: 2,
      question: "Câu hỏi thường gặp về tuyển sinh",
      answer: "Bạn đang gặp vấn đề gì?"
    },
    {
      id: 3,
      question: "Chương trình đào tạo tại miền Nam có khác với miền Bắc không?",
      answer: "Chương trình đào tạo của Học viện được áp dụng thống nhất ở cả 2 Cơ sở đào tạo Hà Nội và Tp. Hồ Chí Minh"
    },
    {
      id: 4,
      question: "Trường mình có 2 cơ sở, vậy sẽ phân bố học sinh như thế nào a?",
      answer: "Chi tiêu đào tạo của từng cơ sở đã được Học viện thông báo rõng rãi rồi em nhé, em có thể tìm hiểu kỹ thêm tại Cổng thông tin tuyển sinh của Học viện."
    },
    {
      id: 5,
      question: "Em đăng ký NV1 là ngành An toàn thông tin, NV2 là ngành CNTT nếu điểm thi của em đều đỗ vào cả 2 ngành thì em muốn học ngành CNTT mà ko học An toàn thông tin có dc ko a?",
      answer: "Không được em nhé! Theo nguyên tắc xét tuyển thì thí sinh chỉ trúng tuyển vào 1 nguyện vọng ưu tiên cao nhất trong danh sách các nguyện vọng đã đăng ký, khi đã trúng tuyển ở nguyện vọng nào thì không được xét tuyển tiếp ở nguyện vọng sau. Do vậy khi em đã trúng tuyển ở NV1 ngành An toàn thông tin thì NV2 không được xét tuyển nữa."
    }
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="container">
        <div className="section-header">
          <div className="section-line"></div>
          <p className="section-subtitle">TUYỂN SINH</p>
          <h2 className="section-title">Câu hỏi thường gặp</h2>
        </div>

        <div className="faq-container">
          {faqData.map((item, index) => (
            <div key={item.id} className="faq-item">
              <button
                className={`faq-question ${activeIndex === index ? 'active' : ''}`}
                onClick={() => toggleAccordion(index)}
              >
                <span className="question-text">{item.question}</span>
                <svg 
                  className={`toggle-icon ${activeIndex === index ? 'rotate' : ''}`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
                </svg>
              </button>
              
              <div className={`faq-answer ${activeIndex === index ? 'open' : ''}`}>
                <div className="answer-content">
                  <p>{item.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="view-more-container">
          <button className="view-more-btn">
            Xem thêm
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;