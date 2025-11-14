// src/components/Header.jsx
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();

  return (
    <div
      className="d-flex flex-column align-items-center justify-content-center bg-primary text-white p-4"
      style={{ width: "220px", minHeight: "100vh" }}
    >
      <h3 className="fw-bold mb-5">TODO LIST</h3>
      <ul className="nav flex-column w-100">
        <li className="nav-item mb-3 text-center">
          <Link
            className={`nav-link text-white ${
              location.pathname === "/todo" ? "fw-bold text-warning" : ""
            }`}
            to="/todo"
          >
            할 일 목록
          </Link>
        </li>
        <li className="nav-item text-center">
          <Link
            className={`nav-link text-white ${
              location.pathname === "/todo/done" ? "fw-bold text-warning" : ""
            }`}
            to="/todo/done"
          >
            완료 목록
          </Link>
        </li>
      </ul>
    </div>
  );
}
