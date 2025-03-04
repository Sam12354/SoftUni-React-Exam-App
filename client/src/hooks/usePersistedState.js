import { useState, useEffect } from "react";
import requester from "../api/requester.js";

export default function usePersistedState(key, initialState) {
    const [state, setState] = useState(() => {
        const persistedAuth = localStorage.getItem(key);
        if (!persistedAuth) {
            return initialState;
        }
    
        return JSON.parse(persistedAuth);
    });

    useEffect(() => {
        async function fetchUser() {
            try {
                const user = await requester.get("http://localhost:7777/me");
                setState(user);
                localStorage.setItem(key, JSON.stringify(user));
            } catch {
                setState(null);
                localStorage.removeItem(key);
            }
        }
        fetchUser();
    }, [key]);

    const updateState = (value) => {
        if (value) {
            localStorage.setItem(key, JSON.stringify(value));
        } else {
            localStorage.removeItem(key);
        }
        setState(value);
    };

    return [state, updateState];
}