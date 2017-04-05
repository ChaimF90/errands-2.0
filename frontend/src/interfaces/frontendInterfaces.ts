import { User } from '../../../interfaces/allInterfaces'

export interface RegisterPageState {
    user: User;
    accountCreated: boolean;
}

export interface RegisterPageProps {
    user: User;
    change: (e: any) => void;
    submit: () => void;
}