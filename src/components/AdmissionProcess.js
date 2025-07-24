import React from 'react';
import '../style/AdmissionProcess.css';

const AdmissionProcess = () => {
  const processSteps = [
    {
      step: "B1",
      title: "Đăng ký tài khoản",
      description: "Đăng ký tài khoản trên hệ thống",
      hasLink: true,
      linkText: "https://xettuyen.ptit.edu.vn",
      linkUrl: "https://xettuyen.ptit.edu.vn",
      afterLink: " với địa chỉ email hoặc tài khoản Google, Facebook",
      number: "1"
    },
    {
      step: "B2", 
      title: "Khai báo thông tin",
      description: "Thí sinh thực hiện khai báo hồ sơ xét tuyển theo Thông báo tuyển sinh của Học viện với 4 phương thức xét tuyển: Xét tuyển tài năng, Xét tuyển dựa vào kết quả Chứng chỉ đánh giá năng lực quốc tế (Chứng chỉ SAT/ACT), Xét tuyển kết hợp, Xét tuyển dựa vào kết quả bài thi đánh giá năng lực hoặc đánh giá tư duy.",
      hasLink: false,
      number: "2"
    },
    {
      step: "B3",
      title: "Đăng ký nguyện vọng", 
      description: "Thí sinh thực hiện đăng ký nguyện vọng xét tuyển trên hệ thống. Mỗi thí sinh được đăng ký tối đa 5 nguyện vọng.",
      hasLink: false,
      number: "3"
    },
    {
      step: "B4",
      title: "Thanh toán trực tuyến",
      description: "Thí sinh thực hiện thanh toán Lệ phí xét tuyển. Thí sinh có thể sử dụng phương thức thanh toán qua Mã định danh hoặc Mã QR.",
      hasLink: false,
      number: "4"
    }
  ];

  return (
    <section className="admission-process-section">
      <div className="container">
        <div className="section-header">
          <div className="section-line"></div>
          <p className="section-subtitle">GIỚI THIỆU</p>
          <h2 className="section-title">Quy trình nộp hồ sơ trực tuyến</h2>
        </div>

        <div className="process-grid">
          {processSteps.map((step, index) => (
            <div key={index} className="process-card">
              <div className="process-number">
                {step.number}
              </div>
              <div className="process-content">
                <h3 className="process-step">
                  {step.step}: {step.title}
                </h3>
                <p className="process-description">
                  {step.description}
                  {step.hasLink && (
                    <>
                      {" "}
                      <a 
                        href={step.linkUrl}
                        target="_blank" 
                        rel="noopener noreferrer"
                        style={{ 
                          color: '#dc2626', 
                          textDecoration: 'none', 
                          fontWeight: '600' 
                        }}
                        onMouseEnter={(e) => e.target.style.textDecoration = 'underline'}
                        onMouseLeave={(e) => e.target.style.textDecoration = 'none'}
                      >
                        {step.linkText}
                      </a>
                      {step.afterLink && step.afterLink}
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

export default AdmissionProcess;
