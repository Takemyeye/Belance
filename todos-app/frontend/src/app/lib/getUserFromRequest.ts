import { cookies } from 'next/headers';

export async function getUserFromRequest() {
  const cookieStore = cookies();
  const token = (await cookieStore).get('token')?.value;

  if (!token) return null;

  try {
    const res = await fetch('http://localhost:3001/api/user/current', {
      headers: { Authorization: `Bearer ${token}` },
      cache: 'no-store',
    });

    if (!res.ok) return null;
    return await res.json();
  } catch {
    return null;
  }
}
