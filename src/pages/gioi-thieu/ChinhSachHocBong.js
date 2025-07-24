import { Home,ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ChinhSachHocBong = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
          {/* Hero Banner */}
      <div className="relative bg-[#600909] text-white py-10 overflow-hidden">

        <div className="container mx-auto px-4 text-center relative z-10">
          {/* Breadcrumb */}
          <div className="flex items-center justify-center gap-2 text-sm mb-2 text-white">
            <Home size={14} className="inline-block" />
             <ChevronRight size={12} className="inline-block" />
            <span className="text-white">Giới thiệu</span>
            <ChevronRight size={12} className="inline-block" />
            <span className="text-white font-medium">Chính sách học bổng</span>
          </div>
          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-bold">Chính sách học bổng</h1>
        </div>
      </div>


      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">

         <h2 className="mt-10 text-2xl md:text-3xl font-bold text-gray-800 mb-8 border-l-4 border-red-600 pl-4">
            Học viện Công nghệ Bưu chính Viễn thông thực hiện chính sách học bổng đặc biệt lên tới 500 triệu đồng/suất học bổng
          </h2>

        <div className="text-base text-gray-700 leading-relaxed space-y-4"></div>
          <p>Ngày 06/03/2024, Học viện Công nghệ Bưu chính Viễn (Học viện) đã công bố phương thức tuyển sinh năm 2024. Theo đó, cùng với những thông tin về chỉ tiêu, ngành, chương trình đào tạo, phương thức tuyển sinh, Học viện cũng công bố chính sách học bổng đặc biệt dành cho các thí sinh trúng tuyển trong kỳ tuyển sinh đại học hệ chính quy năm 2024. Học viện sẽ cấp tối đa 30 suất học bổng đặc biệt, giá trị mỗi suất tới 500 triệu đồng cho mỗi thí sinh xuất sắc trúng tuyển và nhập học vào Học viện.</p>

          <p>Đối tượng xét cấp học bổng đặc biệt là các thí sinh tham dự kỳ thi chọn đội tuyển quốc gia dự thi Olympic quốc tế, thí sinh đạt giải Nhất, Nhì, Ba trong kỳ thi chọn học sinh giỏi quốc gia các môn Toán, Lý, Hóa và Tin học; thí sinh có điểm thi tốt nghiệp THPT từ 29,0 điểm trở lên. Ngoài ra, người được nhận học bổng còn phải đảm bảo điểm trung bình chung tích lũy năm học liên tục đạt từ loại Giỏi trở lên.</p>

          <p>Với học bổng đặc biệt này, thí sinh sẽ được miễn học phí toàn thời gian học, chi phí ăn ở, kinh phí nghiên cứu khoa học, thực tập ở nước ngoài, kinh phí hỗ trợ từ doanh nghiệp đối tác và các hỗ trợ khác.</p>

          <p>Bên cạnh đó, Học viện tiếp duy trì Học bổng khuyến khích với tổng giá trị học bổng trung bình khoảng 8 tỷ đồng/năm cho các thí sinh đạt thành tích cao (đạt giải học sinh giỏi cấp quốc tế, cấp quốc gia, cấp Tỉnh/Thành phố trực thuộc Trung ương) hoặc đạt kết quả cao trong kỳ thi tốt nghiệp THPT nhưng chưa đủ để nhận học bổng đặc biệt với 2 mức: mức 1 miễn 100% và mức 2 miễn 50% học phí trong năm học thứ nhất.</p>

          <p>Học viện đã và đang hợp tác với mạng lưới nhiều doanh nghiệp uy tín trong và ngoài nước như: Samsung Việt Nam, OCG, Nissan, Cowell… Các doanh nghiệp đối tác luôn đồng hành cùng Học viện trong quá trình khuyến khích, động viên và hỗ trợ học tập cho sinh viên ưu tú. Cùng với việc cấp các chương trình học bổng có giá trị, các doanh nghiệp còn có thêm cơ chế, chính sách tuyển dụng dành cho những sinh viên xuất sắc. Trong quá trình học tại Học viện, sinh viên có cơ hội tham quan, thực tế, tìm hiểu về doanh nghiệp; gặp gỡ, giao lưu với các nhà tuyển dụng, giúp sinh viên hiểu được yêu cầu của thị trường lao động và văn hoá doanh nghiệp. Hoạt động trải nghiệm thực tế tại doanh nghiệp song hành với thụ hưởng các nguồn học bổng từ các doanh nghiệp cũng góp phần thu hút sinh viên giỏi theo học tại Học viện.</p>

          <p>Thu hút thí sinh xuất sắc bằng chính sách học bổng đặc biệt không chỉ là bước đi đúng đắn của Học viện trong thực hiện phương châm đào tạo “Lấy người học làm trung tâm”, hướng đến đào tạo nguồn nhân lực chất lượng cao phục vụ cho xã hội. Chính sách học bổng đặc biệt của Học viện còn tạo thêm cơ hội, chắp cánh ước mơ để các thí sinh nghèo, có hoàn cảnh khó khăn tiếp tục nuôi dưỡng khát vọng nghề nghiệp, tự tin chinh phục những tầm cao tri thức mới.</p>

          <p>Trong kỳ tuyển sinh đại học chính quy 2024, Học viện Công nghệ Bưu chính Viễn thông tuyển sinh 5200 chỉ tiêu tại hai cơ sở đào tạo Hà Nội và Thành phố Hồ Chí Minh. Cùng với đó, Học viện dự kiến mở và tuyển sinh thêm các ngành, chương trình đào tạo mới: Quan hệ công chúng; Thiết kế và phát triển game; Công nghệ thông tin Việt - Nhật.</p>

          <p>Mọi thông tin về tuyển sinh đại học chính quy 2024 xem tại: 
            <a href="https://ptit.edu.vn" target="_blank" rel="noopener noreferrer"> ptit.edu.vn</a>, 
            <a href="https://tuyensinh.ptit.edu.vn" target="_blank" rel="noopener noreferrer"> tuyensinh.ptit.edu.vn</a>, 
            <a href="https://www.facebook.com/HocvienPTIT/" target="_blank" rel="noopener noreferrer"> facebook.com/HocvienPTIT</a>
          </p>

        </div>
      </div>
    </div>
  );
};

export default ChinhSachHocBong;
