import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image,} from "react-native";
import * as Progress from "react-native-progress";
import ReadMore from 'react-native-read-more-text';
import { Card } from 'react-native-elements';

const SuggestedCampaignPost = ({ title, category, goal,location,image,about,navigation,}) => { 
  
  return (

    <Card style={{borderRadius:10}}>
      <View style={styles.card}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("suggestedcampaignsdetails", {
              title,
              category,
              goal,
              location,
              image,
              about,
              navigation,
            })
          }
        >
          {image != null ? (
            <Image
              source={require("../assets/default-img.jpg")}
              style={styles.cardImage}
            />
          ) : (
            <Image source={{uri: image}} style={styles.cardImage} />
          )}

          <View style={styles.cardHeader}>
            <Text category="s1" style={styles.title}>
              {title}
            </Text>
            <ReadMore
              numberOfLines={2}>
               <Text style={styles.description} >
              {about}
            </Text>       
            </ReadMore>
           
            <View>
              <Text style={styles.amount}>
                $400<Text> Raised</Text>
              </Text>
            </View>
            <Progress.Bar
              progress={0.3}
              width={300}
              height={8}
              color="#009387"
              style={{ marginTop: 5 }}
            />

            <View style={{ flexDirection: "row", marginTop: 9 }}>
              <Text category="s1" style={{ 
                 color: '#05375a',
                 fontSize: 20,
                 fontWeight: 'bold'
               }}>
                Goal:
              </Text>
              <Text category="s1" style={{ fontSize: 20 }}>
               ghc {goal}
              </Text>
            </View>
          </View>
        </TouchableOpacity>

        <View>
                   
        </View>
      </View>  
      </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#fff"
  },
  card: {
    backgroundColor: "#fff",
    marginBottom: 29,
    marginHorizontal:5,
    borderRadius:20
  },
  cardImage: {
    width: "100%",
    height: 190,
    borderRadius:20
  },
  cardHeader: {
    padding: 10,
    flexDirection: "column",
  },
  title: {
    color: '#05375a',
    fontSize: 20,
    fontWeight: 'bold'
},
description: {
  color:"#000",
  fontSize:18, 
  fontFamily: 'ArialHebrew-Light'
}, 
amount: {
  color: '#777777',
  fontWeight: '600',
  fontSize: 16,
  lineHeight: 26,
},
actionButtonIcon: {
  fontSize: 20,
  height: 22,
  color: 'white',
},

});

export default SuggestedCampaignPost;
