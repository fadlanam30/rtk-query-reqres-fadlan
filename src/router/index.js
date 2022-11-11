import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import HomeScreen from '../screens/home'
import LoginScreen from '../screens/login'

const Stack = createNativeStackNavigator()

const Router = () => (
    <Stack.Navigator
        screenOptions={{
            headerShown: false
        }}
    >
        <Stack.Screen
            name='LoginScreen'
            component={LoginScreen}
        />
        <Stack.Screen
            name='HomeScreen'
            component={HomeScreen}
        />
    </Stack.Navigator>
)

export default Router