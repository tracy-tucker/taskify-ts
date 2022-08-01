import React, { useRef } from "react";
import "./styles.css";

// Since we are passing todo/setTodo/handleAdd as props,
// we MUST set their types anywhere we are passing them!
// todo = string, setTodo = React.Dispatch<React.SetStateAction<string>>
// setTodo is a long & complicated type because it is a special function
// handleAdd is a type of function that does not return anything
// handleAdd is passing in e, so e needs it's type
interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}
// Props --> This passes in the parameter types for todo/setTodo
// One way to pass type
//  const InputField = ({ todo, setTodo }: Props) => {
// Another way to pass type, plus assigning type to InputField
const InputField: React.FC<Props> = ({ todo, setTodo, handleAdd }) => {
  // useRef --> used to store a mutable value that does NOT cause
  // a re-render, or used to access a DOM element directly.
  // we are using useRef to access the input element directly.
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <form
      className="input"
      onSubmit={(e) => {
        handleAdd(e);
        inputRef.current?.blur();
      }}
    >
      <input
        ref={inputRef}
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        className="input__box"
        type="input"
        placeholder="Enter a task"
      />
      <button className="input_submit" type="submit">
        Go
      </button>
    </form>
  );
};

export default InputField;

// A NOTE ON InputRef:
// use ref and assign it InputRef to access the form element directly.
// Within the form submit, we add inputRef.current?.blur(),
// which will blur REMOVE keyboard focus from the current element
// ALL OF THE ABOVE changes the darkened background back to
// light blue after the user enters "submit"
