export interface IUserData{
    id?: number;
    email?: string;
    token?: string;
}

export interface IContext extends IUserData {
    authenticate: ( email: string, password: string) => Promise<void>;
    logout: () => void;
}

export interface IAuthProvider {
    children: JSX.Element;
}