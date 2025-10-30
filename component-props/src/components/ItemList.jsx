import Item from './Item';

export default ({ profiles }) => {
  console.log(profiles);
  return (
    <>
      <h2>프로파일 목록</h2>
      {/* 프로파일 정보를 출력
          이름 나이 직업 순으로 출력
          */}
      <ul>
        {profiles.map((item, idx) => (
          <Item key={idx} profile={item} />
        ))}
      </ul>
    </>
  );
};
