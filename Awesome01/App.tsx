import React from "react";
import {
  View,
  Text,
  SafeAreaView
} from 'react-native'

function App(){
  return(
    // safe area is for notch on mobile screens to safe that out
    <SafeAreaView>
      {/* view is like div element in html that wraps up components */}
      <View>
        {/* text component is used to display text on screen */}
        <Text>Hello World !</Text>
      </View>
    </SafeAreaView>
  )
}

export default App