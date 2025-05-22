import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const FlatCards = () => {
    return (
        <View>
            <Text style={styles.headingText}>Flat Cards</Text>
            <View style={styles.container}>
                <View style={[styles.Card, styles.CardOne]}>
                    <Text>
                        Red
                    </Text>
                </View>
                <View style={[styles.Card, styles.CardTwo]}>
                    <Text>
                        Green
                    </Text>
                </View>
                <View style={[styles.Card, styles.CardThree]}>
                    <Text>
                        Blue
                    </Text>
                </View>
            </View>
        </View>
    )
}
export default FlatCards


const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: "#fff"
    },
    container: {
        padding: 8,
        flex: 1,
        flexDirection: 'row',
        gap: 8,
    },
    Card: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: 100,
        height: 100,
        padding: 4,
        borderRadius: 4,
    },
    CardOne: {
        backgroundColor: "#EF5356",
    },
    CardTwo: {
        backgroundColor: "#50DBB4",
    },
    CardThree: {
        backgroundColor: "#5DA3FA",
    },
})