



import * as React from 'react';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { ScrollView, StyleSheet, Text, View,StatusBar} from 'react-native';

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

const ProfileScreen = ({navigation}) => {
  return(
    <View style={{flex:1}}>
   
  < ScrollView>
    
  <View style={styles.card}>
 
  <Card >
   
    <Card.Content>
      <Title style={{textAlign:'center'}}>Company Profile</Title>
     </Card.Content>
    <Card.Cover source={{ uri: 'https://absoluit.com/wp-content/uploads/2020/04/company-profile.png'}} />
   
    <Card.Content>
    <Paragraph>A desirable company profile template for a client tells a lot about the business, so let’s discuss how to make a company profile for a new business step by step how to make company profile template PDF and PSD with examples.</Paragraph>
    </Card.Content>

     <Card.Content>
    <Title style={{textAlign:'center'}}>
      How Route Planning System Can Rule Your Business
    </Title>
     </Card.Content>
    <Card.Cover source={{ uri: 'https://absoluit.com/wp-content/uploads/2021/01/route-planning-system.png'}} />
  
    <Card.Content>
    <Paragraph>A desirable company profile template for a client tells a lot about the business, so let’s discuss how to make a company profile for a new business step by step how to make company profile template PDF and PSD with examples.</Paragraph>
    </Card.Content>
    </Card>
    <View style={{backgroundColor:'#694fad', marginRight:50,marginLeft:50,marginBottom:10,marginTop:20,padding:5,borderRadius:10}}>
    <Button onPress={()=>navigation.navigate("Home")}>
      <Text style={{color:'#fff'}}> Click For ADD HR</Text></Button>
    </View>
  </View>

  </ ScrollView>
  </View>
);
  }
export default ProfileScreen;

















































// import React from 'react';
// import { StyleSheet, Text, View,Button } from 'react-native';
// const ProfileScreen = ({navigation})=>
// {
//   return (

//     <View style={styles.container}>
//     <Text>Profile Screen</Text> 
//     <Button title=" Click Here"
//     onPress={()=>alert('Button  Clicked!')}
//     />
//     </View>
//   );
// };
// export default ProfileScreen;

const styles =StyleSheet.create({
    container:{
        flex:1 ,
         alignItems:'center',
         justifyContent:'center'
    },
    card:{
      margin:20,
      marginTop:20,
      justifyContent:'center',
    
    },
   
})