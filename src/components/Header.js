import React, { useState, useEffect } from "react";

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

const NavItem = ({ children, hasDropdown = false }) => (
  <a
    href="#"
    className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium flex items-center"
  >
    {children}
    {hasDropdown && <ArrowDownIcon />}
  </a>
);

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`bg-white shadow-sm ${isSticky ? "sticky top-0 z-50" : ""}`}
    >
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <a href="#" className="flex items-center space-x-2">
              <img
                className="h-12 w-auto"
                src="https://placehold.co/100x100/d46464/ffffff?text=LOGO"
                alt="Logo"
              />
              <div className="text-sm">
                <p className="font-bold text-red-800">
                  Học viện Công nghệ Bưu chính Viễn thông
                </p>
                <p className="font-semibold text-gray-600">
                  CỔNG THÔNG TIN TUYỂN SINH
                </p>
              </div>
            </a>
          </div>

          <div className="hidden md:flex items-center">
            <nav className="flex items-center space-x-2">
              <NavItem>Trang chủ</NavItem>
              <NavItem hasDropdown>Giới thiệu</NavItem>
              <NavItem hasDropdown>Thông báo</NavItem>
              <NavItem hasDropdown>Tin tức</NavItem>
              <NavItem hasDropdown>Đề án tuyển sinh</NavItem>
              <NavItem>Tra cứu tuyển sinh</NavItem>
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
            <NavItem>Trang chủ</NavItem>
            <NavItem hasDropdown>Giới thiệu</NavItem>
            <NavItem hasDropdown>Thông báo</NavItem>
            <NavItem hasDropdown>Tin tức</NavItem>
            <NavItem hasDropdown>Đề án tuyển sinh</NavItem>
            <NavItem>Tra cứu tuyển sinh</NavItem>
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
