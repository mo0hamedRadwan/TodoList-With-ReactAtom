import { columns } from '../../constant';
import TodoListColumn from './TodoListColumn';

const TodoList = () => {
  return (
    <div className="grid grid-cols-3 gap-x-2">
      {columns.map((column) => (
        <TodoListColumn
          columnName={column.columnName}
          icon={column.icon}
          key={column.columnName}
        />
      ))}
    </div>
  );
};

export default TodoList;
