import React from "react";
import { Icon } from '@rneui/themed';
import { Text, StyleSheet, View } from "react-native";

export default function Profile() {
    return (
        <View style={styles.container}>
            <Text >Bienvenido a mi Perfil </Text>
            <Icon
                reverse
                name='ios-american-football'
                type='ionicon'
                color='#517fa4'
            />
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: "#fff",
        alignItems: "center"
    },


});
