import { useEffect, useReducer, useRef, useState } from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

const defaultList = [
  { id: 1, text: '1번째 할일', done: false },
  { id: 2, text: '2번째 할일', done: false },
  { id: 3, text: '3번째 할일', done: false },
  { id: 4, text: '4번째 할일', done: false },
  { id: 5, text: '5번째 할일', done: false },
];

//todoList 제어하는 함수
function reducer(state, action) {
  switch (action.type) {
    case 'ADD':
      const n = state.id + 1;
      return { list: [...state.list, { id: n, text: action.payload, done: false }], id: n };
    case 'DELETE':
      return { ...state, list: state.list.filter((item) => item.id !== action.payload) };
    case 'UPDATE':
      return {
        ...state,
        list: state.list.map((todo) => {
          if (todo.id === action.payload) return { ...todo, done: !todo.done };
          return todo;
        }),
      };
  }
  return state;
}

function readTodoList() {
  let list = localStorage.getItem('todoList');
  let id = localStorage.getItem('id');
  if (list == null) list = [...defaultList];
  else list = JSON.parse(list);
  if (id == null) id = list.length;
  else id = parseInt(id);
  return { list: list, id: id };
}

export default () => {
  const [todoList, dispatch] = useReducer(reducer, readTodoList());
  useEffect(() => {
    console.log(todoList);
    localStorage.setItem('todoList', JSON.stringify(todoList.list));
    localStorage.setItem('id', todoList.id);
  }, [todoList]);

  const addTodo = (txt) => {
    dispatch({ type: 'ADD', payload: txt });
  };

  const deleteTodo = (id) => {
    dispatch({ type: 'DELETE', payload: id });
  };

  const updateTodo = (id) => {
    dispatch({ type: 'UPDATE', payload: id });
  };

  return (
    <>
      <h2>Todo List</h2>
      <TodoForm addTodo={addTodo} />
      {/* Todo List 출력하는 컴포넌트  */}
      <TodoList todoList={todoList.list} deleteTodo={deleteTodo} updateTodo={updateTodo} />
    </>
  );
};