import { useState } from 'react';
import { todoListAtom } from '../../reactAtom/todolist/TodoListAtom';
import TagButton from './ui/TagButton';
import TodoAction from './ui/TodoAction';
import { activeCardAtom } from '../../reactAtom/todolist/ActiveCard';

type propsType = {
  id: number;
  title: string;
  tags: string[];
};

const TodoCard = ({ id, title, tags }: propsType) => {
  const [isUpdated, setIsUpdated] = useState(false);
  const [newTitle, setNewTitle] = useState(title);
  // const [activeCard, setActiveCard] = activeCardAtom.useState();
  const handleDeleteTodo = () => {
    todoListAtom.remove_todo(id);
  };

  const handleUpdateTodo = () => {
    if (newTitle.trim().length === 0) return;
    setIsUpdated(false);
    todoListAtom.update_todo(id, newTitle);
  };

  return (
    <section
      draggable
      onDragStart={() => activeCardAtom.update(id)}
      onDragEnd={() => activeCardAtom.update(null)}
      className="w-full min-h-24 p-3 border border-gray-100 rounded cursor-grab active:opacity-70 active:border active:border-gray-500"
    >
      {isUpdated ? (
        <input
          type="text"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          className="border-b border-red-400 focus:outline-none"
        />
      ) : (
        <h3 className="text-lg">{title}</h3>
      )}
      <div className="flex sm:flex-wrap justify-between">
        <div className="flex sm:flex-wrap items-center gap-2 my-3 text-xs">
          {tags.map((tag) => (
            <TagButton tagName={tag} key={tag} selected />
          ))}
          {/* <TagButton tagName="HTML" />
          <TagButton tagName="CSS" />
          <TagButton tagName="JS" /> */}
        </div>
        <div className="flex items-center">
          {isUpdated ? (
            <>
              <TodoAction actionName="done" onClickAction={handleUpdateTodo} />
              <TodoAction actionName="cancel" onClickAction={() => setIsUpdated(false)} />
            </>
          ) : (
            <>
              <TodoAction actionName="edit" onClickAction={() => setIsUpdated(true)} />
              <TodoAction actionName="delete" onClickAction={handleDeleteTodo} />
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default TodoCard;
