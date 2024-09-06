import { ThemeMode } from "@/styles/styles";
import { atom, AtomEffect } from "recoil";

const store = typeof window !== "undefined" ? window.localStorage : null;

const localStorageEffect: <T>(key: string) => AtomEffect<T> =
    (key) =>
    ({ setSelf, onSet }) => {
        if (store) {
            const savedValue = window.localStorage.getItem(key);
            if (savedValue != null) {
                // setSelf(JSON.parse(savedValue));
                setSelf(savedValue as any);
            }

            onSet((newValue, _, isReset) => {
                window.localStorage !== null && isReset
                    ? window.localStorage.removeItem(key)
                    : window.localStorage.setItem(key, newValue as any);
                // : window.localStorage.setItem(key, JSON.stringify(newValue));
            });
        }
    };

export const themeModeState = atom<ThemeMode>({
    key: "themeMode",
    default: "light",
    effects: [localStorageEffect<ThemeMode>("theme")],
});
