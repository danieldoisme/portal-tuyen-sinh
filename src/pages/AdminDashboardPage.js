import { Link } from "react-router-dom";

const AdminDashboardPage = () => {
  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-2 text-gray-800">Trang quản trị</h1>
      <p className="text-lg text-gray-600 mb-8">
        Chào mừng đến với trang quản lý.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Link
          to="/admin/applications"
          className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
        >
          <h2 className="text-xl font-bold text-gray-800 mb-2">
            Duyệt hồ sơ sinh viên
          </h2>
          <p className="text-gray-600">
            Xem, lọc và quản lý hồ sơ đăng ký xét tuyển của sinh viên.
          </p>
        </Link>

        <Link
          to="/admin/create-post"
          className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
        >
          <h2 className="text-xl font-bold text-gray-800 mb-2">
            Tạo bài viết mới
          </h2>
          <p className="text-gray-600">
            Soạn thảo và đăng tải các thông báo, tin tức và sự kiện mới.
          </p>
        </Link>

        {/* Placeholder for other admin functions */}
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-xl font-bold text-gray-800 mb-2">
            Các chức năng khác
          </h2>
          <p className="text-gray-600">
            Các công cụ quản lý khác sẽ được thêm vào trong tương lai.
          </p>
        </div>
      </div>
    </div>
  );
};
export default AdminDashboardPage;
