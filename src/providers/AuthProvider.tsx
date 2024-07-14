import { createContext, PropsWithChildren, useContext } from "react";
import { useEffect, useState } from "react";
import { Session } from "@supabase/supabase-js";
import { supabase } from "../lib/superbase";
import { User } from "@supabase/supabase-js";
import { AppState } from "react-native";
type AuthContext = {
    session: Session | null;
    user: User | null;
};
const AuthContext = createContext<AuthContext>({
    session: null,
    user: null,

});
AppState.addEventListener('change', (state) => {
    if (state === 'active') {
      supabase.auth.startAutoRefresh()
    } else {
      supabase.auth.stopAutoRefresh()
    }
  })
export default function AuthProvider({ children }: PropsWithChildren) {
    const [session, setSession] = useState<Session | null>(null)

    useEffect(() => {
        supabase.auth.getSession().then(({ data: { session } }) => {
            setSession(session)
        })

        supabase.auth.onAuthStateChange((_event, session) => {
            setSession(session)
        })
    }, [])
    return (
        <AuthContext.Provider value={{ session, user: session?.user}}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => useContext(AuthContext);