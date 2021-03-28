



import * as React from 'react';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { ScrollView, StyleSheet, Text, View,TouchableOpacity} from 'react-native';

const LeftContent = props => <Avatar.Text {...props} size={50}label="AB" />

const EmployeScreen = ({navigation}) => {
  return(
  
  
    <View>
       
  <View style={styles.card}>
 
  <Card>
   
    <Card.Title title="Alex Boston" left={LeftContent} />
    <Card.Cover source={{ uri: 'https://images.unsplash.com/photo-1615216865517-f2e0c2cd79a1?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDEyOHx0b3dKWkZza3BHZ3x8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60' }} />
    <Card.Content>
      
      <Title style={{textAlign:'center'}}>Employee Profile</Title>

      <View style={{flexDirection:'row'}}>
        <Text style={{flexDirection:'column'}}> <Title>Name :</Title></Text>
        <Paragraph style={{flexDirection:'column',width:150,marginLeft:20,marginTop:10}}>  
      Alex Boston
      </Paragraph>
    </View>

      
      <View style={{flexDirection:'row'}}>
        <Text style={{flexDirection:'column'}}> <Title>Email Id :</Title></Text>
        <Paragraph style={{flexDirection:'column',width:150,marginLeft:20,marginTop:10}}>  
      alex1525@gamil.com
      </Paragraph>
    </View>
        <View style={{flexDirection:'row'}}>
          <Text style={{flexDirection:'column'}}> <Title>Mobile no :</Title></Text>
          <Paragraph style={{flexDirection:'column',width:150,marginLeft:20,marginTop:10}}>  
         9850864377
        </Paragraph>
      </View>
        <View style={{flexDirection:'row'}}>
          <Text style={{flexDirection:'column'}}> <Title>Address :</Title></Text>
          <Paragraph style={{flexDirection:'column',width:150,marginLeft:20,marginTop:10}}>  
          Abcd AbcdAbcdAbcd
        </Paragraph>
      </View>

    </Card.Content>

   
  </Card>

</View>

<View style={styles.button}>
     <TouchableOpacity
     onPress={()=>navigation.navigate('Home')}
     style={{
       backgroundColor:'#6b011f',
       borderColor:'#6b011f',
       borderWidth:2,
       borderRadius:8,
       marginTop:20,
       width:300,
       height:40 ,
       marginBottom:20,
       marginLeft:30
     }}
     >
       <Text style= {{
          color:'#fff',
          textAlign:'center',
          // paddingTop:5,
          marginTop:2,fontSize:20,
       }}>Click Here</Text>
     </TouchableOpacity>
    </View>
  </View>
  
    

  )};
export default EmployeScreen;

















































{/* // import React from 'react';
// import { StyleSheet, Text, View,Button } from 'react-native';
// const ProfileScreen = ({navigation})=>
// { */}
{/* //   return (

//     <View style={styles.container}>
//     <Text>Profile Screen</Text> 
//     <Button title=" Click Here" */}
{/* //     onPress={()=>alert('Button  Clicked!')}
//     />
//     </View> */}
{/* //   );
// };
// export default ProfileScreen; */}

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
    }
    // button:
    // {
    //     alignItems:'center',
    //     marginTop:20,}
   
});