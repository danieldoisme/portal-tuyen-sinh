
import { useNavigate } from 'react-router-dom';
import { Home,ChevronRight } from 'lucide-react';
import FAQSection from '../components/FAQSection';

const CauHoiThuongGap = () => {
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
            <span className="text-white font-medium">Câu hỏi thường gặp</span>
          </div>
          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-bold">Câu hỏi thường gặp</h1>
        </div>
      </div>


      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto prose prose-lg text-gray-700 space-y-6">
          <FAQSection />
        </div>
      </div>
    </div>
  );
};

export default CauHoiThuongGap;
