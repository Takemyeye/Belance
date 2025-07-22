'use client'

import Link from "next/link";
import { useUser } from "../context/UserContext";

export default function UserPanel() {
  const { user } = useUser();

  if (!user) {
    return (
      <button>
        <Link href="/register">Sign In</Link>
      </button>
    );
  }

  return (
    <div className="user relative">
      <h3>{user.name}</h3>
    </div>
  )
}
