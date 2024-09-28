import { useEffect, useCallback } from "react";

export function useFetchUser(setUser, user) {
  const memoizedSetUser = useCallback((data) => {
    setUser(data);
  }, [setUser]);

  useEffect(() => {
    const tokenFromUrl = new URLSearchParams(window.location.search).get('token');
    
    if (tokenFromUrl) {
      localStorage.setItem('token', tokenFromUrl);
    }

    const token = localStorage.getItem('token');

    if (token && !user) {
      fetch('http://localhost:3001/api/current_user', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      })
        .then(response => response.json())
        .then(data => {
          if (data && data.username) {
            memoizedSetUser(data);
          }
        })
        .catch(err => console.error('Ошибка получения пользователя:', err));
    }
  }, [user, memoizedSetUser]);
}
