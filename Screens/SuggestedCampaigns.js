import React, { Component } from "react";
import {
  Image,
  View,
  StyleSheet,
  ActivityIndicator,
  Text,
  FlatList,
  Animated,
  TouchableWithoutFeedback,
  Alert,
  Modal,
  TouchableOpacity

} from "react-native";
 
import {MaterialCommunityIcons,MaterialIcons, Ionicons, AntDesign} from "@expo/vector-icons";
import firebase from "../firebase/firebase";
import SuggestedCampaignPost from "./SuggestedCampaignPost";


class SuggestedCampaigns extends Component {
  constructor() {
    super();
    this.ref = firebase.firestore()
    .collection('campaigns');
    this.unsubscribe = null;
    this.state = {
      isLoading: true,
      animation: new Animated.Value(0),
      isVisible: false,
      isVisibletwo: false,
       
    };
  }

  displayModal(show){
    this.setState({isVisible: show})
  }

  displayModaltwo(show){
    this.setState({isVisibletwo: show})
  }
   
  componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(this.fetchPosts);
  }

  toggleOpen = () => {

    if (this._open) {
      Animated.timing(this.state.animation, {
        toValue: 0,
        duration: 1000,
      }).start();

    } else {

      Animated.timing(this.state.animation, {
        toValue: 1,
        duration: 400,
      }).start();
    }
    this._open = !this._open

  };





   fetchPosts = async () => {
    try {
    const campaigns = [];
    await firebase.firestore()
    .collection('campaigns')
    .get()
    .then((querySnapshot) => {      
      querySnapshot.forEach((doc) => {
        const {
        
          title,
          category,
          goal,
          location,
          about,
          image,
        } = doc.data();
        campaigns.push({
          key: doc.id,
          doc,
          title,
          category,
          goal,
          location,
          about,
          image,

        });
      });
    })

    this.setState({
      campaigns,
      isLoading: false,
   });

  } catch (e) {
    console.log(e);
  }
};
   

  render() {
    let {navigation} = this.props
    if(this.state.isLoading){
      return(
        <View >
          <ActivityIndicator size="large" color="#0000ff" style={{alignItems:"center", justifyContent:"center"}}/>
        </View>
      )
    }


    const printInterpolate = this.state.animation.interpolate({
      inputRange: [0, 1],
      outputRange: [0, -90],
    });
    const saveInterpolate = this.state.animation.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [0, -80, -180],
    });

    const printStyle = {
      transform: [
        {
          translateY: printInterpolate,
        },
      ],
    };

    const saveStyle = {
      transform: [
        {
          translateY: saveInterpolate,
        },
      ],
    };

    return (
      <>
                              <View style={styles.centeredView}>
                                 <Modal
                                             animationType = {"slide"}
                                             transparent={false}
                                             visible={this.state.isVisible}
                                             onRequestClose={() => {
                                               Alert.alert('Modal has now been closed.');
                                              } }
                                            >
                          
                                            <View style={styles.modalView}>
                                                 <TouchableOpacity 
                                                   onPress={()=>{navigation.navigate('campaigns')
                                                   this.displayModal(!this.state.isVisible)
                                                }
                                                } 
                                                 >
                                                <Text style={styles.textStyle}>Fundraisers</Text>
                                                </TouchableOpacity>
                                                <TouchableOpacity
                                                 onPress={()=>{navigation.navigate('success')
                                                 this.displayModal(!this.state.isVisible)
                                              }
                                              } 
                                               
                                                 >
                                                <Text style={styles.textStyle}>Success Stories</Text>
                                                </TouchableOpacity>
                                                <TouchableOpacity >
                                                <Text style={styles.textStyle}>Coronavirus fundraising</Text>
                                                </TouchableOpacity>
                                                <TouchableOpacity
                                                 onPress={()=>{navigation.navigate('Createcampaign')
                                                 this.displayModaltwo(!this.state.isVisibletwo)
                                              }
                                              } 
                                                 style={{padding:20, backgroundColor:"#f7ea00", borderRadius:50}} >
                                                <Text style={{fontWeight:"bold"}}>Start a Fundquerry</Text>
                                                </TouchableOpacity>
                                                <TouchableOpacity
                                                style={{top:150, padding:8, backgroundColor:"#1e6f5c", borderRadius:20}}
                                                onPress={() => {
                                                  this.displayModal(!this.state.isVisible);}}
                                                >
                                                <Text style={styles.hidetextStyle}>Go back</Text>
                                               </TouchableOpacity>                                       
                                            </View>
                                        </Modal>
                                        </View>

                                        <View style={styles.centeredView}>
                                         <Modal
                                            animationType={"slide"}
                                            transparent={true}
                                            visible={this.state.isVisibletwo}
                                            onRequestClose={() => {
                                                console.log("Modal has been closed")
                                            }}
                                            >
                                    
                                            <View style={styles.modalView}>

                                                 <TouchableOpacity >
                                                <Text style={styles.textStyle}>How Fundquerry Works</Text>
                                                </TouchableOpacity>
                                                <TouchableOpacity 
                                                onPress={()=>{navigation.navigate('WhatIscrowdfunding')
                                                this.displayModaltwo(!this.state.isVisibletwo)
                                              }
                                              } 
                                                 >
                                                <Text style={styles.textStyle}>What is Crowdfunding</Text>
                                                </TouchableOpacity>
                                                <TouchableOpacity >
                                                <Text style={styles.textStyle}>Fundraising tips</Text>
                                                </TouchableOpacity>
                                                <TouchableOpacity >
                                                <Text style={styles.textStyle}>Help center</Text>
                                                </TouchableOpacity>

                                                <TouchableOpacity 
                                                 onPress={()=>{
                                                   navigation.navigate('Createcampaign')
                                                  this.displayModaltwo(!this.state.isVisibletwo)
                                               }
                                               } 
                                                style={{padding:20, backgroundColor:"#f7ea00", borderRadius:50}}
                                                 >
                                                <Text style={{fontWeight:"bold"}}>Start a Fundquerry</Text>
                                                </TouchableOpacity>
                                              
                                                <TouchableOpacity
                                                style={{top:150, padding:8, backgroundColor:"#1e6f5c", borderRadius:20}}
                                                onPress={() => {
                                                  this.displayModaltwo(!this.state.isVisibletwo);}}
                                                >
                                                <Text style={styles.hidetextStyle}>Go back</Text>
                                               </TouchableOpacity>    
                                            </View>
                                    
                                        </Modal>
                                        </View>




      <View style={{ flex: 1,backgroundColor:"#fff" }}>
        <FlatList
          style={styles.container}
          data={this.state.campaigns}
          keyExtractor={(item) => item.id}
          renderItem={
            ({item}) => {
              return (
                <View>
                  <SuggestedCampaignPost
                    title={item.title}
                    category={item.category}
                     goal={item.goal}
                    location={item.location}
                    about={item.about}
                    image={item.image}
                    navigation={navigation}
                    key={item}
                  />                  
                </View>
              );
            }
          }
        
        />







        <View>
        <Animated.View style={[styles.background]}>
          <TouchableWithoutFeedback 
            onPress={() => {
              this.displayModal(true);
            }} 
          >
            <Animated.View style={[styles.button, saveStyle, {backgroundColor:"#93329E"}]}>
            <MaterialCommunityIcons name="telescope" color="#fff" size={28} style={styles.iconStyle}/>
            </Animated.View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback  
            onPress={() => {
              this.displayModaltwo(true);
            }} 
          >
            <Animated.View style={[styles.button, printStyle, {backgroundColor:"#28B5B5"}]}>
            <AntDesign name="find" color="#fff" size={28} style={styles.iconStyle}/>
            </Animated.View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={() => this.toggleOpen()}>
          <Animated.View style={[styles.button,  {backgroundColor:"#009387"}]}>
            <Ionicons name="menu-outline" color="#009387" size={40} style={styles.iconStyleMain}/>
            </Animated.View>
          </TouchableWithoutFeedback>
        </Animated.View>
        </View>

      </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    backgroundColor: "#fff",
    marginBottom: 25,
  },
  cardImage: {
    width: "100%",
    height: 300,
  },
  cardHeader: {
    padding: 10,
    flexDirection: "column",
  },
  cardTitle: {
    color: "#000",
    fontSize:25,
    fontWeight:"bold",
    marginTop:10,
    marginBottom:10
  },
  button: {
    position: 'absolute',
    bottom: 20, 
    borderRadius:50,
    padding:10,
    alignItems:"center",
    justifyContent:"center", 
    right:20,
    
  },
  
  iconStyle: {
    width: 29,
    height: 29,
     
  },
  iconStyleMain:{
    color:"#fff",
    borderRadius:50,
  },
  modalView: { 
    backgroundColor:"#29bb89",
    padding: 35,
    alignItems: 'center',           
    shadowColor: '#000',
    shadowOpacity: 0.80,
    flex:1,
    justifyContent:"center",
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize:22,
    marginBottom:50
    
  },
  
});

export default SuggestedCampaigns;
