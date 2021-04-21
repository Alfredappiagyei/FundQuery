import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from "./LandingPage";
import SuggestedCampaigns from './SuggestedCampaigns';
import {MaterialCommunityIcons, AntDesign, MaterialIcons} from "@expo/vector-icons";
import ProfileScreen from './ProfileScreen';
const Tab = createBottomTabNavigator();

export default function BottomTab() {
  return (
 
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} 
          options={{
            tabBarLabel: 'Home',
           activeTintColor: '#e91e63',
           tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={24} />
          ),
         }}
        />
     
        <Tab.Screen name="campaigns" component={SuggestedCampaigns} 
         options={{
            tabBarLabel: 'Feed',
           activeTintColor: '#e91e63',
           tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="campaign" size={24} color="black" />
          ),
         }}
        />

        <Tab.Screen name="profile" component={ProfileScreen} 
         options={{
            tabBarLabel: 'Profile',
           activeTintColor: '#e91e63',
           tabBarIcon: ({ color, size }) => (
            <AntDesign name="dashboard" color={color} size={24} />
          ),
         }}
        />
      </Tab.Navigator>

  );
}

