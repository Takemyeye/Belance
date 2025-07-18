'use client';

import { useState, useEffect } from 'react';

interface Todo {
  id: number;
  title: string;
}

export default function TodoListPage() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTitle, setNewTitle] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch('/api/todos')
      .then(res => res.json())
      .then(setTodos)
      .catch(console.error);
  }, []);

  async function addTodo() {
    if (!newTitle.trim()) return;
    setLoading(true);

    const res = await fetch('/api/todos', {
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
  }

  return (
    <div className="max-w-md mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Todos</h1>

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
            className="border p-2 rounded bg-gray-700"
          >
            {todo.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
