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
          <Route path="/tra-cuu-tuyen-sinh" element={<AdmissionLookupPage />} />
          <Route path="/admin/login" element={<AdminLoginPage />} />
          <Route path="/admin/dashboard" element={<AdminDashboardPage />} />
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
