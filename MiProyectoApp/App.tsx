import { NavigationContainer } from "@react-navigation/native"
import StackNavigator from "./src/Navigation/StackNavigator"
import { navigationRef } from "./src/Navigation/NavigationService"
import { AuthProvider } from "./src/contexts/AuthContext"

export default function  App(){
  return (
    <AuthProvider>
    <NavigationContainer ref={navigationRef}>
        <StackNavigator />
    </NavigationContainer>
    </AuthProvider>
  )
}