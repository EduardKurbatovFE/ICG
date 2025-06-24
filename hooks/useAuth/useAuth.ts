import { useEffect } from 'react';
import { router } from 'expo-router';

export const useAuth =() => {
  useEffect(() => {
    const user = null; 

    if (!user) {
      router.replace('/login');
    }
  }, []);
}
