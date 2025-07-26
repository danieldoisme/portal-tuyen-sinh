import { useState, useMemo } from "react";

const applicationData = [
  {
    id: 1,
    hoTen: "Nguyễn Văn An",
    ngayNop: "2025-07-15",
    phuongThuc: "Xét tuyển tài năng",
    trangThai: "Chờ duyệt",
  },
  {
    id: 2,
    hoTen: "Trần Thị Bình",
    ngayNop: "2025-07-16",
    phuongThuc: "Kết quả thi THPT",
    trangThai: "Đã duyệt",
  },
  {
    id: 3,
    hoTen: "Lê Văn Cường",
    ngayNop: "2025-07-17",
    phuongThuc: "Xét tuyển tài năng",
    trangThai: "Từ chối",
  },
  {
    id: 4,
    hoTen: "Phạm Thị Dung",
    ngayNop: "2025-07-18",
    phuongThuc: "Kết hợp",
    trangThai: "Chờ duyệt",
  },
  {
    id: 5,
    hoTen: "Hoàng Văn Em",
    ngayNop: "2025-07-19",
    phuongThuc: "Kết quả thi THPT",
    trangThai: "Đã duyệt",
  },
];

const AdminStudentApplicationsPage = () => {
  const [applications, setApplications] = useState(applicationData);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const filteredApplications = useMemo(() => {
    return applications
      .filter((app) =>
        app.hoTen.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .filter(
        (app) => statusFilter === "all" || app.trangThai === statusFilter
      );
  }, [applications, searchTerm, statusFilter]);

  const handleStatusChange = (id, newStatus) => {
    setApplications(
      applications.map((app) =>
        app.id === id ? { ...app, trangThai: newStatus } : app
      )
    );
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-2">
          Duyệt hồ sơ sinh viên
        </h1>
        <p className="text-lg text-gray-500 mb-8">
          Quản lý và cập nhật trạng thái hồ sơ xét tuyển.
        </p>

        <div className="mb-6 flex flex-col md:flex-row gap-4">
          <input
            type="text"
            placeholder="Tìm kiếm theo tên, phương thức..."
            className="px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 w-full md:w-1/3"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <select
            className="px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 w-full md:w-1/4"
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            <option value="all">Tất cả trạng thái</option>
            <option value="Chờ duyệt">Chờ duyệt</option>
            <option value="Đã duyệt">Đã duyệt</option>
            <option value="Từ chối">Từ chối</option>
          </select>
        </div>

        <div className="bg-white shadow-lg rounded-lg overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Họ và tên
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Ngày nộp
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Phương thức
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Trạng thái
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Hành động
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredApplications.map((app) => (
                <tr key={app.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">
                    {app.hoTen}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-600">
                    {app.ngayNop}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-600">
                    {app.phuongThuc}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        app.trangThai === "Đã duyệt"
                          ? "bg-green-100 text-green-800"
                          : app.trangThai === "Từ chối"
                          ? "bg-red-100 text-red-800"
                          : "bg-yellow-100 text-yellow-800"
                      }`}
                    >
                      {app.trangThai}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button className="text-indigo-600 hover:text-indigo-900 font-semibold">
                      Xem chi tiết
                    </button>
                    {app.trangThai === "Chờ duyệt" && (
                      <>
                        <button
                          onClick={() => handleStatusChange(app.id, "Đã duyệt")}
                          className="ml-4 text-green-600 hover:text-green-800 font-semibold"
                        >
                          Duyệt
                        </button>
                        <button
                          onClick={() => handleStatusChange(app.id, "Từ chối")}
                          className="ml-4 text-red-600 hover:text-red-800 font-semibold"
                        >
                          Từ chối
                        </button>
                      </>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminStudentApplicationsPage;
