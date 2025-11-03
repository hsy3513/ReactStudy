import { useNavigate, useSearchParams } from 'react-router-dom';

export default () => {
  const [searchParams, setParams] = useSearchParams();
  const navigate = useNavigate();
  //get 쿼리 파라미터명으로 뽑으면 됨.
  const category = searchParams.get('category');
  const sort = searchParams.get('sort');
  const search = searchParams.get('search');

  // 쿼리 파라미터 업데이트 (예 : 필터 변경 - 카테고리 변경)
  const changeCategory = (newCategory) => {
    setParams({ category: newCategory, sort: sort });
  };
  // 원하는 페이지 이동
  const linkPost = (id) => {
    navigate(`/post/${id}`);
  };
  return (
    <>
      <h2>상품목록</h2>
      {category && <p>선택된 카테고리 : {category}</p>}
      {sort && <p>정렬기준 : {sort}</p>}
      {search && <p>검색어 : {search}</p>}
      <p>
        <button onClick={() => changeCategory('clothes')}>카테고리 변경</button>
        <button onClick={() => linkPost(300)}>포스트 페이지 이동</button>
      </p>
    </>
  );
};
