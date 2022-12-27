export type Keys<T extends object> = keyof T

export type Values<T extends object> = T[Keys<T>];

export interface Todo {
    userId: string,
    id: string,
    title: string,
    completed: boolean,
}

export const enum Icons {
    DEL = 'delete',
    STATUS = 'status',
    ADD = 'add'
};
