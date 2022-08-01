import React from "react";
import { Todo } from "./model";
import SingleTodo from "./SingleTodo";
import "./styles.css";

// Passing in the parameter value types
// Remember, todos is an array of todos!
// setTodos is a long & complicated type because it is a special function
interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<Props> = ({ todos, setTodos }) => {
  return (
    <div className="todos">
      {todos.map((todo) => (
        <SingleTodo
          todo={todo}
          key={todo.id}
          todos={todos}
          setTodos={setTodos}
        />
      ))}
    </div>
  );
};

export default TodoList;
