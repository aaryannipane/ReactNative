import React from "react";
import { View, Text, StyleSheet, useColorScheme } from "react-native";

function AppPro():JSX.Element{
    const isDarkMode = useColorScheme() === 'dark'

    return(
        // style prop is used to map style object to component for adding style to it
        <View style={styles.container}>
            <Text style={isDarkMode?styles.whiteText:styles.blackText}>Hello Aryan!</Text>
        </View>
    )
}

// creates styles for the component it is an object
const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems:"center",
        justifyContent:"center"
    },
    whiteText:{
        color: '#FFF',
    },
    blackText:{
        color: '#000',
    }
})

export default AppPro