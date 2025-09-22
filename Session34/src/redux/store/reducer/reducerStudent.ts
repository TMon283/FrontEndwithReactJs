import type { Student } from "../../../utils/types";
type Action = { type: string; payload?: any };
const initialState: Student[] = [
    {
        id: "ST001",
        name: "Hoàng Thái Minh",
        age: 19,
        gender: 'Nam',
        birthday: "28/03/2006",
        hometown: "Hà Nội",
        address: "Thượng Phúc, Hà Nội"
    },
    {
        id: "ST002",
        name: "Nguyễn Khánh Linh",
        age: 19,
        gender: 'Nữ',
        birthday: "17/05/2006",
        hometown: "Hà Nội",
        address: "Thượng Phúc, Hà Nội"
    },
    {
        id: "ST003",
        name: "Nguyễn Quang Minh",
        age: 19,
        gender: 'Nam',
        birthday: "03/01/2006",
        hometown: "Hà Nội",
        address: "Thượng Phúc, Hà Nội"
    }
]

export const reducerStudent = (state: Student[] = initialState, action: Action) => {
    switch (action.type) {
        case "ADD_STUDENT": {
            const newStudent = (action as any).payload as Student;
            if (!newStudent || !newStudent.id) return state;
            const exists = state.some(s => s.id === newStudent.id);
            if (exists) return state;
            return [...state, newStudent];
        }
        case "UPDATE_STUDENT": {
            const updated = (action as any).payload as Student;
            if (!updated || !updated.id) return state;
            return state.map(s => s.id === updated.id ? updated : s);
        }
        case "DELETE_STUDENT": {
            const toDelete = (action as any).payload as { id: string };
            if (!toDelete || !toDelete.id) return state;
            return state.filter(s => s.id !== toDelete.id);
        }
        default:
            return state;
    }
}