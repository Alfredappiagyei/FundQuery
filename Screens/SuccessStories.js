import React from 'react';
import { View,  Text, StyleSheet, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export default function SuccessStories({navigation}) {
    return (
        <View style={{alignItems:"center", justifyContent:"center", flex:1}}>
            <Text style={{fontSize:35}}>Success Stories</Text>
            <ScrollView >
                    <Text>No Success stories yet</Text>
            </ScrollView>
        </View>
    );
}