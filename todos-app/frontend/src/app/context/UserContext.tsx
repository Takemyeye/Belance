'use client';

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from 'react';
import Cookies from 'js-cookie';

interface User {
  name: string;
  email: string;
}

interface UserContextType {
  user: User | null;
  setUser: (user: User | null) => void;
  refreshUser: () => Promise<void>;
}

const UserContext = createContext<UserContextType>({
  user: null,
  setUser: () => {},
  refreshUser: async () => {},
});

interface UserProviderProps {
  children: ReactNode;
  initialUser?: User | null;
}

export function UserProvider({ children, initialUser = null }: UserProviderProps) {
  const [user, setUser] = useState<User | null>(initialUser);

  async function fetchUser() {
    const token = Cookies.get('token');
    if (!token) {
      setUser(null);
      return;
    }

    try {
      const res = await fetch('http://localhost:3001/api/user/current', {
        method: 'GET',
        headers: { Authorization: `Bearer ${token}` },
        credentials: 'include',
      });

      if (res.ok) {
        const data = await res.json();
        setUser(data);
      } else {
        setUser(null);
      }
    } catch {
      setUser(null);
    }
  }

  useEffect(() => {
    if (!initialUser) {
      fetchUser();
    }
  }, [initialUser]);

  return (
    <UserContext.Provider value={{ user, setUser, refreshUser: fetchUser }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  return useContext(UserContext);
}
