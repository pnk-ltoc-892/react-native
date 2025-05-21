import React, { JSX } from 'react'
import {
    Text,
    View,
    StyleSheet,
    useColorScheme
} from 'react-native'


function WhoopsieDaisy(): JSX.Element {
    const isDarkMode = useColorScheme() === 'dark'
    return (
        <View style={styles.container}>
            <Text style={isDarkMode ? styles.dark : styles.light}>Whoopsie Daisy</Text>
            <Text>Whoopsie Daisy</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 26,
        // alignItems: 'center',
        alignItems: 'flex-end',
    },
    dark: {
        backgroundColor: '#fff'
    },
    light: {
        backgroundColor: '#212121'
    }
})

export default WhoopsieDaisy;