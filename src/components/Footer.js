const FacebookIcon = () => (
  <svg
    className="w-6 h-6"
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
      clipRule="evenodd"
    />
  </svg>
);

const YoutubeIcon = () => (
  <svg
    className="w-6 h-6"
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0C.887 3.437.16 5.887.16 12s.727 8.563 4.225 8.816c3.599.245 11.626.246 15.23 0 3.498-.253 4.225-2.668 4.225-8.816s-.727-8.563-4.225-8.816zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"
      clipRule="evenodd"
    />
  </svg>
);

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700">
      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-end space-x-2 mb-8">
          <a
            href="https://www.facebook.com/ptittuyensinh/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 transition-colors"
          >
            <FacebookIcon />
          </a>
          <a
            href="https://www.youtube.com/@HocvienCongngheBuuchinhVienthong"
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-600 hover:text-red-800 transition-colors"
          >
            <YoutubeIcon />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-sm font-bold text-red-800 uppercase tracking-wider">
              Địa chỉ học viện
            </h3>
            <ul className="mt-4 space-y-4 text-sm">
              <li>
                <p className="font-semibold">Trụ sở chính</p>
                <p>
                  Số 122 Hoàng Quốc Việt, phường Nghĩa Đô, thành phố Hà Nội.
                </p>
              </li>
              <li>
                <p className="font-semibold">Cơ sở đào tạo tại Hà Nội</p>
                <p>Số 96A Trần Phú, phường Hà Đông, thành phố Hà Nội.</p>
              </li>
              <li>
                <p className="font-semibold">
                  Học viện cơ sở tại TP. Hồ Chí Minh
                </p>
                <p>
                  Số 11 Nguyễn Đình Chiểu, phường Đa Kao, Quận 1, Thành phố Hồ
                  Chí Minh.
                </p>
              </li>
              <li>
                <p className="font-semibold">
                  Cơ sở đào tạo tại TP Hồ Chí Minh
                </p>
                <p>
                  Số 97 Man Thiện, phường Hiệp Phú, Thành phố Thủ Đức, Thành phố
                  Hồ Chí Minh.
                </p>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold text-red-800 uppercase tracking-wider">
              Thông tin liên hệ
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <span className="font-semibold">Số điện thoại:</span> (024)
                33528122
              </li>
              <li>
                <span className="font-semibold">Email:</span>{" "}
                tuyensinh@ptit.edu.vn
              </li>
              <li>
                <p className="font-semibold">Fagepage Tuyển sinh PTIT:</p>
                <a
                  href="https://www.facebook.com/ptittuyensinh/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline break-words"
                >
                  https://www.facebook.com/ptittuyensinh/
                </a>
              </li>
              <li>
                <span className="font-semibold">Địa chỉ:</span> Phòng Đào tạo -
                HVCNBCVT
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold text-red-800 uppercase tracking-wider">
              Đường dẫn
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a
                  href="https://portal.ptit.edu.vn/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-600 hover:underline"
                >
                  Cổng thông tin học viên
                </a>
              </li>
              <li>
                <a
                  href="https://daotao.ptit.edu.vn/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-600 hover:underline"
                >
                  Cổng thông tin đào tạo
                </a>
              </li>
              <li>
                <a
                  href="https://htqt.ptit.edu.vn/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-600 hover:underline"
                >
                  Cổng thông tin hợp tác quốc tế
                </a>
              </li>
              <li>
                <a
                  href="https://khcn.ptit.edu.vn/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-600 hover:underline"
                >
                  Cổng thông tin Khoa học Công nghệ
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold text-red-800 uppercase tracking-wider">
              Về chúng tôi
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-blue-600 hover:underline">
                  Trang chủ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600 hover:underline">
                  Giới thiệu
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600 hover:underline">
                  Thông báo
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600 hover:underline">
                  Tin tức
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600 hover:underline">
                  Đề án tuyển sinh
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600 hover:underline">
                  Tra cứu tuyển sinh
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-gray-200">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 relative">
          <p className="text-center text-xs text-gray-600">
            © Copyright 2024 HocVienCongNgheBuuChinhVienThong. All rights
            reserved ® Học viện Công nghệ Bưu chính Viễn thông giữ bản quyền nội
            dung trên website này
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
