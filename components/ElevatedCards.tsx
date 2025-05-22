import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'


const ElevatedCards = () => {
    return (
        <View>
            <Text style={styles.headingText}>Elevated Cards</Text>
            <ScrollView horizontal={true} style={styles.container}>
                    <View style={[styles.Card, styles.CardElevated]}>
                        <Text>
                            Card
                        </Text>
                    </View>
                    <View style={[styles.Card, styles.CardElevated]}>
                        <Text>
                            Card
                        </Text>
                    </View>
                    <View style={[styles.Card, styles.CardElevated]}>
                        <Text>
                            Card
                        </Text>
                    </View>
                    <View style={[styles.Card, styles.CardElevated]}>
                        <Text>
                            Card
                        </Text>
                    </View>
                    <View style={[styles.Card, styles.CardElevated]}>
                        <Text>
                            Card
                        </Text>
                    </View>
                    <View style={[styles.Card, styles.CardElevated]}>
                        <Text>
                            Card
                        </Text>
                    </View>
                    <View style={[styles.Card, styles.CardElevated]}>
                        <Text>
                            Card
                        </Text>
                    </View>
                    <View style={[styles.Card, styles.CardElevated]}>
                        <Text>
                            Card
                        </Text>
                    </View>
                    <View style={[styles.Card, styles.CardElevated]}>
                        <Text>
                            Card
                        </Text>
                    </View>
                    
            </ScrollView>
        </View>
    )
}
export default ElevatedCards


const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: "#fff"
    },
    container: {
        padding: 8,
        backgroundColor: "#fff"
    },
    Card: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: 100,
        height: 100,
        padding: 4,
        borderRadius: 4,
        margin: 8,
    },
    CardElevated: {
        backgroundColor: "#CAD5E2",
        elevation: 8,
        shadowOffset:{
            width: 1,
            height: 1
        },
        shadowColor: "#000",
        shadowOpacity: 0.8,
        shadowRadius: 4
    }
})