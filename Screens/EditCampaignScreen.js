import React, { Component } from 'react';
import { StyleSheet, ScrollView, ActivityIndicator, View, TextInput , TouchableOpacity, Alert, Text} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient'
 class EditCampaignScreen extends React.Component{
  constructor (props) {
    super(props)
    this.state ={  
        key: '',
        isLoading: true,
        title: '',
        category: '',
        goal: '',
        location: '',
        about: '',
    };
 }
 

  updateTextInput = (text, field) => {
    const state = this.state
    state[field] = text;
    this.setState(state);
  }
  
  // updateBoard() {
  //   this.setState({
  //     isLoading: true,
  //   });
  //   const updatedInfo = {
  //     title: this.state.title,
  //     category: this.state.category,
  //     goal: this.state.goal,
  //     location: this.state.location,
  //     about: this.state.about,   
  //   };
  //   this.props.editUser(this.id, updatedInfo) 
  //     this.setState({
  //       title: '',
  //       category: '',
  //       goal: '',
  //       location: '',
  //       about: '',
  //       isLoading: false,
  //     });
  //     navigation.navigate('campaigns');
  // }
 
    render(){
      
        // if(this.state.isLoading){
        //     return(
        //       <View style={styles.activity}>
        //         <ActivityIndicator size="large" color="#0000ff"/>
        //       </View>
        //     )
        //   }
        return(
            <ScrollView style={styles.container}>
      <View style={styles.subContainer}>
        <TextInput
            placeholder={'Title'}
            value={this.state.title}
            onChangeText={(text) => this.updateTextInput(text, 'title')}
        />
      </View>
      <View style={styles.subContainer}>
        <TextInput
            multiline={true}
            numberOfLines={4}
            placeholder={'Category'}
            value={this.state.description}
            onChangeText={(text) => this.updateTextInput(text, 'category')}
        />
      </View>
      <View style={styles.subContainer}>
        <TextInput
            placeholder={'Goal'}
            value={this.state.author}
            onChangeText={(text) => this.updateTextInput(text, 'goal')}
        />
      </View>
      <View style={styles.subContainer}>
        <TextInput
            placeholder={'Location'}
            value={this.state.author}
            onChangeText={(text) => this.updateTextInput(text, 'location')}
        />
      </View>
      <View style={styles.subContainer}>
        <TextInput
            placeholder={'About'}
            value={this.state.author}
            onChangeText={(text) => this.updateTextInput(text, 'about')}
        />
      </View>
      <View >
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
                    }]}>UPDATE</Text>
                </LinearGradient>
                </TouchableOpacity>
      </View>
    </ScrollView>
        )
    }
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      backgroundColor:"#fff"
    },
    subContainer: {
      flex: 1,
      marginBottom: 20,
      padding: 5,
      borderBottomWidth: 2,
      borderBottomColor: '#CCCCCC',
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
  }
  })

 
  
  export default  EditCampaignScreen;