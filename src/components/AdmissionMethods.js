import React, { useState } from 'react';
import '../style/AdmissionMethods.css'

const AdmissionMethods = () => {
  const [activeTab, setActiveTab] = useState(0);

  const methodsData = [
    {
      id: 1,
      title: "Phương thức 1",
      subtitle: "Xét tuyển tài năng",
      content: [
        "Xét tuyển thẳng và ưu tiên xét tuyển: Học viện thực hiện xét tuyển thẳng và ưu tiên xét tuyển theo Quy chế tuyển sinh đại học của Bộ Giáo dục và Đào tạo (có thông báo chi tiết riêng)",
        "Xét tuyển dựa vào hồ sơ năng lực đối với các thí sinh có Thành tích đoạt giải trong kỳ thi chọn học sinh giỏi THPT cấp quốc gia (giải Khuyến khích), cấp Tỉnh/Thành phố trực thuộc TW (Nhất, Nhì, Ba và Khuyến khích), thời gian đoạt giải không quá 3 năm tính tới thời điểm xét tuyển hoặc là học sinh tại các trường THPT chuyên chuyên hoặc hệ chuyên thuộc các trường THPT trọng điểm quốc gia"
      ]
    },
    {
      id: 2,
      title: "Phương thức 2",
      subtitle: "Xét tuyển dựa vào kết quả Chứng chỉ đánh giá năng lực quốc tế (Chứng chỉ SAT/ACT)",
      content: [
        {
          type: "html",
          text: `Thí sinh đã được công nhận tốt nghiệp trung học phổ thông (THPT) <em>hoặc tương đương</em> và có <strong>Chứng chỉ đánh giá năng lực quốc tế SAT từ 1130/1600 trở lên hoặc ACT từ 25/36 trở lên</strong>, trong thời hạn 02 năm (tính đến ngày xét tuyển)`
        }
      ]
    },
    {
      id: 3,
      title: "Phương thức 3",
      subtitle: "Xét tuyển dựa vào kết quả bài thi đánh giá năng lực hoặc đánh giá tư duy",
      content: [
        "Thí sinh có điểm thi đánh giá năng lực của Đại học quốc gia Hà Nội năm 2025 từ 75 điểm trở lên",
        "Thí sinh có điểm thi đánh giá năng lực của Đại học quốc gia Hồ Chí Minh năm 2025 từ 600 điểm trở lên",
        "Thí sinh có điểm thi đánh giá tư duy của Đại học Bách khoa Hà Nội năm 2025 từ 50 điểm trở lên",
        "Thí sinh có điểm thi đánh giá năng lực của Trường Đại học Sư phạm Hà Nội (SPT) năm 2025 từ 15 điểm trở lên"
      ]
    },
    {
      id: 4,
      title: "Phương thức 4",
      subtitle: "Xét tuyển kết hợp",
      content: [
        "Thí sinh có Chứng chỉ tiếng Anh quốc tế trong thời hạn (tính đến ngày xét tuyển) đạt IELTS 5.5 trở lên hoặc TOEFL iBT 65 trở lên hoặc TOEFL ITP 513 trở lên và có kết quả điểm trung bình chung học tập lớp 10, 11, 12 đạt từ 7,5 trở lên và có hạnh kiểm Khá trở lên"
      ]
    },
    {
      id: 5,
      title: "Phương thức 5",
      subtitle: "Phương thức xét tuyển dựa vào kết quả thi tốt nghiệp THPT năm 2025",
      content: [
        "Xét tuyển theo ngành và theo tổ hợp bài thi/môn thi xét tuyển",
        "Điểm trúng tuyển của các tổ hợp bài thi/môn thi trong cùng một ngành là bằng nhau (không có điểm chênh lệch giữa các tổ hợp trong cùng một ngành)",
        "Xét trúng tuyển từ thí sinh có kết quả cao xuống và đảm bảo chất lượng tuyển sinh",
        "Xét tuyển các nguyện vọng bình đẳng (không có điểm chênh lệch giữa các nguyện vọng trong cùng một ngành), nếu thí sinh không trúng tuyển nguyện vọng ở thứ tự ưu tiên thứ nhất (nguyện vọng 1) thì sẽ được tự động xét tuyển ở nguyện vọng ưu tiên thứ hai (nguyện vọng 2) và kế tiếp",
        "Thí sinh chỉ trúng tuyển vào 1 nguyện vọng ưu tiên cao nhất trong danh sách các nguyện vọng đã đăng ký, khi đã trúng tuyển ở nguyện vọng nào thì không được xét tuyển tiếp ở nguyện vọng sau",
        "Điểm trúng tuyển được tính theo thang điểm 10 trên tổng điểm tối đa của 3 môn thi trong tổ hợp xét tuyển là 30 điểm",
        "Đối với các thí sinh bằng điểm xét tuyển ở cuối danh sách, nếu vẫn còn vượt chỉ tiêu thì ưu tiên thí sinh có nguyện vọng cao hơn theo Quy chế tuyển sinh của Bộ Giáo dục & Đào tạo, Học viện không sử dụng tiêu chí phụ riêng để xét tuyển",
        "Thí sinh trúng tuyển phải xác nhận nhập học trong thời gian quy định của Học viện. Nếu quá thời hạn này, thí sinh không xác nhận nhập học được xem là từ chối nhập học. Các điều kiện khác thực hiện theo Quy chế tuyển sinh đại học hệ chính quy hiện hành của Bộ Giáo dục và Đào tạo và của Học viện."
      ]
    }
  ];

  return (
    <section className="admission-methods-section">
      <div className="container">
        <div className="section-header">
          <div className="section-line"></div>
          <p className="section-subtitle">HỆ ĐẠI HỌC CHÍNH QUY</p>
          <h2 className="section-title">Phương thức xét tuyển</h2>
        </div>
        
        <div className="methods-wrapper">
          {/* Tabs Navigation - Full Width */}
          <div className="tabs-navigation">
            {methodsData.map((method, index) => (
              <button
                key={method.id}
                className={`tab-button ${activeTab === index ? 'active' : ''}`}
                onClick={() => setActiveTab(index)}
              >
                <svg className="tab-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2z"/>
                </svg>
                {method.title}
              </button>
            ))}
          </div>

          {/* Content Area with Image and Text */}
          <div className="methods-grid">
            {/* Left Side - Image */}
            <div className="methods-image">
              <img 
                src="/images/Phuongthuc.png" 
                alt="Công bố phương thức xét tuyển" 
                className="methods-graphic"
              />
            </div>

            {/* Right Side - Content */}
            <div className="methods-content">
              <div className="tab-content">
                <h3 className="content-title">
                  {methodsData[activeTab].subtitle}
                </h3>
                <div className="content-list">
                  {methodsData[activeTab].content.map((item, index) => (
                    <div key={index} className="content-item">
                      <svg className="content-bullet" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                      </svg>
                      <div className="content-text">
                        {typeof item === 'string' ? (
                          <p>{item}</p>
                        ) : (
                          <p dangerouslySetInnerHTML={{ __html: item.text }}></p>
                        )}
                      </div>
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

export default AdmissionMethods;