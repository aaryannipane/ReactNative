import React, { useState } from 'react';
import Clipboard from '@react-native-clipboard/clipboard';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
  ToastAndroid
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


function App(): JSX.Element {

  const [backgroundColor, setBackgroundColor] = useState('#fff')

  const generateColor = () => {
    const hexRange = "0123456789ABCDEF"
    let color = "#"

    for (let i = 0; i < 6; i++) {
      color += hexRange[Math.floor(Math.random() * 16)]
    }

    setBackgroundColor(color);
  }

  return (
    <>
      <StatusBar backgroundColor={backgroundColor} />
      <View style={[styles.container, { backgroundColor: backgroundColor }]}>
        <View>
          <TouchableOpacity onPress={() => { Clipboard.setString(backgroundColor); ToastAndroid.show("color copied", ToastAndroid.SHORT) }}>
            <Text style={{ color: "#FFF", backgroundColor: "#120E43", padding: 5, borderRadius: 5 }}>{backgroundColor}</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={generateColor}>
          <View style={styles.actionBtn}>
            <Text style={styles.actionBtnTxt}>Press Me</Text>
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  actionBtn: {
    borderRadius: 12,
    backgroundColor: "#120E43",
    paddingHorizontal: 30,
    paddingVertical: 10
  },
  actionBtnTxt: {
    fontSize: 24,
    color: "#FFF",
    textTransform: "uppercase"
  }
});

export default App;
