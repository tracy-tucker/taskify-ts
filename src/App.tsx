import React, { useState } from "react";
import { Todo } from "./components/model";
import "./App.css";

import InputField from "./components/InputField";
import TodoList from "./components/TodoList";

// Component type = React.FC --> Functional Component
const App: React.FC = () => {
  // Assigning useState type to string
  const [todo, setTodo] = useState<string>("");
  // using the newly created model, Todo, to pass property types
  const [todos, setTodos] = useState<Array<Todo>>([]);

  // e => React.ChangeEvent<HTMLInputElement>, BUT!
  // React.FormEvent is the best type for a form event
  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      // passing in any existing todos using the spread operator,
      // then passing in the new todo with required properties.
      setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
      setTodo("");
    }
  };

  // console.log(todos);

  return (
    <div className="App">
      <span className="heading">Taskify</span>

      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default App;

// React.Node --> All types that React can be
// Since we are passing todo/setTodo over to InputField,
// we MUST go into InputField and set the types for todo/setTodo!

// A NOTE ON STATE
// Since both InputField & TodoList need state, these states will
// belong to the higher component (App).
// App passes todo state over to InputField comp,
// and the todos state over to TodoList comp.
// App will build the submit function, then pass that function
// over to Inputfield. InputField will then activate the function
// upon submit.
