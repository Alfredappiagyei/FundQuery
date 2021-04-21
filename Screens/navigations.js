import { StatusBar } from "expo-status-bar";
import React from "react";
import {  TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator, HeaderBackground } from "@react-navigation/stack";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import {Entypo,AntDesign,MaterialCommunityIcons,Zocial} from '@expo/vector-icons'; 
 
// Screens IMPORTS
 
import  SuggestedCampaigns  from "../Screens/SuggestedCampaigns";
import  Discover  from "../Screens/DiscoverPage";
import  FundraisingFor  from "../Screens/FundraisingFor";
import  Plan  from "../Screens/Plan";
import  SuggestedCampaignDetails  from "../Screens/SuggestedCampaignDetails";
import  SuggestedCampaignPosts from "../Screens/SuggestedCampaignPost"
import  MyCampaign  from "./MyCampaign";
import  MyCampaignetails  from "./MyCampaignetails";
import  SignInScreen  from "./SignInScreen";
import  SignIpScreen  from "./SignUpScreen";
import  ProfileScreen from '../Screens/ProfileScreen';
import  HomeScreen from "../Screens/LandingPage";
import  WhatisCrowdfunding from "../Screens/WhatIsCrowdfunding";
import  SuccessStories from "../Screens/SuccessStories";
import  EditCampaignScreen from "./EditCampaignScreen"
import  SplashScreen from "./SplashScreen";
import  DrawerContent from "./DrawerContent";
import  CreateCampaignScren from "./CreateCampaignScren";
import  FluterPayScreen from "../Payment/FlutterPayScreen";
// AUTHENTICATIONS
import {connect} from 'react-redux'
 



const Drawer = createDrawerNavigator();
const FeedStack = createStackNavigator();
const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();
const ProfileStack = createStackNavigator();






const MainTabScreen = ({navigation}) => {
  return (
    <Tab.Navigator
    initialRouteName="campaigns"
      activeColor="#fff"
  >
    <Tab.Screen
      name="Feed"
      component={FeedStackScreen}
      options={{
        tabBarLabel: 'Feed',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="home" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="MyCampaign"
      component={MyCampaign}
      options={{
        tabBarLabel: 'Status',
        tabBarColor:"#009387",
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
        <Stack.Screen name="MyCampaignDetails" component={MyCampaignetails}  />
        <Stack.Screen  name="suggestedcampaignsdetails" component={SuggestedCampaignDetails} />
        <Stack.Screen name="Editcampaign" component={EditCampaignScreen}/> 
        <Stack.Screen name="home" component={HomeScreen} options={{headerShown: false}}/>
        <Stack.Screen  name="suggestedcampaignpost" component={SuggestedCampaignPosts}/>
        <Stack.Screen name="WhatIscrowdfunding" component={WhatisCrowdfunding} />
        <Stack.Screen name="success" component={SuccessStories} />
        <Stack.Screen name="discover" component={Discover} />
        <Stack.Screen name="fundraisingfor" component={FundraisingFor} />
        <Stack.Screen name="plan" component={Plan} />
        <Stack.Screen name="pay" component={FluterPayScreen} />
      </FeedStack.Navigator>
)
}








const ProfileStackScreen =({auth, navigation}) =>{
  return(
 <ProfileStack.Navigator>
        <ProfileStack.Screen 
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
           
           headerRight:()=>(
            <TouchableOpacity
                  style={{right:20}} >
                     <AntDesign 
                        name="edit"
                        size={30}
                        color="#000"                                 
                     />
                  </TouchableOpacity>
           )
          }} 
       

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
            <Stack.Screen name="home" component={HomeScreen} options={{headerShown: false}}/>       
            <Stack.Screen name="Signin" component={SignInScreen} />
            <Stack.Screen name="Signup" component={SignIpScreen} /> 
            <Stack.Screen name="pay" component={FluterPayScreen} />
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
         <Stack.Screen  name="suggestedcampaignsdetails" component={SuggestedCampaignDetails} />
          </Stack.Navigator>
        }
    </NavigationContainer>
  );
}
  
 
const mapStateToProps =(state) =>{
  return {auth:state}
}

export default connect(mapStateToProps)(Navigations)
 
 
