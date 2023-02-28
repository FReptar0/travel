import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Icon } from 'react-native-elements';
import Index from '../screen/IndexScreen';
import Details from '../screen/DetailsScreen';
import InformationScreen from '../screen/InformationScreen';
import IndexStack from './IndexStack';
import LogScreen from '../screen/LoginScreen';
import DetailsS from './DetailStack';
import InformationS from './InformationStack';

// const drawer = createDrawerNavigator();

// export default function AppNavigation() {
//     return (
//         <drawer.Navigator>
//             <drawer.Screen
//                 name="Index"
//                 component={Index}
//                 options={{ title: 'Home' }}
//             />
//             <drawer.Screen
//                 name="Details"
//                 component={Details}
//                 options={{ title: 'Details' }}
//             />
//             <drawer.Screen
//                 name="Information"
//                 component={InformationScreen}
//                 options={{ title: 'Information' }}
//             />
//         </drawer.Navigator>
//     )
// }

const tabs = createBottomTabNavigator();

export default function AppNavigation() {
    return (
        <tabs.Navigator screenOptions={({route})=>({
            headerShown: false,
            tabBarActiveTintColor: "black",
            tabBarInactiveTintColor: "gray",
            tabBarIcon:({color, size})=> showIcons(route, color, size)
            })}>
            <tabs.Screen
                name="Index"
                component={IndexStack}
                options={{ title: 'Home'}}
            />
            <tabs.Screen
                name="Details"
                component={DetailsS}
                options={{ title: 'Details'}}
            />
            <tabs.Screen
                name="Information"
                component={InformationS}
                options={{ title: 'Information Screen'}}
            />

        </tabs.Navigator>
    )
}

function showIcons(route, color, size) {
    let icono;
    if (route.name == "Index") {
        icono="home-circle"
    }
    if (route.name == "Details") {
        icono="details"
    }
    
    if (route.name == "Information") {
        icono="information"
    }
    return (
        <Icon
        type='material-community'
        name={icono}
        color={color}
        size={size}
        />
    )
}

// const Stack = createStackNavigator();

// export default function AppNavigation() {
//     return (
//         <Stack.Navigator>
//             <Stack.Screen
//                 name="Index"
//                 component={Screen}
//                 options={{ title: 'Home' }}
//             />
//             <Stack.Screen
//                 name="Details"
//                 component={Details}
//                 options={{ title: 'Details' }}
//             />
//             <Stack.Screen
//                 name="Information"
//                 component={InformationScreen}
//                 options={{ title: 'InformationScreen' }}
//             />
//         </Stack.Navigator>
//     )
// }