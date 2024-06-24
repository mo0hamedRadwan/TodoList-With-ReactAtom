import { activeCardAtom } from '../../reactAtom/todolist/ActiveCard';
import { todoListAtom } from '../../reactAtom/todolist/TodoListAtom';
import TodoItem from './TodoItem';
import DropArea from './ui/DropArea';

type propsType = {
  columnName: string;
  icon: string;
};

const TodoListColumn = ({ columnName, icon }: propsType) => {
  const todos = todoListAtom.useValue();
  const activeCard = activeCardAtom.useValue();

  const onDrop = (status: string, position: number) => {
    console.log(`${activeCard} is going to place into ${status} and at position ${position}`);
    if (activeCard === null) return;

    todoListAtom.change_status(activeCard, status, position);
  };

  return (
    <div>
      <h3 className="flex items-center gap-2 mb-4 font-bold ">
        <img src={icon} alt="icon" className="w-6 h-6" />
        <span className="">{columnName}</span>
      </h3>
      <ul className="flex flex-col gap-2">
        <DropArea key={0} onDrop={() => onDrop(columnName, 0)} />
        {todos.map(
          (todo, index) =>
            todo.status === columnName && (
              <>
                <TodoItem key={todo.id} todo={todo} />
                <DropArea key={index + 1} onDrop={() => onDrop(columnName, index + 1)} />
              </>
            )
        )}
      </ul>
    </div>
  );
};

export default TodoListColumn;
