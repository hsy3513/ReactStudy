import { useRef } from 'react';

export default ({ addTodo }) => {
  const txt = useRef(null);
  return (
    <div className="input-group">
      <input type="text" ref={txt} className="form-control" />
      <button className="btn btn-dark" onClick={() => addTodo(txt.current.value)}>
        submit
      </button>
    </div>
  );
};
