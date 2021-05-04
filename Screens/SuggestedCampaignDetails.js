import React from "react";
import {
    Share,
    View,
    Text,
    Image,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    StatusBar,
} from "react-native";
import * as Progress from "react-native-progress";
import { connect } from "react-redux";
import * as Animatable from "react-native-animatable";
import { LinearGradient } from "expo-linear-gradient";
import { useTheme } from "@react-navigation/native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import ReadMore from "react-native-read-more-text";

function SuggestedCampaignDetails({ auth, route, navigation }) {
    const { title, category, goal, image, about } = route.params;
    console.log("image", image);
    const { colors } = useTheme();
    const myCustomShare = async () => {
        const shareptions = {
            message: "Let people know about yoour campaign or the campaign of others",
        };
        try {
            const result = await Share.share(shareptions);
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <>
            {auth.login ? (
                <View style={styles.container}>
                    <StatusBar backgroundColor="red" barStyle="light-content" />
                    <View style={styles.header}>
                        <Image style={styles.image} source={{uri:image}}/>
                    </View>
                    <Animatable.View
                        style={[
                            styles.footer,
                            {
                                backgroundColor: colors.background,
                                zIndex: Platform.OS === 'ios' ? 2 : 2,
                            },
                        ]}
                        animation="fadeInUpBig"
                    >
                        <Text
                            style={[
                                styles.title,
                                {
                                    color: colors.text,
                                },
                            ]}
                        >
                            {title}
                        </Text>
                        <ReadMore numberOfLines={2}>
                            <Text style={styles.description}>{about}</Text>
                        </ReadMore>

                        <View style={styles.buttons}>
                            <TouchableOpacity
                                onPress={() => navigation.navigate("Editcampaign")}
                            >
                                <LinearGradient
                                    colors={["#08d4c4", "#01ab9d"]}
                                    style={styles.signIn}
                                >
                                    <Text style={styles.textSign}>EDIT</Text>
                                    <MaterialIcons name="navigate-next" color="#fff" size={20} />
                                </LinearGradient>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={myCustomShare}>
                                <LinearGradient
                                    colors={["#08d4c4", "#01ab9d"]}
                                    style={styles.signIn}
                                >
                                    <Text style={styles.textSign}>SHARE</Text>
                                    <MaterialIcons name="navigate-next" color="#fff" size={20} />
                                </LinearGradient>
                            </TouchableOpacity>
                        </View>
                        <View>
                        { Platform.OS === 'ios'?(
                              <Progress.Bar
                              progress={0}
                              width={350}
                              height={7}
                              color="#009387"
                              style={{ marginVertical: 20 }}
                          />
                        ):(
                            <Progress.Bar
                            progress={0}
                            width={280}
                            height={7}
                            color="#009387"
                            style={{ marginVertical: 20 }}
                        />
                        )}

                       
                            <View style={styles.info}>
                                    <Image style={styles.profile} source={{uri:image}} />
                                    
                                <Text style={styles.author}>GH000</Text>
                                <Text> Raised of </Text>
                                <Text style={styles.petdetails}>GHC{goal}</Text>
                                <Text> Goal</Text>
                            </View>
                        </View>
                    </Animatable.View>
                </View>
            ) : 
            
            
            
            
            (
                <View style={styles.container}>
                    <StatusBar backgroundColor="#009387" barStyle="light-content" />
                    <View style={styles.header2}>
                            <Image source={{uri:image}} style={styles.image}/>
                    </View>

                    <Animatable.View
                        style={[
                            styles.footer2,
                            {
                                backgroundColor: colors.background,
                                zIndex: Platform.OS === 'ios' ? 2 : 2,
                            },
                        ]}
                        animation="fadeInUpBig"
                    >
                        <Text
                            style={[
                                styles.title,
                                {
                                    color: colors.text,
                                },
                            ]}
                        >
                            {title}
                        </Text>
                        <ReadMore numberOfLines={2}>
                            <Text style={styles.description}>{about}</Text>
                        </ReadMore>

                        <View style={{ flexDirection: "row", left: 20, top: 10 }}>
                        <Text style={{ fontSize: 15, fontWeight: "bold" }}>Category: </Text>
                            <Text style={{ fontSize: 15,   }}>{category}</Text>
                        </View>

                        <View style={styles.buttons}>
                            <TouchableOpacity onPress={() => navigation.navigate("pay")}>
                                <LinearGradient
                                    colors={["#08d4c4", "#01ab9d"]}
                                    style={styles.signIn}
                                >
                                    <Text style={styles.textSign}>DONATE</Text>
                                    <MaterialIcons name="navigate-next" color="#fff" size={20} />
                                </LinearGradient>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={myCustomShare}>
                                <LinearGradient
                                    colors={["#08d4c4", "#01ab9d"]}
                                    style={styles.signIn}
                                >
                                    <Text style={styles.textSign}>SHARE</Text>
                                    <MaterialIcons name="navigate-next" color="#fff" size={20} />
                                </LinearGradient>
                            </TouchableOpacity>
                        </View>
                        <View>
                        { Platform.OS === 'ios'?(
                              <Progress.Bar
                              progress={0}
                              width={350}
                              height={7}
                              color="#009387"
                              style={{ marginVertical: 20 }}
                          />
                        ):(
                            <Progress.Bar
                            progress={0}
                            width={280}
                            height={7}
                            color="#009387"
                            style={{ marginVertical: 20 }}
                        />
                        )}

                            <View style={styles.info}>
 
                                    <Image style={styles.profile}  source={{uri:image}}/>
                              
                                <Text style={styles.author}>GH 000 </Text>
                                <Text>Raised of </Text>
                                <Text style={styles.petdetails}>GHC {goal} </Text>
                                <Text>Goal</Text>
                            </View>
                        </View>
                    </Animatable.View>
                </View>
            )}
        </>
    );
}

const styles = StyleSheet.create({
    name: {
        fontSize: 22,
        fontWeight: "bold",
        marginHorizontal: 25,
        marginVertical: 13,
    },
    image: {
        width: "100%",
        height: 330,
        zIndex: 2,
    },
    profile: {
        width: 29,
        height: 29,
        borderRadius: 50,
        marginRight: 20,
    },

    post: {
        marginHorizontal: 25,
        marginTop: 40,
        fontSize: 18,
        lineHeight: 27,
    },

    author: {
        fontWeight: "bold",
        fontSize: 18,
    },

    dot: {
        height: 15,
        width: 5,
        borderRadius: 50,
        color: "white",
        position: "relative",
    },

    info: {
        flexDirection: "row",
        position: "relative",
    },

    container: {
        flex: 1,
        backgroundColor: "#009387",
    },
    header: {
        flex: 2,
        justifyContent: "center",
        alignItems: "center",
    },
    header2: {
        flex: 2,
        
    },
    footer: {
        flex: 2,
        backgroundColor: "#fff",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 30,
        paddingHorizontal: 30,
    },
    footer2: {
        flex: 2,
        backgroundColor: "#fff",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        paddingVertical: 30,
        paddingHorizontal: 30,
    },
    logo: {
        fontSize: 45,
        fontWeight: "bold",
        flexDirection: "row",
    },
    title: {
        color: "#05375a",
        fontSize: 22,
        fontWeight: "bold",
    },
    text: {
        color: "grey",
        marginTop: 5,
    },
    buttons: {
        flexDirection: "row",
        marginTop: 30,
        justifyContent: "space-between",
    },

    signIn: {
        width: 150,
        height: 40,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 50,
        flexDirection: "row",
    },
    textSign: {
        color: "white",
        fontWeight: "bold",
    },
});

const mapStateToProps = (state) => {
    return { auth: state };
};

export default connect(mapStateToProps)(SuggestedCampaignDetails);
