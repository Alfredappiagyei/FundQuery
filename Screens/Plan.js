import React from 'react';
import { View,  Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function Plan({navigation}) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontSize: 20 }}>Plan Screen</Text>
            <TouchableOpacity
                title="Go to Details"
                onPress={()=>navigation.navigate('post')}
            >
            </TouchableOpacity>
        </View>
    );
}