import { useState, useEffect } from "react";

const getStorageValue = (key: any, defaultValue: any) => {
    const saved: any = localStorage.getItem(key);
    const initial = JSON.parse(saved);
    return initial || defaultValue;
}

export const useLocalStorage = (key: any, defaultValue: any) => {
    const [value, setValue] = useState(() => {
		return getStorageValue(key, defaultValue);
	});

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    });

    return [value, setValue];
}