import Admissions from "../features/admissions/Admissions";
import Announcements from "../features/announcements/Announcements";
import Banner from "../components/layout/Banner";
import CallToAction from "../components/ui/CallToAction";

import PTITRecruitmentSection from "../components/PTITRecruitmentSection";
import AdmissionProcess from "../components/AdmissionProcess";
import AdmissionTimeline from "../components/AdmissionTimeline";
import RegulationsSlider from "../components/RegulationsSlider";
import AdmissionMethods from "../components/AdmissionMethods";
import FAQSection from "../components/FAQSection";

const HomePage = () => {
  return (
    <>
      <Banner />
      <Admissions />
      <PTITRecruitmentSection />
      <AdmissionProcess />
      <AdmissionTimeline />
      <RegulationsSlider />
      <AdmissionMethods />
      <FAQSection />
      <Announcements />
      <CallToAction />
    </>
  );
};

export default HomePage;
