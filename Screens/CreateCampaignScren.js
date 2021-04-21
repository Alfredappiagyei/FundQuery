import React, { Component } from "react";
import {v4 as uuid} from "uuid";
import * as Animatable from 'react-native-animatable';
import {LinearGradient} from 'expo-linear-gradient'
import {
  Alert,
   Text, 
  StyleSheet,
  View,
  TouchableOpacity,
  TextInput,
  ActivityIndicator,
  Image,
  Keyboard

} from "react-native";
import { Ionicons,} from "@expo/vector-icons";
import * as ImagePicker from 'expo-image-picker';
import firebase from "../firebase/firebase"


class CreateCampaignScren extends Component {
  constructor(props) {
    super(props);
    this.ref = firebase.firestore().collection('campaigns');
    this.state = {
      currentStep: 1 /* using index 0 as starting point */,
      steps: ["Start", "Almost Done", "Finish"],
      title: "",
      category: "",
      goal: "",
      location: "",
      about: "",
      image: null,
      isLoading: false,
 
    };
  }

  updateTextInput = (text, field) => {
    const state = this.state
    state[field] = text;
    this.setState(state);
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


  render() {
    const { steps, currentStep } = this.state;
    let { navigation } = this.props;

 

saveBoard =() => {
  
  this.setState({
    isLoading: true,
  });
  this.ref.add({  
    title: this.state.title,
    category: this.state.category,
    goal: this.state.goal,
    location: this.state.location,
    about: this.state.about,
    image: this.state.image
  }).then((docRef) => {
    this.setState({
      title: '',
      category: "",
      goal: "",
      location:"",
      about:"",
      isLoading: false,
      image: null
    });
    console.log(image)
    Alert.alert('Campaign created successfully');
    navigation.navigate('campaigns')
  })
  .catch((error) => {
    console.error("Error adding document: ", error);
    this.setState({
      isLoading: false,
    });
  });

}
  


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

    if(this.state.isLoading){
      return(
        <View style={styles.activity}>
          <ActivityIndicator size="large" color="#0000ff"/>
        </View>
      )
    }


    return (
      <View style={{ flex: 2,  }}>
        <View
          style={{
            alignItems: "center",
            flex: 2,
            backgroundColor: "#009387",
            justifyContent: "center",
          }}
        >
          <View style={{ width: 230}}>
            <View style={{ alignItems: "center" }}>
              <View
                style={{
                  height: 2,
                  backgroundColor: "#ee5e30",
                  width: 130,
                  position: "relative",
                  top: 10,
                  zIndex: 10,
                  right: 20,
                }}
              />
            </View>
            <View
              style={{
                flexDirection: "row",
                width: "100%",
                position: "absolute",
                zIndex: 20,
              }}
            >
              {steps.map((label, i) => (
                <View key={i} style={{ alignItems: "center", width: 70 }}>
                  {i > currentStep && i != currentStep /* Not selected */ && (
                    <View
                      style={{
                        alignItems: "center",
                        justifyContent: "center",
                        width: 30,
                        height: 30,
                        backgroundColor: "#fff",
                        borderWidth: 2,
                        borderColor: "#75cfb8",
                        borderRadius: 15,
                        marginBottom: 10,
                        top:-5
                      }}
                    >
                      <Text style={{ fontSize: 15, color: "#ee5e30" }}>
                        {i + 1}
                      </Text>
                    </View>
                  )}
                  {i < currentStep /* Checked */ && (
                    <View
                      style={{
                        alignItems: "center",
                        justifyContent: "center",
                        width: 30,
                        height: 30,
                        backgroundColor: "#0faf9a",
                        borderWidth: 2,
                        borderColor: "#0faf9a",
                        borderRadius: 15,
                        marginBottom: 10,
                        top:-5
                      }}
                    >
                      <Ionicons name="md-checkmark" size={20} color="#fff" />
                    </View>
                  )}
                  {i == currentStep /* Selected */ && (
                    <View
                      style={{
                        alignItems: "center",
                        justifyContent: "center",
                        width: 30,
                        height: 30,
                        backgroundColor: "#ee5e30",
                        borderWidth: 2,
                        borderColor: "#ee5e30",
                        borderRadius: 15,
                        marginBottom: 10,
                        top:-5
                      }}
                    >
                      <Text style={{ fontSize: 13, color: "#ffffff" }}>
                        {i + 1}
                      </Text>
                    </View>
                  )}
                  <Text style={{ fontSize: 15, color: "#fff", bottom:6 }}>{label}</Text>
                </View>
              ))}
            </View>
          </View>
        </View>


        <View style={{ backgroundColor: "#f6f6f6", flex: 10, backgroundColor:"#fff" }}>
          {currentStep == 0 && (
            <Animatable.View 
               animation="fadeInUpBig"
             style={styles.footer_start}
            >
                 <TouchableOpacity 
                 onPress={pickImage}
               style={{height: 200 }}>
          {this.state.image ? (
            <Image
            source={{uri: 'data:image/jpeg;base64,' + this.state.image}}
              style={{ width: '100%', height: 200 }}
            />
          ) : (
            <Image source={require('../assets/default-img.jpg')}  style={{ width: '100%', height: 200 }} />
          )}
        </TouchableOpacity>


             
              <Text style={[styles.text_footer, {marginTop: 35}]}>Campaign Title</Text>
              <View style={styles.action}>
                 <TextInput   
                   placeholder="Enter campaign title"
                    placeholderTextColor="#666666"
                    style={styles.textInput}
                    autoCapitalize="none"  
                    value={this.state.title}
                    onChangeText={(text) => this.updateTextInput(text, 'title')}    
                />
              </View>



               
              <Text style={[styles.text_footer, {marginTop: 35}]}>Category</Text>
              <View style={styles.action}>
                <TextInput
                  value={this.state.category}
                  autoCapitalize="none"  
                  onChangeText={(text) => this.updateTextInput(text, 'category')}
                  placeholder="Add category"
                  placeholderTextColor="#666666"
                  style={styles.textInput}
          
                />
              </View> 
            </Animatable.View>
          )}
          {currentStep == 1 && (
            <Animatable.View
            animation="fadeInUpBig"
            style={styles.footer_middle}
            >
               
               <Text style={[styles.text_footer, {marginTop: 35}]}>Campaign Goal</Text>
               <View style={styles.action}>  
                <TextInput
                  value={this.state.goal}
                  onChangeText={(text) => this.updateTextInput(text, 'goal')}
                  placeholder="Campaign goal"
                  autoCapitalize="none"  
                  placeholderTextColor="#666666"
                  style={styles.textInput}
                  keyboardType="numeric"
                />
              </View>

               
              <Text style={[styles.text_footer, {marginTop: 35}]}>Campaign Goal</Text>
                <View style={styles.action}>  
                <TextInput
                  value={this.state.location}
                  onChangeText={(text) => this.updateTextInput(text, 'location')}
                  autoCapitalize="none"  
                  placeholder="Location"
                  placeholderTextColor="#666666"
                  style={styles.textInput}
                />
              </View>
            </Animatable.View>
          )}

          {currentStep == 2 && (
            <Animatable.View 
            animation="fadeInUpBig"
            style={styles.footer_end}
            >
                             
              <Text style={[styles.text_footer, {marginTop: 35,marginBottom:20}]}>Description</Text>
              <View >  
                <TextInput
                  value={this.state.about}
                  onChangeText={(text) => this.updateTextInput(text, 'about')}
                  placeholder="About campaign"
                  placeholderTextColor="lightgrey"
                   style={{height:200, borderWidth:1, borderColor:"#000", borderStyle:"dotted",borderRadius:5}}
                  editable = {true}
                  maxLength = {100}
                  multiline={true}
                  returnKeyType="done"
                  editable={true}
                  onSubmitEditing={()=>{Keyboard.dismiss()}}
                />
              </View>
            </Animatable.View> 
          )}
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              top: 30,
            }}
          >
            {currentStep > 0 ? (
              <TouchableOpacity
                onPress={() => {
                  if (currentStep > 0) {
                    this.setState({ currentStep: currentStep - 1 });
                  }
                }}
              >
                <LinearGradient
                 colors={['#08d4c4', '#01ab9d']}
                  style={[
                    styles.centerElement,
                    {
                      left: 10,
                      width: 100,
                      height: 50,
                      borderRadius: 20,
                    },
                  ]}
                >
                <Text style={{ color: "#fff" }}>Previous</Text>
                </LinearGradient>
              </TouchableOpacity>
            ) : (
              <Text> </Text>
            )}
            {currentStep + 1 < steps.length /* add other conditions here */ && (
              <TouchableOpacity
                onPress={() => {
                  if (currentStep + 1 < steps.length) {
                    this.setState({ currentStep: currentStep + 1 });
                  }
                }}
              >
                   <LinearGradient
                     colors={['#08d4c4', '#01ab9d']}
                     style={[
                      styles.centerElement,
                      {
                        right: 10,
                        width: 100,
                        height: 50,
                        borderRadius: 20,
                      },
                    ]}
                    
                   >
                <Text style={{ color: "#fff" }}>Next</Text>
                </LinearGradient>
              </TouchableOpacity>
            )}
            {currentStep + 1 ==
              steps.length /* add other conditions here */ && (
              <TouchableOpacity
                onPress={saveBoard}
              >
                 <LinearGradient
                     colors={['#08d4c4', '#01ab9d']}
                     style={[
                      styles.centerElement,
                      {
                        right: 10,
                        width: 100,
                        height: 50,
                        borderRadius: 20,
                      },
                    ]}
                    
                   >
                <Text style={{ color: "#fff" }}>Create</Text>
                </LinearGradient>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  centerElement: { justifyContent: "center", alignItems: "center" },

  inputRowOne: {
    flexDirection: "column",
  },
  textInput: {
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: '#05375a',
    width:180
},

  button: {
    flex: 7,
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5
},
   
  imageContainer: {
    borderWidth: 2,
    borderStyle: "dashed",
    borderColor: "#ee5e30",
    top: 20,
  },
  image: {
    height: 200,
    width: 450,
  },
  text_footer: {
    color: '#05375a',
    fontSize: 18
},
footer_start: {
  backgroundColor: '#fff',
  borderTopLeftRadius: 30,
  borderTopRightRadius: 30,
  paddingHorizontal: 20,
  paddingVertical: 15
},
footer_middle: {
  backgroundColor: '#fff',
  borderTopLeftRadius: 30,
  borderTopRightRadius: 30,
  paddingHorizontal: 20,
  paddingVertical: 100
},
footer_end: {
  backgroundColor: '#fff',
  borderTopLeftRadius: 30,
  borderTopRightRadius: 30,
  paddingHorizontal: 20,
  paddingVertical: 30
},
});
 
export default CreateCampaignScren;