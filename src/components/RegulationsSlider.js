import React, { useState, useRef } from 'react';
import '../style/RegulatisonsSlider.css';

const regulationsData = [
  {
    title: 'Quy chế 1',
    description: 'Xét tuyển theo ngành và theo tổ hợp môn thi xét tuyển.',
  },
  {
    title: 'Quy chế 2',
    description: 'Điểm trúng tuyển của các tổ hợp môn thi trong cùng một ngành là bằng nhau.',
  },
  {
    title: 'Quy chế 3',
    description: 'Xét trúng tuyển từ thí sinh có kết quả cao xuống và đảm bảo chất lượng tuyển sinh.',
  },
  {
    title: 'Quy chế 4',
    description: 'Điểm trúng tuyển được tính theo thang điểm 10, tổng điểm tối đa của 3 bài thi trong tổ hợp xét tuyển là 30 điểm.',
  },
  {
    title: 'Quy chế 5',
    description: 'Xét tuyển các nguyện vọng bình đẳng theo kết quả thi (điểm trúng tuyển giữa các nguyện vọng là bằng nhau). Nếu thí sinh không trúng tuyển nguyện vọng ở thứ tự ưu tiên thứ nhất (nguyện vọng 1), hệ thống sẽ tự động xét tiếp ở nguyện vọng 2, 3... theo thứ tự đã đăng ký cho đến khi trúng tuyển hoặc hết nguyện vọng.',
  },
  {
    title: 'Quy chế 6',
    description: 'Học viện không sử dụng kết quả miễn thi bài thi môn ngoại ngữ và điểm thi được bảo lưu để xét tuyển.',
  },
];

const RegulationsSlider = () => {
  const sliderRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
    sliderRef.current.classList.add('active');
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
    sliderRef.current.classList.remove('active');
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    sliderRef.current.classList.remove('active');
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = x - startX;
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div className="slider-container-horizontal">
      <div className="section-header">
        <div className="section-line"></div>
        <p className="section-subtitle">TUYỂN SINH</p>
        <h2 className="slider-title">Quy chế - Quy định tuyển sinh</h2>
      </div>
      <div
        className="regulations-slider-horizontal"
        ref={sliderRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        {regulationsData.map((reg, index) => (
          <div className="regulation-card-horizontal" key={index}>
            <div className="card-icon">
              <img src="/images/Icon ptit.png" alt="PTIT Icon" />
            </div>
            <h3>{reg.title}</h3>
            <p>{reg.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RegulationsSlider;