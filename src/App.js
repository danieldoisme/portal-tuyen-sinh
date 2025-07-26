import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import NavBar from "./components/layout/NavBar.js";
import Footer from "./components/layout/Footer";
import ScrollToTopButton from "./components/ui/ScrollToTopButton.js";
import TrangChu from "./pages/TrangChu.js";
import AnnouncementsUniversityPage from "./features/announcements/pages/AnnouncementsUniversityPage.js";
import AnnouncementsPostgraduatePage from "./features/announcements/pages/AnnouncementsPostgraduatePage.js";
import AnnouncementsOtherPage from "./features/announcements/pages/AnnouncementsOtherPage.js";
import AnnouncementDetailPage from "./features/announcements/pages/AnnouncementDetailPage.js";
import NewsPressPage from "./features/news/pages/NewsPressPage.js";
import NewsEventsPage from "./features/news/pages/NewsEventsPage.js";
import NewsDetailPage from "./features/news/pages/NewsDetailPage.js";
import AdmissionLookupPage from "./features/tra-cuu/pages/AdmissionLookupPage.js";
import AdminLoginPage from "./features/admin/pages/AdminLoginPage.js";
import AdminDashboardPage from "./features/admin/pages/AdminDashboardPage.js";
import AdminStudentApplicationsPage from "./features/admin/pages/AdminStudentApplicationsPage";
import AdminPostCreationPage from "./features/admin/pages/AdminPostCreationPage.js";

import TongQuanHocVien from "./features/info/pages/TongQuanHocVien.js";
import ChinhSachHocBong from "./features/info/pages/ChinhSachHocBong.js";
import CauHoiThuongGap from "./features/info/pages/CauHoiThuongGap.js";
import BaCongKhai from "./features/info/pages/BaCongKhai.js";
import DiemTrungTuyen from "./features/info/pages/DiemTrungTuyen.js";
import DeAnTuyenSinh from "./features/info/pages/DeAnTuyenSinh.js";

import LoginPage from "./features/auth/pages/LoginPage.tsx";
import RegisterPage from "./features/auth/pages/RegisterPage.tsx";
import NopHoSoTrucTuyen from "./features/application/pages/NopHoSoTrucTuyen.js";
import ThemHoSo from "./features/application/pages/ThemHoSo.js";

const AppLayout = () => {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith("/admin");

  return (
    <div className="flex flex-col min-h-screen">
      {!isAdminRoute && <NavBar />}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<TrangChu />} />
          <Route
            path="/thong-bao/tuyen-sinh-dai-hoc/:slug"
            element={<AnnouncementDetailPage />}
          />
          <Route
            path="/thong-bao/tuyen-sinh-dai-hoc"
            element={<AnnouncementsUniversityPage />}
          />
          <Route
            path="/thong-bao/tuyen-sinh-sau-dai-hoc"
            element={<AnnouncementsPostgraduatePage />}
          />
          <Route
            path="/thong-bao/tuyen-sinh-khac"
            element={<AnnouncementsOtherPage />}
          />
          <Route
            path="/tin-tuc/thong-tin-bao-chi/:slug"
            element={<NewsDetailPage />}
          />
          <Route
            path="/tin-tuc/thong-tin-bao-chi"
            element={<NewsPressPage />}
          />
          <Route
            path="/tin-tuc/hoat-dong-su-kien"
            element={<NewsEventsPage />}
          />

          <Route path="/gioi-thieu/tong-quan" element={<TongQuanHocVien />} />
          <Route path="/gioi-thieu/ba-cong-khai" element={<BaCongKhai />} />
          <Route
            path="/gioi-thieu/chinh-sach-hoc-bong"
            element={<ChinhSachHocBong />}
          />
          <Route
            path="/gioi-thieu/cau-hoi-thuong-gap"
            element={<CauHoiThuongGap />}
          />
          <Route path="/diem-trung-tuyen/:year" element={<DiemTrungTuyen />} />

          <Route path="/de-an-tuyen-sinh/:year" element={<DeAnTuyenSinh />} />

          <Route path="/login" element={<LoginPage />} />

          <Route path="/register" element={<RegisterPage />} />

          <Route path="/nop-ho-so" element={<NopHoSoTrucTuyen />} />

          <Route path="/nop-ho-so/xet-tuyen" element={<ThemHoSo />} />

          <Route path="/tra-cuu-tuyen-sinh" element={<AdmissionLookupPage />} />
          <Route path="/admin/login" element={<AdminLoginPage />} />
          <Route path="/admin/dashboard" element={<AdminDashboardPage />} />
          <Route
            path="/admin/applications"
            element={<AdminStudentApplicationsPage />}
          />
          <Route
            path="/admin/create-post"
            element={<AdminPostCreationPage />}
          />
        </Routes>
      </main>
      {!isAdminRoute && <Footer />}
      {!isAdminRoute && <ScrollToTopButton />}
    </div>
  );
};

function App() {
  return (
    <Router>
      <AppLayout />
    </Router>
  );
}

export default App;
