import { tags } from '../../constant';
import { ITodoStateType } from '../../types';
import TagButton from './ui/TagButton';

type propsType = {
  todoData: ITodoStateType;
  handleTodoDataChange: (e: React.ChangeEvent) => void;
  selectTag: (tagName: string) => void;
  checkTag: (tagName: string) => boolean;
};

const TodoFormOptions = ({ todoData, handleTodoDataChange, selectTag, checkTag }: propsType) => {
  return (
    <div className="w-full flex items-center justify-between">
      <div className="flex items-center gap-2">
        {tags.map((tag) => (
          <TagButton
            tagName={tag.tagName}
            key={tag.tagName}
            selectTag={selectTag}
            selected={checkTag(tag.tagName)}
          />
        ))}
      </div>
      <div className="flex items-center gap-3">
        <select
          className="px-1 text-base border border-gray-300 rounded focus:outline-none"
          name="status"
          value={todoData.status}
          onChange={handleTodoDataChange}
        >
          <option value="Todo">Todo</option>
          <option value="Doing">Doing</option>
          <option value="Done">Done</option>
        </select>
        <button type="submit" className="py-1 px-3 rounded bg-purple-500 text-white font-bold">
          + Add Todo
        </button>
      </div>
    </div>
  );
};

export default TodoFormOptions;
