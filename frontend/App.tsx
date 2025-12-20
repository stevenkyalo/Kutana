import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import PhoneInputScreen from './screens/Auth/PhoneInputScreen';
import OtpVerifyScreen from './screens/Auth/OtpVerifyScreen';
import SwipeScreen from './screens/Main/SwipeScreen';
import MatchesScreen from './screens/Main/MatchesScreen';
import ChatListScreen from './screens/Main/ChatListScreen';
import ProfileScreen from './screens/Main/ProfileScreen';
import ChatConversationScreen from './screens/Main/ChatConversationScreen';
import EditProfileScreen from './screens/Main/EditProfileScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function MainTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Swipe" component={SwipeScreen} />
      <Tab.Screen name="Matches" component={MatchesScreen} />
      <Tab.Screen name="Chat" component={ChatListScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="PhoneInput">
        <Stack.Screen name="PhoneInput" component={PhoneInputScreen} options={{ title: 'Kutana' }} />
        <Stack.Screen name="OtpVerify" component={OtpVerifyScreen} options={{ title: 'Verify OTP' }} />
        <Stack.Screen name="Main" component={MainTabs} options={{ headerShown: false }} />
        <Stack.Screen name="ChatConversation" component={ChatConversationScreen} options={{ title: 'Chat' }} />
        <Stack.Screen name="EditProfile" component={EditProfileScreen} options={{ title: 'Edit Profile' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
