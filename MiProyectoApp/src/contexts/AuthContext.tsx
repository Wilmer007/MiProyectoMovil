import { createContext, useContext, useState } from "react"

type User = {
    email: string;
} | null;

type AuthContextType = {
    user: User;
    isAllowed: boolean;
    login: (email: string, password: string) => boolean;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}

export const AuthProvider = ({children} : {children: React.ReactNode}) => {
    const [user, setUser] = useState<User>(null);
    const [isAllowed, setIsAllowed] = useState<boolean>(false);

    const login = (email: string, password: string): boolean => {
        const allowed = email.endsWith('.com') && password.length >= 6;
        if (allowed) {
            setUser({email});
            setIsAllowed(true);
        }
        return allowed;
    }
    const logout = () => {
        setUser(null);
        setIsAllowed(false);
    }

    return (
        <AuthContext.Provider value={{user, isAllowed, login, logout}}>
            {children}
        </AuthContext.Provider>
    );
        
}