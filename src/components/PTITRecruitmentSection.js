
import '../style/PTITRecruitmentSection.css'

const ArrowRightIcon = () => (
  <svg
    className="arrow-icon"
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

const PTITRecruitmentSection = () => {
  return (
    <section className="ptit-recruitment-section">
      <div className="recruitment-container">
        <div className="recruitment-grid">
          {/* Left Side - Red Background with Content */}
          <div className="content-side">
            <div className="content-inner">
              <h1 className="main-heading">
                Tham gia ngay xét tuyển
              </h1>
              <p className="sub-heading">
                Trở thành 1 thành viên của PTIT, bạn sẽ biết thêm được về
              </p>
              
              <div className="features-list">
                <div className="feature-item">
                  <div className="checkmark-icon">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                  </div>
                  <p>02 cơ sở đào tạo: Hà Nội và Thành phố Hồ Chí Minh</p>
                </div>
                
                <div className="feature-item">
                  <div className="checkmark-icon">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                  </div>
                  <p>24 ngành/chương trình đào tạo đại học chất lượng cao, 05 chương trình Chất lượng cao.</p>
                </div>
                
                <div className="feature-item">
                  <div className="checkmark-icon">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                  </div>
                  <p>Học bổng lên đến 500 triệu đồi với các thí sinh tham dự kỳ thi chọn đội tuyển quốc gia dự thi Olympic quốc tế, thí sinh đạt giải Nhất, Nhì, Ba trong kỳ thi chọn học sinh giỏi quốc gia các môn Toán, Lý và Tin học.</p>
                </div>
              </div>
              
              <button className="cta-btn">
                Nộp hồ sơ trực tuyến
                <ArrowRightIcon />
              </button>
            </div>
          </div>
          
          {/* Right Side - Infographic Image */}
          <div className="image-side">
            <img 
              src="/images/thamgiaxettuyen.png" 
              alt="Trở thành một PTITer - Bạn có những cơ hội gì?" 
              className="infographic-img"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PTITRecruitmentSection;