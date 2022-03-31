import React from "react";
import "./styles.css";
import "../model";
import SingleTodo from "./SingleTodo";
import { Todo } from "../model";

interface Props {
  todos: Todo[];
  setTodos: Todo;
}

const TodoList: React.FC<Props> = ({ todos, setTodos }: Props) => {
  return (
    // <div className="todos">
    //   {todos.map((todo) => (
    //     <SingleTodo
    //       todo={todo}
    //       key={todo.id}
    //       todos={todos}
    //       setTodos={setTodos}
    //     />
    //   ))}
    // </div>
  );
};

export default TodoList;
