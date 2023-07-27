import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ContactList() {

    const contacts = [
        {
            uid: 1,
            name: "Aryan Nipane",
            status: "Hello There",
            imageUrl: "https://avatars.githubusercontent.com/u/63520003?v=4"
        },
        {
            uid: 2,
            name: "Aryan Nipane",
            status: "JS Developer",
            imageUrl: "https://avatars.githubusercontent.com/u/63520003?v=4"
        },
        {
            uid: 3,
            name: "Aryan Nipane",
            status: "Coding DND",
            imageUrl: "https://avatars.githubusercontent.com/u/63520003?v=4"
        },
    ]

  return (
    <View>
      <Text style={styles.headingText}>ContactList</Text>
      <ScrollView
        style={styles.container}
        scrollEnabled={false}
      >
        {contacts.map(({uid, name, status, imageUrl})=>(
            <View key={uid} style={styles.userCard}>
                <Image 
                    source={{
                        uri: imageUrl
                    }}
                    style={styles.userImage}
                />
               <View >
                <Text style={styles.userName}>{name}</Text>
                <Text style={styles.userStatus}>{status}</Text>
               </View>
            </View>
        ))}
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
        paddingHorizontal: 16,
        marginVertical: 5
    },
    userCard: {
        flex:1,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 4,
        backgroundColor: "#111",
        padding: 10,
        borderRadius: 8
    },
    userImage: {
        height: 60,
        width: 60,
        borderRadius: 60/2,
        marginRight: 14
    },
    userName: {
        fontSize: 16,
        fontWeight: '600',
        color: "#fff"
    },
    userStatus: {
        fontSize: 12,

    },
})