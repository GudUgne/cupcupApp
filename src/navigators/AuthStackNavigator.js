import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import {LoginScreen} from "../pages/loginScreen";
import {RegistrationScreen} from "../pages/RegistrationScreen";


const AuthStack = createStackNavigator();
const LoginStack = createStackNavigator();

export function AuthStackNavigator() {
    return (
        <AuthStack.Navigator
            mode={'modal'}
            screenOptions={{
                headerShown: false,
            }}>
            <AuthStack.Screen name={'LoginStack'}>
                {() => (
                        <LoginStack.Navigator
                            mode={'card'}
                            screenOptions={{
                            headerShown: false,
                        }}>
                            <LoginStack.Screen name={'Login'} component={LoginScreen} />
                        </LoginStack.Navigator>
                    )}
            </AuthStack.Screen>
            <AuthStack.Screen name={'Registration'} component={RegistrationScreen} />
        </AuthStack.Navigator>
    );
}
