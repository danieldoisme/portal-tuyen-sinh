import { useNavigate } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";

const data = [
  {
    date: "07/06/2025",
    title: "Công khai báo cáo thường niên 2023",
  },
  {
    date: "05/11/2024",
    title: "THÔNG BÁO: Về việc Công khai thông tin đào tạo năm học 2022-2023",
  },
  {
    date: "03/11/2021",
    title: "Ba công khai năm học năm 2021-2022",
  },
  {
    date: "03/10/2020",
    title: "Ba công khai năm học 2020 – 2021",
  },
  {
    date: "22/10/2019",
    title: "Ba công khai năm học 2019-2020",
  },
  {
    date: "06/10/2018",
    title: "Ba công khai năm học 2018-2019",
  },
];

const BaCongKhai = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white min-h-screen">
      <div className="relative bg-[#600909] text-white py-10 overflow-hidden">
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="flex items-center justify-center gap-2 text-sm mb-2 text-white">
            <Home size={14} className="inline-block" />
            <ChevronRight size={12} className="inline-block" />
            <span className="text-white">Giới thiệu</span>
            <ChevronRight size={12} className="inline-block" />
            <span className="text-white font-medium">Ba công khai</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold">Ba công khai</h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {data.map((item, idx) => (
            <div
              key={idx}
              className="flex bg-white rounded-xl shadow border hover:shadow-lg transition duration-200"
            >
              <div className="min-w-[110px] p-4 flex items-center justify-center">
                <img
                  src="https://tuyensinh.ptit.edu.vn/wp-content/images/empty.png"
                  alt="PTIT"
                  className="w-20 h-20 rounded-full object-cover"
                />
              </div>
              <div className="py-4 pr-4 flex flex-col justify-center">
                <div className="flex items-center text-gray-500 text-sm mb-1">
                  <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
                  {item.date}
                </div>
                <div className="text-base font-semibold text-gray-900 leading-snug">
                  {item.title}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BaCongKhai;
