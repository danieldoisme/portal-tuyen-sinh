import { useParams } from "react-router-dom";
import { Home, ChevronRight } from "lucide-react";

const diemData = {
  2024: {},
  2023: {},
  2022: {},
  2021: {},
  2020: {},
};

const DiemTrungTuyen = () => {
  const { year } = useParams();
  const data = diemData[year];

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
    <div className="min-h-screen bg-white">
      <div className="relative bg-[#600909] text-white py-10 overflow-hidden">
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="flex items-center justify-center gap-2 text-sm mb-2 text-white">
            <Home size={14} className="inline-block" />
            <ChevronRight size={12} className="inline-block" />
            <span className="text-white">Giới thiệu</span>
            <ChevronRight size={12} className="inline-block" />
            <span className="text-white">Xem điểm các năm trước</span>
            <ChevronRight size={12} className="inline-block" />
            <span className="text-white font-medium">
              Điểm trúng tuyển {year}
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold">
            Điểm trúng tuyển {year}
          </h1>
        </div>
      </div>

      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-4 text-gray-800 border-l-4 border-red-600 pl-4">
          {data.title}
        </h1>
        <p className="text-gray-700 leading-relaxed">{data.content}</p>
      </div>
    </div>
  );
};

export default DiemTrungTuyen;
