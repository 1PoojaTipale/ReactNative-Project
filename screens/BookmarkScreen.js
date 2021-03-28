
import React from 'react';
import { StyleSheet, Text, View,Button,Dimensions,TouchableOpacity,Platform,TextInput,Image ,ScrollView} from 'react-native';
import { Avatar, Card, Title,Appbar} from 'react-native-paper';
// import { LinearGradient } from 'expo-linear-gradient'; 

// import FontAwesome  from 'react-native-vector-icons/FontAwesome ';
import { FontAwesome } from '@expo/vector-icons';
import Feather from 'react-native-vector-icons/Feather';
import { LinearGradient } from 'expo-linear-gradient';
 
const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';

const BookmarkScreen = ({navigation})=>
{

  return (
    
    <View style={styles.container}>
    <View style={styles.header}>
    <Appbar.Header style={{textAlign:'center',height:30, backgroundColor:'#91091e'}}>
       
       <Appbar.BackAction style={{marginBottom:30}} onPress={()=>navigation.navigate("SettingsScreen")} />
          <Appbar.Content  style={{textAlign:'center',marginLeft:50,marginBottom:30}} title="Add HR Page"/>
            {/* <Appbar.Action style={{marginBottom:30,}} icon={MORE_ICON} onPress={()=>navigation.navigate("BookmarkScreen")}/> */}
        </Appbar.Header>
    {/* <Text style={styles. text_header}>Add HR !</Text> */}
    </View>

                  {/* card1 */}
                  <ScrollView>
    <View style={styles.footer}>
    <View style={{margin:10,borderColor:'black',borderWidth:1,marginTop:30}}>
    <Card style={{height:80}} >
             <View style={{marginTop:20, marginLeft:10,marginBottom:10}}>
                <View  style={{marginLeft:10,flexDirection:'row',}}>
         <Title style={{ flexDirection:'column'}}>Name :</Title>
    <TextInput style={{flexDirection:"column",backgroundColor:'#fff',width:220,marginLeft:5}}
                placeholder= " Your Name">
                </TextInput>
                </View>
                </View>
                 </Card>
                </View>

            {/* card 2 */}

    <View style={{margin:10,borderColor:'black',borderWidth:1}}>
                <Card style={{height:80}} >
                <View style={{marginTop:20, marginLeft:10,marginBottom:10}}>
                <View  style={{marginLeft:10,flexDirection:'row',}}>
                <Title style={{ flexDirection:'column'}}>Mobile No :</Title>
                <TextInput style={{flexDirection:"column",backgroundColor:'#fff',width:200,marginLeft:5}}
                placeholder= " Your Mobile Number">
                     </TextInput>
                </View>
                </View>
                </Card>
              </View>
    <View style={{margin:10,borderColor:'black',borderWidth:1}}>
                <Card style={{height:80}} >
                <View style={{marginTop:20, marginLeft:10,marginBottom:10}}>
                <View  style={{marginLeft:10,flexDirection:'row',}}>
                <Title style={{ flexDirection:'column'}}>Address :</Title>
                <TextInput style={{flexDirection:"column",backgroundColor:'#fff',width:200,marginLeft:5}}
                placeholder= " Your Address">
                     </TextInput>
                </View>
                </View>
                </Card>
                </View>


    <View style={{margin:10,borderColor:'black',borderWidth:1}}>
                <Card style={{height:350}} >
                <View style={{marginTop:20, marginLeft:10,marginBottom:10}}>
                
                <Title style={{ flexDirection:'row',textAlign:'center',margin:10}}>Upload Image</Title>
                <View style={{ flexDirection:'column',textAlign:'center',marginTop:30,height:200,width:200, marginLeft:25,marginRight:20,borderRadius:100}}>
                  <Text style={{justifyContent:'center'}}>
                  <Avatar.Image
          source={{
          //   //    uri:'https://images.unsplash.com/photo-1588457667030-1c71e73de414?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
          uri:'https://images.unsplash.com/photo-1565840820582-ebb5ac0676e0?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDV8dG93SlpGc2twR2d8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60'
          }}
            size={250}
          
            />
            </Text>
                  </View>
               
       




                </View>
                </Card>
                </View>



      <View style={styles.button}>
     <TouchableOpacity
     onPress={()=>navigation.navigate('Home')}
     style={[styles.signIn,{
       backgroundColor:'#91091e',
      //  borderColor:'#91091e',
       borderWidth:2,
       borderRadius:2,
      //  marginTop:10,
       width:200,
       height:40 ,marginBottom:50
     }]}
     >
       <Text style={[styles.textSign, {
          color:'#fff',
          textAlign:'center',
          paddingTop:5
       }]}>ADD</Text>
     </TouchableOpacity>
     
       
    
   </View>
 
  

     
    

            </View>
         
            </ScrollView>
          </View>
    
  );
};
export default BookmarkScreen;


const styles =StyleSheet.create({
    container:{
        flex:1 ,
        backgroundColor:'#fff',
         alignItems:'center',
         justifyContent:'center'
    },
    header:{ 
    // backgroundColor:'#91091e',
    // marginTop:10,
    width:'100%',
    height:50,
    borderRadius:5
  },
  footer:{
      flex:1,
    
      width:'100%'
    
       },
       text_header:{
         color:'black',
         fontWeight:'bold',
         fontSize:30,
        textAlign:'center',
      
       },
       text_footer:{
         color:'#05375a',
         fontSize:18
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
           borderRadius:50
       },
       
       textSign:{

        fontSize:18,
        fontWeight:'bold'
          

    

        
        
       },

       



})









































// import React from 'react';
// import { StyleSheet, Text, View,Button } from 'react-native';
// const BookmarkScreen = ({navigation})=>
// {
//   return (
//     <View style={styles.container}
//     >
      
//     <Text>Bookmark Screen</Text> 
//     <Button title=" Click Here"
//     onPress={()=>alert('Button  Clicked!')}
//     />
//     </View>
   
//   );
// };
// export default BookmarkScreen;

// const styles =StyleSheet.create({
//     container:{
//         flex:1 ,
//          alignItems:'center',
//          justifyContent:'center',
//          backgroundColor:'#ff66ff'
//          }
// })










     

