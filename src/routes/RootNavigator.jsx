import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import AllCourrierScreen from '../screens/courrier/AllCourrierScreen';
import DetailCourrierScreen from '../screens/courrier/DetailCourrierScreen';
import DrawerNavigator from './DrawerNavigator';
export default function RootNavigator() {
    const Stack = createStackNavigator()
    return (
        <NavigationContainer
            theme={{
                colors: {
                    background: "#fff",
                },
            }}>
            <Stack.Navigator screenOptions={{ cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }}>
                <Stack.Screen name='Root' component={DrawerNavigator} options={{ headerShown: false }} />
                <Stack.Screen name="AllCourrierScreen" component={AllCourrierScreen} options={{ headerShown: false, cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid }} />
                <Stack.Screen name="DetailCourrierScreen" component={DetailCourrierScreen} options={{ headerShown: false, cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}