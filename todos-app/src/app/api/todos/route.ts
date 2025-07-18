interface Todo {
  id: number;
  title: string;
}

let todos: Todo[] = [
  { id: 1, title: 'Купить хлеб' },
  { id: 2, title: 'Сделать проект' },
  { id: 3, title: 'Отсосать хуй' },
];

export async function GET() {
  return new Response(JSON.stringify(todos), {
    headers: { 'Content-Type': 'application/json' },
  });
}

export async function POST(req: Request) {
  const { title }: { title: string } = await req.json();
  const newTodo: Todo = { id: Date.now(), title };
  todos.push(newTodo);

  return new Response(JSON.stringify(newTodo), {
    status: 201,
    headers: { 'Content-Type': 'application/json' },
  });
}
