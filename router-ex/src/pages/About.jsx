import { Link, Outlet } from 'react-router-dom';

export default () => {
  return (
    <>
      <h1>소개 페이지</h1>
      <p>프로젝트 소개 페이지 입니다.</p>
      <p>
        <Link to="team">팀 소개 페이지</Link>
        <Link to="company">회사 소개 페이지</Link>
      </p>
      <Outlet />
    </>
  );
};
