
import React from 'react';
import { StyleSheet, Text, View,StatusBar ,} from 'react-native';
import { color } from 'react-native-reanimated';
import { Avatar, Button, Card, Title, Paragraph,Appbar } from 'react-native-paper';
const  HomeScreen = ({navigation})=>

{
  return (

    
      // for card 1
    <View style={{flex:1 }}>
      <StatusBar backgroundColor='#fff' barStyle="dark-content"/>
      
      
      
      
      <View style={{flexDirection:'row'}}>

    <View style={{flexDirection:'column'}}>
    <View style={styles.card} >
    <Card >
    <Card.Title style={styles.card_title} 
    title=" HR "  />
    <Card.Content>
      <Title>Details Of The HR  </Title>
      <Paragraph>For more details go to the HR screen</Paragraph>
  </Card.Content>
   
  <Card.Actions>

      <Button style={{paddingLeft:15,paddingRight:5}}
      onPress={()=>navigation.navigate("SettingsScreen")}>click here</Button>
     
  </Card.Actions>
  </Card>
  </View>
  </View>
  
     {/* FOR CARD 2 */}
      
    <View style={{flexDirection:'column'}}>
    <View style={styles.employ}>
    <Card>
    <Card.Title style={styles.employ_title} 
    title="COMPANY"  />
  <Card.Content>
      <Title>Details Of The Employee  </Title>
      <Paragraph>For more details go  Employee screen</Paragraph>
  </Card.Content>
   
  <Card.Actions>
      <Button style={{paddingLeft:20,paddingRight:5}}
      onPress={()=>navigation.navigate("Profile")}>click Here</Button>   
  </Card.Actions>
  </Card>
  </View>
  </View>
  </View>

  {/* CARD3 */}
     
  <View style={{flexDirection:'row'}}>
      
      
      <View style={{flexDirection:'column'}}>
      <View style={styles.company} >
      <Card >
    <Card.Title style={styles.company_title} 
    title="Employee"  />
    <Card.Content>
      <Title>Details Of The Company   </Title>
      <Paragraph>For more details go  Company screen</Paragraph>
    </Card.Content>
   
    <Card.Actions>
      <Button style={{paddingLeft:15,paddingRight:5}}
      onPress={()=>navigation.navigate("Employe")}>click Here</Button>
      {/* <Button>Ok</Button> */}
     
    </Card.Actions>
  </Card>
  </View>
      </View>
      
       {/* CARD4 */}
      <View style={{flexDirection:'column'}}>
      <View style={styles.about} >
      <Card >
    <Card.Title style={styles.about_title} 
    title="ABOUT"  />
    <Card.Content>
      <Title>Details of The About Us </Title>
      <Paragraph>For more details go to the About screen</Paragraph>
    </Card.Content>
   
    <Card.Actions>
      <Button style={{paddingLeft:20,paddingRight:5}}
      onPress={()=>navigation.navigate("Explore")}>click here</Button>
     
     
    </Card.Actions>
  </Card>
 
  </View>
      </View>
      </View>
    
    
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      





    {/* <View style={{marginTop:100,alignItems:'center' }}>
    <Button 
    title=" Go to HR Screen"
    onPress={()=>navigation.navigate("Details")}
    />
    </View> */}
 </View>

 

  );
};
export default HomeScreen;
const styles =StyleSheet.create({
  card:{
    marginLeft:10,
    marginTop:40,
    width:160,
    height:70
  },

  card_title:{
    backgroundColor:'#a4ebf3',
    paddingLeft:60,
    paddingRight:50,
  paddingBottom:15,
  paddingTop:15,  
  
  },

  employ:{
    marginLeft:20,
    marginTop:40,
    width:160,
   
  },


  employ_title:{
  backgroundColor:'#adeecf',
  paddingLeft:30,
  paddingBottom:15,
  paddingTop:15,  
    
  },

  company:{
    marginLeft:10,
    marginTop:40,
    width:160,
    height:70
  },


  company_title:{
  backgroundColor:'#fbaccc',
  paddingLeft:30,
  paddingBottom:15,
  paddingTop:15,  

  },

  about:{
    marginLeft:20,
    marginTop:40,
    width:160,
    height:70
  },


  about_title:{
    backgroundColor:'#e4bad4',
  paddingLeft:45,
  paddingBottom:15,
  paddingTop:15,  

  },
  

 });