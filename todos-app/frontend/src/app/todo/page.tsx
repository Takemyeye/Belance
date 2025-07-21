// SSR
interface Todo {
  id: number;
  title: string;
}

// USE no cache for SSR
async function getTodos(): Promise<Todo[]> {
  const res = await fetch('http://localhost:3001/api/todos', {  
    method: 'GET',
    cache: 'no-store' });
  return res.json();
}
import TodoListClient from './TodoListClient';


export default async function TodoListPage() {
  const todos = await getTodos();

  return (
    <div>
      <TodoListClient initialTodos={todos} />
    </div>
  );
}
