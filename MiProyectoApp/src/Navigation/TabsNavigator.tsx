import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import HomeScreen from '../Screens/HomeScreen';
import LoginScreen from '../Screens/LoginScreen';
import Registro from '../Screens/Registro';
import GuardaRutinas from '../Screens/GuardaRutinas';
import MisRutinas from '../Screens/MisRutinas';
import Macros from '../Screens/Macros';
import Retroalimentacion from '../Screens/Retroalimentacion';

const Ionicons = require('react-native-vector-icons/Ionicons').default;


//import ProfileScreen from '../Screens/';

export type TabsParamList = {
    Home: {newItem?: string} | undefined;
    Profile: undefined;
    Login: undefined;
    GuardaRutinas: undefined;
    MisRutinas: undefined;
    Macros : undefined;
    Retroalimentacion : undefined;

}

const Tab = createBottomTabNavigator<TabsParamList>();

export default function TabsNavigator() {
    return(
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen} options={{ title: 'Home', tabBarIcon: ({ color, size }) => {
                return <Ionicons name="home" size={size} color={color} />;
                },
            }}
            />
        </Tab.Navigator>
    );
}

