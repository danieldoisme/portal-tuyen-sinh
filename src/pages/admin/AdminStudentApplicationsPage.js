import { useState, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";

const PAGE_SIZE = 10;

const AdminStudentApplicationsPage = () => {
  const [applications, setApplications] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const [selectedDetail, setSelectedDetail] = useState(null);
  const navigate = useNavigate();

  // Fetch danh sách hồ sơ
  useEffect(() => {
    const fetchApplications = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          `http://localhost:8081/api/application/list?applicationYear=2025&page=${page - 1}&size=${PAGE_SIZE}`
        );
        const data = await res.json();
        setApplications(data.content || []);
        setTotalPages(data.totalPages || 1);
      } catch (err) {
        setApplications([]);
      }
      setLoading(false);
    };
    fetchApplications();
  }, [page]);

  // Lọc theo tên và trạng thái
  const filteredApplications = useMemo(() => {
    return applications
      .filter((app) =>
        app.fullName.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .filter(
        (app) =>
          statusFilter === "all" ||
          (statusFilter === "Chờ duyệt" && app.status === "pending") ||
          (statusFilter === "Đã duyệt" && app.status === "approved") ||
          (statusFilter === "Từ chối" && app.status === "rejected")
      );
  }, [applications, searchTerm, statusFilter]);

  // Duyệt/từ chối hồ sơ
  const handleStatusChange = async (id, newStatus) => {
    try {
      await fetch(`http://localhost:8081/api/application/update-status/${id}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: newStatus }),
      });
      // Sau khi cập nhật, reload lại danh sách
      const res = await fetch(
        `http://localhost:8081/api/application/list?applicationYear=2025&page=${page - 1}&size=${PAGE_SIZE}`
      );
      const data = await res.json();
      setApplications(data.content || []);
    } catch (err) {
      alert("Cập nhật trạng thái thất bại!");
    }
  };

  // Xem chi tiết hồ sơ
  const handleViewDetail = async (id) => {
    try {
      const res = await fetch(
        `http://localhost:8081/api/application/detail/${id}`
      );
      const data = await res.json();
      setSelectedDetail(data);
    } catch (err) {
      setSelectedDetail(null);
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
            placeholder="Tìm kiếm theo tên"
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
                  Chứng chỉ
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Điểm
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
                    {app.fullName}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-600">
                    {app.submissionDate
                      ? new Date(app.submissionDate).toLocaleDateString("vi-VN")
                      : ""}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-600">
                    {app.certificate}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-600">
                    {app.score}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        app.status === "approved"
                          ? "bg-green-100 text-green-800"
                          : app.status === "rejected"
                          ? "bg-red-100 text-red-800"
                          : "bg-yellow-100 text-yellow-800"
                      }`}
                    >
                      {app.status === "pending"
                        ? "Chờ duyệt"
                        : app.status === "approved"
                        ? "Đã duyệt"
                        : "Từ chối"}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button
                      className="text-indigo-600 hover:text-indigo-900 font-semibold"
                      onClick={() => handleViewDetail(app.id)}
                    >
                      Xem chi tiết
                    </button>
                    {app.status === "pending" && (
                      <>
                        <button
                          onClick={() => handleStatusChange(app.id, "approved")}
                          className="ml-4 text-green-600 hover:text-green-800 font-semibold"
                        >
                          Duyệt
                        </button>
                        <button
                          onClick={() => handleStatusChange(app.id, "rejected")}
                          className="ml-4 text-red-600 hover:text-red-800 font-semibold"
                        >
                          Từ chối
                        </button>
                      </>
                    )}
                  </td>
                </tr>
              ))}
              {filteredApplications.length === 0 && (
                <tr>
                  <td colSpan="6" className="text-center py-4 text-gray-500">
                    Không có hồ sơ nào.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Chi tiết hồ sơ popup/modal đơn giản */}
        {selectedDetail && (
          <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-lg relative">
              <button
                className="absolute top-2 right-3 text-gray-500 hover:text-gray-700"
                onClick={() => setSelectedDetail(null)}
              >
                Đóng
              </button>
              <h2 className="text-xl font-bold mb-4">Chi tiết hồ sơ</h2>
              <div className="space-y-2">
                <div>
                  <strong>Họ tên:</strong> {selectedDetail.fullName}
                </div>
                <div>
                  <strong>Số CCCD:</strong> {selectedDetail.citizenId}
                </div>
                <div>
                  <strong>Ngày nộp:</strong>{" "}
                  {selectedDetail.submissionDate
                    ? new Date(selectedDetail.submissionDate).toLocaleString(
                        "vi-VN"
                      )
                    : ""}
                </div>
                <div>
                  <strong>Địa chỉ:</strong> {selectedDetail.addr}
                </div>
                <div>
                  <strong>Chứng chỉ:</strong> {selectedDetail.certificate}
                </div>
                <div>
                  <strong>Điểm:</strong> {selectedDetail.score}
                </div>
                <div>
                  <strong>Trạng thái:</strong>{" "}
                  {selectedDetail.status === "pending"
                    ? "Chờ duyệt"
                    : selectedDetail.status === "approved"
                    ? "Đã duyệt"
                    : "Từ chối"}
                </div>
                <div>
                  <strong>Năm ứng tuyển:</strong> {selectedDetail.applicationYear}
                </div>
                <div>
                  <strong>Trường THPT:</strong>{" "}
                  {selectedDetail.additionalInfo?.highSchool || ""}
                </div>
                <div>
                  <strong>Đối tượng ưu tiên:</strong>{" "}
                  {selectedDetail.additionalInfo?.priority || ""}
                </div>
              </div>
            </div>
          </div>
        )}

        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2 mt-6">
            <button
              className="px-3 py-1 rounded bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
              onClick={() => setPage(page - 1)}
              disabled={page === 1}
            >
              &lt;
            </button>
            <span>
              Trang {page} / {totalPages}
            </span>
            <button
              className="px-3 py-1 rounded bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
              onClick={() => setPage(page + 1)}
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
