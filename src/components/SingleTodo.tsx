import React, { useEffect, useRef, useState } from "react";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import { Todo } from "./model";

// Created a type, just because. it's the same as an interface.
// Passing in parameter types! Just like InputField and TodoList
// Passing in todos & setTodos b/c we are going to make these editable.
type Props = {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const SingleTodo: React.FC<Props> = ({ todo, todos, setTodos }) => {
  // Creating a state for inline todo editing.
  // Initial state needs to be false
  const [edit, setEdit] = useState<boolean>(false);
  // This will set the state of the Todo property, todo.
  const [editTodo, setEditTodo] = useState<string>(todo.todo);

  // handleDelete filters out the deleted tasks from the list
  // Passes in ID of clicked todo
  const handleDelete = (id: number) => {
    // setTodos by filtering through all todos
    // if todo.id does NOT match the id passed in, then
    // while creating the new array, do not include any
    // unmatching todo.id's
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // handleDone maps todos and changes matching isDone to !isDone
  // Passes in ID of clicked todo
  const handleDone = (id: number) => {
    // setTodos by mapping over all todos.
    // if todo.id matches passed-in id, then send in all properties
    // of that todo, but change isDone to opposite.
    // if no match, then pass in the todo to the newly mapped array.
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, todo: editTodo } : todo))
    );
    setEdit(false);
  };

  // Adding inputRef to input field automatically places the
  // cursor inside the input field so user can start typing.
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, [edit]);

  return (
    <form className="todos__single" onSubmit={(e) => handleEdit(e, todo.id)}>
      {/* if edit is true, then provide an input field to edit todo */}
      {edit ? (
        // Value = the current Todo property of todo
        // which, editTodo is set to todo.todo
        <input
          ref={inputRef}
          value={editTodo}
          onChange={(e) => setEditTodo(e.target.value)}
          className="todo__single--text"
        />
      ) : // if edit is false (NOT editable)
      /* If todo.isDone is true, then show with strike-through */
      todo.isDone ? (
        <s className="todos__single--text">{todo.todo}</s>
      ) : (
        // if todo.isDone is false, then show normal todo
        <span className="todos__single--text">{todo.todo}</span>
      )}

      <div>
        <span
          className="icon"
          onClick={() => {
            // if edit AND isDone are both falsy, set edit to opposite
            if (!edit && !todo.isDone) {
              setEdit(!edit);
            }
          }}
        >
          <AiFillEdit />
        </span>
        <span className="icon" onClick={() => handleDelete(todo.id)}>
          <AiFillDelete />
        </span>
        <span className="icon" onClick={() => handleDone(todo.id)}>
          <MdDone />
        </span>
      </div>
    </form>
  );
};

export default SingleTodo;
