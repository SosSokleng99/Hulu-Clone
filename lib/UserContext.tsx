import React, { useState, useEffect, useContext, createContext, ProviderProps } from "react";
import {useRouter} from "next/router";
import { AuthSession, AuthUser, SupabaseClient } from "@supabase/supabase-js";
import { supabase } from "../lib/initSupabase"

type UserContextType = {
    user: AuthUser | null,
    session: AuthSession | null
}

type UserContextProviderProps = {
    children: React.ReactNode
}



const UserContext = createContext({} as UserContextType);

export const UserContextProvider = ({children}: UserContextProviderProps ) => {
    const router = useRouter()
    const [session, setSession] = useState<AuthSession | null>(null);
    const [user, setUser] = useState<AuthUser | null>(null);

    useEffect(() => {
        const session = supabase.auth.session();

        setSession(session);
        setUser(session?.user ?? null);

        if(session) setCookie(session, "SIGNED_IN")

        // setHash(window.location.hash);

        const {data: Subscription} = supabase.auth.onAuthStateChange(
            async (event: string, session: AuthSession | null) => {
                setSession(session);
                setUser(session?.user ?? null); 

                if (event === "PASSWORD_RECOVERY") {

                    const accessToken = window.location.hash
                        .substring(1)
                        .split("&")
                        .find(key => key.startsWith("access_token"))
                        ?.split("=")[1]

                    router.push({
                        pathname: "/resetpassword",
                        query: {accessToken}
                    });

                }

                if (event === "USER_UPDATED") {
                    setTimeout(() => router.push("/login"), 1000);
                }

                await setCookie(session, event)
            }
        );

        return () => {
            Subscription?.unsubscribe();
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const value = {
        session,
        user,
    };
    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
};

function setCookie(session: AuthSession | null, event: string) {
    fetch("/api/auth", {
        method: "POST",
        headers: new Headers({"Content-Type": "application/json"}),
        credentials: "same-origin",
        body: JSON.stringify({event: event, session: session}),
    }).then((res) => res.json());
}

export const useUser = () => {
    const context = useContext(UserContext);
    if (context === undefined) {
        throw new Error(`useUser must be used within a UserContextProvider.`);
    }
    return context;
};
