import { Link } from 'react-router-dom';

export default () => {
  return (
    <nav className="navbar navbar-expand-sm">
      <div className="container-fluid">
        <ul className="navbar-nav d-flex">
          <li className="nav-item me-3">
            <Link className="nav-link" to="/home">
              홈
            </Link>
          </li>
          <li className="nav-item me-3">
            <Link className="nav-link" to="/register">
              회원등록
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};