
import React from 'react';
import {Ionicons,MaterialCommunityIcons, Entypo, MaterialIcons} from '@expo/vector-icons'; 
import * as Animatable from 'react-native-animatable';
import {LinearGradient} from 'expo-linear-gradient'
import * as ImagePicker from 'expo-image-picker';
import firebase from "../firebase/firebase";
import { 
    View, 
    Text, 
    TouchableOpacity, 
    Platform,
    StyleSheet ,
    StatusBar,  
    Image,
    Share,
    ScrollView

} from 'react-native';

 class ProfileScreen extends React.Component{

  constructor(props) {
    super(props);
    this.state = { 
    image: null
    };
  }
   
   
 
componentDidMount=()=>{
  (async () => {
    if (Platform.OS !== 'web') {
     const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!');
     }
    }
  })();
}
    render(){
         let {navigation} = this.props 

         const pickImage = async () => {
          let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
            base64: true
          });
          console.log(result);
         
          if (!result.cancelled) {
            this.setState({
              image:result.base64
            });
          }
        };
    
        
        const myCustomShare = async () =>{
          const shareptions ={
              message: "This is the message",
          }
           try {
               const result = await Share.share(shareptions);
               
           } catch(error){
                       console.log(error)
           }
       }

       var user= firebase.auth().currentUser;
       var email;
       if (user != null) {
         email = user.email;
       }
       console.log(user.email)
        return(
            <ScrollView  style={styles.container}>
             <StatusBar backgroundColor='#009387' barStyle="light-content"/>
            
                  
                   

                    <View style={styles.userInfoSection}>
                            <View style={{flexDirection: 'row', marginTop: 15}}>
                              {this.state.image ? (
                              <Image
                              source={{uri: 'data:image/jpeg;base64,' + this.state.image}}
                              style={{ height:100, width:100, borderRadius:100 }} resizeMode="center"
                              />
                            ) : (
                              <Image source={require('../assets/default-img.jpg')}   style={{ height:100, width:100, borderRadius:100 }} resizeMode="center" />
                            )}
                              <TouchableOpacity
                                onPress={pickImage}
                                style={styles.add}
                                >
                                    <Ionicons name="ios-camera" size={30} color="#000"></Ionicons>
                                </TouchableOpacity>
                              <View>
                                <Text style={[styles.title, {
                                  marginTop:15,
                                  marginBottom: 5,
                                }]}>{user.email} </Text>
                                <Text style={styles.caption}>@j_doe</Text>
                              </View>
                            </View>
                          </View>


                          <View style={styles.userInfoSection}>
                            <View style={styles.row}>
                              <MaterialCommunityIcons name="map-marker-radius" color="#777777" size={20}/>
                              <Text style={{color:"#777777", marginLeft: 20}}>Kolkata, India</Text>
                            </View>
                            <View style={styles.row}>
                              <Entypo name="email" color="#777777" size={20}/>
                              <Text style={{color:"#777777", marginLeft: 20}}>{user.email}</Text>
                            </View>
                          </View>
                         
                          <View style={styles.infoBoxWrapper}>
                            <View style={[styles.infoBox, {
                              borderRightColor: '#dddddd',
                              borderRightWidth: 1
                            }]}>
                              <Text>GHS 0.00</Text>
                              <Text>Wallet</Text>
                            </View>
                            <View style={styles.infoBox}>
                            <Text>GHS 0.00</Text>
                              <Text>Donated</Text>
                            </View>
                        </View>


                        <View style={styles.menuWrapper}>
                          <TouchableOpacity
                            onPress={() => {navigation.navigate('Createcampaign')}}
                          >
                            <View style={styles.menuItem}>
                              <MaterialIcons name="create" color="#009387" size={25}/>
                              <Text style={styles.menuItemText}>Create Campaign</Text>
                            </View>
                          </TouchableOpacity>
                          <TouchableOpacity onPress={myCustomShare}>
                            <View style={styles.menuItem}>
                              <MaterialCommunityIcons name="share-outline" color="#009387" size={25}/>
                              <Text style={styles.menuItemText}>Tell Your Friends</Text>
                            </View>
                          </TouchableOpacity>
                          <TouchableOpacity>
                            <View style={styles.menuItem}>
                              <MaterialCommunityIcons name="account-check-outline" color="#009387" size={25}/>
                              <Text style={styles.menuItemText}>Support</Text>
                            </View>
                          </TouchableOpacity>
                          <TouchableOpacity
                             onPress={() => {navigation.navigate('MyCampaign')}}
                          >
                            <View style={styles.menuItem}>
                              <MaterialIcons name="announcement" color="#009387" size={25}/>
                              <Text style={styles.menuItemText}>Manage Campaigns</Text>
                            </View>
                          </TouchableOpacity>
                        </View>

            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#fff"
  },
  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 25,
  },
  title: {
    fontSize: 20,
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: '500',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  infoBoxWrapper: {
    borderBottomColor: '#dddddd',
    borderBottomWidth: 1,
    borderTopColor: '#dddddd',
    borderTopWidth: 1,
    flexDirection: 'row',
    height: 100,
  },
  infoBox: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuWrapper: {
    marginTop: 10,
  },
  menuItem: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  menuItemText: {
    color: '#777777',
    marginLeft: 20,
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 26,
  },
  add: {
    backgroundColor: "#ddd",
    top:60,
    bottom: 0,
    right: 40,
    width: 40,
    height: 40,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center"
},
});
 
  
 export default ProfileScreen;