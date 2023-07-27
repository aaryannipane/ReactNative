
import React, { useEffect, useState } from 'react';
import type { PropsWithChildren } from 'react';
import {
  ActivityIndicator,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import { setupPlayer, addTrack } from '../musicPlayerServices';
import MusicPlayer from './screens/MusicPlayer';



function App(): JSX.Element {

  const [isPlayerReady, setIsPlayerReady] = useState<boolean>(false)

  useEffect(()=>{
    async function setup(){
      let isSetup = await setupPlayer()

      if(isSetup){
        await addTrack()
      }

      setIsPlayerReady(isSetup)
    }

    setup()
  }, [])

  if(!isPlayerReady){
    <SafeAreaView>
      <ActivityIndicator/>
    </SafeAreaView>
  }
  return (
    <View style={styles.container}>
      <StatusBar barStyle={"light-content"}/>
      <MusicPlayer/>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1
  }
});

export default App;
