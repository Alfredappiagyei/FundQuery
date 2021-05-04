import React from 'react';
import { View, StyleSheet } from 'react-native';
import {
  useTheme,
    Avatar,
    Drawer,
    Text,
} from 'react-native-paper';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Ionicons,MaterialCommunityIcons, Entypo, MaterialIcons} from '@expo/vector-icons'; 
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';
import { logoutUser } from "../store/authActions";
 import { connect } from "react-redux";

 function  DrawerContent({auth,logoutUser,navigation,props}) {
  const paperTheme = useTheme();

  return (
    <View style={{flex:1}}>
    <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
            <View style={styles.userInfoSection}>
                <TouchableOpacity  onPress={() => {navigation.navigate('Profile')}}>
                <View style={{flexDirection:'row',marginTop: 15}}>
                    <Avatar.Image 
                        source={{
                            uri: 'https://api.adorable.io/avatars/50/abott@adorable.png'
                        }}
                        size={50}
                    />
                    <View style={{marginLeft:15, flexDirection:'column'}}>
                        <Text style={styles.title}>issac@gmail.com</Text>
                        
                    </View>
                </View>
                </TouchableOpacity>

                
            </View>

            <Drawer.Section style={styles.drawerSection}>
                <DrawerItem 
                    icon={({color, size}) => (
                        <MaterialCommunityIcons 
                        name="home-outline" 
                        color={color}
                        size={size}
                        />
                    )}
                    label="Home"
                    onPress={() => {navigation.navigate('campaigns')}}
                    
                />
                <DrawerItem 
                    icon={({color, size}) => (
                        <MaterialCommunityIcons 
                        name="account" 
                        color={color}
                        size={size}
                        />
                    )}
                    label="Profile"
                    onPress={() => {navigation.navigate('Profile')}}
                />
                <DrawerItem 
                    icon={({color, size}) => (
                        <MaterialCommunityIcons 
                        name="bookmark-outline" 
                        color={color}
                        size={size}
                        />
                    )}
                    label="Create Campaign"
                    onPress={() => {navigation.navigate('Createcampaign')}}
                />
                <DrawerItem 
                    icon={({color, size}) => (
                        <MaterialIcons 
                        name="announcement" 
                        color={color}
                        size={size}
                        />
                    )}
                    label="Manage Campaigns"
                    onPress={() => {navigation.navigate('MyCampaign')}}
                />
                <DrawerItem 
                    icon={({color, size}) => (
                        <MaterialCommunityIcons 
                        name="account-check-outline" 
                        color={color}
                        size={size}
                        />
                    )}
                    label="Support"
                    onPress={() => {navigation.navigate('SupportScreen')}}
                />
            </Drawer.Section>
        </View>
    </DrawerContentScrollView>
    <Drawer.Section style={styles.bottomDrawerSection}>
    
        <DrawerItem 
            icon={({color, size}) => (
                <MaterialCommunityIcons 
                name="exit-to-app" 
                color={color}
                size={size}
                />
            )}
            label="Sign Out"
            onPress={logoutUser}
        />
  
    </Drawer.Section>
</View>
  );
}
 

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
      marginBottom: 15,
      borderTopColor: '#f4f4f4',
      borderTopWidth: 1,
      
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});
  
 
 


const mapStateToProps =(state) =>{
  return {auth:state}
}
export default connect(mapStateToProps, {logoutUser})(DrawerContent);
 