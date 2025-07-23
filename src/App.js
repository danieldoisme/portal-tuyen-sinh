import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTopButton from "./components/ScrollToTopButton";
import Banner from "./components/Banner";
import Admissions from "./components/Admissions";
import Announcements from "./components/Announcements";
import CallToAction from "./components/CallToAction";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Banner />
        <Admissions />

        {/* Placeholder for content */}
        <div className="p-8">
          <h1 className="text-2xl font-bold">Cổng thông tin tuyển sinh</h1>
          <div className="h-screen"></div>
          <p>Nội dung trang...</p>
          <div className="h-screen"></div>
        </div>

        <Announcements />
        <CallToAction />
      </main>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}

export default App;
