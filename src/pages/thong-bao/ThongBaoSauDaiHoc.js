import { useState, useEffect } from "react";
import Card from "../../components/ui/Card";

const ArrowButton = ({ onClick, direction, disabled }) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className={`w-10 h-10 flex items-center justify-center rounded-md transition-colors duration-300 ${
      disabled
        ? "bg-gray-200 text-gray-400 cursor-not-allowed"
        : "bg-gray-100 text-gray-600 hover:bg-red-700 hover:text-white"
    }`}
  >
    {direction === "left" ? (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 19l-7-7 7-7"
        />
      </svg>
    ) : (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 5l7 7-7 7"
        />
      </svg>
    )}
  </button>
);

const ThongBaoSauDaiHoc = () => {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArticles = async () => {
      setLoading(true);
      setError(null);
      const category = "thong-bao";
      const subcategory = "tuyen-sinh-sau-dai-hoc";

      try {
        const response = await fetch(
          `http://localhost:8081/api/articles/${category}/${subcategory}/${page}`
        );
        if (!response.ok) {
          throw new Error("Lỗi khi kết nối tới máy chủ.");
        }
        const result = await response.json();
        if (result.status === "success" && result.data) {
          setArticles(result.data);
          setTotalPages(result.pagination?.totalPages || 1);
        } else {
          setArticles([]);
        }
      } catch (err) {
        setError(err.message);
        setArticles([]);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, [page]);

  const handlePrev = () => {
    setPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNext = () => {
    setPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="text-sm mb-8" aria-label="Breadcrumb">
          <ol className="list-none p-0 inline-flex">
            <li className="flex items-center">
              <a href="/" className="text-gray-500 hover:text-red-700">
                Trang chủ
              </a>
              <svg
                className="fill-current w-3 h-3 mx-3"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" />
              </svg>
            </li>
            <li className="flex items-center">
              <a href="/thong-bao" className="text-gray-500 hover:text-red-700">
                Thông báo
              </a>
              <svg
                className="fill-current w-3 h-3 mx-3"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" />
              </svg>
            </li>
            <li>
              <span className="text-gray-800 font-semibold">
                Tuyển sinh sau đại học
              </span>
            </li>
          </ol>
        </nav>

        <h1 className="text-4xl font-extrabold text-gray-800 mb-10">
          Tuyển sinh sau đại học
        </h1>

        {loading && <p className="text-center">Đang tải bài viết...</p>}
        {error && <p className="text-center text-red-500">Lỗi: {error}</p>}

        {!loading && !error && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article) => (
                <Card
                  key={article.id}
                  image="https://tuyensinh.ptit.edu.vn/wp-content/uploads/sites/4/2025/05/1.png"
                  date={new Date(article.publishedDate).toLocaleDateString(
                    "vi-VN"
                  )}
                  title={article.title}
                  href={`/thong-bao/${article.id}`}
                />
              ))}
            </div>

            {totalPages > 1 && (
              <div className="flex justify-center items-center mt-12 space-x-4">
                <ArrowButton
                  onClick={handlePrev}
                  direction="left"
                  disabled={page === 1}
                />
                <span className="font-semibold">
                  {page} / {totalPages}
                </span>
                <ArrowButton
                  onClick={handleNext}
                  direction="right"
                  disabled={page === totalPages}
                />
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default ThongBaoSauDaiHoc;
