import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
//import { Icon } from "react-native-elements";
import { Icon } from '@rneui/themed';

import HomeStack from "./HomeStack";
import CameraStack from "./CameraStack";
import ProfileStack from "./ProfileStack";


const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
      
       initialRouteName="home"
       tabBarOptions={{
         inactiveTintColor:"#646464",
         activeTintColor:"#00a680"
       }}
       screenOptions={({route})=> ({
         tabBarIcon: ({color})=> screenOptions(route, color),

       })}

      >
        <Tab.Screen
          name="home"
          component={HomeStack}
          options={{ title: "Inicio" }}
        />
        <Tab.Screen
          name="camera"
          component={CameraStack}
          options={{ title: "Camara" }}
        />
         <Tab.Screen
          name="profile"
          component={ProfileStack}
          options={{ title: "Perfil" }}
        />
        
      </Tab.Navigator>
    </NavigationContainer>
  );
}


function screenOptions(route, color) {
  let iconName;

  switch (route.name) {
    case "home":
      iconName ="home";     
      break;
      case "camera":
        iconName ="camera-enhance-outline";
      break;
      case "profile":
        iconName ="account-circle";
      break;
    default:
      break;
  }
  return (
    <Icon type="material-community" name={iconName} size={30} color={color}/>
  );

}



