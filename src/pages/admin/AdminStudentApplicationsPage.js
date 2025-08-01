import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";

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
  {
    id: 6,
    hoTen: "Nguyễn Thị Hoa",
    ngayNop: "2025-07-20",
    phuongThuc: "Xét tuyển tài năng",
    trangThai: "Chờ duyệt",
  },
  {
    id: 7,
    hoTen: "Trần Văn Hùng",
    ngayNop: "2025-07-21",
    phuongThuc: "Kết quả thi THPT",
    trangThai: "Từ chối",
  },
  {
    id: 8,
    hoTen: "Lê Thị Lan",
    ngayNop: "2025-07-22",
    phuongThuc: "Kết hợp",
    trangThai: "Chờ duyệt",
  },
  {
    id: 9,
    hoTen: "Phạm Văn Minh",
    ngayNop: "2025-07-23",
    phuongThuc: "Xét tuyển tài năng",
    trangThai: "Đã duyệt",
  },
  {
    id: 10,
    hoTen: "Nguyễn Văn Tèo",
    ngayNop: "2025-07-24",
    phuongThuc: "Kết quả thi THPT",
    trangThai: "Chờ duyệt",
  },
  {
    id: 11,
    hoTen: "Trần Thị Tí",
    ngayNop: "2025-07-25",
    phuongThuc: "Kết hợp",
    trangThai: "Từ chối",
  },
  {
    id: 12,
    hoTen: "Lê Văn Tú",
    ngayNop: "2025-07-26",
    phuongThuc: "Xét tuyển tài năng",
    trangThai: "Chờ duyệt",
  },
  {
    id: 13,
    hoTen: "Phạm Thị Vân",
    ngayNop: "2025-07-27",
    phuongThuc: "Kết quả thi THPT",
    trangThai: "Đã duyệt",
  },
  {
    id: 14,
    hoTen: "Hoàng Văn Quân",
    ngayNop: "2025-07-28",
    phuongThuc: "Kết hợp",
    trangThai: "Chờ duyệt",
  },
  {
    id: 15,
    hoTen: "Nguyễn Thị Mai",
    ngayNop: "2025-07-29",
    phuongThuc: "Xét tuyển tài năng",
    trangThai: "Từ chối",
  },
];

const PAGE_SIZE = 10;

const AdminStudentApplicationsPage = () => {
  const [applications, setApplications] = useState(applicationData);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [page, setPage] = useState(1);
  const navigate = useNavigate();

  const filteredApplications = useMemo(() => {
    const filtered = applications
      .filter((app) =>
        app.hoTen.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .filter(
        (app) => statusFilter === "all" || app.trangThai === statusFilter
      );
    setPage(1);
    return filtered;
  }, [applications, searchTerm, statusFilter]);

  const totalPages = useMemo(() => {
    return Math.ceil(filteredApplications.length / PAGE_SIZE);
  }, [filteredApplications]);

  const paginatedApplications = useMemo(() => {
    const startIndex = (page - 1) * PAGE_SIZE;
    return filteredApplications.slice(startIndex, startIndex + PAGE_SIZE);
  }, [filteredApplications, page]);

  const handleStatusChange = (id, newStatus) => {
    setApplications(
      applications.map((app) =>
        app.id === id ? { ...app, trangThai: newStatus } : app
      )
    );
  };

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setPage(newPage);
    }
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
              {paginatedApplications.map((app) => (
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
              {paginatedApplications.length === 0 && (
                <tr>
                  <td colSpan="5" className="text-center py-4 text-gray-500">
                    Không có hồ sơ nào.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2 mt-6">
            <button
              className="px-3 py-1 rounded bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
              onClick={() => handlePageChange(page - 1)}
              disabled={page === 1}
            >
              &lt;
            </button>
            <span>
              Trang {page} / {totalPages}
            </span>
            <button
              className="px-3 py-1 rounded bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
              onClick={() => handlePageChange(page + 1)}
              disabled={page === totalPages}
            >
              &gt;
            </button>
          </div>
        )}

        <button
          className="mt-8 px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
          onClick={() => navigate("/admin/dashboard")}
        >
          Quay lại Dashboard
        </button>
      </div>
    </div>
  );
};

export default AdminStudentApplicationsPage;
