
import '../style/AdmissionTimeline.css'

const AdmissionTimeline = () => {
  const timelineData = [
    {
      step: "1",
      date: "16/7/2025",
      title: "THÍ SINH ĐĂNG KÝ, ĐIỀU CHỈNH NGUYỆN VỌNG XÉT TUYỂN"
    },
    {
      step: "2", 
      date: "29/7- 5/8/2025",
      title: "NỘP LỆ PHÍ XÉT TUYỂN TRỰC TUYẾN"
    },
    {
      step: "3",
      date: "22/8/2025", 
      title: "THÔNG BÁO THÍ SINH TRÚNG TUYỂN ĐỢT 1"
    },
    {
      step: "4",
      date: "30/8/2025",
      title: "HOÀN THÀNH XÁC NHẬN NHẬP HỌC TRỰC TUYẾN ĐỢT 1 TRÊN HỆ THỐNG"
    }
  ];

  return (
    <section className="admission-timeline-section">
      <div className="container">
        <div className="section-header">
          <div className="section-line"></div>
          <p className="section-subtitle">TUYỂN SINH</p>
          <h2 className="section-title">Cột mốc tuyển sinh</h2>
        </div>

        <div className="timeline-container">
          {timelineData.map((item, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-circle">
                <span className="timeline-number">{item.step}</span>
              </div>
              <div className="timeline-content">
                <div className="timeline-date">{item.date}</div>
                <div className="timeline-title">{item.title}</div>
              </div>
              {index < timelineData.length - 1 && (
                <div className="timeline-connector"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdmissionTimeline;