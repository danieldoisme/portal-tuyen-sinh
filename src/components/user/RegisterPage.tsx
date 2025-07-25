import ptitImg from "../assets/ptit.jpg";
import { Lock, User, Mail, IdCard } from "lucide-react";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  return (
    <div className="flex min-h-screen">
   
      <div className="w-3/5 relative">
        <img src={ptitImg} alt="PTIT" className="w-full h-full object-cover" />
      </div>


      <div className="w-2/5 flex items-center justify-center bg-white p-10">
        <div className="w-full max-w-md">

          <div className="mb-8 text-center">
            <h2 className="text-xl font-semibold text-gray-800 ml-1 whitespace-nowrap">
              HỌC VIỆN CÔNG NGHỆ BƯU CHÍNH VIỄN THÔNG
            </h2>
            <h1 className="text-3xl font-extrabold text-red-600 mt-2 uppercase">
              Đăng ký tài khoản
            </h1>
          </div>

          <form className="space-y-4">
    
            <div>
              <label className="block text-gray-700 mb-1">Email</label>
              <div className="flex items-center border border-gray-300 rounded px-3 py-2">
                <Mail className="w-4 h-4 text-gray-400 mr-2" />
                <input type="email" placeholder="Email" className="w-full outline-none" />
              </div>
            </div>

            <div>
              <label className="block text-gray-700 mb-1">Nhập lại Email</label>
              <div className="flex items-center border border-gray-300 rounded px-3 py-2">
                <Mail className="w-4 h-4 text-gray-400 mr-2" />
                <input type="email" placeholder="Nhập lại Email" className="w-full outline-none" />
              </div>
            </div>

 
            <div>
              <label className="block text-gray-700 mb-1">Số Căn cước công dân</label>
              <div className="flex items-center border border-gray-300 rounded px-3 py-2">
                <IdCard className="w-4 h-4 text-gray-400 mr-2" />
                <input type="text" placeholder="CCCD" className="w-full outline-none" />
              </div>
            </div>

     
            <div>
              <label className="block text-gray-700 mb-1">Nhập lại CCCD</label>
              <div className="flex items-center border border-gray-300 rounded px-3 py-2">
                <IdCard className="w-4 h-4 text-gray-400 mr-2" />
                <input type="text" placeholder="Nhập lại CCCD" className="w-full outline-none" />
              </div>
            </div>


            <div>
              <label className="block text-gray-700 mb-1">Mật khẩu</label>
              <div className="flex items-center border border-gray-300 rounded px-3 py-2">
                <Lock className="w-4 h-4 text-gray-400 mr-2" />
                <input type="password" placeholder="Mật khẩu" className="w-full outline-none" />
              </div>
            </div>

        
            <div>
              <label className="block text-gray-700 mb-1">Nhập lại mật khẩu</label>
              <div className="flex items-center border border-gray-300 rounded px-3 py-2">
                <Lock className="w-4 h-4 text-gray-400 mr-2" />
                <input type="password" placeholder="Nhập lại mật khẩu" className="w-full outline-none" />
              </div>
            </div>

      
            <div>
              <label className="block text-gray-700 mb-1">Họ đệm</label>
              <div className="flex items-center border border-gray-300 rounded px-3 py-2">
                <User className="w-4 h-4 text-gray-400 mr-2" />
                <input type="text" placeholder="Họ đệm" className="w-full outline-none" />
              </div>
            </div>


            <div>
              <label className="block text-gray-700 mb-1">Tên</label>
              <div className="flex items-center border border-gray-300 rounded px-3 py-2">
                <User className="w-4 h-4 text-gray-400 mr-2" />
                <input type="text" placeholder="Tên" className="w-full outline-none" />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded mt-4"
            >
              Đăng ký
            </button>

        
            <div className="text-center text-sm mt-4">
              <span className="text-gray-600">
                Đã có tài khoản?{" "}
                <Link to="/login" className="text-red-500 hover:underline">
                  Đăng nhập
                </Link>
              </span>
            </div>

      
            <div className="text-center text-xs text-gray-500 mt-10">
              Học viện Công nghệ Bưu chính Viễn thông
              <br />
              © 2025 PTIT
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
