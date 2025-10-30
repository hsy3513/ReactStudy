export default ({ profile }) => {
  const { name, age, job } = profile;
  return (
    <li>
      {name} / {age} / {job}
    </li>
  );
};
