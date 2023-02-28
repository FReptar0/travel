import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import LogScreen from '../screen/LoginScreen';
import InformationScreen from '../screen/InformationScreen';

export default function InformationS() {
    const stack = createStackNavigator();
    return (
        <stack.Navigator>
            <stack.Screen
                name="Information"
                component={InformationScreen}
                options={{ title: 'Information' }}
            />
        </stack.Navigator>
    )
}