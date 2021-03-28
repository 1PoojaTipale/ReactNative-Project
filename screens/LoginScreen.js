import React from 'react';
import { StyleSheet, Text, View,Button,Dimensions,TouchableOpacity,Platform,TextInput, StatusBar,Image } from 'react-native';

// import { LinearGradient } from 'expo-linear-gradient'; 

// import FontAwesome  from 'react-native-vector-icons/FontAwesome ';
import { FontAwesome } from '@expo/vector-icons';
import Feather from 'react-native-vector-icons/Feather';
import { LinearGradient } from 'expo-linear-gradient';
 


const LoginScreen = ({navigation})=>
{

const[data,setData]=React.useState({
  email:'',
  password:'',
  check_textInputChange:false,
  secureTextEntry:true
});


const textInputChange =(val)=>{
  if(val.length !=0)
  {
    setData({
      ...data,
      email:val,
      check_textInputChange:true
    });
  }
  else{
    setData({
      ...data,
      email:val,
      check_textInputChange:false
    });
  }
}

  const handlePasswordChange=(val)=>{
    setData({
      ...data,
      password:val
    });
  }

  const updateSecureTextEntry=()=>{
    setData({
      ...data,
      secureTextEntry:!data.secureTextEntry
    });
  }
  return (
    



    
    <View style={styles.container}>
      <StatusBar backgroundColor='white' barStyle="dark-content"/>
    <View style={styles.header}>
    < Image
      animation="bounceIn"
      duraton="1500"
      source={ require('../assets/logo2.jpg')}
     
      style={styles.logo}
      resizeMode="stretch"
      /> 
    <Text style={styles. text_header}>Login Here !</Text>
    </View>
    <View 
    animation="fadeInUpBig"
     style={styles.footer}>
    <Text style={styles.text_footer}>Email</Text>
    <View style={styles.action}>
      <FontAwesome
      name="envelope"
      color="#5375a"
      size={20}/>
      <TextInput
      
      placeholder= "Your Email"
      style={styles.textInput}
      autoCapitalize="none"
      onChangeText={(val)=>textInputChange(val)}
      />

      {data.check_textInputChange ?
      <View
      animation="bounceIn"
      >
  <Feather
      name="check-circle"
      color="green"
      size={20}
      />
      </View>
    
     :null}
    </View>
    <Text style={[styles.text_footer,{marginTop:35} ]}>Password</Text>
    <View style={styles.action}>
      <FontAwesome
      name="lock"
      color="#5375a"
      size={20}/>
      <TextInput
       keyboardType="name-phone-pad"
       maxLength={10}
      placeholder= "Your Password"
      secureTextEntry={data.secureTextEntry ? true:false}
      style={styles.textInput}
      autoCapitalize="none"
      onChangeText={(val)=>handlePasswordChange(val)}/>

      <TouchableOpacity
      onPress={updateSecureTextEntry}
      
      >
        {data.secureTextEntry ?
      <Feather
      name="eye-off"
      color="grey"
      size={20}
      />
      :
      <Feather
      name="eye"
      color="grey"
      size={20}
      />}
</TouchableOpacity>
   </View>
   <View style={styles.button}>
     
     <TouchableOpacity
     onPress={()=>navigation.navigate('Home')}
     style={[styles.signIn,{
       backgroundColor:'#009387',
       borderColor:'#009387',
       borderWidth:2,
       borderRadius:8,
       marginTop:15,
       width:300,
       height:40   
     }]}
     >
       <Text style={[styles.textSign, {
          color:'#fff',
          textAlign:'center',
          paddingTop:5
       }]}> Login</Text>
     </TouchableOpacity>
     <TouchableOpacity
     onPress={()=>navigation.navigate('RegisterScreen')}
     style={[styles.signIn,{
       borderColor:'#009387',
       borderWidth:2,
       borderRadius:8,
       marginTop:15,
       width:300,
       height:40   
     }]}
     >
       <Text style={[styles.textSign, {
          color:'#009387',
          textAlign:'center',
          paddingTop:5
       }]}> Register</Text>
     </TouchableOpacity>
   </View>
    </View>
    </View>
  );
};
export default LoginScreen;

const {height}=Dimensions.get("screen");
const height_logo = height * 0.2;

const styles =StyleSheet.create({
    container:{
        flex:1 ,
        backgroundColor:'#fff',
         alignItems:'center',
         justifyContent:'center'
    },
    header:{
      flex:2,
      // justifyContent:'flex-end',
    paddingHorizontal:20,
    paddingBottom:50
    
  },
  footer:{
      flex:3,
      backgroundColor:'#fff',
      borderTopLeftRadius:0,
      borderTopRightRadius:0,
      paddingVertical:20,
      paddingHorizontal:30
       },
       text_header:{
         color:'black',
         fontWeight:'bold',
         fontSize:30,
         alignItems:'center'
       },
       text_footer:{
         color:'#05375a',
         fontSize:18
       },

      action:{
           flexDirection:'row',
           marginTop:10,
           borderBottomWidth:1,
           borderBottomColor:'#f2f2f2',
           paddingBottom:5
       },
       textInput:{
         flex:1,
        marginTop: Platform.OS === 'ios' ?0:-5,
        paddingLeft:10,
        color:'#05375a',
        // fontSize:80,
       },
       button:
       {
           alignItems:'center',
           marginTop:50,
           


          //  justifyContent:'center'
          
       },
       SignIn:{
           width:150,
           height:40,
           justifyContent:'center',
           borderRadius:50,
           
          //  flexDirection:'row'
       },
       textSign:{

        fontSize:18,
        fontWeight:'bold'
          

       },

       logo:{
        width:height_logo,
        height:height_logo,
        borderRadius:200,
        marginTop:50
        
        
       }





})


































































































































































// import React from 'react';
// import { StyleSheet, Text, View,Button,TouchableOpacity } from 'react-native';
// const LoginScreen = ({navigation})=>
// {
//   return (
//     <View style={styles.container}>
//     <Text>Login Screen</Text> 
//     <View style={styles.button}>
//      <TouchableOpacity
//      onPress={()=>navigation.navigate('Home')}
//      style={[styles.signIn,{
//        backgroundColor:'#e36bae',
//        borderColor:'#e36bae',
//        borderWidth:2,
//        borderRadius:8,
//        marginTop:20,
//        width:300,
//        height:40 ,
//        marginBottom:20,
//        marginLeft:30
//      }]}
//      >
//        <Text style={[styles.textSign, {
//           color:'#fff',
//           textAlign:'center',
//           // paddingTop:5,
//           marginTop:2,fontSize:20,
//        }]}>ADD HR</Text>
//      </TouchableOpacity>
//     </View>
  
//     </View>
//   );
// };
// export default  LoginScreen;

// const styles =StyleSheet.create({
//     container:{
//         flex:1 ,
//          alignItems:'center',
//          justifyContent:'center'
//     }
// })