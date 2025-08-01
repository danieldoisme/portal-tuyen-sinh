import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import CustomUploadAdapterPlugin from "./api/CustomUploadAdapterPlugin";

const AdminPostCreationPage = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("tin-tuc");
  const [subCategory, setSubCategory] = useState("");
  const [image, setImage] = useState(null);
  const [summary, setSummary] = useState("");
  const [publishedDate, setPublishedDate] = useState("");
  const [author, setAuthor] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const subCategoryOptions = {
    "tin-tuc": [
      { value: "thong-tin-bao-chi", label: "Thông tin báo chí" },
      { value: "hoat-dong-su-kien", label: "Hoạt động & sự kiện" },
    ],
    "thong-bao": [
      { value: "tuyen-sinh-dai-hoc", label: "Tuyển sinh đại học" },
      { value: "tuyen-sinh-sau-dai-hoc", label: "Tuyển sinh sau đại học" },
      { value: "tuyen-sinh-khac", label: "Tuyển sinh khác" },
    ],
  };

  // Map category/subCategory sang đúng giá trị backend nếu cần
  // const mapCategory = (cat) => {
  //   if (cat === "news") return "tin-tuc";
  //   if (cat === "announcement") return "thong-bao";
  //   return cat;
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    let coverImageUrl = "";
    // Nếu có file ảnh, upload trước
    if (image) {
      const formData = new FormData();
      formData.append("file", image);
      try {
        const res = await fetch("http://localhost:8081/api/uploads/image", {
          method: "POST",
          body: formData,
        });
        const data = await res.json();
        coverImageUrl = data.url;
      } catch (err) {
        alert("Upload ảnh thất bại!");
        setLoading(false);
        return;
      }
    }

    // Gửi API tạo bài viết
    const body = {
      title,
      coverImage: coverImageUrl,
      summary,
      content,
      publishedDate,
      author,
      category: category,
      subcategory: subCategory,
    };

    try {
      const res = await fetch("http://localhost:8081/api/articles/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      const data = await res.json();
      if (data && data.id) {
        alert("Bài viết đã được đăng thành công!");
        navigate("/admin/dashboard");
      } else {
        alert("Đăng bài thất bại!");
      }
    } catch (error) {
      alert("Có lỗi xảy ra khi đăng bài!");
    }
    setLoading(false);
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-2">
          Tạo bài viết mới
        </h1>
        <p className="text-lg text-gray-500 mb-8">
          Điền vào các trường dưới đây để tạo một bài đăng mới.
        </p>
        <div className="bg-white shadow-lg rounded-lg p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="title"
                className="block text-sm font-medium text-gray-700"
              >
                Tiêu đề bài viết
              </label>
              <input
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500"
                required
              />
            </div>
            <div>
              <label
                htmlFor="summary"
                className="block text-sm font-medium text-gray-700"
              >
                Tóm tắt
              </label>
              <textarea
                id="summary"
                value={summary}
                onChange={(e) => setSummary(e.target.value)}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500"
                rows={2}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Nội dung
              </label>
              <CKEditor
                editor={ClassicEditor}
                data={content}
                config={{
                  extraPlugins: [CustomUploadAdapterPlugin],
                }}
                onChange={(event, editor) => {
                  const data = editor.getData();
                  setContent(data);
                }}
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="publishedDate"
                  className="block text-sm font-medium text-gray-700"
                >
                  Ngày đăng
                </label>
                <input
                  type="date"
                  id="publishedDate"
                  value={publishedDate}
                  onChange={(e) => setPublishedDate(e.target.value)}
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="author"
                  className="block text-sm font-medium text-gray-700"
                >
                  Tác giả
                </label>
                <input
                  type="text"
                  id="author"
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500"
                  required
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="category"
                  className="block text-sm font-medium text-gray-700"
                >
                  Chuyên mục
                </label>
                <select
                  id="category"
                  value={category}
                  onChange={(e) => {
                    setCategory(e.target.value);
                    setSubCategory("");
                  }}
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500"
                  required
                >
                  <option value="tin-tuc">Tin tức</option>
                  <option value="thong-bao">Thông báo</option>
                </select>
              </div>
              {subCategoryOptions[category] && (
                <div>
                  <label
                    htmlFor="subCategory"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Danh mục phụ
                  </label>
                  <select
                    id="subCategory"
                    value={subCategory}
                    onChange={(e) => setSubCategory(e.target.value)}
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500"
                    required
                  >
                    <option value="">-- Chọn danh mục phụ --</option>
                    {subCategoryOptions[category].map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
              )}
            </div>
            <div>
              <label
                htmlFor="image"
                className="block text-sm font-medium text-gray-700"
              >
                Ảnh đại diện
              </label>
              <input
                type="file"
                id="image"
                accept="image/*"
                onChange={(e) => setImage(e.target.files[0])}
                className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-red-100 file:text-red-700 hover:file:bg-red-200 cursor-pointer"
              />
            </div>
            <div className="flex justify-end gap-4 pt-4 border-t border-gray-200">
              <button
                type="button"
                onClick={() => navigate("/admin/dashboard")}
                className="px-6 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                disabled={loading}
              >
                Hủy
              </button>
              <button
                type="submit"
                className="px-6 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                disabled={loading}
              >
                {loading ? "Đang đăng..." : "Đăng bài"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminPostCreationPage;
