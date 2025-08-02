import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";

const CalendarIcon = () => (
  <svg className="w-4 h-4 mr-1.5 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
    <path
      fillRule="evenodd"
      d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
      clipRule="evenodd"
    ></path>
  </svg>
);
const UserIcon = () => (
  <svg className="w-4 h-4 mr-1.5 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
    <path
      fillRule="evenodd"
      d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
      clipRule="evenodd"
    ></path>
  </svg>
);

const TinTucChiTiet = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const [relatedPosts, setRelatedPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    const fetchArticle = async () => {
      setLoading(true);
      setErrorMsg("");
      try {
        const res = await fetch(`http://localhost:8081/api/articles/${id}`);
        const result = await res.json();
        if (result.status === "success" && result.data) {
          setArticle(result.data);
        } else {
          setErrorMsg(result.message || "Không tìm thấy tin tức");
        }
      } catch (err) {
        setErrorMsg("Lỗi khi kết nối tới máy chủ.");
      }
      setLoading(false);
    };

    fetchArticle();
  }, [id]);

  useEffect(() => {
    // Chỉ fetch liên quan khi đã có article
    if (!article) return;
    const fetchRelated = async () => {
      try {
        const res = await fetch(
          `http://localhost:8081/api/articles/tin-tuc/thong-tin-bao-chi/1`
        );
        const result = await res.json();
        if (result.status === "success" && result.data) {
          // Loại bỏ bài hiện tại khỏi danh sách liên quan
          setRelatedPosts(result.data.filter((post) => post.id !== Number(id)).slice(0, 6));
        } else {
          setRelatedPosts([]);
        }
      } catch (err) {
        setRelatedPosts([]);
      }
    };
    fetchRelated();
  }, [article, id]);

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-2xl font-bold">Đang tải bài viết...</h1>
      </div>
    );
  }

  if (!article) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-2xl font-bold">{errorMsg || "Không tìm thấy tin tức"}</h1>
        <Link
          to="/tin-tuc/thong-tin-bao-chi"
          className="mt-6 inline-block text-red-600 hover:underline"
        >
          Quay lại trang tin tức
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="text-sm mb-8" aria-label="Breadcrumb">
          <ol className="list-none p-0 inline-flex">
            <li className="flex items-center">
              <Link to="/" className="text-gray-500 hover:text-red-700">
                Trang chủ
              </Link>
              <svg
                className="fill-current w-3 h-3 mx-3"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" />
              </svg>
            </li>
            <li className="flex items-center">
              <Link
                to="/tin-tuc/thong-tin-bao-chi"
                className="text-gray-500 hover:text-red-700"
              >
                Thông tin báo chí
              </Link>
              <svg
                className="fill-current w-3 h-3 mx-3"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" />
              </svg>
            </li>
            <li>
              <span className="text-gray-400 truncate w-64 block">
                {article.title}
              </span>
            </li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <h1 className="text-3xl lg:text-4xl font-extrabold text-gray-800 mb-4">
              {article.title}
            </h1>
            <div className="flex items-center text-sm text-gray-500 mb-6">
              <div className="flex items-center mr-6">
                <CalendarIcon />
                <span>
                  {article.publishedDate
                    ? new Date(article.publishedDate).toLocaleDateString("vi-VN")
                    : ""}
                </span>
              </div>
              <div className="flex items-center">
                <UserIcon />
                <span>{article.author}</span>
              </div>
            </div>
            {/* <img
              src={article.coverImage || "https://tuyensinh.ptit.edu.vn/wp-content/uploads/sites/4/2024/09/anhDaiDien-1725526307568-1.png"}
              alt={article.title}
              className="w-full h-64 object-cover rounded-lg mb-6"
            /> */}
            <hr className="mb-6" />
            <div
              className="max-w-none" // Bỏ class prose nếu bị mất định dạng
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
          </div>

          <aside>
            <div className="sticky top-24">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Bài viết liên quan
              </h2>
              <div className="space-y-6">
                {relatedPosts.map((post) => (
                  <Link
                    to={`/tin-tuc/thong-tin-bao-chi/${post.id}`}
                    key={post.id}
                    className="flex items-start group"
                  >
                    <img
                      src={
                        post.coverImage ||
                        "https://tuyensinh.ptit.edu.vn/wp-content/uploads/sites/4/2024/09/anhDaiDien-1725526307568-1.png"
                      }
                      alt={post.title}
                      className="w-24 h-16 object-cover rounded-md mr-4 flex-shrink-0"
                    />
                    <div>
                      <p className="text-xs text-gray-500 mb-1">
                        {post.publishedDate
                          ? new Date(post.publishedDate).toLocaleDateString("vi-VN")
                          : ""}
                      </p>
                      <h3 className="text-sm font-semibold text-gray-800 group-hover:text-red-700 transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default TinTucChiTiet;
