import { useParams, useSearchParams } from 'react-router-dom';

export default () => {
  const param = useParams();
  console.log(param);
  // const queryString = useSearchParams();
  // console.log(queryString);
  const { id } = useParams();
  return (
    <div>
      <h2>Post 페이지 입니다.</h2>
      <p>PathVariable : {id}</p>
    </div>
  );
};
