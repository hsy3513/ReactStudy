import { useEffect, useRef, useState } from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

const defaultList = [
  { id: 1, text: '1번째 할 일', done: false },
  { id: 2, text: '2번째 할 일', done: false },
  { id: 3, text: '3번째 할 일', done: false },
  { id: 4, text: '4번째 할 일', done: false },
  { id: 5, text: '5번째 할 일', done: false },
];

export default () => {
  const [todoList, setTodoList] = useState(() => {
    const list = localStorage.getItem('todoList');
    if (list == null)
      return [...defaultList];
    return JSON.parse(list); // JSON 문자열을 객체로 변환
  });
  const num = useRef(todoList[todoList.length - 1].id + 1);

  useEffect(() => {
    localStorage.setItem('todoList', JSON.stringify(todoList));
  }, [todoList]);

  const addTodo = (txt) => {
    const newList = [...todoList, { id: num.current++, text: txt, done: false }];
    setTodoList(newList);
    // local Storage에 업데이트
    // localStorage.setItem('todoList', JSON.stringify(newList));
  };
  
  const deleteTodo = (id) => {
    setTodoList(todoList.filter((item) => item.id !== id));
  };
  
  const updateTodo = (id) => {
    setTodoList(
      todoList.map((todo) => {
        if (todo.id === id) {
          return { ...todo, done: !todo.done };
        }
        return todo;
      }),
    );
  };
  
  
  return (
    <>
      <h2>Todo List</h2>
      <TodoForm addTodo={addTodo} />
      {/* Todo List 출력하는 컴포넌트 */}
      <TodoList todoList={todoList} deleteTodo={deleteTodo} updateTodo={updateTodo} />
    </>
  );
};
