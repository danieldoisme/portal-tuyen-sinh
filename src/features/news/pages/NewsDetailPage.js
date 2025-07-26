import { useParams, Link } from "react-router-dom";

const pressNewsData = [
  {
    slug: "chuyen-gia-du-bao-diem-chuan-cu-nhan-quan-he-cong-chung-ptit",
    image:
      "https://tuyensinh.ptit.edu.vn/wp-content/uploads/sites/4/2024/06/anhDaiDien-1719296164585-gdvn_logo_3-1.png",
    date: "29/06/2024",
    author: "ptit",
    title:
      "Chuyên gia dự báo điểm chuẩn chương trình Cử nhân Quan hệ công chúng - PTIT",
    content: `
      <p class="mb-4 text-gray-700 leading-relaxed">[GDVN] - Học viện Công nghệ Bưu chính Viễn thông vừa công bố điều chỉnh Đề án tuyển sinh Đại học Chính quy. Theo đó, với 80 chỉ tiêu chuyên trình đào tạo về Quan hệ Công chúng mới được thông báo tuyển sinh, ngành Marketing của Học viện sẽ tăng từ 240 lên 300 chỉ tiêu.</p>
      <p class="mb-4 text-gray-700 leading-relaxed">Trả lời câu hỏi về lý do Học viện Công nghệ Bưu chính Viễn thông (PTIT) mở thêm chương trình đào tạo Quan hệ Công chúng trong năm 2024, PGS.TS Nguyễn Thị Hoàng Yến - Phó Viện trưởng Viện Kinh tế Bưu điện - PTIT chia sẻ: "Theo Hiệp hội Quảng cáo Việt Nam, hiện nay có khoảng 7.000 công ty quảng cáo - PR. Số lượng sinh viên tốt nghiệp ngành Quan hệ Công chúng còn ít và hiện nay, các công ty đang phải tuyển dụng từ các chuyên ngành như báo chí, ngoại ngữ, kinh tế hoặc được đào tạo qua các khoá học ngắn hạn, thậm chí có những người làm PR nhưng chưa hề qua một khóa đào tạo nào về PR."</p>
      <img src="https://media.sohuutritue.net.vn/files/nguyenhue/2024/06/27/h2-1613.jpg" alt="Chuyên gia dự báo điểm chuẩn chương trình Cử nhân Quan hệ công chúng - PTIT" class="mx-auto my-6 rounded-lg shadow-md" />
      <blockquote class="my-6 p-4 border-l-4 border-red-600 bg-gray-50 text-gray-600 italic">
        "Việc đào tạo Cử nhân Quan hệ công chúng gắn liền với môi trường số, công nghệ số sẽ sẽ tạo lợi thế khác biệt cho nguồn nhân lực về Quan hệ Công chúng khi theo học tại Học viện."
      </blockquote>
      <p class="mb-4 text-gray-700 leading-relaxed">Cụ thể tại PTIT, chương trình đào tạo Quan hệ công chúng sẽ mang đến cho người học những trải nghiệm đặc biệt với những kiến thức và kỹ năng phù hợp với xu hướng phát triển của lĩnh vực truyền thông số, marketing số, báo chí số trên môi trường đa nền tảng. Qua đó, giúp sinh viên có được tầm nhìn rộng hơn về nghề Quan hệ công chúng và có thể đảm nhiệm nhiều vị trí công việc khác nhau và làm việc hiệu quả trong môi trường đa ngành, đa lĩnh vực.</p>
    `,
  },
  {
    slug: "chuong-trinh-dao-tao-quan-he-cong-chung-tai-ptit-co-gi-khac-biet",
    image:
      "https://tuyensinh.ptit.edu.vn/wp-content/uploads/sites/4/2024/08/anhDaiDien-1715841649173-logo_vnmedia_tchi_dtu_28_3_01_2.png",
    date: "25/06/2024",
    author: "ptit",
    title:
      "Chương trình đào tạo Quan hệ công chúng tại Học viện Công nghệ Bưu chính Viễn thông có gì khác biệt?",
    content:
      "<p>Nội dung chi tiết về sự khác biệt của chương trình đào tạo Quan hệ công chúng sẽ được cập nhật sớm...</p>",
  },
  {
    slug: "hoc-vien-co-them-4-nganh-dat-kiem-dinh-chat-luong",
    image:
      "https://tuyensinh.ptit.edu.vn/wp-content/uploads/sites/4/2024/08/anhDaiDien-1715841846431-logo_ictvietnam.vn_.png",
    date: "25/06/2024",
    author: "ptit",
    title:
      "Học viện Công nghệ Bưu chính Viễn thông có thêm 4 ngành đạt kiểm định chất lượng",
    content:
      "<p>Nội dung chi tiết về 4 ngành đạt kiểm định chất lượng sẽ được cập nhật sớm...</p>",
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

const NewsDetailPage = () => {
  const { slug } = useParams();
  const article = pressNewsData.find((item) => item.slug === slug);

  const relatedPosts = pressNewsData
    .filter((item) => item.slug !== slug)
    .slice(0, 6);

  if (!article) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-2xl font-bold">Không tìm thấy tin tức</h1>
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
                    to={`/tin-tuc/thong-tin-bao-chi/${post.slug}`}
                    key={post.slug}
                    className="flex items-start group"
                  >
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-24 h-16 object-cover rounded-md mr-4 flex-shrink-0"
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

export default NewsDetailPage;
