// src/components/Todo.jsx
import { useEffect, useRef, useState } from "react";
import { getTodoList, insertTodo, deleteTodo, completeTodo } from "../utils/api";

export default function Todo() {
  const [todoList, setTodoList] = useState([]);
  const txtContent = useRef(null);

  const fetchTodoList = async () => {
    const data = await getTodoList();
    setTodoList(data.list || []);
  };

  useEffect(() => {
    fetchTodoList();
  }, []);

  const handleTodoDelete = async (id) => {
    const res = await deleteTodo(id);
    // alert(res.msg);
    if (res.result !== 0) setTodoList(todoList.filter((t) => t.id !== id));
  };

  const handleComplete = async (id) => {
    const res = await completeTodo(id);
    // alert(res.msg);
    if (res.result !== 0) setTodoList(todoList.filter((t) => t.id !== id));
  };

  const register = async () => {
    if (!txtContent.current.value.trim()) {
      alert("할 일을 입력하세요");
      return;
    }
    const res = await insertTodo({ content: txtContent.current.value });
    // alert(res.msg);
    if (res.result !== 0) {
      txtContent.current.value = "";
      fetchTodoList();
    }
  };

  return (
    <div className="flex-grow-1 p-5 bg-light">
      <div className="mb-4 d-flex">
        <input
          type="text"
          className="form-control me-2"
          placeholder="할 일 입력"
          ref={txtContent}
        />
        <button className="btn btn-primary" style={{ whiteSpace: 'nowrap' }} onClick={register}>
          등록하기
        </button>
      </div>

      <table className="table table-hover text-center align-middle bg-white shadow-sm">
        <thead className="table-primary">
          <tr>
            <th>할 일</th>
            <th>등록 일자</th>
            <th>완료</th>
            <th>삭제</th>
          </tr>
        </thead>
        <tbody>
          {todoList.length > 0 ? (
            todoList.map((item) => (
              <tr key={item.id}>
                <td>{item.content}</td>
                <td>{item.createDate}</td>
                <td>
                  <button
                    className="btn btn-success btn-sm"
                    onClick={() => handleComplete(item.id)}
                  >
                    완료
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleTodoDelete(item.id)}
                  >
                    삭제
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={4}>할 일이 없습니다</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
