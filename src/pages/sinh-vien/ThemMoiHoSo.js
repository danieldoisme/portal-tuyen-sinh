import { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";

const ThemMoiHoSo = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const phuongThucId = searchParams.get("phuong-thuc");

  const [formData, setFormData] = useState({
    hoTen: "",
    diaChi: "",
    tenChungChi: "IELTS",
    diem: "",
  });

  const [phuongThucTitle, setPhuongThucTitle] = useState("");

  const scoreAttributes = {
    IELTS: { placeholder: "Ví dụ: 7.5", step: "0.5", max: "9.0" },
    TOEFL: { placeholder: "Ví dụ: 90", step: "1", max: "120" },
  };

  useEffect(() => {
    const phuongThucMap = {
      4: "Phương thức 4: Xét tuyển kết hợp giữa chứng chỉ tiếng Anh quốc tế (chứng chỉ IELTS, TOEFL) với kết quả học tập ở bậc THPT",
    };

    if (phuongThucId === "4") {
      setPhuongThucTitle(phuongThucMap[phuongThucId]);
    } else {
      alert("Phương thức này chưa được hỗ trợ.");
      navigate("/nop-ho-so/xet-tuyen");
    }
  }, [phuongThucId, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "tenChungChi") {
      setFormData((prevData) => ({
        ...prevData,
        tenChungChi: value,
        diem: "",
      }));
    } else if (name === "diem") {
      // Allow only numbers and a single dot
      const sanitizedValue = value
        .replace(/[^0-9.]/g, "")
        .replace(/(\..*)\./g, "$1");
      setFormData((prevData) => ({
        ...prevData,
        [name]: sanitizedValue,
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleScoreStep = (direction) => {
    const currentScore = parseFloat(formData.diem) || 0;
    const step = parseFloat(
      scoreAttributes[formData.tenChungChi]?.step || "0.1"
    );
    const max = parseFloat(scoreAttributes[formData.tenChungChi]?.max);

    let newScore;
    if (direction === "up") {
      newScore = Math.min(currentScore + step, max);
    } else {
      newScore = Math.max(currentScore - step, 0);
    }

    // Format to handle potential floating point inaccuracies
    const decimalPlaces = (step.toString().split(".")[1] || []).length;
    setFormData((prev) => ({ ...prev, diem: newScore.toFixed(decimalPlaces) }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Hồ sơ sinh viên đã nộp:", {
      ...formData,
      phuongThuc: phuongThucId,
    });
    alert("Sinh viên đã nộp hồ sơ thành công!");
    navigate("/nop-ho-so/xet-tuyen");
  };

  if (phuongThucId !== "4") {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-800">
              Khai báo hồ sơ trực tuyến
            </h2>
            <p className="text-gray-600 mt-2">{phuongThucTitle}</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="hoTen"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Họ và tên
              </label>
              <input
                type="text"
                id="hoTen"
                name="hoTen"
                value={formData.hoTen}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                placeholder="Nguyễn Văn A"
              />
            </div>

            <div>
              <label
                htmlFor="diaChi"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Địa chỉ
              </label>
              <input
                type="text"
                id="diaChi"
                name="diaChi"
                value={formData.diaChi}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                placeholder="Số nhà, đường, phường/xã, quận/huyện, tỉnh/thành phố"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="tenChungChi"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Tên chứng chỉ
                </label>
                <select
                  id="tenChungChi"
                  name="tenChungChi"
                  value={formData.tenChungChi}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-red-500"
                >
                  <option>IELTS</option>
                  <option>TOEFL</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="diem"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Điểm
                </label>
                <div className="relative">
                  <input
                    type="text"
                    inputMode="decimal"
                    id="diem"
                    name="diem"
                    value={formData.diem}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                    placeholder={
                      scoreAttributes[formData.tenChungChi]?.placeholder ||
                      "Nhập điểm"
                    }
                  />
                  <div className="absolute inset-y-0 right-0 flex flex-col justify-center">
                    <button
                      type="button"
                      onClick={() => handleScoreStep("up")}
                      className="px-2 text-gray-500 hover:text-red-600 h-1/4 flex items-center text-xs"
                    >
                      ▲
                    </button>
                    <button
                      type="button"
                      onClick={() => handleScoreStep("down")}
                      className="px-2 text-gray-500 hover:text-red-600 h-1/4 flex items-center text-xs"
                    >
                      ▼
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-between items-center pt-4">
              <button
                type="button"
                onClick={() => navigate("/nop-ho-so/xet-tuyen")}
                className="text-gray-600 hover:text-gray-800 font-semibold py-3 px-3"
              >
                Hủy
              </button>
              <button
                type="submit"
                className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-lg shadow-md transition duration-300"
              >
                Nộp hồ sơ
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ThemMoiHoSo;
