import TodoList from "./TodoList"
import TodoListHeader from "./TodoListHeader"


export const TodoListPage = () => {
  return (
    <div className="max-w-4xl mx-auto sm:mt-8 p-4 rounded-lg">
      <TodoListHeader />
      <TodoList />
    </div>
  );
}
