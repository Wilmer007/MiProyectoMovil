import React, { useState ,} from "react";
import { KeyboardTypeOptions, Text , TextInput, TouchableOpacity, View ,} from "react-native";
import { StyleSheet } from "react-native";
import { Button } from "react-native";
import {Ionicons, MaterialIcons} from "@expo/vector-icons"

type Props = {
    required? : boolean;
    type?: 'text' | 'email' | 'password' | 'number';
    value: string;
    placeholder : string;
    onChange: (text: string) => void;
}

export default function Custominput({type = "text", required, value, placeholder, onChange}: Props) {



    const [isSecureText, setIsSecureText] = useState(type === "password");
    const icon = type === 'email' ? 'email' : type === 'password' ? 'lock' : '';
    const isPasswordField = type === 'password';

    const keyboardType: KeyboardTypeOptions = type==='email'? 'email-address' : type === 'number' ? 'numeric' :'default';

    const getError = () => {
        if (type === 'email' && !value.includes('@')) return 'Correo invalido';
        if (type === 'password' && value.length < 6) return 'La contraseña debe ser mas fuerte';
    }
        const error = getError();    





    return (

           <View style={styles.wrapper}>
            {/* //inputContainer */}
            <View style={[styles.inputContainer, error && styles.inputError]}>
                <MaterialIcons name={icon as any } size={20} color="#000000" />
                <TextInput 
                 placeholder={placeholder}
                 value={value} 
                 onChangeText={onChange}
                 onBlur={()=>{}}
                 secureTextEntry={isSecureText}
                 style={styles.input}
                 />
               {isPasswordField && <TouchableOpacity 
                    onPress={()=>{setIsSecureText(!isSecureText);}}>
                <Ionicons name={isSecureText ? 'eye' : 'eye-off'} size={20} />
                </TouchableOpacity>}
                
                 </View>
                 { error && <Text style={styles.inputError}> {error} </Text>}
                 </View>


    );


}
const styles = StyleSheet.create({
   wrapper:{
        marginBottom: 10,
   },
    inputContainer: {
        //distribucion de componentes
        flexDirection: 'row',
        alignItems: 'center',
        //estilizacion de input
        borderWidth: 1,
        borderColor:'#ccc',
        borderRadius: 8, 
        paddingHorizontal: 13,
        backgroundColor: '#f9f9f9',
    },
    input:{
        //agregando espacio al componente input nativo
        paddingVertical: 10,
        paddingHorizontal: 15,
        width: '80%',
    },
    inputError: {
        borderColor: 'red',
        color: 'red'
    }
})