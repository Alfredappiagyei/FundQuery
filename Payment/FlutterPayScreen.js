import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, ScrollView, ActivityIndicator, View, TextInput , TouchableOpacity, Alert, Text, Button} from 'react-native';
import PAYWeb from "./PAYWeb";
import {LinearGradient} from 'expo-linear-gradient'
import { showAlert } from "react-native-customisable-alert";
import Toast from "react-native-toast-message"




export default function FluterPayScreen() {
  const [momoUri, setMomoUri] = useState(null);
  const [amount, setAmount] = useState(null)
  const [text, setText] = useState("")

  function onSubmit() {
    console.log(text)
    console.log(amount)
 
      let data = {
        tx_ref: 'AW-15' + (1000 + Math.floor(Math.random * 100000)),
        amount: amount,
        currency: 'GHS',
        network: 'MTN',
        email: 'kojoforex1@gmail.com',
        phone_number: text,
        redirect_url: 'https://codetraingh.com',
      };

      fetch('https://api.flutterwave.com/v3/charges?type=mobile_money_ghana', {
        method: 'POST', // or 'PUT'
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer FLWSECK_TEST-b300859b27e75571299b7beb31bd2e56-X', //remember to replace this with your flutterwave api key
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log('Success:', data);
          setMomoUri(data.meta.authorization.redirect);
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    
  }


  function closeWebView() {
    setMomoUri(null);
    showAlert({
      title:"Success!!!",
       message: "Thank you for you kindness!",
       alertType: "success", 
       onPress: () => {
         Toast.show({
           text1: "Hello",
           text2:`This is something i want ${amount} to show`,
         })
       }
     });
  }
  return (
    <View style={styles.container}>

      <Text style={styles.text}>Amount to Donate</Text>
      <View style={styles.subContainer}>
        <TextInput   onChangeText={(amount) => setAmount(amount)}   style={styles.textInput}/>
      </View>
      <Text style={styles.text}>Naration</Text>
      <View style={styles.subContainer}>
        <TextInput
           multiline={true}
           numberOfLines={2} 
           style={styles.textInput}
           />
      </View>
      <Text style={styles.text}>Your E-Mail Address</Text>
      <View style={styles.subContainer}>
        <TextInput  style={styles.textInput} /> 
      </View>

      <Text style={styles.text}>Momo Number</Text>
      <View style={styles.subContainer}>
        <TextInput   onChangeText={(text) => setText(text)}  style={styles.textInput} /> 
      </View>

      <TouchableOpacity
                    style={styles.signIn}
                    onPress={onSubmit}
                >
                <LinearGradient
                    colors={['#08d4c4', '#01ab9d']}
                    style={styles.signIn}
                >
                    <Text style={[styles.textSign, {
                        color:'#fff'
                    }]}>Done</Text>
                </LinearGradient>
                </TouchableOpacity>

         
       

      {momoUri !== null && <PAYWeb  uri={momoUri} closeWebView={closeWebView} />}
    </View>
  );
}





const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor:"#fff"
  },
  subContainer: {
 
    marginBottom: 20,
    padding: 5,
    borderWidth:1,
    borderColor:"#cccccc"
  },
  text:{
     marginBottom:10
  },
  
  activity: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center'
  },
  signIn: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10
},
textSign: {
    fontSize: 18,
    fontWeight: 'bold'
},
signIn: {
  width: '100%',
  height: 50,
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: 10
},
textSign: {
  fontSize: 18,
  fontWeight: 'bold'
}
})

