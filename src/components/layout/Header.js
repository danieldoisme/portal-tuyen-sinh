import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const ArrowDownIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-4 w-4 inline-block ml-1"
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
  children,
  hasDropdown = false,
  dropdownItems = [],
  isActive,
  href = "#",
}) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setDropdownOpen(true)}
      onMouseLeave={() => setDropdownOpen(false)}
    >
      <a
        href={href}
        className={`text-gray-700 px-3 py-2 rounded-md text-sm font-medium flex items-center transition duration-150 ease-in-out ${
          isActive ? "text-red-600 font-bold" : "hover:text-blue-600"
        }`}
      >
        {children}
        {hasDropdown && <ArrowDownIcon />}
      </a>
      {hasDropdown && isDropdownOpen && (
        <div className="absolute top-full left-0 pt-2 w-56 bg-transparent">
          <div className="bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5">
            <div className="py-1" role="menu" aria-orientation="vertical">
              {dropdownItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-red-600"
                  role="menuitem"
                >
                  {item.title}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const navLinks = [
  { title: "Trang chủ", href: "/" },
  {
    title: "Giới thiệu",
    hasDropdown: true,
    dropdownItems: [
      { title: "Tổng quan học viện", href: "#" },
      { title: "Ba công khai", href: "#" },
      { title: "Chính sách học bổng", href: "#" },
      { title: "Câu hỏi thường gặp", href: "#" },
    ],
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
      { title: "Thông tin báo chí", href: "#" },
      { title: "Hoạt động & Sự kiện", href: "#" },
    ],
  },
  {
    title: "Đề án tuyển sinh",
    hasDropdown: true,
    dropdownItems: [
      { title: "Đề án tuyển sinh năm 2025", href: "#" },
      { title: "Đề án tuyển sinh năm 2024", href: "#" },
      { title: "Đề án tuyển sinh năm 2023", href: "#" },
      { title: "Đề án tuyển sinh năm 2022", href: "#" },
      { title: "Đề án tuyển sinh năm 2021", href: "#" },
    ],
  },
  { title: "Tra cứu tuyển sinh", href: "#" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setSticky] = useState(false);
  const [activeItem, setActiveItem] = useState("");
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const currentPath = location.pathname;
    const activeLink = navLinks.find(
      (link) =>
        (link.basePath && currentPath.startsWith(link.basePath)) ||
        link.href === currentPath
    );

    if (activeLink) {
      setActiveItem(activeLink.title);
    } else {
      setActiveItem("");
    }
  }, [location]);

  return (
    <header
      className={`bg-white shadow-sm relative z-30 ${
        isSticky ? "sticky top-0 z-50" : ""
      }`}
    >
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <a href="#" className="flex items-center space-x-2">
              <img
                className="h-12 w-auto"
                src="https://tuyensinh.ptit.edu.vn/wp-content/uploads/sites/4/2024/08/logo-tuyen-sinh.svg"
                alt="Logo Học viện Công nghệ Bưu chính Viễn thông"
              />
            </a>
          </div>

          <div className="hidden md:flex items-center">
            <nav className="flex items-center space-x-2">
              {navLinks.map((link) => (
                <NavItem
                  key={link.title}
                  href={link.href}
                  hasDropdown={link.hasDropdown}
                  dropdownItems={link.dropdownItems}
                  isActive={activeItem === link.title}
                >
                  {link.title}
                </NavItem>
              ))}
            </nav>
            <button className="ml-6 bg-red-700 text-white px-5 py-2.5 rounded-md text-sm font-medium hover:bg-red-800 transition duration-150 ease-in-out">
              Nộp hồ sơ trực tuyến
            </button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
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

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <NavItem
                key={link.title}
                href={link.href}
                hasDropdown={link.hasDropdown}
                dropdownItems={link.dropdownItems}
                isActive={activeItem === link.title}
              >
                {link.title}
              </NavItem>
            ))}
            <button className="w-full mt-2 bg-red-700 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-red-800 transition duration-150 ease-in-out">
              Nộp hồ sơ trực tuyến
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
