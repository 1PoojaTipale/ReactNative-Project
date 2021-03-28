




import * as React from 'react';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { ScrollView, StyleSheet, Text, View,} from 'react-native';

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

const ExploreScreen = ({navigation}) => {
  return(
    <View>
        
  < ScrollView>
    
  <View style={styles.card}>
 
  <Card >
   
    <Card.Content>
      <Title style={{textAlign:'center'}}>About Us</Title>
     </Card.Content>
    <Card.Cover
    style={{marginTop:10}} 
    source={{ uri: 'https://s.tmimgcdn.com/scr/1204x1146/46300/it-website-template_46358-original.jpg'}} />
   
    <Card.Content>
    <Paragraph>A desirable company profile template for a client tells a lot about the business, so let’s discuss how to make a company profile for a new business step by step how to make company profile template PDF and PSD with examples.</Paragraph>
    </Card.Content>

   
     
    
    </Card>
    <View style={{backgroundColor:'#d02860', marginRight:50,marginLeft:50,marginBottom:10,marginTop:50,padding:5,borderRadius:10}}>
    <Button onPress={()=>navigation.navigate("Home")}>
      <Text style={{color:'#fff'}}> Click For ADD HR</Text></Button>
    </View>
  </View>

  </ ScrollView>
  </View>
);
  }
export default ExploreScreen;
const styles =StyleSheet.create({
    container:{
        flex:1 ,
         alignItems:'center',
         justifyContent:'center'
    },
    card:{
      margin:20,
      marginTop:60,
      justifyContent:'center',
    
    },
   
})

























































// import React from 'react';
// import { StyleSheet, Text, View,Button } from 'react-native';
// const  ExploreScreen = ({navigation})=>
// {
//   return (
//     <View style={styles.container}>
//     <Text>Explore Screen</Text> 
//     <Button title=" Click Here"
//     onPress={()=>alert('Button  Clicked!')}
//     />
//     </View>
//   );
// };
// export default ExploreScreen;

// const styles =StyleSheet.create({
//     container:{
//         flex:1 ,
//          alignItems:'center',
//          justifyContent:'center'
//     }
// })