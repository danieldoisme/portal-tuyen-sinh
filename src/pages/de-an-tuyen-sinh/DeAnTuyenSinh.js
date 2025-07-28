import { useParams } from "react-router-dom";
import { Home, ChevronRight } from "lucide-react";
import { useEffect, useState, useRef } from "react";

const deAnTuyenSinhData = {
  2025: {
    title: "Thông tin tuyển sinh đại học chính quy năm 2025",
    content: `
I. THÔNG TIN CHUNG

1. Tên cơ sở đào tạo: HỌC VIỆN CÔNG NGHỆ BƯU CHÍNH VIỄN THÔNG
2. Mã cơ sở đào tạo trong tuyển sinh: BVH và BVS
3. Địa chỉ các trụ sở (trụ sở chính và cơ sở đào tạo):
TRỤ SỞ CHÍNH
122 Hoàng Quốc Việt, Phường Nghĩa Đô, Quận Cầu Giấy, Tp. Hà Nội
CƠ SỞ ĐÀO TẠO PHÍA BẮC (BVH)
Km 10 Đường Nguyễn Trãi, Phường Mộ Lao, Quận Hà Đông, Tp. Hà Nội
CƠ SỞ ĐÀO TẠO PHÍA NAM (BVS)
Số 11 Nguyễn Đình Chiểu, Phường ĐaKao, Quận 1, Tp. Hồ Chí Minh
4. Địa chỉ trang thông tin điện tử:
Cổng thông tin điện tử: https://ptit.edu.vn
Cổng thông tin đào tạo: https://daotao.ptit.edu.vn
Cổng thông tin tuyển sinh: https://tuyensinh.ptit.edu.vn
Địa chỉ các trang mạng xã hội của cơ sở đào tạo (có thông tin tuyển sinh):
Trang fanpage tuyển sinh: https://facebook.com/ptittuyensinh
Trang fanpage Học viện: https://facebook.com/HocvienPTIT
Trang Zalo: Học viện Công nghệ Bưu chính Viễn thông (ID 1260203497642986925)
5. Số điện thoại liên hệ tuyển sinh:
CƠ SỞ ĐÀO TẠO PHÍA BẮC (BVH):
ĐT: (024) 33528122, (024) 33512252
CƠ SỞ ĐÀO TẠO PHÍA NAM (BVS)
ĐT: (028) 38297220; Fax: (028) 39105510
6. Địa chỉ công khai quy chế tuyển sinh, đề án tuyển sinh:
Cổng thông tin điện tử: https://ptit.edu.vn
Cổng thông tin tuyển sinh: https://tuyensinh.ptit.edu.vn
7. Địa chỉ công khai các thông tin về hoạt động của cơ sở đào tạo:
Cổng thông tin điện tử: https://ptit.edu.vn
Cổng thông tin tuyển sinh: https://tuyensinh.ptit.edu.vn

II. TUYỂN SINH ĐÀO TẠO CHÍNH QUY

1. Đối tượng tuyển sinh
1.1. Quy định chung: Tốt nghiệp THPT hoặc tương đương; có đủ sức khỏe; đáp ứng quy chế của Bộ GD&ĐT và Học viện.
1.2. Phương thức 1 - Xét tuyển tài năng: yêu cầu thêm giải thưởng quốc gia/quốc tế, học sinh chuyên, học lực khá giỏi, điểm học tập ≥ 7.5, hạnh kiểm Khá.
1.3. Phương thức 2 - Chứng chỉ SAT ≥ 1130 hoặc ACT ≥ 25 trong 2 năm gần nhất.
1.4. Phương thức 3 - Kết quả thi ĐGNL/ĐGTD:
- APT ĐHQG HCM ≥ 600 điểm
- SPT ĐHSPHN ≥ 15 điểm
- TSA ĐHBKHN ≥ 50 điểm
- HSA ĐHQGHN ≥ 75 điểm
1.5. Phương thức 4 - Kết hợp IELTS ≥ 5.5 hoặc TOEFL iBT ≥ 65 hoặc ITP ≥ 513 với học lực khá giỏi, điểm TB ≥ 7.5.
1.6. Phương thức 5 - Kết quả thi tốt nghiệp THPT 2025.

2. Mô tả các phương thức tuyển sinh: Giải thích chi tiết cho từng phương thức 1 đến 5 như trên.

3. Ngưỡng đầu vào và quy đổi:
- PT5: công bố sau khi có kết quả thi THPT
- PT1-PT4: ngưỡng là điều kiện dự tuyển theo mô tả.
- Quy đổi điểm: theo hướng dẫn Bộ GD&ĐT, công bố cùng thời điểm với ngưỡng đầu vào.`,
  },
  2024: {
    title: "Thông tin tuyển sinh đại học chính quy năm 2024",
    content: `
I. THÔNG TIN CHUNG

1. Tên cơ sở đào tạo: HỌC VIỆN CÔNG NGHỆ BƯU CHÍNH VIỄN THÔNG
2. Mã cơ sở đào tạo trong tuyển sinh: BVH và BVS
3. Địa chỉ các trụ sở:
- TRỤ SỞ CHÍNH: 122 Hoàng Quốc Việt, Phường Nghĩa Đô, Quận Cầu Giấy, Tp. Hà Nội
- CƠ SỞ PHÍA BẮC (BVH): Km 10 Đường Nguyễn Trãi, Phường Mộ Lao, Quận Hà Đông, Tp. Hà Nội
- CƠ SỞ PHÍA NAM (BVS): Số 11 Nguyễn Đình Chiểu, Phường Đa Kao, Quận 1, Tp. Hồ Chí Minh
4. Địa chỉ các trang thông tin điện tử:
- https://ptit.edu.vn
- https://daotao.ptit.edu.vn
- https://tuyensinh.ptit.edu.vn
5. Mạng xã hội:
- Facebook Tuyển sinh: https://facebook.com/ptittuyensinh
- Học viện: https://facebook.com/HocvienPTIT
- Zalo (ID 1260203497642986925)
6. Liên hệ tuyển sinh:
- BVH: (024) 33528122, (024) 33512252
- BVS: (028) 38297220; Fax: (028) 39105510
7. Công khai đề án, quy chế, thông tin hoạt động: tại các cổng thông tin nêu trên.

II. TUYỂN SINH ĐÀO TẠO CHÍNH QUY

1. Đối tượng tuyển sinh: Tốt nghiệp THPT hoặc tương đương; có đủ sức khỏe; đáp ứng quy chế của Bộ GD&ĐT và Học viện.
2. Phương thức tuyển sinh:
2.1. Phương thức 1 - Xét tuyển học sinh giỏi
2.2. Phương thức 2 - Xét tuyển kết quả chứng chỉ SAT/ACT
2.3. Phương thức 3 - Xét tuyển kết quả thi đánh giá năng lực
2.4. Phương thức 4 - Xét tuyển kết hợp chứng chỉ ngoại ngữ quốc tế
2.5. Phương thức 5 - Xét tuyển kết quả thi tốt nghiệp THPT 2024`,
  },
};

const DeAnTuyenSinh = () => {
  const { year } = useParams();
  const data = deAnTuyenSinhData[year];
  const [toc, setToc] = useState([]);
  const sectionRefs = useRef({});
  const [activeId, setActiveId] = useState(null);

  useEffect(() => {
    const headers = [];
    sectionRefs.current = {};
    data.content.split("\n").forEach((line) => {
      const match = line.match(/^(I{1,3}\.)\s+(.*)/);
      if (match) {
        const id = match[1].replace(/\./g, "-");
        headers.push({ id, text: match[0] });
      }
    });
    setToc(headers);
  }, [data]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-50% 0% -50% 0%" }
    );
    Object.values(sectionRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref);
    });
    return () => observer.disconnect();
  }, [toc]);

  const formatContent = (text) => {
    return text.split("\n").map((line, idx) => {
      const headingMatch = line.match(/^(I{1,3}\.|\d+(\.\d+)?\.)\s+(.*)/);
      if (headingMatch) {
        const id = headingMatch[1].replace(/\./g, "-");
        const level = headingMatch[1].match(/^I{1,3}\./) ? "h2" : "h3";
        return (
          <div
            key={idx}
            id={id}
            ref={(el) => (sectionRefs.current[id] = el)}
            className="scroll-mt-24"
          >
            {level === "h2" ? (
              <h2 className="text-2xl font-bold text-red-700 mt-8 mb-2">
                {line}
              </h2>
            ) : (
              <h3 className="text-lg font-semibold text-gray-800 mt-4">
                {line}
              </h3>
            )}
          </div>
        );
      }
      if (/^[-•]/.test(line.trim())) {
        return (
          <li key={idx} className="list-disc ml-6 text-gray-700">
            {line.replace(/^[-•]\s*/, "")}
          </li>
        );
      }
      if (/^https?:\/\//.test(line.trim())) {
        return (
          <p key={idx} className="text-blue-600 underline">
            <a href={line.trim()} target="_blank" rel="noopener noreferrer">
              {line.trim()}
            </a>
          </p>
        );
      }
      return (
        <p key={idx} className="text-gray-700 mb-1">
          {line}
        </p>
      );
    });
  };

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center text-center">
        <div>
          <h1 className="text-3xl font-bold text-red-600">404</h1>
          <p className="text-gray-600">
            Không tìm thấy dữ liệu điểm trúng tuyển cho năm {year}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white scroll-smooth">
      <div className="relative bg-[#600909] text-white py-10 overflow-hidden">
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="flex items-center justify-center gap-2 text-sm mb-2">
            <Home size={14} className="inline-block" />
            <ChevronRight size={12} className="inline-block" />
            <span className="font-medium">Đề án tuyển sinh {year}</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold">
            Đề án tuyển sinh {year}
          </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-10 px-4 flex gap-8">
        <aside className="w-1/4 sticky top-24 h-max hidden lg:block border-r pr-4">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Mục lục</h2>
          <ul className="list-disc ml-4 space-y-2 text-blue-700 text-sm">
            {toc.map((item, idx) => (
              <li key={idx}>
                <a
                  href={`#${item.id}`}
                  className={`hover:underline block ${
                    activeId === item.id ? "font-bold text-red-600" : ""
                  }`}
                >
                  {item.text}
                </a>
              </li>
            ))}
          </ul>
        </aside>

        <div className="w-full lg:w-3/4 space-y-2">
          <h1 className="text-3xl font-bold mb-6 text-gray-800 border-l-4 border-red-600 pl-4">
            {data.title}
          </h1>
          {formatContent(data.content)}
        </div>
      </div>
    </div>
  );
};

export default DeAnTuyenSinh;
