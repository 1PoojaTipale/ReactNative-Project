import React from 'react';
import { StyleSheet, Text, View,Image, ScrollView,TextInput,TouchableOpacity,Platform} from 'react-native';

import { Avatar, Button, Card, Title,Appbar} from 'react-native-paper';

const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';

const  SettingsScreen = ({navigation})=>
{
  return (

    < View style={{flex:1}}>
   
   <Appbar.Header style={{textAlign:'center',height:30, backgroundColor:'#b34180'}}>
       
   <Appbar.BackAction style={{marginBottom:30}} onPress={()=>navigation.navigate("Home")} />
      <Appbar.Content  style={{textAlign:'center',marginLeft:50,marginBottom:30}} title="View HR Page"/>
        <Appbar.Action style={{marginBottom:30,}} icon={MORE_ICON} onPress={()=>navigation.navigate("BookmarkScreen")}/>
    </Appbar.Header>


        <ScrollView>

        <Card style={styles.card_one}>
        <View style={{flexDirection:'row',marginTop:15, marginLeft:10}}>
        <Text style={{marginTop:20 }}> 
         <Avatar.Text
            // source={{
            //    uri:'https://images.unsplash.com/photo-1588457667030-1c71e73de414?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
            //     // uri:'https://images.unsplash.com/photo-1612814399449-d62fc71234c9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
            // }}
            size={70}
            label="PT"
            backgroundColor="purple"/>
            </Text>
              <View  style={{marginLeft:30,flexDirection:'column'}}>
                <Title>Name:</Title>
                    <TextInput
                    placeholder= "Your Name"/>
                    <Title>Mobile No :</Title>
                    <TextInput
                      placeholder= "Your Number"
                      maxLength={10}
                      keyboardType="numeric"
                      />
                </View>
                </View>
                
    </Card>
        <Card style={styles.card_one}>
        <View style={{flexDirection:'row',marginTop:15, marginLeft:10}}>
        <Text style={{marginTop:20 }}> 
         <Avatar.Text
            // source={{
            //    uri:'https://images.unsplash.com/photo-1588457667030-1c71e73de414?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
            //     // uri:'https://images.unsplash.com/photo-1612814399449-d62fc71234c9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
            // }}
            size={70}
            label="PT"
            backgroundColor="purple"/>
            </Text>
              <View  style={{marginLeft:30,flexDirection:'column'}}>
                <Title>Name:</Title>
                    <TextInput
                    placeholder= "Your Name"/>
                    <Title>Mobile No :</Title>
                    <TextInput
                      placeholder= "Your Number"
                      maxLength={10}
                      keyboardType="numeric"
                      />
                </View>
                </View>
                
    </Card>
        <Card style={styles.card_one}>
        <View style={{flexDirection:'row',marginTop:15, marginLeft:10}}>
        <Text style={{marginTop:20 }}>  
        <Avatar.Text
            // source={{
            //    uri:'https://images.unsplash.com/photo-1588457667030-1c71e73de414?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
            //     // uri:'https://images.unsplash.com/photo-1612814399449-d62fc71234c9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
            // }}
            size={70}
            label="PT"
            backgroundColor="purple"/>
            </Text>
              <View  style={{marginLeft:30,flexDirection:'column'}}>
                <Title>Name:</Title>
                    <TextInput
                    placeholder= "Your Name"/>
                    <Title>Mobile No :</Title>
                    <TextInput
                      placeholder= "Your Number"
                      maxLength={10}
                      keyboardType="numeric"
                      />
                </View>
                </View>
                
    </Card>
        <Card style={styles.card_one}>
        <View style={{flexDirection:'row',marginTop:15, marginLeft:10}}>
        <Text style={{marginTop:20 }}> 
         <Avatar.Text
            // source={{
            //    uri:'https://images.unsplash.com/photo-1588457667030-1c71e73de414?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
            //     // uri:'https://images.unsplash.com/photo-1612814399449-d62fc71234c9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
            // }}
            size={70}
            label="PT"
            backgroundColor="purple"/>
            </Text>
              <View  style={{marginLeft:30,flexDirection:'column'}}>
                <Title>Name:</Title>
                    <TextInput
                    placeholder= "Your Name"/>
                    <Title>Mobile No :</Title>
                    <TextInput
                      placeholder= "Your Number"
                      maxLength={10}
                      keyboardType="numeric"
                      />
                </View>
                </View>
                
    </Card>
        <Card style={styles.card_one}>
        <View style={{flexDirection:'row',marginTop:15, marginLeft:10}}>
        <Text style={{marginTop:20 }}>  
        <Avatar.Text
            // source={{
            //    uri:'https://images.unsplash.com/photo-1588457667030-1c71e73de414?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
            //     // uri:'https://images.unsplash.com/photo-1612814399449-d62fc71234c9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
            // }}
            size={70}
            label="PT"
            backgroundColor="purple"/>
            </Text>
              <View  style={{marginLeft:30,flexDirection:'column'}}>
                <Title>Name:</Title>
                    <TextInput
                    placeholder= "Your Name"/>
                    <Title>Mobile No :</Title>
                    <TextInput
                      placeholder= "Your Number"
                      maxLength={10}
                      keyboardType="numeric"
                      />
                </View>
                </View>
                
    </Card>
        <Card style={styles.card_one}>
        <View style={{flexDirection:'row',marginTop:15, marginLeft:10}}>
        <Text style={{marginTop:20 }}> 
         <Avatar.Text
            // source={{
            //    uri:'https://images.unsplash.com/photo-1588457667030-1c71e73de414?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
            //     // uri:'https://images.unsplash.com/photo-1612814399449-d62fc71234c9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
            // }}
            size={70}
            label="PT"
            backgroundColor="purple"/>
            </Text>
              <View  style={{marginLeft:30,flexDirection:'column'}}>
                <Title>Name:</Title>
                    <TextInput
                    placeholder= "Your Name"/>
                    <Title>Mobile No :</Title>
                    <TextInput
                      placeholder= "Your Number"
                      maxLength={10}
                      keyboardType="numeric"
                      />
                </View>
                </View>
                
    </Card>
        <Card style={styles.card_one}>
        <View style={{flexDirection:'row',marginTop:15, marginLeft:10}}>
        <Text style={{marginTop:20 }}> 
         <Avatar.Text
            // source={{
            //    uri:'https://images.unsplash.com/photo-1588457667030-1c71e73de414?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
            //     // uri:'https://images.unsplash.com/photo-1612814399449-d62fc71234c9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
            // }}
            size={70}
            label="PT"
            backgroundColor="purple"/>
            </Text>
              <View  style={{marginLeft:30,flexDirection:'column'}}>
                <Title>Name:</Title>
                    <TextInput
                    placeholder= "Your Name"/>
                    <Title>Mobile No :</Title>
                    <TextInput
                      placeholder= "Your Number"
                      maxLength={10}
                      keyboardType="numeric"
                      />
                </View>
                </View>
                
    </Card>
        <Card style={styles.card_one}>
        <View style={{flexDirection:'row',marginTop:15, marginLeft:10}}>
        <Text style={{marginTop:20 }}>  
        <Avatar.Text
            // source={{
            //    uri:'https://images.unsplash.com/photo-1588457667030-1c71e73de414?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
            //     // uri:'https://images.unsplash.com/photo-1612814399449-d62fc71234c9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
            // }}
            size={70}
            label="PT"
            backgroundColor="purple"/>
            </Text>
              <View  style={{marginLeft:30,flexDirection:'column'}}>
                <Title>Name:</Title>
                    <TextInput
                    placeholder= "Your Name"/>
                    <Title>Mobile No :</Title>
                    <TextInput
                      placeholder= "Your Number"
                      maxLength={10}
                      keyboardType="numeric"
                      />
                </View>
                </View>
                
    </Card>
        <Card style={styles.card_one}>
        <View style={{flexDirection:'row',marginTop:15, marginLeft:10}}>
        <Text style={{marginTop:20 }}>  
        <Avatar.Text
            // source={{
            //    uri:'https://images.unsplash.com/photo-1588457667030-1c71e73de414?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
            //     // uri:'https://images.unsplash.com/photo-1612814399449-d62fc71234c9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
            // }}
            size={70}
            label="PT"
            backgroundColor="purple"/>
            </Text>
              <View  style={{marginLeft:30,flexDirection:'column'}}>
                <Title>Name:</Title>
                    <TextInput
                    placeholder= "Your Name"/>
                    <Title>Mobile No :</Title>
                    <TextInput
                      placeholder= "Your Number"
                      maxLength={10}
                      keyboardType="numeric"
                      />
                </View>
                </View>
                
    </Card>
        <Card style={styles.card_one}>
        <View style={{flexDirection:'row',marginTop:15, marginLeft:10}}>
        <Text style={{marginTop:20 }}>  <Avatar.Text
            // source={{
            //    uri:'https://images.unsplash.com/photo-1588457667030-1c71e73de414?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
            //     // uri:'https://images.unsplash.com/photo-1612814399449-d62fc71234c9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
            // }}
            size={70}
            label="PT"
            backgroundColor="purple"/>
            </Text>
              <View  style={{marginLeft:30,flexDirection:'column'}}>
                <Title>Name:</Title>
                    <TextInput
                    placeholder= "Your Name"/>
                    <Title>Mobile No :</Title>
                    <TextInput
                      placeholder= "Your Number"
                      maxLength={10}
                      keyboardType="numeric"
                      />
                </View>
                </View>
                
    </Card>
 
    <View style={styles.button}>
     <TouchableOpacity
     onPress={()=>navigation.navigate('BookmarkScreen')}
     style={[styles.signIn,{
       backgroundColor:'#e36bae',
       borderColor:'#e36bae',
       borderWidth:2,
       borderRadius:8,
       marginTop:20,
       width:300,
       height:40 ,
       marginBottom:20,
       marginLeft:30
     }]}
     >
       <Text style={[styles.textSign, {
          color:'#fff',
          textAlign:'center',
          // paddingTop:5,
          marginTop:2,fontSize:20,
       }]}>ADD HR</Text>
     </TouchableOpacity>
    </View>
      </ScrollView>
















      



























{/*     
    <Button title=" Go to home"
    onPress={()=>navigation.navigate("Home")}
    />
    <Button title=" Go to back"
    onPress={()=>navigation.goBack()}
    />
    <Button title=" Go to the first screen"
    onPress={()=>navigation.popToTop()}
    /> */}
  </View>
  );
};

export default SettingsScreen;
const styles= StyleSheet.create({
card_one:
  {
    // backgroundColor:'yellow', 
    margin:10,
    borderColor:'black',
    borderWidth:1
  }

});
























































     
















// import React from 'react';
// import { StyleSheet, Text, View,Button } from 'react-native';
// const SettingsScreen = ({navigation})=>
// {
//   return (
//     <View style={styles.container}>
//     <Text>Setting Screen</Text> 
//     <Button title=" Click Here"
//     onPress={()=>alert('Button  Clicked!')}
//     />
//     </View>
//   );
// };
// export default SettingsScreen;

// const styles =StyleSheet.create({
//     container:{
//         flex:1 ,
//          alignItems:'center',
//          justifyContent:'center'
//     }
// })