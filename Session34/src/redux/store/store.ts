import { createStore } from "redux";
import { rootReducer } from "./reducer/rootReducer";
import type { Student } from "../../utils/types";

const STORAGE_KEY = "students";

const loadPreloadedState = (): { student: Student[] } | undefined => {
    try {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (!raw) return undefined;
        const parsed = JSON.parse(raw) as Student[];
        if (!Array.isArray(parsed)) return undefined;
        return { student: parsed };
    } catch {
        return undefined;
    }
};

export const store = createStore(rootReducer, loadPreloadedState() as any);

store.subscribe(() => {
    try {
        const state = store.getState() as any;
        const students: Student[] = state?.student ?? [];
        localStorage.setItem(STORAGE_KEY, JSON.stringify(students));
    } catch {
        // ignore
    }
});

export type RootState = ReturnType<typeof rootReducer>;