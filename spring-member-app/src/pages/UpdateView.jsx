import { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getMember, updateMember } from '../utils/memberAPI';

export default () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [member, setMember] = useState(null);
  useEffect(() => {
    const fetchMember = async () => {
      const data = await getMember(id);
      console.log(data.member);
      if (!data.member) navigate(-1);
      else setMember(data.member);
    };
    fetchMember();
  }, []);

  const txtPasswd = useRef(null);
  const handleUpdateMember = async () => {
    const result = 0; // 수정 결과

    //암호 형식 체크
    const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#%$^&*])[A-Za-z\d!@#$%\^&\*]{8,20}$/;
    console.log(pattern.test(txtPasswd.current.value));
    if (!pattern.test(txtPasswd.current.value)) {
      alert('암호는 8글자 이상 20자 이하, 알파벳 대소문자 및 숫자가 꼭 1글자씩은 포함되어야합니다.');
      return;
    }
    //axios 호출하기
    const data = await updateMember(member);
    if (data.result == 1) {
      navigate('/main');
    } else {
      alert(data.msg);
    }
  };
  return (
    <div className="conatiner text-center">
      <h2>회원정보 수정 페이지</h2>
      <hr />
      {member && (
        <div className="container">
          <input type="text" id="id" className="form-control mb-2" value={member.id} readOnly />
          <input type="password" className="form-control mb-2" ref={txtPasswd} placeholder="암호를 입력하세요" />
          <input
            type="text"
            className="form-control mb-2"
            value={member.userName}
            placeholder="사용자 이름을 입력하세요"
            onChange={(e) => {
              setMember({ ...member, userName: e.target.value });
            }}
          />
          <input
            type="text"
            className="form-control mb-2"
            value={member.nickName}
            placeholder="닉네임을 입력하세요"
            onChange={(e) => {
              setMember({ ...member, nickName: e.target.value });
            }}
          />
          <div>
            <button className="btn btn-primary me-2" onClick={() => handleUpdateMember()}>
              수정하기
            </button>
            <button className="btn btn-warning" onClick={() => navigate(-1)}>
              취소하기
            </button>
          </div>
        </div>
      )}
    </div>
  );
};