import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
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
          </Routes>
        </main>
        <Footer />
        <ScrollToTopButton />
      </div>
    </Router>
  );
}

export default App;
