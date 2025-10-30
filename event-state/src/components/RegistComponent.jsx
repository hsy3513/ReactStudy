import { useState } from 'react';

export default () => {
  const [name, setName] = useState('');
  const [passwd, setPasswd] = useState('');
  const [email, setEmail] = useState('');

  const changeName = (e) => {
    setName(e.target.value);
  };
  const changeEmail = (e) => {
    setEmail(e.target.value);
  };
  const changePasswd = (e) => {
    setPasswd(e.target.value);
  };

  const handleSubmit = (e) => {
    alert(`${name} / ${email} / ${passwd}`);
    e.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit}>
      <p>
        <label htmlFor="name">이름</label>
        <input type="text" id="name" onChange={changeName} />
      </p>
      <p>
        <label htmlFor="email">이메일</label>
        <input type="email" id="email" onChange={changeEmail} />
      </p>
      <p>
        <label htmlFor="pwd">암호</label>
        <input type="password" id="pwd" onChange={changePasswd} />
      </p>
      <p>
        <button>가입하기</button>
      </p>
    </form>
  );
};
