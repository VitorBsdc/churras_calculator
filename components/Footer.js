import React from "react";
import { View, Text, StyleSheet } from "react-native";

const footer = () =>{
    return(
        <View>
            <Text style={styles.tituloFooter}>Copyright &copy; 2022 Nexus Group</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    tituloFooter:{
        textAlign: 'center',
        padding: 3,
        backgroundColor: 'whitesmoke',
        color: 'black',
    }
})

export default footer;