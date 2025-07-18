export async function POST(req: Request) {
  const data = await req.json();
  const { name, email } = data;

  return new Response(
    JSON.stringify({ message: "user registred", name, email}),
    { status: 200, headers: { 'Content-Type': 'application/json' } }
  );
}