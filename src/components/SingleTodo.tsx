import React from "react";
import { Todo } from "../model";

type Props = {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

export const SingleTodo = ({ todo, todos, setTodos }: Props) => {
  return (
    <form action="" className="todos__single">
      <span className="todos__single--text">{todo.todo}</span>
    </form>
  );
};
