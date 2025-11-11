import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import HomeScreen from '../Screens/HomeScreen';
import LoginScreen from '../Screens/LoginScreen';
import Registro from '../Screens/Registro';


//import ProfileScreen from '../Screens/';

export type TabsParamList = {
    Home: {newItem?: string} | undefined;
    Profile: undefined;
    Login: undefined;
}

const Tab = createBottomTabNavigator<TabsParamList>();

export default function TabsNavigator() {
    return(
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen} options={{title: 'Home'}}/>


            

        </Tab.Navigator>
    );
}

//<Tab.Screen name="Profile" component={ProfileScreen} options={{title: 'Perfil'}}/>