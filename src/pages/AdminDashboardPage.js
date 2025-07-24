import { Link } from "react-router-dom";

const Card = ({ to, title, description, icon }) => (
  <Link
    to={to}
    className="block p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out group"
  >
    <div className="flex items-center mb-4">
      <div className="p-3 bg-red-100 rounded-full mr-4 group-hover:bg-red-200 transition-colors">
        {icon}
      </div>
      <h2 className="text-xl font-bold text-gray-800 group-hover:text-red-700 transition-colors">
        {title}
      </h2>
    </div>
    <p className="text-gray-600">{description}</p>
  </Link>
);

const AdminDashboardPage = () => {
  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10">
          <h1 className="text-4xl font-extrabold text-gray-900">
            Trang quản trị
          </h1>
          <p className="mt-2 text-lg text-gray-500">
            Chào mừng đến với trang quản lý hệ thống tuyển sinh.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card
            to="/admin/applications"
            title="Duyệt hồ sơ sinh viên"
            description="Xem, lọc và quản lý hồ sơ đăng ký xét tuyển của sinh viên."
            icon={
              <svg
                className="w-6 h-6 text-red-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                ></path>
              </svg>
            }
          />

          <Card
            to="/admin/create-post"
            title="Tạo bài viết mới"
            description="Soạn thảo và đăng tải các thông báo, tin tức và sự kiện mới."
            icon={
              <svg
                className="w-6 h-6 text-red-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                ></path>
              </svg>
            }
          />

          <div className="p-6 bg-white rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <div className="p-3 bg-gray-100 rounded-full mr-4">
                <svg
                  className="w-6 h-6 text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  ></path>
                </svg>
              </div>
              <h2 className="text-xl font-bold text-gray-800">
                Các chức năng khác
              </h2>
            </div>
            <p className="text-gray-600">
              Các công cụ quản lý khác sẽ được thêm vào trong tương lai.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AdminDashboardPage;
