import { ITodoType } from '../../types';
import TodoCard from './TodoCard';

const TodoItem = ({ todo }: { todo: ITodoType }) => {
  return (
    <div className="">
      <TodoCard id={todo.id} title={todo.title} tags={todo.tags} />
    </div>
  );
};

export default TodoItem;
