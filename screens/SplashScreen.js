import React from 'react';
import { StyleSheet, Text, View,Button,Dimensions,Image,TouchableOpacity} from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';

import MaterialIcons  from 'react-native-vector-icons/MaterialIcons'
const SplashScreen = ({navigation})=>
{
  return (
    <View style={styles.container}>
    <View style={styles.header}>
      < Image
      source={ require('../assets/logo.jpg')}
      style={styles.logo}
      resizeMode="stretch"
      />
    </View>
    <View style={styles.footer}>
        <Text style={styles.title}>Stay connect with everyone!</Text>
        <Text style={styles.text}>Sign in with account</Text>
        <View style={styles.button}>
        <TouchableOpacity onPress={alert('click')}>
            <LinearGradient
            colors={['#08d4c4','#01ab9d']}
            styles={styles.SignIn}
            >
<Text style={styles.textSign}> Get Started</Text>
<MaterialIcons
name="navigate-next"
color="#fff"
size={20}
/>
            </LinearGradient>
            </TouchableOpacity></View>
    </View>
    </View>
  );
};
export default SplashScreen;

const {height}=Dimensions.get("screen");
const height_logo = height * 0.28;

const styles =StyleSheet.create({
    container:{
        flex:1 ,
         backgroundColor:'#009387'
    },
    header:{
        flex:2,
        justifyContent:'center',
        alignItems:'center'
    },
    footer:{
        flex:1,
        backgroundColor:'#fff',
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        paddingVertical:50,
        paddingHorizontal:30
         },
         logo:{
             width:height_logo,
             height:height_logo
         },
         title:{
             color:'black',
             marginTop:5,
             fontWeight:'bold',
            fontSize:30
         },
         button:
         {
             alignItems:'flex-end',
             marginTop:30
         },
         SignIn:{
             width:150,
             height:40,
             justifyContent:'center',
             borderRadius:50,
             flexDirection:'row'
         },
         textSign:{
             color:'white',
             fontWeight:'bold',
            //  borderTopLeftRadius:50,
            //  borderTopRightRadius:50,
            //  paddingVertical:50,
            //  paddingHorizontal:30

         }

});