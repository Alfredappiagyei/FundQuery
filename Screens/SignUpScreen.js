
// 
// 
 
// import React from 'react';
// import {Text,View,Image, TextInput, TouchableOpacity, ScrollView, Alert} from 'react-native';
// // import Icon from '@expo/vector-icons/AntDesign';

//  class SignUpScreen extends React.Component{
//   constructor(props){
//     super(props)
//     this.state ={
//       name:"",
//       email:"",
//       password:"",
//       confirm:""
//     }
//   }


// handleUpdateState=(name,value) =>{
//   this.setState({
//     [name]:value
//   })
// }

// handleOnSubmit = async ()=>{
//   try {
//   if (!this.state.name) {
//     Alert.alert(' Name is required');
//   } else if (!this.state.email) {
//     Alert.alert(' Email is required.');
//   } else if (!this.state.password) {
//     Alert.alert(' password is required.');
//   } else if (this.state.password != this.state.confirm) { 
//     Alert.alert('Password do not match');
//   } else {
//    
//   } 
// } 
//   catch (e) {
//     console.log(e);
//   }
 
// } 




//     render(){
//       let {navigation} = this.props
//         return(
//           <ScrollView  style={{backgroundColor:"#FFF",height:"100%"}}>
            
//                 <Image source ={require('../photos/image2.jpg')}
//                     style={{width:"100%",height:"55%"}}
//                 />
//                 <Text
//                  style={{
//                      fontSize:30,
                  
//                      alignSelf:"center",
//                  }}
//                 >Save the world</Text>

//                 <Text
//                 style={{
                    
//                     marginHorizontal:55,
//                     textAlign:'center',
//                     marginTop:5,
//                     opacity:0.4
//                 }}
//                 >
//               Giving is not just about making a donation.  It is about making a difference.
//                 </Text>

//                 <View style={{
//                     flexDirection:"row",
//                     alignItems:"center",
//                     marginHorizontal:55,
//                     borderWidth:2,
//                     marginTop:20,
//                     paddingHorizontal:10,
//                     borderColor:"#00716F",
//                     borderRadius:23,
//                     paddingVertical:2
//                 }}>
                  
//                     <TextInput 
//                         placeholder="Full Name"
//                         placeholderTextColor="#00716F"
//                         style={{paddingHorizontal:10, width:250, height:30,}}
//                         value={this.state.name}
//                         onChangeText={(text) =>{
//                          this.handleUpdateState('name',text)
//                        }}
//                     />

                    

//                 </View>
//                 <View style={{
//                     flexDirection:"row",
//                     alignItems:"center",
//                     marginHorizontal:55,
//                     borderWidth:2,
//                     marginTop:15,
//                     paddingHorizontal:10,
//                     borderColor:"#00716F",
//                     borderRadius:23,
//                     paddingVertical:2
//                 }}>
                   
//                    <TextInput 
                      
//                         placeholder="email"
//                         placeholderTextColor="#00716F"
//                         style={{paddingHorizontal:10,height:30, width:250}}
//                         value={this.state.email}
//                         onChangeText={(text) =>{
//                          this.handleUpdateState('email',text)
//                        }}
//                     />
//                 </View>

//                 <View style={{
//                     flexDirection:"row",
//                     alignItems:"center",
//                     marginHorizontal:55,
//                     borderWidth:2,
//                     marginTop:15,
//                     paddingHorizontal:10,
//                     borderColor:"#00716F",
//                     borderRadius:23,
//                     paddingVertical:2
//                 }}>
                   
//                    <TextInput 
//                         secureTextEntry
//                         placeholder="Password"
//                         placeholderTextColor="#00716F"
//                         style={{paddingHorizontal:10, width:250, height:30,}}
//                         value={this.state.password}
//                         onChangeText={(text) =>{
//                          this.handleUpdateState('password',text)
//                        }}
//                     />              
//                 </View>


//                 <View style={{
//                     flexDirection:"row",
//                     alignItems:"center",
//                     marginHorizontal:55,
//                     borderWidth:2,
//                     marginTop:15,
//                     paddingHorizontal:10,
//                     borderColor:"#00716F",
//                     borderRadius:23,
//                     paddingVertical:2
//                 }}>
                   
//                    <TextInput 
//                         secureTextEntry
//                         placeholder="Confirm Password"
//                         placeholderTextColor="#00716F"
//                         style={{paddingHorizontal:10,height:30, width:250}}
//                         value={this.state.confirm}
//                         onChangeText={(text) =>{
//                          this.handleUpdateState('confirm',text)
//                        }}
//                     />              
//                 </View>

//                 <View style={{
//                     marginHorizontal:55,
//                     alignItems:"center",
//                     justifyContent:"center",
//                     marginTop:30,
//                     backgroundColor:"#00716F",
//                     paddingVertical:10,
//                     borderRadius:23
//                 }}>    
//             <TouchableOpacity
//                        onPress={this.handleOnSubmit} >
//                 <Text style={{
//                         color:"white",                  
//                     }}>Register</Text>
//              </TouchableOpacity>
//              </View>

//               <View style={{
//                     marginHorizontal:55,
//                     alignItems:"center",
//                     justifyContent:"center",
//                     marginTop:20,
//                     flexDirection:"row",
//                     borderRadius:23
//                 }}>
//                   <Text style={{
                       
//                         fontSize:20
              
//                     }}>Aready a member?</Text>
//                     <TouchableOpacity  onPress={()=>navigation.navigate('Signin')}>
//                       <Text style={{
//                         color:"#00716F",
//                         fontSize:20
              
//                     }} > Log in</Text>
//                       </TouchableOpacity>
//                 </View>            
          
//             </ScrollView>
//         )
//     }
// }



// const mapStateToProps = (state)=>{
//   return {
//     auth:state.firebase.auth
//   }
//  };
// const mapDispatchToProps = {
//   registerWithEmail,
// };

 
// export default connect(mapStateToProps,mapDispatchToProps)(SignUpScreen)































import {connect} from 'react-redux';
import React from 'react';
import {Feather, FontAwesome} from '@expo/vector-icons'; 
import * as Animatable from 'react-native-animatable';
import {LinearGradient} from 'expo-linear-gradient'
import { registerWithEmail} from '../store/authActions';
import { 
    View, 
    Text, 
    TouchableOpacity, 
    TextInput,
    Platform,
    StyleSheet ,
    StatusBar,
    Alert
} from 'react-native';
 class SignUpScreen extends React.Component{

  constructor (props) {
    super(props)
    this.state ={  
      username:"",
      email:"",
      password:"",
      confirm:"",
      check_textInputChange: false,
      secureTextEntry: true,
      confirm_secureTextEntry: true,
      isValidUser: true,
      isValidPassword: true,
 
    }
 }
  
  handleUsernameChange=(name,value) =>{
    if( value.length !== 0 ) {
        this.setState({
            [name]:value,
             check_textInputChange: true,
        });
    } else {
        this.setState({
            [name]:value,
             check_textInputChange: false,
        });
    }
 }

 
 handleEmailChange=(name,value) =>{
  if( value.length !== 0 ) {
      this.setState({
          [name]:value,      
      });
  } else {
      this.setState({
          [name]:value,      
      });
  }
}


  handlePasswordChange = (name,value) => {
    if( value.trim().length >= 8 ) {
        this.setState({
            [name]:value,
            isValidPassword: true
        });
    } else {
        this.setState({
            [name]:value,
            isValidPassword: false
        });
    }
}

 updateSecureTextEntry = () => {
  this.setState({
    secureTextEntry: !this.state.secureTextEntry
});
  
}

 updateConfirmSecureTextEntry = () => {
  this.setState({
    confirm_secureTextEntry: !this.state.confirm_secureTextEntry
});
}
 
 
 
handleOnSubmit=()=>{
    if ( this.state.email.length == 0 || this.state.password.length == 0 ) {
        Alert.alert('Wrong Input!', 'Email or password field cannot be empty.', [
            {text: 'Okay'}
        ]);
    } 
       else{
           
        this.props.registerWithEmail(this.state.email, this.state.password)
}   
}



    render(){
         let {navigation} = this.props 
        return(
            <View  style={styles.container}>
             <StatusBar backgroundColor='#009387' barStyle="light-content"/>
            <View style={styles.header}>
                    <Text style={styles.text_header}>Register Now!</Text>
                </View>
                <Animatable.View 
                 animation="fadeInUpBig"
                 style={styles.footer}
                >
                <Text style={styles.text_footer}>Username</Text>
                <View style={styles.action}>
                <FontAwesome 
                    name="user-o"
                    
                    size={20}
                />
                <TextInput 
                    placeholder="Your Username"
                    placeholderTextColor="#666666"
                    style={styles.textInput}
                    autoCapitalize="none"
                    
                    value={this.state.username}         
                    onChangeText={(text) =>{
                     this.handleUsernameChange('username',text)   
                        }    
                       }    
                />
                 {this.state.check_textInputChange ? 
                  <Animatable.View
                    animation="bounceIn"
                >
                    <Feather 
                        name="check-circle"
                        color="green"
                        size={20}
                    />
                </Animatable.View>
                 : null}
                </View>

            
                <Text style={[styles.text_footer, {marginTop: 35}]}>Email</Text>
                <View style={styles.action}>
                <Feather 
                    name="lock"
                    size={20}
                />
                <TextInput 
                    placeholder="Your Email"
                    placeholderTextColor="#666666"
                    style={styles.textInput
                     }
                    autoCapitalize="none"  
                    value={this.state.email}
                    onChangeText={(text) =>{
                     this.handleEmailChange('email',text)   
                     }    
                    }        
                />     
            </View>
           


          <Text style={[styles.text_footer, {marginTop: 35}]}>Password</Text>
                <View style={styles.action}>
                <Feather 
                    name="lock"
                    size={20}
                />
                <TextInput 
                    placeholder="Your Password"
                    placeholderTextColor="#666666"
                    secureTextEntry={this.state.secureTextEntry ? true : false}
                    style={styles.textInput
                     }
                    autoCapitalize="none"  
                    value={this.state.password}
                    onChangeText={(text) =>{
                     this.handlePasswordChange('password',text)   
                     }    
                    }        
                />
                <TouchableOpacity  
                 onPress={this.updateSecureTextEntry}
                >          
                 {this.state.secureTextEntry ? 
                    <Feather 
                        name="eye-off"
                        color="grey"
                        size={20}
                    />
                    :
                    <Feather 
                        name="eye"
                        color="grey"
                        size={20}
                    />
                    }       
                </TouchableOpacity>
            </View>
            { this.state.isValidPassword ? null : 
            <Animatable.View animation="fadeInLeft" duration={500}>
            <Text style={styles.errorMsg}>Password must be 8 characters long.</Text>
            </Animatable.View>  
                }

                
          <Text style={[styles.text_footer, {marginTop: 35}]}>Confirm Password</Text>
                <View style={styles.action}>
                <Feather 
                    name="lock"
                    size={20}
                />
                <TextInput 
                    placeholder="Confirm Your Password"
                    placeholderTextColor="#666666"
                    secureTextEntry={this.state.confirm_secureTextEntry ? true : false}
                    style={styles.textInput
                     }
                    autoCapitalize="none"  
                    value={this.state.confirm}
                    onChangeText={(text) =>{
                     this.handlePasswordChange('confirm',text)   
                     }    
                    }        
                />        
                <TouchableOpacity  
                onPress={this.updateConfirmSecureTextEntry}
                >          
                 {this.state.confirm_secureTextEntry ? 
                    <Feather 
                        name="eye-off"
                        color="grey"
                        size={20}
                    />
                    :
                    <Feather 
                        name="eye"
                        color="grey"
                        size={20}
                    />
                    }       
                </TouchableOpacity>
            </View>

            <View style={styles.textPrivate}>
                <Text style={styles.color_textPrivate}>
                    By signing up you agree to our
                </Text>
                <Text style={[styles.color_textPrivate, {fontWeight: 'bold'}]}>{" "}Terms of service</Text>
                <Text style={styles.color_textPrivate}>{" "}and</Text>
                <Text style={[styles.color_textPrivate, {fontWeight: 'bold'}]}>{" "}Privacy policy</Text>
            </View>


            <View style={styles.button}>
                <TouchableOpacity
                    style={styles.signIn}
                    onPress={this.handleOnSubmit}
                >
                <LinearGradient
                    colors={['#08d4c4', '#01ab9d']}
                    style={styles.signIn}
                >
                    <Text style={[styles.textSign, {
                        color:'#fff'
                    }]}>Sign Up</Text>
                </LinearGradient>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => navigation.navigate('Signin')}
                    style={[styles.signIn, {
                        borderColor: '#009387',
                        borderWidth: 1,
                        marginTop: 15
                    }]}
                >
                    <Text style={[styles.textSign, {
                        color: '#009387'
                    }]}>Sign In</Text>
                </TouchableOpacity>
            </View>
                </Animatable.View>
                

 
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#009387'
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: 6,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 8,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 3
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 5,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5
    },
    textInput: {
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
        width:180
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
    },
    button: {
        alignItems: 'center',
        marginTop: 15    },
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
    textPrivate: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      marginTop: 5
  },
  color_textPrivate: {
      color: 'grey'
  }
  });

 
  
  const mapStateToProps = (state)=>{
    return {
      auth:state.firebase.auth
    }
   };
  const mapDispatchToProps = {
    registerWithEmail,
  };
 
  export default connect(mapStateToProps,mapDispatchToProps)(SignUpScreen)

 
 