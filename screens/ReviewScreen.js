import React, { Component } from 'react';
import {  View, Text, Button, Platform } from 'react-native';

export default class ReviewScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: 'Review Jobs',
    headerRight: (
      <Button
        title='Settings'
        onPress={() => navigation.navigate('settings')}
      />
    ),

    headerStyle: {
      marginTop: Platform.OS === 'android' ? 24: 0
    }

    // right: ({ navigate }) => {
    //   return (
    //     <Button
    //       title='Settings'
    //       onPress={() => navigate('settings')}
    //       backgroundColor='rgba(0,0,0,0'
    //       color='rgba(0, 122, 255, 1)'
    //     />
    //   )
    // }
  });

  render() {
    return (
      <View>
        <Text> ReviewScreen </Text>
        <Text> ReviewScreen </Text>
        <Text> ReviewScreen </Text>
        <Text> ReviewScreen </Text>
      </View>
    );
  }
}