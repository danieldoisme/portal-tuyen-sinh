import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const ArrowDownIcon = ({ isOpen }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`h-4 w-4 inline-block ml-1 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
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

const NavItem = ({ children, hasDropdown = false, dropdownItems = [], onDropdownClick, isDropdownOpen, onNavigate }) => {
  if (hasDropdown) {
    return (
      <div className="relative">
        <button
          onClick={onDropdownClick}
          className={`text-gray-700 hover:text-red-600 px-3 py-2 rounded-md text-sm font-medium flex items-center transition-colors duration-200 ${isDropdownOpen ? 'text-red-600' : ''}`}
        >
          {children}
          <ArrowDownIcon isOpen={isDropdownOpen} />
        </button>
        
        {isDropdownOpen && (
          <div className="absolute top-full left-0 mt-1 w-56 bg-white border border-gray-200 rounded-md shadow-lg z-50 animate-fadeIn">
            <div className="py-1">
              {dropdownItems.map((item, index) => {
                if (typeof item === 'object' && item.submenu) {
                  return (
                    <div key={index} className="relative group">
                      <div className="flex items-center justify-between px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-red-600 cursor-pointer">
                        {item.title}
                        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                        </svg>
                      </div>
                      <div className="absolute left-full top-0 w-48 bg-white border border-gray-200 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                        <div className="py-1">
                          {item.submenu.map((subItem, subIndex) => (
                            <button
                              key={subIndex}
                              className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-red-600"
                              onClick={() => onNavigate(subItem.path)}
                            >
                              {subItem.name}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                } else {
                  return (
                    <button
                      key={index}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-red-600"
                      onClick={() => onNavigate(item.path)}
                    >
                      {item.name}
                    </button>
                  );
                }
              })}
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <button
      className="text-gray-700 hover:text-red-600 px-3 py-2 rounded-md text-sm font-medium flex items-center transition-colors duration-200"
      onClick={() => onNavigate && onNavigate('/')}
    >
      {children}
    </button>
  );
};

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setSticky] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  const dropdownData = {
    'Giới thiệu': [
      { name: 'Tổng quan học viện', path: '/gioi-thieu/tong-quan' },
      { name: 'Ba công khai', path: '/gioi-thieu/ba-cong-khai' },
      { name: 'Chính sách học bổng', path: '/gioi-thieu/chinh-sach-hoc-bong' },
      { name: 'Câu hỏi thường gặp', path: '/gioi-thieu/cau-hoi-thuong-gap' },
      {
        title: 'Xem điểm các năm trước',
        submenu: [
          { name: 'Điểm trúng tuyển 2024', path: '/diem-trung-tuyen/2024' },
          { name: 'Điểm trúng tuyển 2023', path: '/diem-trung-tuyen/2023' },
          { name: 'Điểm trúng tuyển 2022', path: '/diem-trung-tuyen/2022' },
          { name: 'Điểm trúng tuyển 2021', path: '/diem-trung-tuyen/2021' },
          { name: 'Điểm trúng tuyển 2020', path: '/diem-trung-tuyen/2020' }
        ]
      }
    ],
    'Thông báo': [
      { name: 'Tuyển sinh đại học', path: '/thong-bao/tuyen-sinh-dai-hoc' },
      { name: 'Tuyển sinh sau đại học', path: '/thong-bao/tuyen-sinh-sau-dai-hoc' },
      { name: 'Tuyển sinh khác', path: '/thong-bao/tuyen-sinh-khac' }
    ],
    'Tin tức': [
      { name: 'Thông tin báo chí', path: '/tin-tuc/thong-tin-bao-chi' },
      { name: 'Hoạt động & sự kiện', path: '/tin-tuc/hoat-dong-su-kien' }
    ],
    'Đề án tuyển sinh': [
      { name: 'Thông tin tuyển sinh năm 2025', path: '/de-an-tuyen-sinh/2025' },
      { name: 'Đề án tuyển sinh năm 2024', path: '/de-an-tuyen-sinh/2024' },
      { name: 'Đề án tuyển sinh năm 2023', path: '/de-an-tuyen-sinh/2023' },
      { name: 'Đề án tuyển sinh năm 2022', path: '/de-an-tuyen-sinh/2022' },
      { name: 'Đề án tuyển sinh năm 2021', path: '/de-an-tuyen-sinh/2021' },
      { name: 'Đề án tuyển sinh năm 2020', path: '/de-an-tuyen-sinh/2020' },
      { name: 'Đề án tuyển sinh năm 2019', path: '/de-an-tuyen-sinh/2019' }
    ]
  };

  const handleNavigation = (path) => {
    navigate(path);
    setActiveDropdown(null);
  };

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
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleDropdownClick = (menuName) => {
    setActiveDropdown(activeDropdown === menuName ? null : menuName);
  };

  return (
    <>
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }
      `}</style>
      
      <header
        className={`bg-white shadow-sm ${isSticky ? "sticky top-0 z-50" : ""}`}
      >
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex-shrink-0">
              <button 
                onClick={() => handleNavigation('/')}
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
                <NavItem onNavigate={handleNavigation}>Trang chủ</NavItem>
                
                <NavItem 
                  hasDropdown 
                  dropdownItems={dropdownData['Giới thiệu']}
                  onDropdownClick={() => handleDropdownClick('Giới thiệu')}
                  isDropdownOpen={activeDropdown === 'Giới thiệu'}
                  onNavigate={handleNavigation}
                >
                  Giới thiệu
                </NavItem>
                
                <NavItem 
                  hasDropdown 
                  dropdownItems={dropdownData['Thông báo']}
                  onDropdownClick={() => handleDropdownClick('Thông báo')}
                  isDropdownOpen={activeDropdown === 'Thông báo'}
                  onNavigate={handleNavigation}
                >
                  Thông báo
                </NavItem>
                
                <NavItem 
                  hasDropdown 
                  dropdownItems={dropdownData['Tin tức']}
                  onDropdownClick={() => handleDropdownClick('Tin tức')}
                  isDropdownOpen={activeDropdown === 'Tin tức'}
                  onNavigate={handleNavigation}
                >
                  Tin tức
                </NavItem>
                
                <NavItem 
                  hasDropdown 
                  dropdownItems={dropdownData['Đề án tuyển sinh']}
                  onDropdownClick={() => handleDropdownClick('Đề án tuyển sinh')}
                  isDropdownOpen={activeDropdown === 'Đề án tuyển sinh'}
                  onNavigate={handleNavigation}
                >
                  Đề án tuyển sinh
                </NavItem>
                
                <NavItem onNavigate={() => handleNavigation('/tra-cuu')}>Tra cứu tuyển sinh</NavItem>
              </nav>
              <button 
                className="ml-6 bg-red-700 text-white px-5 py-2.5 rounded-md text-sm font-medium hover:bg-red-800 transition duration-150 ease-in-out"
                onClick={() => handleNavigation('/login')}
              >
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
              <NavItem onNavigate={handleNavigation}>Trang chủ</NavItem>
              <NavItem hasDropdown>Giới thiệu</NavItem>
              <NavItem hasDropdown>Thông báo</NavItem>
              <NavItem hasDropdown>Tin tức</NavItem>
              <NavItem hasDropdown>Đề án tuyển sinh</NavItem>
              <NavItem onNavigate={() => handleNavigation('/tra-cuu')}>Tra cứu tuyển sinh</NavItem>
              <button 
                className="w-full mt-2 bg-red-700 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-red-800 transition duration-150 ease-in-out"
                onClick={() => handleNavigation('/login')}
              >
                Nộp hồ sơ trực tuyến
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;