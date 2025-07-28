import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, role }) => {
  const isAdminAuthenticated =
    localStorage.getItem("isAdminAuthenticated") === "true";
  const isStudentAuthenticated =
    localStorage.getItem("isStudentAuthenticated") === "true";

  if (role === "admin") {
    if (!isAdminAuthenticated) {
      // Nếu không phải admin đã đăng nhập, chuyển hướng về trang login của admin
      return <Navigate to="/admin/login" replace />;
    }
  } else if (role === "student") {
    if (!isStudentAuthenticated) {
      // Nếu không phải sinh viên đã đăng nhập, chuyển hướng về trang login của sinh viên
      return <Navigate to="/dang-nhap" replace />;
    }
  }

  return children;
};

export default ProtectedRoute;
