import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Camera from "../screens/Camera";



const Stack = createStackNavigator();

export default function ProfileStack (){
    return(
        <Stack.Navigator>
            <Stack.Screen
             name="camera"
             component={Camera}
             options={{ title: "Camara" }}
            />
        </Stack.Navigator>
    )
}
