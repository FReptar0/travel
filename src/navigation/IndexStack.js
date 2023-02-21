import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Index from '../screen/IndexScreen';
import LogScreen from '../screen/LoginScreen';

export default function IndexStack() {
    const stack = createStackNavigator();
    return (
        <stack.Navigator>
            <stack.Screen
                name="IndexS"
                component={Index}
                options={{ title: 'Home' }}
            />
            <stack.Screen
                name="LoginS"
                component={LogScreen}
                options={{ title: 'Home' }}
            />
        </stack.Navigator>
    )
}