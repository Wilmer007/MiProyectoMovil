import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from '../Screens/LoginScreen';
import HomeScreen from '../Screens/HomeScreen';
import Registro from '../Screens/Registro';
import TabsNavigator from './TabsNavigator';
import GuardaRutinas from '../Screens/GuardaRutinas';

export type RootStackParamList = {
    Login: undefined,
    Tabs: {email:string},
    Registro: undefined,
    GuardaRutinas: undefined,


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

            
        </Stack.Navigator>
    );
}