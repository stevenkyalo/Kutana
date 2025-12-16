import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import PhoneInputScreen from './screens/Auth/PhoneInputScreen';
import OtpVerifyScreen from './screens/Auth/OtpVerifyScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="PhoneInput">
        <Stack.Screen name="PhoneInput" component={PhoneInputScreen} options={{ title: 'Kutana' }} />
        <Stack.Screen name="OtpVerify" component={OtpVerifyScreen} options={{ title: 'Verify OTP' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
