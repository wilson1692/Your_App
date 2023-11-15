import React from "react";
import { Text, StyleSheet, View, Image, ScrollView} from "react-native";


export default function Home() {
    return(
        <ScrollView>
             <Image
          //  source={require("../../assets/final_senal.png")}
           // resizeMode="contain"
          //  style={styles.logo} 
            />
        <View style={styles.container}>   
            <Text>Bienvenido a Inicio</Text>
        </View>
        </ScrollView>
       

    );
}

const styles = StyleSheet.create({
    container:{
       flex: 1,
       justifyContent: "center",
       backgroundColor: "#fff",
       alignItems:"center"
    },

    logo:{
        width:"100%",
        height:150,
        marginTop:70,
        backgroundColor: "#fff",
     }

});



