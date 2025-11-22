import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from '../Screens/LoginScreen';
import HomeScreen from '../Screens/HomeScreen';
import Registro from '../Screens/Registro';
import TabsNavigator from './TabsNavigator';
import GuardaRutinas from '../Screens/GuardaRutinas';
import MisRutinas from '../Screens/MisRutinas';
import Macros from '../Screens/Macros';
import Retroalimentacion from '../Screens/Retroalimentacion';

export type RootStackParamList = {
    Login: undefined,
    Tabs: {email:string},
    Registro: undefined,
    GuardaRutinas: undefined,
    MisRutinas: undefined,
    Macros: undefined
    Retroalimentacion: undefined,


}
const Stack = createNativeStackNavigator<RootStackParamList>();

export default function StackNavigator() {
    return(
        <Stack.Navigator initialRouteName='Login' 
                            screenOptions={{headerShown: false}}>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Tabs" component={TabsNavigator} />
            <Stack.Screen name="Registro" component={Registro} />
            <Stack.Screen name="GuardaRutinas" component={GuardaRutinas} />
            <Stack.Screen name="MisRutinas" component={MisRutinas} />
            <Stack.Screen name="Macros" component={Macros} />
            <Stack.Screen name="Retroalimentacion" component={Retroalimentacion} />

            
        </Stack.Navigator>
    );
}