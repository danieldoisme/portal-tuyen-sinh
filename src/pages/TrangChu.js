import Banner from "../components/layout/Banner";
import ChiTieuTuyenSinh from "../components/ChiTieuTuyenSinh";
import ThamGiaXetTuyen from "../components/ThamGiaXetTuyen";
import PhuongThucXetTuyen from "../components/PhuongThucXetTuyen";
import QuyTrinhNopHoSo from "../components/QuyTrinhNopHoSo";
import CotMocTuyenSinh from "../components/CotMocTuyenSinh";
import QuyCheTuyenSinh from "../components/QuyCheTuyenSinh";
import FAQ from "../components/FAQ";
import DangKyXetTuyen from "../components/DangKyXetTuyen";

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
      <FAQ />
      <DangKyXetTuyen />
    </>
  );
};

export default TrangChu;
