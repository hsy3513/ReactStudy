import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { registerMember } from '../utils/memberAPI';

export default () => {
  const navigate = useNavigate();
  const txtId = useRef(null);
  const txtPasswd = useRef(null);
  const txtUserName = useRef(null);
  const txtNickName = useRef(null);

  const register = async () => {
    //모든 항목이 입력 되었는지 체크
    if (!txtId.current.value || !txtPasswd.current.value || !txtUserName.current.value || !txtNickName.current.value) {
      alert('모든 항목에 정보를 입력하세요');
      return;
    }
    const res = await registerMember({
      id: txtId.current.value,
      passwd: txtPasswd.current.value,
      userName: txtUserName.current.value,
      nickName: txtNickName.current.value,
    });

    if (res.count == 0) {
      alert(res.msg);
    } else {
      alert(res.msg);
      navigate('/main');
    }
  };
  return (
    <div className="conatiner text-center">
      <h2>회원정보 등록 페이지</h2>
      <hr />
      <div className="container">
        <input type="text" id="id" className="form-control mb-2" placeholder="아이디를 입력하세요" ref={txtId} />
        <input type="password" className="form-control mb-2" placeholder="암호를 입력하세요" ref={txtPasswd} />
        <input type="text" className="form-control mb-2" placeholder="사용자 이름을 입력하세요" ref={txtUserName} />
        <input type="text" className="form-control mb-2" placeholder="닉네임을 입력하세요" ref={txtNickName} />
        <div>
          <button className="btn btn-primary me-2" onClick={register}>
            등록하기
          </button>
          <button className="btn btn-warning" onClick={() => navigate(-1)}>
            취소하기
          </button>
        </div>
      </div>
    </div>
  );
};