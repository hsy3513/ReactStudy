// src/components/Done.jsx
import { useEffect, useState } from "react";
import { getDoneList, deleteDone } from "../utils/api";

export default function Done() {
  const [doneList, setDoneList] = useState([]);

  const fetchDoneList = async () => {
    const data = await getDoneList();
    setDoneList(data.list || []);
  };

  useEffect(() => {
    fetchDoneList();
  }, []);

  const handleDoneDelete = async (id) => {
    const res = await deleteDone(id);
    // alert(res.msg);
    if (res.result !== 0) setDoneList(doneList.filter((t) => t.id !== id));
  };

  return (
    <div className="flex-grow-1 p-5 bg-light">

      <table className="table table-hover text-center align-middle bg-white shadow-sm">
        <thead className="table-success">
          <tr>
            <th>완료 항목</th>
            <th>완료일</th>
            <th>삭제</th>
          </tr>
        </thead>
        <tbody>
          {doneList.length > 0 ? (
            doneList.map((item) => (
              <tr key={item.id}>
                <td>{item.content}</td>
                <td>{item.createDate}</td>
                <td>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleDoneDelete(item.id)}
                  >
                    삭제
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={3}>완료된 항목이 없습니다 🎉</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
