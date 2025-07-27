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
import ThongBaoDaiHoc from "./pages/thong-bao/ThongBaoDaiHoc.js";
import ThongBaoSauDaiHoc from "./pages/thong-bao/ThongBaoSauDaiHoc.js";
import ThongBaoKhac from "./pages/thong-bao/ThongBaoKhac.js";
import ThongBaoChiTiet from "./pages/thong-bao/ThongBaoChiTiet.js";
import TinTucBaoChi from "./pages/tin-tuc/TinTucBaoChi.js";
import TinTucSuKien from "./pages/tin-tuc/TinTucSuKien.js";
import TinTucChiTiet from "./pages/tin-tuc/TinTucChiTiet.js";
import TraCuuTuyenSinh from "./pages/tra-cuu-tuyen-sinh/TraCuuTuyenSinh.js";
import AdminLoginPage from "./pages/admin/AdminLoginPage.js";
import AdminDashboardPage from "./pages/admin/AdminDashboardPage.js";
import AdminStudentApplicationsPage from "./pages/admin/AdminStudentApplicationsPage";
import AdminPostCreationPage from "./pages/admin/AdminPostCreationPage.js";
import ProtectedRoute from "./components/auth/ProtectedRoute.js";

import TongQuanHocVien from "./pages/gioi-thieu/TongQuanHocVien.js";
import ChinhSachHocBong from "./pages/gioi-thieu/ChinhSachHocBong.js";
import CauHoiThuongGap from "./pages/gioi-thieu/CauHoiThuongGap.js";
import BaCongKhai from "./pages/gioi-thieu/BaCongKhai.js";
import DeAnTuyenSinh from "./pages/de-an-tuyen-sinh/DeAnTuyenSinh.js";

import DangNhap from "./pages/sinh-vien/DangNhap.js";
import DangKy from "./pages/sinh-vien/DangKy.js";
import NopHoSoTrucTuyen from "./pages/sinh-vien/NopHoSoTrucTuyen.js";
import XetTuyen from "./pages/sinh-vien/XetTuyen.js";
import ThongTinCaNhan from "./pages/sinh-vien/ThongTinCaNhan.js";
import ThemMoiHoSo from "./pages/sinh-vien/ThemMoiHoSo.js";

const AppLayout = () => {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith("/admin");
  const isAuthRoute =
    location.pathname === "/dang-nhap" || location.pathname === "/dang-ky";

  return (
    <div className="flex flex-col min-h-screen">
      {!isAdminRoute && !isAuthRoute && <NavBar />}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<TrangChu />} />
          <Route
            path="/thong-bao/tuyen-sinh-dai-hoc/:slug"
            element={<ThongBaoChiTiet />}
          />
          <Route
            path="/thong-bao/tuyen-sinh-dai-hoc"
            element={<ThongBaoDaiHoc />}
          />
          <Route
            path="/thong-bao/tuyen-sinh-sau-dai-hoc"
            element={<ThongBaoSauDaiHoc />}
          />
          <Route path="/thong-bao/tuyen-sinh-khac" element={<ThongBaoKhac />} />
          <Route
            path="/tin-tuc/thong-tin-bao-chi/:slug"
            element={<TinTucChiTiet />}
          />
          <Route path="/tin-tuc/thong-tin-bao-chi" element={<TinTucBaoChi />} />
          <Route path="/tin-tuc/hoat-dong-su-kien" element={<TinTucSuKien />} />

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

          <Route path="/de-an-tuyen-sinh/:year" element={<DeAnTuyenSinh />} />

          <Route path="/dang-nhap" element={<DangNhap />} />

          <Route path="/dang-ky" element={<DangKy />} />

          <Route
            path="/nop-ho-so"
            element={
              <ProtectedRoute role="student">
                <NopHoSoTrucTuyen />
              </ProtectedRoute>
            }
          />

          <Route
            path="/nop-ho-so/xet-tuyen"
            element={
              <ProtectedRoute role="student">
                <XetTuyen />
              </ProtectedRoute>
            }
          />

          <Route
            path="/thong-tin-ca-nhan"
            element={
              <ProtectedRoute role="student">
                <ThongTinCaNhan />
              </ProtectedRoute>
            }
          />

          <Route
            path="/nop-ho-so/xet-tuyen/them-moi-ho-so"
            element={
              <ProtectedRoute role="student">
                <ThemMoiHoSo />
              </ProtectedRoute>
            }
          />

          <Route path="/tra-cuu-tuyen-sinh" element={<TraCuuTuyenSinh />} />
          <Route path="/admin/login" element={<AdminLoginPage />} />
          <Route
            path="/admin/dashboard"
            element={
              <ProtectedRoute role="admin">
                <AdminDashboardPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/applications"
            element={
              <ProtectedRoute role="admin">
                <AdminStudentApplicationsPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/create-post"
            element={
              <ProtectedRoute role="admin">
                <AdminPostCreationPage />
              </ProtectedRoute>
            }
          />
        </Routes>
      </main>
      {!isAdminRoute && !isAuthRoute && <Footer />}
      {!isAdminRoute && !isAuthRoute && <ScrollToTopButton />}
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
