// import React from 'react';
import React, { Component, useEffect } from 'react';
import { StyleSheet, View, Text,Dimensions, Button, TouchableOpacity, TouchableHighlight, KeyboardAvoidingView, TextInput  } from 'react-native'
const defaultwidth = Dimensions.get('window').width;

const AccountScreen = ({ navigation }) => {
    // const  signIn  = React.useContext(AuthContext);
  
    return (
      <View>
        <Text>This is Account screen</Text>
        <Button title="Sign In" onPress={() => {
            navigation.replace('Login');
        }} />
      </View>
    );
};

export default AccountScreen;