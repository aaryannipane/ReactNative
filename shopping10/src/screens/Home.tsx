import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

// react navigation
import {NativeStackScreenProps} from "@react-navigation/native-stack"
import {RootStackParamList} from "../App"

// components
import ProductItem from '../components/ProductItem'
import Separator from '../components/Separator'

// data 
import { PRODUCTS_LIST } from '../data/constants'

type HomeProps = NativeStackScreenProps<RootStackParamList, "Home">


const Home = ({navigation}:HomeProps) => {
  return (
    <View style={styles.container}>
      <FlatList
      style={styles.list}
        data={PRODUCTS_LIST}
        keyExtractor={item=>item.id}
        ItemSeparatorComponent={Separator}
        persistentScrollbar={true}
        showsVerticalScrollIndicator={true}
        scrollIndicatorInsets={{right:5}}
        renderItem={({item})=>(
          <Pressable
            onPress={()=>{
              navigation.navigate('Details', {
                product: item
              })
            }}
          >
            <ProductItem product={item}/>
          </Pressable>
        )}
      />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',

    padding: 12,
    backgroundColor: '#FFFFFF',
  },
  list:{
    width: "100%"
  }
})