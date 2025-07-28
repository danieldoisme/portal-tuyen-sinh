import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";

const data = [
  {
    slug: "bang-quy-doi-tuong-duong-diem-trung-tuyen-2025",
    image:
      "https://tuyensinh.ptit.edu.vn/wp-content/uploads/sites/4/2025/05/1.png",
    date: "23/07/2025",
    author: "admindaotao",
    title:
      "Bảng quy đổi tương đương điểm trúng tuyển giữa các phương thức xét tuyển đại học hệ chính quy đợt 1 năm 2025",
    content: `
      <p class="mb-4">Căn cứ Thông tư số 08/2022/TT-BGDĐT ngày 06/6/2022 của Bộ trưởng Bộ Giáo dục và Đào tạo về việc ban hành Quy chế tuyển sinh trình độ đại học; tuyển sinh trình độ cao đẳng ngành Giáo dục Mầm non;</p>
      <p class="mb-4">Học viện Công nghệ Bưu chính Viễn thông thông báo Bảng quy đổi tương đương điểm trúng tuyển giữa các phương thức xét tuyển đại học hệ chính quy đợt 1 năm 2025 của Học viện như sau:</p>
      <img src="https://tuyensinh.ptit.edu.vn/wp-content/uploads/sites/4/2025/07/bang-quy-doi.jpg" alt="Bảng quy đổi điểm" class="mx-auto my-6 rounded-lg shadow-md" />
      <p class="mb-4">Công thức quy đổi điểm trúng tuyển tương đương giữa các phương thức tuyển sinh theo hướng dẫn của Bộ Giáo dục và Đào tạo:</p>
      <div class="my-4 text-center text-lg font-medium">
        $$y = c + \\frac{(x-a)}{(b-a)} * (d-c)$$
      </div>
      <p><strong class="font-semibold">Trong đó:</strong></p>
      <ul class="list-disc list-inside ml-4 space-y-2">
        <li><strong>x</strong> là điểm trúng tuyển của phương thức tuyển sinh gốc</li>
        <li><strong>y</strong> là điểm trúng tuyển của phương thức tuyển sinh cần quy đổi</li>
        <li><strong>a, b</strong> là Điểm của khoảng phân vị điểm theo phương thức tuyển sinh gốc</li>
        <li><strong>c, d</strong> là Điểm của khoảng phân vị điểm của phương thức tuyển sinh cần quy đổi</li>
      </ul>
      <p class="mt-6">Học viện Công nghệ Bưu chính Viễn thông xin trân trọng thông báo!</p>
    `,
  },
  {
    slug: "nguong-dam-bao-chat-luong-dau-vao-2025",
    image:
      "https://tuyensinh.ptit.edu.vn/wp-content/uploads/sites/4/2025/05/1.png",
    date: "21/07/2025",
    author: "admindaotao",
    title:
      "Ngưỡng đảm bảo chất lượng đầu vào trình độ đại học hệ chính quy đợt 1 năm 2025",
    content:
      "<p>Nội dung chi tiết về ngưỡng đảm bảo chất lượng đầu vào sẽ được cập nhật sớm...</p>",
  },
  {
    slug: "ve-viec-dang-ky-nguyen-vong-xet-tuyen",
    image:
      "https://tuyensinh.ptit.edu.vn/wp-content/uploads/sites/4/2025/05/1.png",
    date: "14/07/2025",
    author: "admindaotao",
    title:
      "Về việc đăng ký nguyện vọng xét tuyển đại học chính quy trên Hệ thống hỗ trợ tuyển sinh chung của Bộ Giáo dục và Đào tạo",
    content:
      "<p>Nội dung chi tiết về việc đăng ký nguyện vọng sẽ được cập nhật sớm...</p>",
  },
  {
    slug: "ket-qua-xet-tuyen-thang-va-utxt-2025",
    image:
      "https://tuyensinh.ptit.edu.vn/wp-content/uploads/sites/4/2025/05/1.png",
    date: "09/07/2025",
    author: "admindaotao",
    title:
      "Kết quả xét tuyển thẳng và Ưu tiên xét tuyển vào đại học chính quy năm 2025",
    content:
      "<p>Nội dung chi tiết về kết quả xét tuyển thẳng sẽ được cập nhật sớm...</p>",
  },
  {
    slug: "dieu-chinh-thoi-gian-dang-ky-xet-tuyen-2025",
    image:
      "https://tuyensinh.ptit.edu.vn/wp-content/uploads/sites/4/2025/05/1.png",
    date: "30/06/2025",
    author: "admindaotao",
    title:
      "Về việc điều chỉnh thời gian đăng ký thông tin xét tuyển trực tuyến cho thí sinh đăng ký xét tuyển vào Đại học chính quy năm 2025",
    content:
      "<p>Nội dung chi tiết về điều chỉnh thời gian đăng ký sẽ được cập nhật sớm...</p>",
  },
  {
    slug: "sua-doi-bo-sung-de-an-tuyen-sinh-2025",
    image:
      "https://tuyensinh.ptit.edu.vn/wp-content/uploads/sites/4/2025/05/1.png",
    date: "24/06/2025",
    author: "admindaotao",
    title:
      "Sửa đổi, bổ sung một số nội dung của Đề án tuyển sinh và thông báo tuyển sinh đại học hệ chính quy năm 2025",
    content:
      "<p>Nội dung chi tiết về sửa đổi, bổ sung đề án tuyển sinh sẽ được cập nhật sớm...</p>",
  },
  {
    slug: "thong-bao-mo-he-thong-xet-tuyen-2025",
    image:
      "https://tuyensinh.ptit.edu.vn/wp-content/uploads/sites/4/2025/05/1.png",
    date: "06/06/2025",
    author: "admindaotao",
    title:
      "Thông báo về việc mở Hệ thống đăng ký xét tuyển đại học chính quy năm 2025",
    content:
      "<p>Nội dung chi tiết về việc mở hệ thống đăng ký xét tuyển sẽ được cập nhật sớm...</p>",
  },
];

const CalendarIcon = () => (
  <svg
    className="w-4 h-4 mr-1.5 text-gray-500"
    fill="currentColor"
    viewBox="0 0 20 20"
  >
    <path
      fillRule="evenodd"
      d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
      clipRule="evenodd"
    ></path>
  </svg>
);

const UserIcon = () => (
  <svg
    className="w-4 h-4 mr-1.5 text-gray-500"
    fill="currentColor"
    viewBox="0 0 20 20"
  >
    <path
      fillRule="evenodd"
      d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
      clipRule="evenodd"
    ></path>
  </svg>
);

const ThongBaoChiTiet = () => {
  const { slug } = useParams();
  const article = data.find((item) => item.slug === slug);

  useEffect(() => {
    if (window.MathJax) {
      window.MathJax.typesetPromise();
    }
  }, [article]);

  const relatedPosts = data.filter((item) => item.slug !== slug).slice(0, 6);

  if (!article) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-2xl font-bold">Không tìm thấy bài viết</h1>
        <p className="mt-4">
          Bài viết bạn đang tìm kiếm không tồn tại hoặc đã bị di chuyển.
        </p>
        <Link
          to="/thong-bao/tuyen-sinh-dai-hoc"
          className="mt-6 inline-block text-red-600 hover:underline"
        >
          Quay lại trang thông báo
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
                to="/thong-bao/tuyen-sinh-dai-hoc"
                className="text-gray-500 hover:text-red-700"
              >
                Tuyển sinh đại học
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
                <span>{article.date}</span>
              </div>
              <div className="flex items-center">
                <UserIcon />
                <span>{article.author}</span>
              </div>
            </div>
            <hr className="mb-6" />
            <div
              className="prose max-w-none"
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
                    to={`/thong-bao/tuyen-sinh-dai-hoc/${post.slug}`}
                    key={post.slug}
                    className="flex items-start group"
                  >
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-24 h-16 object-cover rounded-md mr-4"
                    />
                    <div>
                      <p className="text-xs text-gray-500 mb-1">{post.date}</p>
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

export default ThongBaoChiTiet;
