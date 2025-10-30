export default (props) => {
  const profile = {
    name: '김철수',
    age: props.age,
    job: '대학원생',
    imgURL: '/profile.jpg',
    imgSize: 100,
  };
  return <>
    <h1>Profile</h1>
    <img src={profile.imgURL} width={profile.imgSize} />
    <p>이름: {profile.name}</p>
    <p>나이: {profile.age}</p>
    <p>직업: {profile.job}</p>
  </>
};