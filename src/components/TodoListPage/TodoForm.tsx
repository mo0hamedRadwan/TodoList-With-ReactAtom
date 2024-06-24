import { useState } from 'react';
import TodoFormOptions from './TodoFormOptions';
import { ITodoStateType } from '../../types';
import { todoListAtom } from '../../reactAtom/todolist/TodoListAtom';

const TodoForm = () => {
  const [todoData, setTodoData] = useState<ITodoStateType>({
    title: '',
    status: 'Todo',
    tags: [],
  });

  const handleTodoDataChange = (e: React.ChangeEvent) => {
    // @ts-expect-error : Must be detect HTML element
    const { name, value } = e.target;
    setTodoData({ ...todoData, [name]: value });
  };

  const selectTag = (tagName: string) => {
    const filteredTags = todoData.tags.filter((tag) => tag !== tagName);
    if (todoData.tags.length === filteredTags.length) {
      setTodoData({ ...todoData, tags: [...filteredTags, tagName] });
    } else {
      setTodoData({ ...todoData, tags: filteredTags });
    }
  };

  const checkTag = (tagName: string): boolean => {
    return todoData.tags.some((tag) => tag === tagName);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (todoData.title.trim().length) {
      todoListAtom.add_todo({
        ...todoData,
        id: Math.random(),
        title: todoData.title.trim(),
      });
    }
  };

  return (
    <form className="flex flex-col justify-center items-center mb-10" onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        id="todoTitle"
        placeholder="add Todo..."
        value={todoData.title}
        onChange={handleTodoDataChange}
        className="w-full p-2 mb-4 text-xl font-semibold bg-gray-100 border-2 border-gray-200 rounded focus:outline-none"
      />
      <TodoFormOptions
        todoData={todoData}
        handleTodoDataChange={handleTodoDataChange}
        selectTag={selectTag}
        checkTag={checkTag}
      />
    </form>
  );
};

export default TodoForm;
