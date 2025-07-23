import Admissions from "../features/admissions/Admissions";
import Announcements from "../features/announcements/Announcements";
import Banner from "../components/layout/Banner";
import CallToAction from "../components/ui/CallToAction";

const HomePage = () => {
  return (
    <>
      <Banner />
      <Admissions />
      <Announcements />
      <CallToAction />
    </>
  );
};

export default HomePage;
