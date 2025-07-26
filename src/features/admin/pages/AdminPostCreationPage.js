import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import CustomUploadAdapterPlugin from "../../../components/CustomUploadAdapterPlugin";

const AdminPostCreationPage = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState(""); // HTML
  const [category, setCategory] = useState("news");
  const [subCategory, setSubCategory] = useState("");
  const [image, setImage] = useState(null);
  const navigate = useNavigate();

  const subCategoryOptions = {
    news: [
      { value: "press-info", label: "Thông tin báo chí" },
      { value: "activities-events", label: "Hoạt động & sự kiện" },
    ],
    announcement: [
      { value: "undergraduate", label: "Tuyển sinh đại học" },
      { value: "postgraduate", label: "Tuyển sinh sau đại học" },
      { value: "other", label: "Tuyển sinh khác" },
    ],
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Submit bài viết:", {
      title,
      content,
      category,
      subCategory,
      image,
    });

    alert("Bài viết đã được đăng thành công!");
    navigate("/admin/dashboard");
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
            {/* Tiêu đề */}
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-700">
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

            {/* Nội dung */}
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

            {/* Chuyên mục & Danh mục phụ */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="category" className="block text-sm font-medium text-gray-700">
                  Chuyên mục
                </label>
                <select
                  id="category"
                  value={category}
                  onChange={(e) => {
                    setCategory(e.target.value);
                    setSubCategory(""); // reset sub-category khi chuyên mục thay đổi
                  }}
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500"
                >
                  <option value="news">Tin tức</option>
                  <option value="announcement">Thông báo</option>
                </select>
              </div>

              {subCategoryOptions[category] && (
                <div>
                  <label htmlFor="subCategory" className="block text-sm font-medium text-gray-700">
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

            {/* Ảnh đại diện */}
            <div>
              <label htmlFor="image" className="block text-sm font-medium text-gray-700">
                Ảnh đại diện
              </label>
              <input
                type="file"
                id="image"
                onChange={(e) => setImage(e.target.files[0])}
                className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-red-100 file:text-red-700 hover:file:bg-red-200 cursor-pointer"
              />
            </div>

            {/* Nút submit */}
            <div className="flex justify-end gap-4 pt-4 border-t border-gray-200">
              <button
                type="button"
                onClick={() => navigate("/admin/dashboard")}
                className="px-6 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
              >
                Hủy
              </button>
              <button
                type="submit"
                className="px-6 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              >
                Đăng bài
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminPostCreationPage;
