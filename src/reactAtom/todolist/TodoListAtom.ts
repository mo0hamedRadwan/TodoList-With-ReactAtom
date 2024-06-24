import { ITodoType } from './../../types/index';
import { atom } from '@mongez/react-atom';
import cache from '@mongez/cache';
import { PlainLocalStorageDriver, setCacheConfigurations } from '@mongez/cache';

type todoListActions = {
  add_todo: (todo: ITodoType) => void;
  remove_todo: (id: number) => void;
  update_todo: (id: number, title: string) => void;
  change_status: (id: number, title: string, position: number) => void;
};

setCacheConfigurations({
  driver: new PlainLocalStorageDriver(),
});

export const todoListAtom = atom<ITodoType[], todoListActions>({
  key: 'todoListAtom',
  default: cache.get('todoListAtom', []),
  beforeUpdate(todos) {
    cache.set('todoListAtom', todos);
    return todos;
  },
  actions: {
    add_todo: (todo: ITodoType) => {
      const todos = todoListAtom.value;
      todoListAtom.update([...todos, todo]);
    },
    remove_todo: (id: number) => {
      const todos = todoListAtom.value;
      todoListAtom.update(todos.filter((todo) => todo.id !== id));
    },
    update_todo: (id: number, title: string) => {
      const todos = todoListAtom.value;
      const todoList = todos.map((todo) => (todo.id === id ? { ...todo, title } : todo));
      todoListAtom.update(todoList);
    },
    change_status: (id: number, status: string, position: number) => {
      const todos = todoListAtom.value;
      const todoToMove: ITodoType = todos.find((todo) => todo.id === id) as ITodoType;
      const updatedTodos = todos.filter((todo) => todo.id !== id);

      updatedTodos.splice(position, 0, {
        ...todoToMove,
        status: status,
      });

      todoListAtom.update(updatedTodos);
    },
  },
});
