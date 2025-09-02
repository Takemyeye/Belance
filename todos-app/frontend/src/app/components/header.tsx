import Link from "next/link";
import UserPanel from "./userPanel";

import './style/header.css'

type HeaderProps = {
  showPanel?: boolean
}

export default function Header({ showPanel = true }: HeaderProps) {
  return (
    <header>
      <Link href="/">
        <h1>Belance</h1>
      </Link>
      {showPanel && (
        <nav>
          <Link href="/">
            <h3>Home</h3>
          </Link> 
          <Link href="/about">
            <h3>About</h3>
          </Link>
        </nav>
      )}
      <UserPanel/>
    </header>
  );
}
