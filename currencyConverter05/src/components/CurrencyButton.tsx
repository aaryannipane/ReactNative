import { View, Text, StyleSheet } from 'react-native'
import { PropsWithChildren } from 'react'
import React from 'react'

type CurrencyButtonProps = PropsWithChildren<{
    name: string;
    flag: string;
}>


export default function CurrencyButton(props: CurrencyButtonProps): JSX.Element {
    return (
        <View style={styles.buttonContainer}>
            <Text style={styles.flag}>{props.flag}</Text>
            <Text style={styles.country}>{props.name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        flex: 1,
        alignItems:'center'
    },
    flag: {
        fontSize: 28,
        color: "#FFF",
        marginBottom: 5,

    },
    country: {
        fontSize: 14,
        color: "#2d3436",
    },

})