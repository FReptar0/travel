import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import LogScreen from '../screen/LoginScreen';
import Details from '../screen/DetailsScreen';

export default function DetailsS() {
    const stack = createStackNavigator();
    return (
        <stack.Navigator>
            <stack.Screen
                name="Details"
                component={Details}
                options={{ title: 'Details' }}
            />
            <stack.Screen
                name="LoginS"
                component={LogScreen}
                options={{ title: 'Home' }}
            />
        </stack.Navigator>
    )
}