    import React, { useState } from 'react';
    import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, ScrollView, Modal } from 'react-native';
    import backgroundimage from "../photos/image3.jpg"
    // import {ActionButton} from 'react-native-action-button';
    // import {Icon} from "@expo/vector-icons";

    export default function HomeScreen({navigation}) {
        const [, setModalVisible] = useState(false);
        const [, setModalVisibleTwo] = useState(false);
       
        return (
            
                   <View style={styles.start}>
                        <View style={styles.centeredView}>
                                 <Modal
                                            animationType={"slide"}
                                            transparent={true}
                                            visible={modalVisible}
                                             onRequestClose={() => {
                                                 console.log("Modal has been closed")
                                             }}
                                            >
                          
                                            <View style={styles.modalView}>
                                                 <TouchableOpacity 
                                                  onPress={()=>navigation.navigate('campaigns')}
                                                 >
                                                <Text style={styles.textStyle}>Fundraisers</Text>
                                                </TouchableOpacity>
                                                <TouchableOpacity onPress={()=>navigation.navigate('success')}>
                                                <Text style={styles.textStyle}>Success Stories</Text>
                                                </TouchableOpacity>
                                                <TouchableOpacity >
                                                <Text style={styles.textStyle}>Coronavirus fundraising</Text>
                                                </TouchableOpacity>
                                                <TouchableOpacity style={{padding:20, backgroundColor:"#f7ea00", borderRadius:50}} >
                                                <Text style={{fontWeight:"bold"}}>Start a Fundquerry</Text>
                                                </TouchableOpacity>
                                                <TouchableOpacity
                                                style={{top:150, padding:8, backgroundColor:"#1e6f5c", borderRadius:20}}
                                                onPress={() => {
                                                    setModalVisible(!modalVisible);
                                                }}>
                                                <Text style={styles.hidetextStyle}>Go back</Text>
                                               </TouchableOpacity>                                       
                                            </View>
                                        </Modal>
                                        </View>



                                        <View style={styles.centeredView}>
                                         <Modal
                                            animationType={"slide"}
                                            transparent={true}
                                            visible={modalVisibleTwo}
                                            onRequestClose={() => {
                                                console.log("Modal has been closed")
                                            }}
                                            >
                                    
                                            <View style={styles.modalView}>

                                                 <TouchableOpacity >
                                                <Text style={styles.textStyle}>How Fundquerry Works</Text>
                                                </TouchableOpacity>
                                                <TouchableOpacity onPress={()=>navigation.navigate('WhatIscrowdfunding')}  >
                                                <Text style={styles.textStyle}>What is Crowdfunding</Text>
                                                </TouchableOpacity>
                                                <TouchableOpacity >
                                                <Text style={styles.textStyle}>Fundraising tips</Text>
                                                </TouchableOpacity>
                                                <TouchableOpacity >
                                                <Text style={styles.textStyle}>Help center</Text>
                                                </TouchableOpacity>

                                                <TouchableOpacity style={{padding:20, backgroundColor:"#f7ea00", borderRadius:50}} >
                                                <Text style={{fontWeight:"bold"}}>Start a Fundquerry</Text>
                                                </TouchableOpacity>
                                              
                                                <TouchableOpacity
                                                style={{top:150, padding:8, backgroundColor:"#1e6f5c", borderRadius:20}}
                                                onPress={() => {
                                                    setModalVisibleTwo(!modalVisibleTwo);
                                                }}>
                                                <Text style={styles.hidetextStyle}>Go back</Text>
                                               </TouchableOpacity>    
                                            </View>
                                    
                                        </Modal>
                                        </View>


                         <ImageBackground 
                                    source={backgroundimage}
                                     style={styles.hero}
                                         >
                                    <View   style={{ flexDirection:"row", alignItems:"center"}}>
                                     <TouchableOpacity onPress={()=>navigation.navigate('campaigns')} style={{ top:200, backgroundColor:"#EC4646", left:30, borderRadius:20, border:"none"}} > 
                                             <Text style={{ margin:20, color:"#fff", fontWeight:"bold" }}>Donate</Text>
                                      </TouchableOpacity>
                                      <TouchableOpacity onPress={()=>navigation.navigate('Signup')} style={{ top:200,  backgroundColor:"#EC4646",left:170, borderRadius:20,  border:"none"}} >
                                             <Text style={{ margin:20 , color:"#fff", fontWeight:"bold" }}>Start a hand</Text>
                                        </TouchableOpacity>

                                    </View>

                                 </ImageBackground >

                                <View style={styles.contents}>
                                    <View style={styles.upperbuttons}>
                                        <TouchableOpacity  onPress={() => { setModalVisible(true);}} 
                                        style={{ alignItems:"flex-start", backgroundColor:"#51c2d5", left:30,  top:40, borderRadius:60 }}
                                        > 
                                            <Text style={{ margin:50  }}>Discover</Text>
                                        </TouchableOpacity>

                                        <TouchableOpacity onPress={()=>navigation.navigate('campaigns')} 
                                        style={{ alignItems:"flex-end", backgroundColor:"#51c2d5", left:100,top:40, borderRadius:60  }}
                                        >
                                            <Text style={{ margin:50  }}>Plan</Text>
                                        </TouchableOpacity>
                                        
                                    </View>
                                    <View style={styles.lowerbutton}>
                                    <TouchableOpacity  onPress={() => { setModalVisibleTwo(true);}} 
                                    style={{ top:60, backgroundColor:"#51c2d5",borderRadius:50 }}
                                    >  
                                    <Text style={{ margin:40  }}>How it works</Text>
                                        </TouchableOpacity>
                                    </View>

                                </View>  


 
                        </View>
                    
 
        );
    }






    const styles = StyleSheet.create({
        start:{
            flex: 1,
            
        },

        hero:{
             flex:0.60,
             
        },

         contents:{
             flex:0.40,
              backgroundColor:"#bbf1fa"
            
         },

        upperbuttons:{
           flexDirection:"row"
        },
        lowerbutton:{
             alignItems:"center",
             justifyContent:"center"
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
          hidetextStyle: {
            color: 'white',
            fontWeight: 'bold',
            textAlign: 'center',
            
          },
          actionButtonIcon: {
            fontSize: 20,
            height: 22,
            color: 'white',
          },

         
    });