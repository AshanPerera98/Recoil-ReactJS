import { useRecoilState } from "recoil";
import { todoState } from "../state/atoms/Todo";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Todo from "./Todo";

function Todos() {
  const [todos, setTodos] = useRecoilState(todoState);
  const [inputText, setInputText] = useState("");

  function addTodo() {
    setTodos((prevTodos) => [...prevTodos, { id: uuidv4(), text: inputText }]);
    setInputText("");
  }

  function clearTodos() {
    setTodos([]);
  }

  function handleInputChnage(e) {
    setInputText(e.target.value);
  }

  console.log(todos);

  return (
    <main>
      <input
        value={inputText}
        placeholder="Enter todo item"
        type="text"
        id="todoInput"
        onChange={handleInputChnage}
      />
      <button onClick={addTodo}>Add Todo</button>
      <button onClick={clearTodos}>Delete Todos</button>

      {todos.map((todo) => {
        return <Todo key={todo.id} text={todo.text} id={todo.id} />;
      })}
    </main>
  );
}

export default Todos;
