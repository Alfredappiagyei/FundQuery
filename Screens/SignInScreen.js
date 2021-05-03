
import {connect} from 'react-redux';
import {loginWithEmail} from '../store/authActions'
import React from 'react';
import {Feather, FontAwesome} from '@expo/vector-icons'; 
import * as Animatable from 'react-native-animatable';
import {LinearGradient} from 'expo-linear-gradient'
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
 class SignInScreen extends React.Component{

  constructor (props) {
    super(props)
    this.state ={  
      email:"",
      password:"",
      check_textInputChange: false,
      secureTextEntry: true,
      isValidUser: true,
      isValidPassword: true,
 
    }
 }
  
  handleUpdateState=(name,value) =>{
    if( value.trim().length >= 4 ) {
        this.setState({
            [name]:value,
             check_textInputChange: true,
           isValidUser: true
        });
    } else {
        this.setState({
            [name]:value,
             check_textInputChange: false,
            isValidUser: false
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
 
 
handleOnSubmit=()=>{
    if ( this.state.email.length == 0 || this.state.password.length == 0 ) {
        Alert.alert('Wrong Input!', 'Email or password field cannot be empty.', [
            {text: 'Okay'}
        ]);
    }
       else{
            this.props.loginWithEmail(this.state.email, this.state.password)
}   
}



    render(){
         let {navigation} = this.props 
        return(
            <View  style={styles.container}>
             <StatusBar backgroundColor='#009387' barStyle="light-content"/>
            <View style={styles.header}>
                    <Text style={styles.text_header}>Welcome!</Text>
                </View>
                
                <Animatable.View 
                 animation="fadeInUpBig"
                 style={styles.footer}
                >
                <Text style={styles.text_footer}>Email</Text>
                <View style={styles.action}>
                <FontAwesome 
                    name="user-o"
                    
                    size={20}
                />
                <TextInput 
                    placeholder="Your Email"
                    placeholderTextColor="#666666"
                    style={styles.textInput}
                    autoCapitalize="none"
                    
                    value={this.state.email}         
                    onChangeText={(text) =>{
                     this.handleUpdateState('email',text)   
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

                { this.state.isValidUser ? null : 
                <Animatable.View animation="fadeInLeft" duration={500}>
                <Text style={styles.errorMsg}>Please provide a valid email.</Text>
                </Animatable.View>
                    }



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
             <TouchableOpacity>
                <Text style={{color: '#009387', marginTop:15}}>Forgot password?</Text>
            </TouchableOpacity> 

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
                    }]}>Sign In</Text>
                </LinearGradient>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => navigation.navigate('Signup')}
                    style={[styles.signIn, {
                        borderColor: '#009387',
                        borderWidth: 1,
                        marginTop: 15
                    }]}
                >
                    <Text style={[styles.textSign, {
                        color: '#009387'
                    }]}>Sign Up</Text>
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
        flex: 3,
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
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
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
        marginTop: 50
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
  });


  

 
const mapStateToProps =(state) =>{
    return {auth:state}
  }
  
 export default connect(mapStateToProps,{loginWithEmail})(SignInScreen);
