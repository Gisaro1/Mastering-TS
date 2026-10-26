interface Todo {
  id: number;
  text: string;
  done: boolean;
}

function updateTodo<T extends { id: number },K extends keyof T>(
  list: T[],
  id: number,
  field: K,
  value: T[K]
): T[] {
  return list.map((item) =>
    item.id === id ? { ...item,[field] : value } : item
  );
}

const todos: Todo[] = [];