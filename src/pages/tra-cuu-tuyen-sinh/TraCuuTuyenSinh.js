import { useState } from "react";

const data = [
  {
    hoTen: "Nguyễn Văn An",
    ngaySinh: "15/08/2006",
    soBaoDanh: "PTIT00123",
    cccd: "012345678910",
    dvut: "Không",
    kvut: "KV3",
    diemKQXT: 27.5,
    toHop: "A00",
    ketQua: "Trúng tuyển",
  },
  {
    hoTen: "Trần Thị Bình",
    ngaySinh: "20/05/2006",
    soBaoDanh: "PTIT00456",
    cccd: "098765432109",
    dvut: "Không",
    kvut: "KV2-NT",
    diemKQXT: 26.8,
    toHop: "A01",
    ketQua: "Trúng tuyển",
  },
  {
    hoTen: "Lê Văn Cường",
    ngaySinh: "10/11/2006",
    soBaoDanh: "PTIT00789",
    cccd: "112233445566",
    dvut: "Không",
    kvut: "KV1",
    diemKQXT: 28.1,
    toHop: "D01",
    ketQua: "Trúng tuyển",
  },
];

const TraCuuTuyenSinh = () => {
  const [cccd, setCccd] = useState("");
  const [result, setResult] = useState(null);
  const [searched, setSearched] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    const foundResult =
      data.find((student) => student.cccd === cccd.trim()) || null;
    setResult(foundResult);
    setSearched(true);
  };

  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center">
          <h1 className="mt-4 text-3xl font-extrabold text-gray-900">
            TRA CỨU KẾT QUẢ TUYỂN SINH ĐẠI HỌC CHÍNH QUY NĂM 2025
          </h1>
          <div className="mt-2 w-24 h-1 bg-red-600 mx-auto"></div>
        </div>

        <div className="mt-10">
          <div className="mt-8 bg-white p-8 rounded-lg shadow-md">
            <div className="flex items-center text-gray-700 mb-6">
              <svg
                className="w-6 h-6 text-red-600 mr-3"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V8a2 2 0 00-2-2h-5L9 4H4zm2 6a1 1 0 100 2h8a1 1 0 100-2H6z" />
              </svg>
              <h3 className="text-lg font-semibold">
                Tra cứu theo số CMND/CCCD
              </h3>
            </div>
            <form onSubmit={handleSearch}>
              <label
                htmlFor="cccd"
                className="block text-sm font-medium text-gray-700"
              >
                Số CMND/CCCD
              </label>
              <input
                type="text"
                id="cccd"
                value={cccd}
                onChange={(e) => setCccd(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
                placeholder="Nhập số CMND/CCCD"
              />
              <p className="mt-2 text-sm text-gray-500">
                <span className="text-red-600 font-medium">Lưu ý:</span> chỉ
                nhập số CMND/CCCD để tra cứu
              </p>
              <div className="mt-6 text-center">
                <button
                  type="submit"
                  className="inline-flex items-center px-8 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                >
                  Tìm kiếm
                </button>
              </div>
            </form>
          </div>

          <div className="mt-8 overflow-x-auto">
            <div className="min-w-full inline-block align-middle">
              <div className="bg-white shadow-sm rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      {[
                        "Họ và tên",
                        "Ngày sinh",
                        "Số báo danh",
                        "ĐVƯT",
                        "KVƯT",
                        "Điểm KQXT",
                        "Tổ hợp",
                        "Kết quả xét tuyển",
                      ].map((header) => (
                        <th
                          key={header}
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          {header}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {searched && result ? (
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {result.hoTen}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {result.ngaySinh}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {result.soBaoDanh}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {result.dvut}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {result.kvut}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {result.diemKQXT}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {result.toHop}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-green-600">
                          {result.ketQua}
                        </td>
                      </tr>
                    ) : (
                      <tr>
                        <td colSpan="8" className="px-6 py-16 text-center">
                          <div className="flex flex-col items-center text-gray-400">
                            <svg
                              className="w-12 h-12 mb-2"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1"
                                d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                              />
                            </svg>
                            <p>Trống</p>
                          </div>
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TraCuuTuyenSinh;
