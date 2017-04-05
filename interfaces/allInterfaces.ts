export interface User {
    id?: number;
    username: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}

export interface LoginCreds {
    identifier: string;
    password: string;
}

export interface Category {
    id?: number;
    name: string;
    userId: number;
}

export interface Errand {
    id?: number;
    description: string;
    reminderDate: Date;
    dueDate: Date;
    categoryId: number;
}
