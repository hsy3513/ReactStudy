import axios from 'axios';
import { useEffect, useState } from 'react';
import { deleteMember, getMemberList } from '../utils/memberAPI';
import { useNavigate } from 'react-router-dom';

export default () => {
  const [memberList, setMemberList] = useState([]);
  const navigate = useNavigate();
  const fetchMemberList = async () => {
    const data = await getMemberList();
    setMemberList(data.list);
  };

  useEffect(() => {
    fetchMemberList();
  }, []);
  
  const handleMemberDelete = async (id) => {
    try {
      const res = await deleteMember(id);
      alert(res.msg);
      // fetchMemberList();
      if (res.count != 0) {
        setMemberList(memberList.filter((item) => item.id !== id));
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container-lg">
      <table className="table table-hover table-striped text-center">
        <thead>
          <tr className="fs-4">
            <th>아이디</th>
            <th>이름</th>
            <th>닉네임</th>
            <th>비고</th>
          </tr>
        </thead>
        <tbody>
          {memberList &&
            memberList.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.userName}</td>
                <td>{item.nickName}</td>
                <td className="">
                  <button className="btn btn-primary me-2" onClick={() => navigate(`/member/update/view/${item.id}`)}>수정</button>
                  <button className="btn btn-danger" onClick={() => handleMemberDelete(item.id)}>삭제</button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};
