import TodoItem from './TodoItem';

export default ({ todoList, deleteTodo, updateTodo }) => {
  return (
    <div>
      <table className="table table-hover table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Todo</th>
            <th>Complate</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {todoList.map((item) => (
            <TodoItem key={item.id} todo={item} deleteTodo={deleteTodo} updateTodo={updateTodo} />
          ))}
        </tbody>
      </table>
    </div>
  );
};
