import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ptit from "../../assets/images/ptit.jpg";
import { Lock, User } from "lucide-react";

const DangNhap = () => {
  const [cccd, setCccd] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegisterClick = (e) => {
    e.preventDefault();
    navigate("/dang-ky");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:8081/api/student/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          citizenId: cccd,
          password: password,
        }),
      });
      const data = await res.json();
      if (data.success && data.user) {
        localStorage.setItem("studentUser", JSON.stringify(data.user));
        localStorage.setItem("isStudentAuthenticated", "true");
        navigate("/nop-ho-so");
        // Tách họ đệm và tên từ fullName (nếu cần)
        // const [hoDem, ...tenArr] = (data.user.fullName || "").split(" ");
        // const ten = tenArr.join(" ");
        // navigate("/thong-tin-ca-nhan", {
        //   state: {
        //     student: {
        //       cccd: data.user.citizenId,
        //       hoDem: hoDem,
        //       ten: ten,
        //       email: data.user.email,
        //     },
        //   },
        // });
      } else {
        alert(data.message || "Đăng nhập thất bại!");
      }
    } catch (error) {
      alert("Có lỗi xảy ra khi đăng nhập!");
    }
  };

  return (
    <div className="flex min-h-screen">
      <div className="w-3/5 relative">
        <img src={ptit} alt="PTIT" className="w-full h-full object-cover" />
      </div>

      <div className="w-2/5 flex items-center justify-center bg-white p-10">
        <div className="w-full max-w-md">
          <div className="mb-8 text-center">
            <h2 className="text-xl font-semibold text-gray-800 ml-3 whitespace-nowrap">
              HỌC VIỆN CÔNG NGHỆ BƯU CHÍNH VIỄN THÔNG
            </h2>
            <h1 className="text-2xl font-bold text-red-600 mt-2">
              HỆ THỐNG XÉT TUYỂN TRỰC TUYẾN
            </h1>
          </div>

          <form className="space-y-5" onSubmit={handleSubmit}>
            <div>
              <label className="block text-gray-700 mb-1">Tên đăng nhập</label>
              <div className="flex items-center border border-gray-300 rounded px-3 py-2">
                <User className="w-4 h-4 text-gray-400 mr-2" />
                <input
                  name="cccd"
                  type="text"
                  required
                  className="w-full outline-none"
                  placeholder="Căn cước công dân"
                  value={cccd}
                  onChange={(e) => setCccd(e.target.value)}
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-gray-700 mb-1">
                Mật khẩu
              </label>
              <div className="flex items-center border border-gray-300 rounded px-3 py-2">
                <Lock className="w-4 h-4 text-gray-400 mr-2" />
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="w-full outline-none"
                  placeholder="Mật khẩu"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded"
            >
              Đăng nhập
            </button>

            <div className="text-center text-sm mt-3">
              <div className="text-red-500 hover:underline block mb-2">
                Quên mật khẩu ?
              </div>
              <span className="text-gray-600">
                Bạn chưa có tài khoản?{" "}
                <span
                  onClick={handleRegisterClick}
                  className="text-red-500 hover:underline cursor-pointer"
                >
                  Đăng ký
                </span>
              </span>
            </div>

            <div className="text-center text-xs text-gray-500 mt-10">
              Học viện Công nghệ Bưu chính Viễn thông
              <br />© 2025 PTIT
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DangNhap;
