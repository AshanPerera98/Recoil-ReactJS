import { useSetRecoilState } from "recoil";
import { todoState } from "../state/atoms/Todo";

function Todo({ text, id }) {
  const setTodos = useSetRecoilState(todoState);

  function deleteTodo() {
    setTodos((pervTodos) => {
      return pervTodos.filter((todo) => todo.id !== id);
    });
  }
  return (
    <div>
      <span>{text}</span>
      <button onClick={deleteTodo}>x</button>
    </div>
  );
}

export default Todo;
