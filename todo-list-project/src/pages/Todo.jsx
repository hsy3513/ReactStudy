import { useEffect, useRef, useState } from 'react';
import { getTodoList, insertTodo, deleteTodo } from '../utils/api';

export default () => {
  const [todoList, setTodoList] = useState([]);
  const txtContent = useRef(null);

  const fetchTodoList = async () => {
    const data = await getTodoList();
    setTodoList(data.list);
  };

  useEffect(() => {
    fetchTodoList();
  }, []);

  const handleTodoDelete = async (id) => {
    try {
      const res = await deleteTodo(id);
      alert(res.msg);
      if (res.count != 0) {
        setTodoList(todoList.filter((item) => item.id != id));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const register = async () => {
    //모든 항목이 입력 되었는지 체크
    if (!txtContent.current.value) {
      alert('할 일을 입력하세요');
      return;
    }
    const res = await insertTodo({
      content: txtContent.current.value,
    });

    if (res.count == 0) {
      alert(res.msg);
    } else {
      alert(res.msg);
      fetchTodoList();
    }
  };

  return (
    <div>
      <div>
        <input type="text" id="content" placeholder="할 일 입력" ref={txtContent} />
        <button className="btn btn-primary me-2" onClick={register}>
          등록하기
        </button>
      </div>

      <table>
        <thead>
          <tr>
            <th>할 일</th>
            <th>날짜</th>
            <th>완료</th>
            <th>삭제</th>
          </tr>
        </thead>
        <tbody>
          {todoList.map((item) => (
            <tr key={item.id}>
              <td>{item.content}</td>
              <td>{item.createDate}</td>
              <td>
                <button className="btn btn-primary me-2">완료</button>
              </td>

              <td>
                <button className="btn btn-danger" onClick={() => handleTodoDelete(item.id)}>삭제</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
