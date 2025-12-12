import { createContext, useContext, useEffect, useState } from "react"
import { supabase } from "../Services/supabaseUser";
import { Alert } from "react-native";
import { errorMessageValidation } from "../../utils/validations/apidbResponseErrorValidation";

type User = {
    id : string ;
    email?: string;
    token : string;
} | null;

type AuthContextType = {
    user: User | null;
    isAllowed: boolean;
    login: (email: string, password: string) => Promise<void>;
    register: (email: string, password: string) => Promise<void>;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

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


    const setUserSession = (data: any) => {
        const session = data.session;
        if (session && session.user){
            setUser({
                id: session.user.id,
                email: session.user.email,
                token : session.access_token,
            });
        }else{
            setUser(null);
        }
    }
    useEffect(() =>{
        const restoreSession  = async () =>{
            try{
          const {data,error} = await supabase.auth.getSession();
          errorMessageValidation(error, "Error al restaurar sesion");
            setUserSession(data);

        } catch (error){
            console.log("Error al restaurar sesion", error);
            setUser(null);

        }
    }
    restoreSession();
    },


    [])

    const register = async (email: string, password: string) => {
        const {data , error} = await supabase.auth.signUp({
            email,
            password
        }); 
        errorMessageValidation(error, "Error al registrar usuario");
        setUserSession(data);
    }

    const login = async (email: string, password: string) => {
        const {data,error} = await supabase.auth.signInWithPassword({
            email,
            password
        });
        if (error){
            Alert.alert("Error al iniciar sesion", error.message)
        };
        setUserSession(data);
    
    }
    const logout = async () => {
        await supabase.auth.signOut();
        setUser(null);
    }

    return (
        <AuthContext.Provider value={{user, isAllowed, login, logout, register}}>
            {children}
        </AuthContext.Provider>
    );
        
}