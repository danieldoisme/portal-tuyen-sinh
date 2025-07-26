import { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const ArrowDownIcon = ({ isOpen }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`h-4 w-4 inline-block ml-1 transition-transform duration-200 ${
      isOpen ? "rotate-180" : ""
    }`}
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
      clipRule="evenodd"
    />
  </svg>
);

const NavItem = ({
  link,
  onDropdownClick,
  isDropdownOpen,
  onNavigate,
  isActive,
}) => {
  if (link.hasDropdown) {
    return (
      <div className="relative">
        <button
          onClick={() => onDropdownClick(link.title)}
          className={`text-gray-700 px-3 py-2 rounded-md text-sm font-medium flex items-center transition duration-150 ease-in-out ${
            isActive || isDropdownOpen
              ? "text-red-600 font-bold"
              : "hover:text-red-600"
          }`}
        >
          {link.title}
          <ArrowDownIcon isOpen={isDropdownOpen} />
        </button>

        {isDropdownOpen && (
          <div className="absolute top-full left-0 mt-1 w-56 bg-white border border-gray-200 rounded-md shadow-lg z-50">
            <div className="py-1">
              {link.dropdownItems.map((item, index) => (
                <button
                  key={index}
                  onClick={() => onNavigate(item.href)}
                  className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-red-600"
                >
                  {item.title}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <button
      onClick={() => onNavigate(link.href)}
      className={`text-gray-700 px-3 py-2 rounded-md text-sm font-medium flex items-center transition duration-150 ease-in-out ${
        isActive ? "text-red-600 font-bold" : "hover:text-red-600"
      }`}
    >
      {link.title}
    </button>
  );
};

const navLinks = [
  { title: "Trang chủ", href: "/" },
  {
    title: "Giới thiệu",
    hasDropdown: true,
    dropdownItems: [
      { title: "Tổng quan học viện", href: "/gioi-thieu/tong-quan" },
      { title: "Ba công khai", href: "/gioi-thieu/ba-cong-khai" },
      { title: "Chính sách học bổng", href: "/gioi-thieu/chinh-sach-hoc-bong" },
      { title: "Câu hỏi thường gặp", href: "/gioi-thieu/cau-hoi-thuong-gap" },
    ],
    basePath: "/gioi-thieu",
  },
  {
    title: "Thông báo",
    hasDropdown: true,
    dropdownItems: [
      { title: "Tuyển sinh đại học", href: "/thong-bao/tuyen-sinh-dai-hoc" },
      {
        title: "Tuyển sinh sau đại học",
        href: "/thong-bao/tuyen-sinh-sau-dai-hoc",
      },
      { title: "Tuyển sinh khác", href: "/thong-bao/tuyen-sinh-khac" },
    ],
    basePath: "/thong-bao",
  },
  {
    title: "Tin tức",
    hasDropdown: true,
    dropdownItems: [
      { title: "Thông tin báo chí", href: "/tin-tuc/thong-tin-bao-chi" },
      { title: "Hoạt động & Sự kiện", href: "/tin-tuc/hoat-dong-su-kien" },
    ],
    basePath: "/tin-tuc",
  },
  {
    title: "Đề án tuyển sinh",
    hasDropdown: true,
    dropdownItems: [
      { title: "Đề án tuyển sinh năm 2025", href: "/de-an-tuyen-sinh/2025" },
      { title: "Đề án tuyển sinh năm 2024", href: "/de-an-tuyen-sinh/2024" },
    ],
    basePath: "/de-an-tuyen-sinh",
  },
  { title: "Tra cứu tuyển sinh", href: "/tra-cuu-tuyen-sinh" },
];

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setSticky] = useState(false);
  const [activeItem, setActiveItem] = useState("");
  const [activeDropdown, setActiveDropdown] = useState(null);
  const dropdownRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
    setTimeout(() => {
      setActiveDropdown(null);
      setIsMenuOpen(false);
    }, 100);
  };

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const currentPath = location.pathname;
    const activeLink = navLinks.find(
      (link) =>
        (link.basePath && currentPath.startsWith(link.basePath)) ||
        link.href === currentPath
    );
    setActiveItem(activeLink ? activeLink.title : "");
  }, [location]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        window.innerWidth >= 768 &&
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleDropdownClick = (menuName) => {
    setActiveDropdown(activeDropdown === menuName ? null : menuName);
  };

  return (
    <header
      className={`bg-white shadow-sm relative z-30 ${
        isSticky ? "sticky top-0 z-50" : ""
      }`}
    >
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <button
              onClick={() => handleNavigation("/")}
              className="flex items-center space-x-2"
            >
              <img
                className="h-12 w-auto"
                src="https://tuyensinh.ptit.edu.vn/wp-content/uploads/sites/4/2024/08/logo-tuyen-sinh.svg"
                alt="Logo Học viện Công nghệ Bưu chính Viễn thông"
              />
            </button>
          </div>

          <div className="hidden md:flex items-center" ref={dropdownRef}>
            <nav className="flex items-center space-x-2">
              {navLinks.map((link) => (
                <NavItem
                  key={link.title}
                  link={link}
                  onDropdownClick={handleDropdownClick}
                  isDropdownOpen={activeDropdown === link.title}
                  onNavigate={handleNavigation}
                  isActive={activeItem === link.title}
                />
              ))}
            </nav>
            <button
              onClick={() => handleNavigation("/nop-ho-so")}
              className="ml-6 bg-red-700 text-white px-5 py-2.5 rounded-md text-sm font-medium hover:bg-red-800 transition duration-150 ease-in-out"
            >
              Nộp hồ sơ trực tuyến
            </button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={
                    !isMenuOpen
                      ? "M4 6h16M4 12h16M4 18h16"
                      : "M6 18L18 6M6 6l12 12"
                  }
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-white shadow-lg z-40">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <div key={link.title}>
                <button
                  onClick={() =>
                    link.hasDropdown
                      ? handleDropdownClick(link.title)
                      : handleNavigation(link.href)
                  }
                  className="w-full text-left flex justify-between items-center px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50"
                >
                  {link.title}
                  {link.hasDropdown && (
                    <ArrowDownIcon isOpen={activeDropdown === link.title} />
                  )}
                </button>
                {link.hasDropdown && activeDropdown === link.title && (
                  <div className="pl-4 mt-1 space-y-1">
                    {link.dropdownItems.map((item) => (
                      <button
                        key={item.title}
                        onClick={() => handleNavigation(item.href)}
                        className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:bg-gray-50"
                      >
                        {item.title}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <button
              onClick={() => handleNavigation("/nop-ho-so")}
              className="w-full mt-2 bg-red-700 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-red-800 transition duration-150 ease-in-out"
            >
              Nộp hồ sơ trực tuyến
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default NavBar;
