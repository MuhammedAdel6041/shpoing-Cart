import { useEffect, useState } from "react";

export function useLocalStorage<host>(key: string, initialValue: host | (() => host)) {
    const [value, setValue] = useState<host>(() => {
        const storedValue = localStorage.getItem(key);
        if (storedValue) {
            return JSON.parse(storedValue);
        }
        return typeof initialValue === "function" ? (initialValue as () => host)() : initialValue;
    })
    useEffect(()=>{
localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);

    return [value, setValue] as [typeof value ,typeof setValue];
}
