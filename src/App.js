import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import ScrollToTopButton from "./components/ui/ScrollToTopButton";
import HomePage from "./pages/HomePage";
import AnnouncementsUniversityPage from "./pages/AnnouncementsUniversityPage";
import AnnouncementsPostgraduatePage from "./pages/AnnouncementsPostgraduatePage";
import AnnouncementsOtherPage from "./pages/AnnouncementsOtherPage";
import AnnouncementDetailPage from "./pages/AnnouncementDetailPage";
import NewsPressPage from "./pages/NewsPressPage";
import NewsEventsPage from "./pages/NewsEventsPage";
import NewsDetailPage from "./pages/NewsDetailPage";
import AdmissionLookupPage from "./pages/AdmissionLookupPage";
import AdminLoginPage from "./pages/AdminLoginPage";
import AdminDashboardPage from "./pages/AdminDashboardPage";
import AdminStudentApplicationsPage from "./pages/AdminStudentApplicationsPage";
import AdminPostCreationPage from "./pages/AdminPostCreationPage";


import AnnouncementsUniversityPage from "./pages/AnnouncementsUniversityPage";
import AnnouncementsPostgraduatePage from "./pages/AnnouncementsPostgraduatePage";
import AnnouncementsOtherPage from "./pages/AnnouncementsOtherPage";
import NewsPressPage from "./pages/NewsPressPage";
import NewsEventsPage from "./pages/NewsEventsPage";

import TongQuanHocVien from "./pages/gioi-thieu/TongQuanHocVien";
import ChinhSachHocBong from "./pages/gioi-thieu/ChinhSachHocBong";
import CauHoiThuongGap from "./pages/gioi-thieu/CauHoiThuongGap";
import BaCongKhai from "./pages/gioi-thieu/BaCongKhai";
import DiemTrungTuyen from './pages/gioi-thieu/DiemTrungTuyen';
import DeAnTuyenSinh from './pages/de-an-tuyen-sinh/DeAnTuyenSinh';

import LoginPage from "./user/LoginPage.tsx";
import RegisterPage from "./user/RegisterPage.tsx";
import NopHoSoTrucTuyen from './pages/nop-ho-so-truc-tuyen/NopHoSoTrucTuyen';
import ThemHoSo from './pages/nop-ho-so-truc-tuyen/ThemHoSo.js';




const AppLayout = () => {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith("/admin");

  return (
    <div className="flex flex-col min-h-screen">
      {!isAdminRoute && <Header />}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
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
            <Route path="/gioi-thieu/chinh-sach-hoc-bong" element={<ChinhSachHocBong />} />
            <Route path="/gioi-thieu/cau-hoi-thuong-gap" element={<CauHoiThuongGap />} />
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
