import "./globals.css";
import type { Metadata } from "next";
import Header from "./components/header";
import { UserProvider } from "./context/UserContext";
import { getUserFromRequest } from "./lib/getUserFromRequest";
 
export const metadata: Metadata = {
  title: "ToDoList",
};

export default async function RootLayout({ children }: any) {
  const user = await getUserFromRequest();
  
  return (
    <html lang="en">
      <body>
        <UserProvider initialUser={user}>
        <Header />
          {children}
        </UserProvider>
      </body>
    </html>
  );
}
