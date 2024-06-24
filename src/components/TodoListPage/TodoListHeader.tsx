import TodoForm from "./TodoForm";

const TodoListHeader = () => {
  return (
    <div className="w-full flex flex-col gap-y-8">
      <h1 className="text-4xl text-center font-bold">Todo List App</h1>
      <TodoForm />
    </div>
  );
}

export default TodoListHeader
