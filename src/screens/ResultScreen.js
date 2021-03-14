// import React from 'react';
import React, { Component, useEffect } from 'react';
import { StyleSheet, View, Text,Dimensions, Button, TouchableOpacity, TouchableHighlight, KeyboardAvoidingView, TextInput  } from 'react-native'
const defaultwidth = Dimensions.get('window').width;

const ResultScreen = ({ navigation }) => {
    // const  signIn  = React.useContext(AuthContext);
  
    return (
      <View>
        <Text>Sign In Screen</Text>
        <Button title="Sign In" onPress={() => {
            // alert("cjsbckdjsbcj")
            // signIn()
            // navigation.navigate('Home')
        }} />
        <Button
          title="Create Account"
          onPress={() => signIn()}
        />
      </View>
    );
};

export default ResultScreen;