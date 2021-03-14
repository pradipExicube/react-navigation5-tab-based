// import React from 'react';
import React, { Component, useEffect } from 'react';
import { StyleSheet, View, Text,Dimensions, Button, TouchableOpacity, TouchableHighlight, KeyboardAvoidingView, TextInput  } from 'react-native'
const defaultwidth = Dimensions.get('window').width;

const TimeScreen = ({ navigation }) => {
    // const  signIn  = React.useContext(AuthContext);
  
    return (
      <View>
        <Text>This is Time screen</Text>
        <Button title="Sign In" onPress={() => {
            navigation.replace('Login');
        }} />
      </View>
    );
};

export default TimeScreen;