import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import ScrollToTopButton from "./components/ui/ScrollToTopButton";
import HomePage from "./pages/HomePage";
import AnnouncementsUniversityPage from "./pages/AnnouncementsUniversityPage";
import AnnouncementsPostgraduatePage from "./pages/AnnouncementsPostgraduatePage";
import AnnouncementsOtherPage from "./pages/AnnouncementsOtherPage";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
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
          </Routes>
        </main>
        <Footer />
        <ScrollToTopButton />
      </div>
    </Router>
  );
}

export default App;
