import * as React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import SplashScreen1 from '../Screens/Splash/SplashScreen1';
import SplashScreen2 from '../Screens/Splash/SplashScreen2';
import SplashScreen3 from '../Screens/Splash/SplashScreen3';
import AccountPage from '../Screens/Splash/AccountPage';
import SignIn from '../Screens/UserFlow/SignIn';
import SignUp from '../Screens/UserFlow/SignUp';
import enterEmail from '../Screens/ForgotPassword/enterEmail';
import otp from '../Screens/ForgotPassword/opt';
import verify from '../Screens/ForgotPassword/verify';
const Stack = createNativeStackNavigator();

const AppNavigator = () =>{
    return (
        <NavigationContainer>
            <Stack.Navigator>
            <Stack.Screen 
                name='enterEmail'
                component={enterEmail}
                options={{headerShown:false}}
                />
                <Stack.Screen 
                name='otp'
                component={otp}
                options={{headerShown:false}}
                />
                  <Stack.Screen 
                name='verify'
                component={verify}
                options={{headerShown:false}}
                />
            <Stack.Screen 
                name='SignIn'
                component={SignIn}
                options={{headerShown:false}}
                />
                

            <Stack.Screen 
                name='SignUp'
                component={SignUp}
                options={{headerShown:false}}
                />
           
                <Stack.Screen
                name="SplashScreen1"
                component={SplashScreen1}
                options={{headerShown:false}}
                />
                <Stack.Screen
                name="SplashScreen2"
                component={SplashScreen2}
                options={{headerShown:false}}
                />
                <Stack.Screen 
                name="SplashScreen3"
                component={SplashScreen3}
                options={{headerShown:false}}
                />
                
                <Stack.Screen 
                name="AccountPage"
                component={AccountPage}
                options={{headerShown:false}}
                />
               
              
           
            
            </Stack.Navigator>


        </NavigationContainer>
    )
}
export default AppNavigator;