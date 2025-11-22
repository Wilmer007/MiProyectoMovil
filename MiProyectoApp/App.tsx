import { NavigationContainer } from "@react-navigation/native"
import StackNavigator from "./src/Navigation/StackNavigator"
import { navigationRef } from "./src/Navigation/NavigationService"
import { AuthProvider } from "./src/contexts/AuthContext"
import { Provider } from "react-redux"
import { store } from "./src/store"

export default function  App(){
  return (
    <Provider store={store}>
    <AuthProvider>
    <NavigationContainer ref={navigationRef}>
        <StackNavigator />
    </NavigationContainer>
    </AuthProvider>
    </Provider>
  )
}