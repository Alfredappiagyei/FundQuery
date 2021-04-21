import React from 'react';
import { View,  Text, StyleSheet, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export default function CoronavirusFundraising({navigation}) {
    return (
        <ScrollView style={{ flex: 1, backgroundColor:"#fff"}}>
                <Text  style={{
                            fontSize: 32,
                            marginBottom: 30,
                            top: 20,
                            alignSelf: "center",
                        
                        }}>
                    How you can Help in the fight. support for 
                    Coronavirus relief
                </Text>
                <Text>
                COVID-19 (Coronavirus) has affected day to day life and is slowing down the global economy. This pandemic has affected
                 thousands of peoples, who are either sick or are being killed due to the spread of this disease. The most common symptoms
                  of this viral infection are fever, cold, cough, bone pain and breathing problems, and ultimately leading to pneumonia. 
                  This, being a new viral disease affecting humans for the first time, vaccines are not yet available. Thus, the emphasis is
                   on taking extensive precautions such as extensive hygiene protocol (e.g., regularly washing of hands, avoidance of face to 
                   face interaction etc.), social distancing, and wearing of masks, and so on. This virus is spreading exponentially region wise.
                    Countries are banning gatherings of people to the spread and break the exponential curve. Many countries are locking their
                   population and enforcing strict quarantine to control the spread of the havoc of this highly communicable disease.
                </Text>

                <Text  style={{
                    fontSize: 32,
                    marginBottom: 30,
                    top: 20,
                    alignSelf: "center",
                
                }}>
                     How can you stay safe?
                </Text>
                <Text>
                 If COVID-19 is spreading in your community, stay safe by taking some simple precautions, such as physical distancing,
                 wearing a mask, keeping rooms well ventilated, avoiding crowds,
                 cleaning your hands, and coughing into a bent elbow or tissue. Check local advice where you live and work. Do it all!
                </Text>

                <TouchableOpacity
          style={{
            padding: 15,
            backgroundColor: "#fff",
            borderRadius: 50,
            alignItems: "center",
            borderColor:"#00716F",
            borderWidth:2
          }}
          onPress={()=>navigation.navigate('Signup')}
        >
          <Text style={{ fontWeight: "bold", color:"#00716F", fontSize:15}}>Start a Fundquerry</Text>
        </TouchableOpacity>

            
        </ScrollView>
    );
}