import { selector } from "recoil";
import { todoState } from "../atoms/Todo";

export const remainingTodos = selector({
  key: "remainingTodos",
  get: ({ get }) => {
    const todos = get(todoState);
    return todos.length;
  },
});
