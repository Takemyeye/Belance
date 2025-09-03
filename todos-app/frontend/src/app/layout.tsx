import './globals.css';
import type { Metadata } from 'next';
import { UserProvider } from './context/UserContext';
import { getUserFromRequest } from './lib/getUserFromRequest';

export const metadata: Metadata = { title: 'Belance' };

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const initialUser = await getUserFromRequest();

  return (
    <html lang="en">
      <body>
        <UserProvider initialUser={initialUser}>
          {children}
        </UserProvider>
      </body>
    </html>
  );
}
