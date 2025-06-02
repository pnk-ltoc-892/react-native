import React, { JSX } from 'react'
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import FlatCards from './components/FlatCards.tsx';
import ElevatedCards from './components/ElevatedCards.tsx';
import FancyCards from './components/FancyCards.tsx';
import ActionCard from './components/ActionCard.tsx';
import ContactList from './components/ContactList.tsx';


function App(): JSX.Element {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.view} >
          <FlatCards />
          <ElevatedCards />
          <FancyCards />
          <ActionCard />
          <ContactList />
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