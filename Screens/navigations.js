import { StatusBar } from "expo-status-bar";
import React from "react";
import {  TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator, HeaderBackground } from "@react-navigation/stack";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import {Entypo,AntDesign,MaterialCommunityIcons,Zocial} from '@expo/vector-icons'; 
import {
  createBottomTabNavigator
} from '@react-navigation/bottom-tabs';
 
// Screens IMPORTS
 
import  SuggestedCampaigns  from "../Screens/SuggestedCampaigns";
import  Discover  from "../Screens/DiscoverPage";
import  SuggestedCampaignDetails  from "../Screens/SuggestedCampaignDetails";
import  SuggestedCampaignPosts from "../Screens/SuggestedCampaignPost"
import  MyCampaign  from "./MyCampaign";
import  SignInScreen  from "./SignInScreen";
import  SignIpScreen  from "./SignUpScreen";
import  ProfileScreen from '../Screens/ProfileScreen';
import  WhatisCrowdfunding from "../Screens/WhatIsCrowdfunding";
import  SuccessStories from "../Screens/SuccessStories"; 
import  EditCampaignScreen from "./EditCampaignScreen"
import  SplashScreen from "./SplashScreen";
import  DrawerContent from "./DrawerContent";
import  CreateCampaignScren from "./CreateCampaignScren";
import  FluterPayScreen from "../Payment/FlutterPayScreen";
import EditProfileScreen from "./EditprofileScreen";
 

// AUTHENTICATIONS
import {connect} from 'react-redux'

 




const Drawer = createDrawerNavigator();
const FeedStack = createStackNavigator();
const Stack = createStackNavigator();
const Tab =  createBottomTabNavigator();
const ProfileStack = createStackNavigator();






const MainTabScreen = ({navigation}) => {
  return (
    <Tab.Navigator
    initialRouteName="campaigns"
    tabBarOptions={{
      activeTintColor: '#009387',
    }}
  >
    <Tab.Screen
      name="Feed"
      component={FeedStackScreen}  
      options={{
        tabBarLabel: 'Feed',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="home" color={color} size={26}  />
        ),
      }}
    />
    <Tab.Screen
      name="MyCampaign"
      component={MyCampaign}
      options={{
        tabBarLabel: 'Status',
        tabBarIcon: ({ color }) => (
          <Zocial name="statusnet"    color={color}  size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Profile"
      component={ProfileStackScreen}
      options={{
        tabBarLabel: 'Profile',
        tabBarColor:"#fff",
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="account" color={color}  size={26} />
        ),
      }}
    />
  </Tab.Navigator>
  );
}
























const FeedStackScreen = ({auth, navigation}) =>{
  return(
 <FeedStack.Navigator>
         <Stack.Screen 
           options={{ 
            headerTitle:"Feed",
            headerStyle:{
              backgroundColor:"#009387",
            },
            headerTitleStyle:{
              color:"#fff",
              fontSize:22,
            },
            headerLeft:()=>( 
              <TouchableOpacity
              style={{left:10}} >
                 <Entypo 
                    name="menu"
                    size={37}
                    color="#fff"     
                    onPress={() =>navigation.openDrawer()}                     
                 />
              </TouchableOpacity>
         ),
        
        }} 
         name="campaigns" component={SuggestedCampaigns} />

        <Stack.Screen 
            options={{ 
              headerLeft:()=>( 
                <TouchableOpacity
                style={{left:10}} >
                   <Entypo 
                      name="menu"
                      size={35}
                      color="#000"     
                      onPress={() =>navigation.openDrawer()}                     
                   />
                </TouchableOpacity>
           ),
           
          }} 
        name="Profile" component={ProfileScreen} /> 
         <Stack.Screen name="Createcampaign" component={CreateCampaignScren} />
        <Stack.Screen name="MyCampaign" component={MyCampaign} />
        <Stack.Screen 
         options={{ 
          headerTitle:"Details",
          headerStyle:{
            backgroundColor:"#fff",
            borderColor:"fff"
          },
          headerTitleStyle:{
            color:"#000",
            fontSize:22,
          },   
      }} 
         name="suggestedcampaignsdetails" component={SuggestedCampaignDetails} />
        <Stack.Screen name="Editcampaign" component={EditCampaignScreen}/> 
        <Stack.Screen  name="suggestedcampaignpost" component={SuggestedCampaignPosts}/>
        <Stack.Screen name="WhatIscrowdfunding" component={WhatisCrowdfunding} />
        <Stack.Screen name="success" component={SuccessStories} />
        <Stack.Screen name="discover" component={Discover} />
        <Stack.Screen name="Editprofile" component={EditProfileScreen} />
       
      </FeedStack.Navigator>
)
}








const ProfileStackScreen =() =>{
  return(
 <ProfileStack.Navigator>
        <ProfileStack.Screen         
          options={({ navigation }) => ({
            headerLeft:()=>( 
              <TouchableOpacity
              style={{left:10}} >
                 <Entypo 
                    name="menu"
                    size={35}
                    color="#000"     
                    onPress={() =>navigation.openDrawer()}                     
                 />
              </TouchableOpacity>
         ),
         
         headerRight:()=>(
          <TouchableOpacity
          onPress={() =>navigation.navigate('Editprofile')}      
                style={{right:20}} >
                   <AntDesign 
                      name="edit"
                      size={30}
                      color="#000"    
                                                 
                   />
                </TouchableOpacity>
         )
            
          })}

        name="Profile" component={ProfileScreen} /> 
        
      </ProfileStack.Navigator>
)
}















      function Navigations({auth, navigation}) {
            return (
        <NavigationContainer>
              {
                auth.login ?
           <Drawer.Navigator  drawerContent={props => <DrawerContent {...props} />} >
             <Drawer.Screen name="campaigns" component={MainTabScreen} />
           </Drawer.Navigator>
          
            :
          <Stack.Navigator>   
            <Stack.Screen name="splashscreen" component={SplashScreen} options={{headerShown: false}}/>        
            <Stack.Screen name="Signin" component={SignInScreen} />
            <Stack.Screen name="Signup" component={SignIpScreen} /> 
 
            <Stack.Screen 
            options={({ navigation }) => ({
              headerTitle:"Feed",
              headerStyle: {
                backgroundColor:"#009387",
              },
              headerTitleStyle:{
                color:"#fff",
                fontSize:22,
              },
              headerRight: () => (
                <TouchableOpacity
                onPress={() =>navigation.navigate('Signin')}         
                style={{right:20}} >
                   <AntDesign 
                      name="adduser"
                      size={30}
                      color="#fff" 
                                                    
                   />
                </TouchableOpacity>
              ),
            })}
           
         name="campaigns" component={SuggestedCampaigns} />
         <Stack.Screen 
          options={{ 
            headerTitle:"Details",
            headerStyle:{
              backgroundColor:"#fff",
              borderColor:"fff"
            },
            headerTitleStyle:{
              color:"#000",
              fontSize:22,
            },   
        }} 
          name="suggestedcampaignsdetails" component={SuggestedCampaignDetails} />
         <Stack.Screen
         options={{ 
          headerTitle:"Payment",
          headerStyle:{
            backgroundColor:"#fff",
            borderColor:"fff"
          },
          headerTitleStyle:{
            color:"#000",
            fontSize:22,
          },     
      }} 
         name="pay" component={FluterPayScreen} />


        <Stack.Screen 
         options={{ 
          headerTitle:"What is Crowdfunding",
          headerStyle:{
            backgroundColor:"#fff",
            borderColor:"fff"
          },
          headerTitleStyle:{
            color:"#000",
            fontSize:22,
          },     
      }} 
        name="WhatIscrowdfunding" component={WhatisCrowdfunding} />
        <Stack.Screen
         options={{ 
          headerTitle:"Success stories",
          headerStyle:{
            backgroundColor:"#fff",
            borderColor:"fff"
          },
          headerTitleStyle:{
            color:"#000",
            fontSize:22,
          },     
      }} 
         name="success" component={SuccessStories} />
        
     
          </Stack.Navigator>
        }


    </NavigationContainer>
  );
}
  
 
const mapStateToProps =(state) =>{
  return {auth:state}
}

export default connect(mapStateToProps)(Navigations)
 
 
