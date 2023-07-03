export interface IAuthUserData{
    id?: number;
    email?: string;
    token?: string;
}

export interface IContext extends IAuthUserData {
    authenticate: ( email: string, password: string) => Promise<void>;
    logout: () => void;
}

export interface IAuthProvider {
    children: JSX.Element;
}