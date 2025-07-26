import ChiTieuTuyenSinh from "../components/ChiTieuTuyenSinh";
import Announcements from "../components/ThongBao";
import Banner from "../components/layout/Banner";
import DangKyXetTuyen from "../components/DangKyXetTuyen";

import ThamGiaXetTuyen from "../components/ThamGiaXetTuyen";
import QuyTrinhNopHoSo from "../components/QuyTrinhNopHoSo";
import CotMocTuyenSinh from "../components/CotMocTuyenSinh";
import QuyCheTuyenSinh from "../components/QuyCheTuyenSinh";
import PhuongThucXetTuyen from "../components/PhuongThucXetTuyen";
import FAQ from "../components/FAQ";

const TrangChu = () => {
  return (
    <>
      <Banner />
      <ChiTieuTuyenSinh />
      <ThamGiaXetTuyen />
      <PhuongThucXetTuyen />
      <QuyTrinhNopHoSo />
      <CotMocTuyenSinh />
      <QuyCheTuyenSinh />
      <Announcements />
      <FAQ />
      <DangKyXetTuyen />
    </>
  );
};

export default TrangChu;
