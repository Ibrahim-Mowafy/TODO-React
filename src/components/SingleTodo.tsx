import React from "react";
import { Todo } from "../model";

type Props = {
  todo: Todo;
  todos: Todo[];
};

const SingleTodo = ({ todo, todos, setTodos }) => {
  return <div>SingleTodo</div>;
};

export default SingleTodo;
