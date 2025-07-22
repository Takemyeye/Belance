import Link from "next/link";
import UserPanel from "./userPanel";

import './style/header.css'

export default function Header() {
  return (
    <header>
      <div className="header-container">
        <h1>Todo</h1>
        <nav>
          <Link href="/">
            <h3>Home</h3>
          </Link>
          <Link href="/todo">
            <h3>Todo</h3>
          </Link> 
          <Link href="https://github.com/Takemyeye">
            <h3>Git</h3>
          </Link>
        </nav>
        <UserPanel/>
      </div>
    </header>
  );
}
