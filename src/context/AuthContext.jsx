import { createContext, useEffect, useState } from 'react';
import { supabase } from '../supabase/supabaseClient';

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

useEffect(() => {
  const fetchUser = async () => {
    const {
      data: { user: authUser },
    } = await supabase.auth.getUser();

    if (authUser) {
      const { data: profile, error } = await supabase
        .from('users')
        .select('username')
        .eq('id', authUser.id)
        .single();

      if (!error && profile) {
        setUser({ ...authUser, username: profile.username });
      } else {
        setUser(authUser);
      }
    } else {
      setUser(null);
    }
  };

  fetchUser(); // initial check

  const {
    data: authListener,
  } = supabase.auth.onAuthStateChange((_event, session) => {
    fetchUser(); // re-fetch when login/logout happens
  });

  return () => {
    authListener?.subscription.unsubscribe();
  };
}, []);


  return <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>;
}
