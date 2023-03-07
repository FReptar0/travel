import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProfileScreeen from '../screen/ProfileScreeen';

export default function ProfileStack() {
    const stack = createNativeStackNavigator();
    return (
        <stack.Navigator>
            <stack.Screen
                name="profileS"
                component={ProfileScreeen}
                options={{ title: 'Profile' }}
            />
        </stack.Navigator>
    )
}