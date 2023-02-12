import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import userTab from './navigation/userTab'
import {
  Home,
  AddProduct,
  AdminAllOrders,
  AdminAllProducts,
  AdminSetting,
  Cart,
  Login,
  Signup,
  Splash,
  UserSetting
} from './screens'

const Stack = createStackNavigator()

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
        initialRouteName={'Splash'}
      >
        <Stack.Screen name='UserTab' component={userTab} />
        {/* <Stack.Screen name='UserTab' component={userTab} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App