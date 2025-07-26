import { Home, ChevronRight } from "lucide-react";

const TongQuanHocVien = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="relative bg-[#600909] text-white py-10 overflow-hidden">
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="flex items-center justify-center gap-2 text-sm mb-2 text-white">
            <Home size={14} className="inline-block" />
            <ChevronRight size={12} className="inline-block" />
            <span className="text-white">Giới thiệu</span>
            <ChevronRight size={12} className="inline-block" />
            <span className="text-white font-medium">Tổng quan học viện</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold">Tổng quan học viện</h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="mt-10 text-2xl md:text-3xl font-bold text-gray-800 mb-8 border-l-4 border-red-600 pl-4">
            Học viện Công nghệ Bưu chính Viễn thông
          </h2>

          <div className="text-base text-gray-700 leading-relaxed space-y-4">
            <p>
              Học viện Công nghệ Bưu chính Viễn thông được thành lập theo quyết
              định số 516/TTg của Thủ tướng Chính phủ ngày 11 tháng 7 năm 1997
              trên cơ sở sắp xếp lại 4 đơn vị thành viên thuộc Tổng Công ty Bưu
              chính Viễn thông Việt Nam, nay là Tập đoàn Bưu chính Viễn thông
              Việt Nam là Viện Khoa học Kỹ thuật Bưu điện, Viện Kinh tế Bưu
              điện, Trung tâm đào tạo Bưu chính Viễn thông 1 và 2. Các đơn vị
              tiền thân của Học viện là những đơn vị có bề dày lịch sử hình
              thành và phát triển với xuất phát điểm từ Trường Đại học Bưu điện
              1953.
            </p>
            <p>
              Từ ngày 1/7/2014, thực hiện Quyết định của Thủ tướng Chính phủ, Bộ
              trưởng Bộ Thông tin và Truyền thông đã ban hành Quyết định số
              878/QĐ-BTTTT điều chuyển quyền quản lý Học viện từ Tập đoàn Bưu
              chính Viễn thông Việt Nam về Bộ Thông tin và Truyền thông. Học
              viện Công nghệ Bưu chính Viễn thông là đơn vị sự nghiệp trực thuộc
              Bộ. Là trường đại học, đơn vị nghiên cứu, phát triển nguồn nhân
              lực trọng điểm của Ngành Thông tin và Truyền thông.
            </p>
            <p>
              Với vị thế là đơn vị đào tạo, nghiên cứu trọng điểm, chủ lực của
              Ngành Thông tin và Truyền thông Việt Nam, là trường đại học trọng
              điểm quốc gia trong lĩnh vực ICT, những thành tựu trong gắn kết
              giữa Nghiên cứu - Đào tạo - Sản xuất kinh doanh năng lực, quy mô
              phát triển của Học viện hôm nay, Học viện sẽ có những đóng góp
              hiệu quả phục vụ sự phát triển chung của Ngành Thông tin và truyền
              thông và sự nghiệp xây dựng, bảo vệ tổ quốc, góp phần để đất nước,
              để Ngành Thông tin và truyền thông Việt Nam có sự tự chủ, độc lập
              về khoa học công nghệ và nguồn nhân lực, qua đó tự tin cạnh tranh
              với các đối thủ lớn và sánh vai với các cường quốc trên thế giới.
            </p>
            <p>
              Là trường Đại học, đơn vị nghiên cứu, phát triển nguồn nhân lực
              trọng điểm của Ngành Thông tin và Truyền thông. Học viện sẽ có
              những đóng góp hiệu quả phục vụ sự phát triển chung của Ngành và
              sự nghiệp xây dựng, bảo vệ tổ quốc.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TongQuanHocVien;
