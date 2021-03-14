// import React from 'react';
import React, { Component, useEffect } from 'react';
import { StyleSheet, View, Text,Dimensions, Button, TouchableOpacity, TouchableHighlight, KeyboardAvoidingView, TextInput  } from 'react-native'
const defaultwidth = Dimensions.get('window').width;

const RulesScreen = ({ navigation }) => {
    // const  signIn  = React.useContext(AuthContext);
  
    return (
      <View>
        <Text>This is Rules screen</Text>
        <Button title="Sign In" onPress={() => {
            navigation.replace('Login');
        }} />
      </View>
    );
};

export default RulesScreen;