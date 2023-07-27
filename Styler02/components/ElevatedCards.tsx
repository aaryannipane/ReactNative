import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ElevatedCards() {
    return (
        <View>
            <Text style={styles.headingText}>ElevatedCards</Text>
            <ScrollView horizontal={true} style={styles.container}>
                <View style={[styles.card, styles.cardElevated]}>
                    <Text>TAP</Text>
                </View>
                <View style={[styles.card, styles.cardElevated]}>
                    <Text>ME</Text>
                </View>
                <View style={[styles.card, styles.cardElevated]}>
                    <Text>TO</Text>
                </View>
                <View style={[styles.card, styles.cardElevated]}>
                    <Text>SCROLL</Text>
                </View>
                <View style={[styles.card, styles.cardElevated]}>
                    <Text>MORE</Text>
                </View>
                <View style={[styles.card, styles.cardElevated]}>
                    <Text>🚀</Text>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 10
    },
    container: {
        padding: 10
    },
    card: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: 100,
        width: 100,
        borderRadius:10,
        margin:8
    },
    cardElevated: {
        backgroundColor: '#B4161B',
        elevation:50,
        shadowOffset: {width:1, height:1},
        shadowColor: "#111"
    }
})