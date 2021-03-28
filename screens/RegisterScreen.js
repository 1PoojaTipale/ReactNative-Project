import React from 'react';
import { StyleSheet, Text, View,Button,Dimensions,TouchableOpacity,Platform,TextInput, StatusBar } from 'react-native';

// import { LinearGradient } from 'expo-linear-gradient'; 

// import { Form, FormItem } from 'react-native-form-validation';
// import FontAwesome  from 'react-native-vector-icons/FontAwesome ';
import { FontAwesome } from '@expo/vector-icons';
import Feather from 'react-native-vector-icons/Feather';
import { LinearGradient } from 'expo-linear-gradient';


const RegisterScreen = ({navigation})=>
{

const[data,setData]=React.useState({
  name:'',
  email:'',
  emailError:'',
  password:'',
  confirm_password:'',
  check_textInputChange:false,
  secureTextEntry:true,
  confirm_secureTextEntry:true
});


const textsInputChange =(val)=>{
  if(val.length !=0)
  {
    setData({
      ...data,
     name:val,
      check_textsInputChange:true
    });
  }
  else{
    setData({
      ...data,
    name:val,
      check_textsInputChange:false
    });
  }
}
const textInputChange =(val)=>{
  if(val.length !=0)
  {
    setData({
      ...data,
      name:val,
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
  const handleConfirmPasswordChange=(val)=>{
    setData({
      ...data,
      confirm_password:val
    });
  }

  const updateSecureTextEntry=()=>{
    setData({
      ...data,
      secureTextEntry:!data.secureTextEntry
    });
  }
  const updateConfirmSecureTextEntry=()=>{
    setData({
      ...data,
     confirm_secureTextEntry :!data.confirm_secureTextEntry
    });
  }


  


  return (
    <View style={styles.container}>
      <StatusBar backgroundColor='#fff' barStyle="light-content"/>
    <View style={styles.header}>
    <Text style={styles. text_header}>Register Now!</Text>
    </View>

    <View 
    animation="fadeInUpBig"
     style={styles.footer}>

    <Text style={styles.text_footer}>Name</Text>
    <View style={styles.action}>
      <FontAwesome
      name="user"
      color="#5375a"
      size={20}/>
      <TextInput
      minLength={3}
      placeholder= "Your Name"
      keyboardType="default"
      style={styles.textInput}
      autoCapitalize="none"
      onChangeText={(val)=>textsInputChange(val)}
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
    <Text style={[styles.text_footer,{marginTop:30}]}>Email</Text>
    <View style={styles.action}>
      <FontAwesome
      name="envelope"
      color="#5375a"
      size={20}/>
      <TextInput
      placeholder= "Your Email"
      keyboardType="email-address"
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
      placeholder= "Your Password"
      keyboardType="name-phone-pad"
      maxLength={10}
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
    <Text style={[styles.text_footer,{marginTop:35} ]}> Confirm Password</Text>
    <View style={styles.action}>
      <FontAwesome
      name="lock"
      color="#5375a"
      size={20}/>
      <TextInput
       keyboardType="name-phone-pad"
       maxLength={10}
      placeholder= " Confirm Your Password"
      secureTextEntry={data.confirm_secureTextEntry ? true:false}
      style={styles.textInput}
      autoCapitalize="none"
      onChangeText={(val)=>handleConfirmPasswordChange(val)}/>

      <TouchableOpacity
      onPress={updateConfirmSecureTextEntry}
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
     onPress={()=>navigation.goBack()}
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
          color:'#fff',textAlign:'center',paddingTop:5,
       }]}> Register</Text>
     </TouchableOpacity>
   </View>
    </View>
    </View>
  );
};
export default RegisterScreen;

const styles =StyleSheet.create({
    container:{
        flex:1 ,
        backgroundColor:'#fff',
         alignItems:'center',
        //  justifyContent:'center'
    },
    header:{
      flex:1,
      justifyContent:'flex-end',
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
         fontSize:30
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
           height:50,
           justifyContent:'center',
           borderRadius:50,
          
           
          //  flexDirection:'row'
       },
       textSign:{

        fontSize:18,
        fontWeight:'bold',
     

       }








})