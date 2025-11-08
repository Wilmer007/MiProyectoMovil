import { NavigationContainer } from "@react-navigation/native"
import StackNavigator from "./src/Navigation/StackNavigator"
import { navigationRef } from "./src/Navigation/NavigationService"

export default function  App(){
  return (
    <NavigationContainer ref={navigationRef}>
        <StackNavigator />
    </NavigationContainer>
  )
}