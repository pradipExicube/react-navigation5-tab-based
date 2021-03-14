// import React from 'react';
import React, { Component, useEffect } from 'react';
import {StyleSheet,Image,View, Text,Dimensions, TouchableOpacity,KeyboardAvoidingView,ScrollView,FlatList  } from 'react-native'
import Colors from '../../res/Colors';
import CustomHeader from '../components/CustomHeader';
import { SearchBar,Button,Icon } from 'react-native-elements';
import CustomplayOptions from '../components/CustomPlayOptions';
import CustomButton from '../components/CustomButton';

const defaultwidth = Dimensions.get('window').width;
const buttonContainerStyle={marginLeft:10,marginRight:10}
const themeButtonStyle={borderWidth:1,borderRadius:20,
    paddingBottom:12,paddingTop:12,paddingLeft:12,paddingRight:12,
    fontSize:12,borderColor:Colors.primary,color:'#fff',backgroundColor:Colors.primary,
    fontWeight:'700',opacity:1,textAlign:'center',letterSpacing:1}

const whiteButtonStyle={borderWidth:1,borderRadius:20,
    paddingBottom:12,paddingTop:12,paddingLeft:12,paddingRight:12,
    fontSize:12,borderColor:'#fff',color:'#3484b4',backgroundColor:'#fff',
    fontWeight:'700',opacity:1,textAlign:'center',letterSpacing:1}

const HomeScreen = ({ navigation }) => {

    const DATA = [
        {
          id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
          title: '| FATAFAT |',
          subTitle:'| GAME |',
          imageURL:require('../../res/imgs/logo.png')
        },
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28bb',
            title: '| FATAFAT |',
            subTitle:'| GAME |',
            imageURL:require('../../res/imgs/logo.png')
        },
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28bc',
            title: '| FATAFAT |',
            subTitle:'| GAME |',
            imageURL:require('../../res/imgs/logo.png')
        },
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28bd',
            title: '| FATAFAT |',
            subTitle:'| GAME |',
            imageURL:require('../../res/imgs/logo.png')
        },
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28be',
            title: '| FATAFAT |',
            subTitle:'| GAME |',
            imageURL:require('../../res/imgs/logo.png')
        },
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28bf',
            title: '| FATAFAT |',
            subTitle:'| GAME |',
            imageURL:require('../../res/imgs/logo.png')
        },
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28bg',
            title: '| FATAFAT |',
            subTitle:'| GAME |',
            imageURL:require('../../res/imgs/logo.png')
        }
    ];
    
    const handleScroll = (event) => {
        const positionX = event.nativeEvent.contentOffset.x;
        const positionY = event.nativeEvent.contentOffset.y;
        console.log(positionX,positionY)
        if(positionY >665){
            console.log("grater")
        }else{console.log("less")}
    };


    /* === Custom list items ============*/
    const renderItem = ({ item }) => (
        <View style={{marginBottom:10}}>
            <CustomplayOptions
                imageURL={item.imageURL}
                subTitle={item.subTitle}
                title={item.title}
                buttonClick={()=>{alert("play clicked")}}
            
            />
        </View>
    );





// const image = { uri: "https://reactjs.org/logo-og.png" };
    return (
        <KeyboardAvoidingView style={styles.container}>
            <Image 
                style={{flex:1,top:'-7%',width:150,resizeMode:'contain', alignSelf:'flex-end',opacity:0.2}}
                source={require('../../res/imgs/right-top.png')}
            />

            <Image 
                style={{flex:1,left:-20,top:'25%',width:150,resizeMode:'contain', alignSelf:'flex-start',opacity:0.2}}
                source={require('../../res/imgs/left-btm.png')}
            />
            

            <View style={{position:'absolute',top:0,flex:1,width:'100%',height:'100%',zIndex:0.1}}>
            
            {/* === Custom Header ============*/}
            <CustomHeader
                logoClick={()=>{alert("logo clicked")}}
                walletClick={()=>{alert("Wallet clicked")}}
                notificationClick={()=>{alert("Notification clicked")}}
                menuClick={()=>{alert("Menu clicked")}}
            />
            <ScrollView 
                onScroll={handleScroll}
                style={{
                    marginBottom:5,
                    paddingBottom:20,
                }}>
                    <View style={{borderWidth:0.7, borderColor:'#fff',borderTopWidth:0,borderLeftWidth:0,borderRightWidth:0,marginLeft:15,marginRight:15,marginBottom:10}}>
                        <SearchBar
                            placeholder="Type Here..."
                            // onChangeText={this.updateSearch}
                            // value={search}
                            inputContainerStyle={{borderRadius:18,backgroundColor:'#fff',height:40}}
                            containerStyle={{backgroundColor:'transparent',borderTopWidth:0, borderBottomWidth:0,paddingBottom:13}}
                            leftIconContainerStyle={{paddingLeft:10}}
                            inputStyle={{fontSize:13,letterSpacing:1,fontWeight:'600'}}

                        />
                    </View>
                    <View>
                        <FlatList
                            data={DATA}
                            renderItem={renderItem}
                            keyExtractor={item => item.id}
                        />
                    </View>

                    {/* === Custom button ============*/}
                    <View style={{paddingBottom:20}}>
                        <CustomButton
                            title={'CLICK HERE TO GAMES RULESGAM'}
                            buttonClick={()=>{alert("button clicked")}}
                            containerStyle={buttonContainerStyle}
                            buttonStyle={themeButtonStyle}
                        />
                    </View>
                    <View style={{paddingBottom:30}}>
                        <CustomButton
                            title={'GAME OPENING AND CLOSING TIME'}
                            buttonClick={()=>{alert("button clicked")}}
                            containerStyle={buttonContainerStyle}
                            buttonStyle={whiteButtonStyle}
                        />
                    </View>






            </ScrollView>
            </View>

            {/* === Call button ============*/}
            <View style={{position:'absolute',bottom:30,right:17,backgroundColor:Colors.primary,padding:10,borderRadius:50}}>
                <Icon
                    name='call-outline'
                    type="ionicon"
                    size={17}
                    color={'#fff'}
                    onPress={()=>{alert("call button pressed")}}
                />
            </View>

        </KeyboardAvoidingView>

    );
};

const styles = StyleSheet.create({
    container: {
      backgroundColor: Colors.primary,
      flex: 1,
      flexDirection: "column"
    },
    rightTopImg: {
        height:60,
        width:170,
        resizeMode:'cover',
        top:0,
        right:-15,
      },
      rightTopScrollImg:{
        position:'absolute',
        resizeMode:'contain',
        top:-300,
        right:-213,
        opacity:0.2
      }
    
  });

export default HomeScreen;