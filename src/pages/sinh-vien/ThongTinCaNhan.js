import { useNavigate } from "react-router-dom";
import { User, Mail } from "lucide-react";

const ThongTinCaNhan = () => {
  const navigate = useNavigate();

  // Lấy thông tin sinh viên từ localStorage
  const student = JSON.parse(localStorage.getItem("studentUser"));

  if (!student) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="text-center">
          <p className="text-xl text-gray-700 mb-4">
            Không tìm thấy thông tin sinh viên.
          </p>
          <button
            onClick={() => navigate("/nop-ho-so")}
            className="bg-red-600 text-white font-medium py-2 px-6 rounded-lg hover:bg-red-700 transition-colors"
          >
            Quay lại
          </button>
        </div>
      </div>
    );
  }

  // Tách họ đệm và tên từ fullName nếu cần
  const [hoDem, ...tenArr] = (student.fullName || "").split(" ");
  const ten = tenArr.join(" ");

  const getInitials = (hoDem, ten) => {
    const hoDemInitial = hoDem ? hoDem.charAt(0) : "";
    const tenInitial = ten ? ten.charAt(0) : "";
    return `${hoDemInitial}${tenInitial}`.toUpperCase();
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center py-12 px-4">
      <div className="w-full max-w-5xl bg-white shadow-xl rounded-lg flex">
        {/* Left Sidebar */}
        <div className="w-1/3 bg-gray-50 p-8 border-r border-gray-200 flex flex-col items-center text-center">
          <div className="w-28 h-28 rounded-full bg-red-600 flex items-center justify-center text-white text-4xl font-bold mb-4">
            {getInitials(hoDem, ten)}
          </div>
          <h2 className="text-2xl font-bold text-gray-800">
            {`${hoDem} ${ten}`}
          </h2>
          <p className="text-gray-500 mb-6">{student.email}</p>
          <div className="space-y-3 text-left self-start w-full">
            <div className="flex items-center text-gray-600">
              <User className="w-4 h-4 mr-3" />
              <span>Thí sinh</span>
            </div>
            <div className="flex items-center text-gray-600">
              <Mail className="w-4 h-4 mr-3" />
              <span>{student.email}</span>
            </div>
          </div>
          <button
            onClick={() => navigate("/nop-ho-so")}
            className="mt-auto w-full bg-gray-200 text-gray-700 font-medium py-2 px-4 rounded-lg hover:bg-gray-300 transition-colors"
          >
            Quay lại
          </button>
        </div>

        {/* Right Content */}
        <div className="w-2/3 p-8">
          <h1 className="text-2xl font-bold text-gray-800 mb-8 border-b-2 border-red-600 pb-2 inline-block">
            Thông tin cá nhân
          </h1>

          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Số CMND/CCCD
              </label>
              <input
                type="text"
                name="cccd"
                value={student.citizenId}
                readOnly
                className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-100 text-gray-700"
              />
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Họ đệm
                </label>
                <input
                  type="text"
                  name="hoDem"
                  value={hoDem}
                  readOnly
                  className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-100 text-gray-700"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Tên
                </label>
                <input
                  type="text"
                  name="ten"
                  value={ten}
                  readOnly
                  className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-100 text-gray-700"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={student.email}
                readOnly
                className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-100 text-gray-700"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ThongTinCaNhan;
