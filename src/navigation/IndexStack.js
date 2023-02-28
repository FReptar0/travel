import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Index from '../screen/IndexScreen';
import LogScreen from '../screen/LoginScreen';
import RegisterScreenS from '../screen/RegisterScreen';

export default function IndexStack() {
    const stack = createStackNavigator();
    return (
        <stack.Navigator>
            <stack.Screen
                name="IndexS"
                component={Index}
                options={{ title: 'Inicio' }}
            />
            <stack.Screen
                name="LoginS"
                component={LogScreen}
                options={{ title: 'Iniciar Sesión' }}
            />
            <stack.Screen
                name="RegisterS"
                component={RegisterScreenS}
                options={{ title: 'Registrarte' }}
            />

        </stack.Navigator>
    )
}