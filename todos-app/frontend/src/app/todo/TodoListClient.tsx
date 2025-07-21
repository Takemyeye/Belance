'use client';

import { useState } from 'react';

interface Todo {
  id: number;
  title: string;
}

interface Props {
  initialTodos: Todo[];
}

export default function TodoListClient({ initialTodos }: Props) {
  const [todos, setTodos] = useState<Todo[]>(initialTodos);
  const [newTitle, setNewTitle] = useState('');
  const [loading, setLoading] = useState(false);

  async function addTodo() {
    if (!newTitle.trim()) return;
    setLoading(true);

    const res = await fetch('http://localhost:3001/api/todos', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title: newTitle }),
    });

    if (res.ok) {
      const created: Todo = await res.json();
      setTodos(prev => [...prev, created]);
      setNewTitle('');
    }

    setLoading(false);
  };

  async function deleteTodo(id: number) {
     const deleteRes = await fetch(`http://localhost:3001/api/todos/${id}`, {
      method: 'DELETE',
    });

    if(deleteRes.ok) {
      setTodos(todo => todo.filter(todo => todo.id !== id));
      console.log(deleteRes)
    }
  };

  return (
    <div className="max-w-md mx-auto p-6">
      <div className="flex gap-2">
        <input
          className="border flex-1 px-2 py-1 rounded"
          placeholder="New Task"
          value={newTitle}
          onChange={e => setNewTitle(e.target.value)}
        />
        <button
          onClick={addTodo}
          disabled={loading}
          className="bg-blue-600 text-white px-4 py-1 rounded"
        >
          add
        </button>
      </div>

      <ul className="mt-4 space-y-2">
        {todos.map(todo => (
          <li
            key={todo.id}
            className="border p-2 rounded bg-gray-700 text-white"
          >
            <span>{todo.title}</span>
            <button
              onClick={() => deleteTodo(todo.id)}
              className="bg-red-600 px-2 py-1 rounded hover:bg-red-700"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
