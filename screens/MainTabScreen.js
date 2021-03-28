import React from 'react';


import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import HomeScreen from './HomeScreen.js';
import DetailsScreen from './DetailsScreen';
import ExploreScreen from './ExploreScreen';
import ProfileScreen from './ProfileScreen';
import EmployeScreen from './EmployeScreen';
// import BookmarkScreen from './BookmarkScreen';


import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const Tab = createMaterialBottomTabNavigator();
const MainTabScreen=()=>(
    <Tab.Navigator
    initialRouteName="Home"
    activeColor="#fff"
    
  >
    <Tab.Screen
      name="Home"
      component={HomeStackScreen}
      options={{
        tabBarLabel: 'Home',
        tabBarColor: '#009387',
        tabBarIcon: ({ color }) => (
          <Icon name="ios-home" color={color} size={26} />
        ),
      }}
    />
    {/* <Tab.Screen
      name="Details"
      component={DetailsStackScreen}
      options={{
        tabBarLabel: 'HR detail',
        tabBarColor: '#b34180',
        tabBarIcon: ({ color }) => (
          <Icon name="ios-notifications" color={color} size={26} />
        ),
      }}
    /> */}
    <Tab.Screen
      name="Profile"
      component={ProfileStackScreen}
      options={{
        tabBarLabel: 'Profile',
        tabBarColor: '#694fad',
        tabBarIcon: ({ color }) => (
          <Icon name="ios-person" color={color} size={26} />
        ),
      }}
    />
    

    <Tab.Screen
      name="Employe"
      component={EmployeStackScreen}
      options={{
        tabBarLabel: 'Employee',
        tabBarColor: '#6b011f',
        tabBarIcon: ({ color }) => (
          <Icon name="ios-people" color={color} size={30} />
         
        ),
      }}
    />

    <Tab.Screen
      name="Explore"
      component={ExploreStackScreen}
      
      options={{
        tabBarLabel: 'About Us',
        tabBarColor: '#d02860',
        tabBarIcon: ({ color }) => (
          <Icon name="ios-aperture" color={color} size={26} />
        ),
      }}
    />



  </Tab.Navigator>
);
export default MainTabScreen; 

const HomeStack = createStackNavigator();
// const DetailsStack = createStackNavigator();


const ProfileStack = createStackNavigator();
const ExploreStack = createStackNavigator();
const EmployeStack = createStackNavigator();



const HomeStackScreen =({navigation})=>(
    <HomeStack.Navigator screenOptions={{
    headerStyle:{
      backgroundColor:'#009387'
    },
    headerTintColor:'#fff',
    headerTitleStyle:{
      fontWeight:'bold',
      paddingLeft:60
    }
          }}>
            <HomeStack.Screen name="DashBoard" component={HomeScreen} options={{
              // title:'DashBoard',
              headerLeft:()=>(
                <Icon.Button name="ios-menu" size={25}
                backgroundColor="#009387" onPress={()=>navigation.openDrawer() }></Icon.Button>
              )
            }} />
          </HomeStack.Navigator> 
    );
    

  

    // const DetailsStackScreen =({navigation})=>(
    //   <DetailsStack.Navigator screenOptions={{
    //   headerStyle:{
    //     backgroundColor:'#b34180',
    //     marginRight:50
    //   },
    //   headerTintColor:'#fff',
    //   headerTitleStyle:{
    //     fontWeight:'bold',
    //     padding:30
    
    //   }
    //         }}>
    //           <DetailsStack.Screen name=" View HR Screen" component={DetailsScreen} options={{

    //             headerLeft:()=>(
    //               <Icon.Button name="ios-menu" size={25}
    //               backgroundColor='#b34180' onPress={()=>navigation.openDrawer() }></Icon.Button>
    //             )
    //           }} />
            
    //         </DetailsStack.Navigator> 
    //       );





          
      

    const ProfileStackScreen =({navigation})=>(
      <ProfileStack.Navigator screenOptions={{
      headerStyle:{
        backgroundColor:'#694fad'
      },
      headerTintColor:'#fff',
      headerTitleStyle:{
        fontWeight:'bold',
        padding:30
    
      }
            }}>
              <ProfileStack.Screen name=" Company Screen" component={ProfileScreen} options={{
                headerLeft:()=>(
                  <Icon.Button name="ios-menu" size={25}
                  backgroundColor='#694fad' onPress={()=>navigation.openDrawer() }></Icon.Button>
                )
              }} />
            </ProfileStack.Navigator> 
          );


    

    const ExploreStackScreen =({navigation})=>(
      < ExploreStack.Navigator screenOptions={{
      headerStyle:{
        backgroundColor:'#d02860'
      },
      headerTintColor:'#fff',
      headerTitleStyle:{
        fontWeight:'bold',
        padding:30
    
      }
            }}>
              < ExploreStack.Screen name=" About Us Screen" component={ExploreScreen} options={{
                headerLeft:()=>(
                  <Icon.Button name="ios-menu" size={25}
                  backgroundColor='#d02860' onPress={()=>navigation.openDrawer() }></Icon.Button>
                )
              }} />
            </ ExploreStack.Navigator> 
          );

          const EmployeStackScreen =({navigation})=>(
            <EmployeStack.Navigator screenOptions={{
            headerStyle:{
              backgroundColor:'#6b011f'
            },
            headerTintColor:'#fff',
            headerTitleStyle:{
              fontWeight:'bold',
              padding:30
          
            }
                  }}>
                    <EmployeStack.Screen name="Employee Screen" component={EmployeScreen} options={{
                      headerLeft:()=>(
                        <Icon.Button name="ios-menu" size={25}
                        backgroundColor='#6b011f' onPress={()=>navigation.openDrawer() }></Icon.Button>
                      )
                    }} />
                  </EmployeStack.Navigator> 
                );
    
         
    



    