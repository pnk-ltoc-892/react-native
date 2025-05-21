import React, { JSX } from 'react'
import { SafeAreaView } from 'react-native';
import WhoopsieDaisy from './components/WhoopsieDaisy.tsx'


function App(): JSX.Element {
  return (
    <SafeAreaView>
      <WhoopsieDaisy />
    </SafeAreaView>
  )
}

export default App;