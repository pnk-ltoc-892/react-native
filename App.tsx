import React, { JSX } from 'react'
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import FlatCards from './components/FlatCards.tsx';
import ElevatedCards from './components/ElevatedCards.tsx';
import FancyCards from './components/FancyCards.tsx';


function App(): JSX.Element {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.view} >
          <FlatCards />
          <ElevatedCards />
          <FancyCards />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  view: {
    marginTop: 20,
    backgroundColor: '#212121',
  }
})

export default App;