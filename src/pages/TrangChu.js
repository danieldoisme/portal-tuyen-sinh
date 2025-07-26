import Admissions from "../features/admissions/ChiTieuTuyenSinh";
import Announcements from "../features/announcements/Announcements";
import Banner from "../components/layout/Banner";
import CallToAction from "../components/CallToAction";

import ThamGiaXetTuyen from "../components/ThamGiaXetTuyen";
import QuyTrinhNopHoSo from "../components/QuyTrinhNopHoSo";
import CotMocTuyenSinh from "../components/CotMocTuyenSinh";
import QuyCheTuyenSinh from "../components/QuyCheTuyenSinh";
import PhuongThucXetTuyen from "../components/PhuongThucXetTuyen";
import FAQSection from "../features/info/components/FAQSection";

const TrangChu = () => {
  return (
    <>
      <Banner />
      <Admissions />
      <ThamGiaXetTuyen />
      <PhuongThucXetTuyen />
      <QuyTrinhNopHoSo />
      <CotMocTuyenSinh />
      <QuyCheTuyenSinh />
      <Announcements />
      <FAQSection />
      <CallToAction />
    </>
  );
};

export default TrangChu;
