import { Linking, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'

export default function ActionCard() {

    function openWebsite(websiteLink: string){
        Linking.openURL(websiteLink)
    }

  return (
    <View>
      <Text style={styles.headingText}>ActionCard</Text>
      <View style={[styles.card, styles.elevatedCard]}>
        <View style={styles.headerContainer}>
            <Text style={styles.headerText}>What is React Native</Text>
        </View>
        <View style={styles.imageContainer}>
            <Image 
                source={{
                    uri: "https://th.bing.com/th/id/OIP.xDi2csEAWxu95IEkaNdFUQHaEk?w=242&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                }}

                style={styles.cardImage}
            />
        </View>
        <View style={styles.bodyContainer}>
            <Text numberOfLines={3} style={styles.bodyText}>React Native is an open-source UI software framework created by Meta Platforms, Inc. It is used to develop applications for Android, Android TV, iOS, macOS, tvOS, Web, Windows and UWP by enabling developers to use the React framework along with native platform capabilities1. It uses only JavaScript to build a mobile application. It is like React, which uses native component rather than using web components as building blocks</Text>
        </View>
        <View style={styles.footerContainer}>
            <TouchableOpacity 
                onPress={()=> openWebsite("https://reactnative.dev/")}
            >
                <Text style={styles.socialLink}>Read More</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                onPress={()=> openWebsite("https://github.com/aaryannipane")}
            >
                <Text style={styles.socialLink}>Follow Me</Text>
            </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 10,


    },
    card: {
        height: 330,
        width: 400,
        borderRadius: 6,
        marginVertical: 12,
        marginHorizontal: 16
    },
    elevatedCard: {
        backgroundColor: "#222",
        elevation: 3,
        shadowOffset: {
            width:1,
            height:1
        },
        shadowColor: "#555",
        shadowOpacity: 0.1
    }, 
    headerContainer: {
        height:50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerText: {
        fontSize: 16,
        color: "#FFF",
        fontWeight: '600'
    },
    imageContainer: {
        alignItems:'center',
    },
    cardImage: {
        height: 150,
        aspectRatio: 1,
        borderRadius: 6
    }, 
    bodyContainer: {
        padding: 10
    },
    bodyText: {
        textAlign: 'justify'
    },
    footerContainer: {
        padding: 8,
        flexDirection: 'row',
        alignItems:'center',
        justifyContent: 'space-evenly'
    },
    socialLink: {
        fontSize: 16,
        paddingHorizontal: 15,
        paddingVertical: 5,
        color: "#FFF",
        borderWidth: 1,
        borderColor: "#FFF",
        borderRadius: 6,
        textAlign: 'center'
    }
})