import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Giả lập dữ liệu bài viết (bạn thay bằng fetch API thực tế)
const mockPosts = [
  {
    id: 1,
    title: "Bài viết 1",
    category: "news",
    subCategory: "press-info",
    createdAt: "2025-07-25",
  },
  {
    id: 2,
    title: "Bài viết 2",
    category: "announcement",
    subCategory: "undergraduate",
    createdAt: "2025-07-24",
  },
];

const AdminPostListPage = () => {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Thay bằng API thực tế
    setPosts(mockPosts);
  }, []);

  const handleDelete = (id) => {
    if (window.confirm("Bạn có chắc muốn xóa bài viết này?")) {
      setPosts(posts.filter((post) => post.id !== id));
      // Gọi API xóa ở đây nếu có
    }
  };

  const handleOpenDetail = (post) => {
    let url = "/";
    if (post.category === "news" && post.subCategory === "press-info") {
      url = `/tin-tuc/thong-tin-bao-chi/${post.id}`;
    } else if (post.category === "news" && post.subCategory === "activities-events") {
      url = `/tin-tuc/hoat-dong-su-kien/${post.id}`;
    } else if (post.category === "announcement" && post.subCategory === "undergraduate") {
      url = `/thong-bao/tuyen-sinh-dai-hoc/${post.id}`;
    } else if (post.category === "announcement" && post.subCategory === "postgraduate") {
      url = `/thong-bao/tuyen-sinh-sau-dai-hoc/${post.id}`;
    } else if (post.category === "announcement" && post.subCategory === "other") {
      url = `/thong-bao/tuyen-sinh-khac/${post.id}`;
    }
    window.open(url, "_blank");
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Danh sách bài viết</h1>
        <table className="min-w-full bg-white rounded shadow">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">Tiêu đề</th>
              <th className="py-2 px-4 border-b">Chuyên mục</th>
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
                <td className="py-2 px-4 border-b">{post.createdAt}</td>
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
                <td colSpan={4} className="text-center py-4 text-gray-500">
                  Không có bài viết nào.
                </td>
              </tr>
            )}
          </tbody>
        </table>
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