import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const PAGE_SIZE = 12;

const AdminPostListPage = () => {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [deleteSuccess, setDeleteSuccess] = useState(false);
  const navigate = useNavigate();

  // Fetch bài viết từ API
  const fetchPosts = async (searchValue, pageValue) => {
    try {
      const params = new URLSearchParams({
        page: pageValue,
        size: PAGE_SIZE,
      });
      if (searchValue) params.append("title", searchValue);

      const res = await fetch(
        `http://localhost:8081/api/articles/list?${params}`
      );
      const data = await res.json();
      setPosts(data.data || []);
      setTotalPages(data.pagination?.totalPages || 1);
    } catch (error) {
      setPosts([]);
      setTotalPages(1);
    }
  };

  useEffect(() => {
    fetchPosts(search, page);
    // eslint-disable-next-line
  }, [search, page]);

  useEffect(() => {
    if (deleteSuccess) {
      const timer = setTimeout(() => setDeleteSuccess(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [deleteSuccess]);

  const handleDelete = async (id) => {
    if (window.confirm("Bạn có chắc muốn xóa bài viết này?")) {
      try {
        const res = await fetch(`http://localhost:8081/api/articles/${id}`, {
          method: "DELETE",
        });
        const data = await res.json();
        if (data.status === "success") {
          setPosts((prev) => prev.filter((post) => post.id !== id));
          setDeleteSuccess(true);
        } else {
          alert(data.message || "Xóa bài viết thất bại!");
        }
      } catch (error) {
        alert("Có lỗi xảy ra khi xóa bài viết!");
      }
    }
  };

  const handleOpenDetail = (post) => {
    let url = "/";
    if (
      post.category === "tin-tuc" &&
      post.subcategory === "thong-tin-bao-chi"
    ) {
      url = `/tin-tuc/thong-tin-bao-chi/${post.id}`;
    } else if (
      post.category === "tin-tuc" &&
      post.subcategory === "hoat-dong-su-kien"
    ) {
      url = `/tin-tuc/hoat-dong-su-kien/${post.id}`;
    } else if (post.category === "thong-bao" && post.subcategory === "dai-hoc") {
      url = `/thong-bao/tuyen-sinh-dai-hoc/${post.id}`;
    } else if (
      post.category === "thong-bao" &&
      post.subcategory === "sau-dai-hoc"
    ) {
      url = `/thong-bao/tuyen-sinh-sau-dai-hoc/${post.id}`;
    } else if (post.category === "thong-bao" && post.subcategory === "khac") {
      url = `/thong-bao/tuyen-sinh-khac/${post.id}`;
    }
    window.open(url, "_blank");
  };

  const handleSearchKeyDown = (e) => {
    if (e.key === "Enter") {
      setSearch(searchInput);
      setPage(1);
    }
  };

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) setPage(newPage);
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Danh sách bài viết</h1>
        {deleteSuccess && (
          <div className="mb-4 px-4 py-2 bg-green-100 text-green-700 rounded">
            Đã xóa bài viết thành công!
          </div>
        )}
        <div className="mb-4 flex gap-2">
          <input
            type="text"
            placeholder="Tìm kiếm theo tên bài viết..."
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            onKeyDown={handleSearchKeyDown}
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500"
          />
          <button
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
            onClick={() => {
              setSearch(searchInput);
              setPage(1);
            }}
          >
            Tìm kiếm
          </button>
        </div>
        <table className="min-w-full bg-white rounded shadow">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">Tiêu đề</th>
              <th className="py-2 px-4 border-b">Chuyên mục</th>
              <th className="py-2 px-4 border-b">Danh mục phụ</th>
              <th className="py-2 px-4 border-b">Ngày đăng</th>
              <th className="py-2 px-4 border-b">Hành động</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post) => (
              <tr key={post.id}>
                <td
                  className="py-2 px-4 border-b text-blue-600 cursor-pointer hover:underline"
                  onClick={() => handleOpenDetail(post)}
                  title="Xem chi tiết bài viết"
                >
                  {post.title}
                </td>
                <td className="py-2 px-4 border-b">{post.category}</td>
                <td className="py-2 px-4 border-b">{post.subcategory}</td>
                <td className="py-2 px-4 border-b">
                  {post.publishedDate
                    ? new Date(post.publishedDate).toLocaleDateString("vi-VN")
                    : ""}
                </td>
                <td className="py-2 px-4 border-b">
                  <button
                    className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                    onClick={() => handleDelete(post.id)}
                  >
                    Xóa
                  </button>
                </td>
              </tr>
            ))}
            {posts.length === 0 && (
              <tr>
                <td colSpan={5} className="text-center py-4 text-gray-500">
                  Không có bài viết nào.
                </td>
              </tr>
            )}
          </tbody>
        </table>
        {/* Phân trang */}
        <div className="flex justify-center items-center gap-2 mt-4">
          <button
            className="px-3 py-1 rounded bg-gray-200 hover:bg-gray-300"
            onClick={() => handlePageChange(page - 1)}
            disabled={page === 1}
          >
            &lt;
          </button>
          <span>
            Trang {page} / {totalPages}
          </span>
          <button
            className="px-3 py-1 rounded bg-gray-200 hover:bg-gray-300"
            onClick={() => handlePageChange(page + 1)}
            disabled={page === totalPages}
          >
            &gt;
          </button>
        </div>
        <button
          className="mt-6 px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
          onClick={() => navigate("/admin/dashboard")}
        >
          Quay lại Dashboard
        </button>
      </div>
    </div>
  );
};

export default AdminPostListPage;