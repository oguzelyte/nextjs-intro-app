import Todo from './Todo';

const TodoList = ({ todos }) => {
  return (
    <div className="todos-list">
      {todos.map((todo) => {
        return <Todo key={todo.id} todo={todo} />;
      })}
    </div>
  );
};

export default TodoList;
