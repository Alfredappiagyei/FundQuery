import React from 'react';
import { View, Button, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function MyCampaignetails({navigation}) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontSize: 20 }}>Individual Campaign Details Screen</Text>
            <TouchableOpacity
                title="Go to Details"
                onPress={()=>navigation.navigate('post' ) }
            >
            </TouchableOpacity>
        </View>
    );
}