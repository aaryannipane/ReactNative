import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FlatCards() {
  return (
    <View>
      <Text style={styles.headingText}>FlatCards</Text>
      <View style={styles.container}>
        <View style={[styles.card, styles.cardOne]}><Text>Red</Text></View>
        <View style={[styles.card, styles.cardTwo]}><Text>Yellow</Text></View>
        <View style={[styles.card, styles.cardThree]}><Text>Green</Text></View>
      </View>
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
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 8,
    flexWrap: 'wrap'
  },
  card: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 100,
    margin: 10,
    borderRadius: 10
  },
  cardOne: {
    backgroundColor: "#EF5354",
  },
  cardTwo: {
    backgroundColor: "#cccc00"
  },
  cardThree: {
    backgroundColor: "#009933"
  },
})