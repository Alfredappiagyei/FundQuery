import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from "react-native";

export default function WhaIsCrowdfunding({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor:"#fff" }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text
          style={{
            fontSize: 32,
            marginBottom: 30,
            top: 20,
            alignSelf: "center",
        
          }}
        >
          What Is Crowdfunding? The simplest Answer.
        </Text>
        <View>
          <Text style={{ fontSize: 17, marginBottom: 15 }}>
            Crowdfunding is the practice of funding a project or venture by
            raising small amounts of money from a large number of people,
            typically via the Internet. Crowdfunding is a form of crowdsourcing
            and alternative finance. In 2015, over US$34 billion was raised
            worldwide by crowdfunding. Although similar concepts can also be
            executed through mail-order subscriptions, benefit events, and other
            methods, the term crowdfunding refers to Internet-mediated
            registries. This modern crowdfunding model is generally based on
            three types of actors: the project initiator who proposes the idea
            or project to be funded, individuals or groups who support the idea,
            and a moderating organization (the "platform") that brings the
            parties together to launch the idea.
          </Text>
          <Text
            style={{ fontSize: 17, marginBottom: 15, alignContent: "center" }}
          >
            Crowdfunding has been used to fund a wide range of for-profit,
            entrepreneurial ventures such as artistic and creative projects,
            medical expenses, travel, and community-oriented social
            entrepreneurship projects. Even though crowdfunding has been
            suggested to be highly linked to sustainability, empirical
            validation has shown that sustainability plays only a fractional
            role in crowdfunding. Its use has also been criticised for funding
            quackery, especially costly and fraudulent cancer treatments
          </Text>
        </View>
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

        <Text
          style={{
            fontSize: 32,
            marginBottom: 30,
            top: 20,
            alignSelf: "center",
          }}
        >
          How Crowdfunding Arised
        </Text>
        <Text style={{ fontSize: 17, marginBottom: 15, alignSelf: "center" }}>
          The first recorded successful instance of crowdfunding occurred in
          1997, when a British rock band funded their reunion tour through
          online donations from fans. Inspired by this innovative method of
          financing, ArtistShare became the first dedicated crowdfunding
          platform in 2000. In recent years, crowdfunding has transformed the
          traditional fundraising landscape, breaking down barriers between
          those in need and those available to help them. Crowdfunding has made
          it possible for people to offer direct support to those who need
          emergency financial assistance, contributing to the larger trend of
          individual giving.
        </Text>
        <Text style={{ fontSize: 17, marginBottom: 15, alignSelf: "center" }}>
          In 2019, charitable giving by individuals grew by 4.7% for a total of
          $309.66 billion, outpacing giving by both corporations and
          foundations. People often turn to crowdfunding when they can’t afford
          the rapidly increasing cost of medical care, or when they lack
          insurance to cover major medical procedures and have to pay for
          out-of-pocket costs. In fact, enormous medical bills are responsible
          for 66.5% of all bankruptcies in America.
        </Text>
        <View></View>

        <View>
          <Text
            style={{
              fontSize: 32,
              marginBottom: 30,
              top: 20,
              alignSelf: "center",
            }}
          >
            Wha are the advantages of Crowdfunding?
          </Text>
          <Text style={{ fontSize: 17, marginBottom: 15, alignSelf: "center" }}>
            When funding from the government and nonprofits falls short, many
            people turn to crowdfunding, meaning that they will rely on the
            kindness of their community. Online fundraising removes the
            traditional barriers that typically exist when asking for support,
            making it simple to overcome financial obstacles quickly or raise
            money for a worthy cause. For those looking for crowdfunding basics,
            here are some of the main advantages of crowdfunding;
          </Text>
          <View style={{ flexDirection: "row" }}>
            <Text>.</Text>
            <Text>There is no application process.</Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Text>.</Text>
            <Text>There are no long wait periods to receive your funds.</Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Text>.</Text>
            <Text>
              {" "}
              Crowdfunding takes the fear out of asking for financial help. It’s
              simple to share your fundraiser with your network of friends and
              family members on social media.
            </Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Text>.</Text>
            <Text>
              Crowdfunding makes it easy to reach people outside of your
              network.{" "}
            </Text>
          </View>
        </View>

        <View>
          <Text
            style={{
              fontSize: 32,
              marginBottom: 30,
              top: 20,
              alignSelf: "center",
            }}
          >
            How it works
          </Text>

          <View>
          <TouchableOpacity
          style={{
            padding: 15,
            backgroundColor: "#fff",
            borderRadius: 50,
            alignItems: "center",
            borderColor:"#00716F",
            borderWidth:1,
            marginRight:350
        
          }}
         
        >
          <Text style={{ fontWeight: "bold", color:"#00716F", fontSize:15}}>1</Text>
        </TouchableOpacity>
            <Text style={{ fontSize: 28 }}>Create your fundraiser</Text>
          </View>
          <View>
          <TouchableOpacity
          style={{
            padding: 15,
            backgroundColor: "#fff",
            borderRadius: 50,
            alignItems: "center",
            borderColor:"#00716F",
            borderWidth:1,
            marginRight:350
        
          }}
         
        >
          <Text style={{ fontWeight: "bold", color:"#00716F", fontSize:15}}>2</Text>
        </TouchableOpacity>
            <Text>Share your fundraiser.</Text>
          </View>
          <View>
          <TouchableOpacity
          style={{
            padding: 15,
            backgroundColor: "#fff",
            borderRadius: 50,
            alignItems: "center",
            borderColor:"#00716F",
            borderWidth:1,
            marginRight:350
        
          }}
         
        >
          <Text style={{ fontWeight: "bold", color:"#00716F", fontSize:15}}>3</Text>
        </TouchableOpacity>
            <Text> Easily accept donations.</Text>
          </View>
        </View>

        <View>
          <Text
            style={{
              fontSize: 32,
              marginBottom: 30,
              top: 20,
              alignSelf: "center",
            }}
          >
            Fundraisers success stories
          </Text>
          <View>
            <Text style={{ fontSize: 17, alignSelf: "center" }}>
              No success stories yet
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
