import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

export default function FancyCards() {
    return (
        <View>
            <Text style={styles.headingText} >Trending Places</Text>
            <View style={[styles.card, styles.cardElevated]} >
                <Image
                    source={{
                        uri: 'https://images.unsplash.com/photo-1748689612568-2c52a597bd38?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                    }}
                    style={styles.cardImage}
                />
                <View style={styles.cardBody}>
                    <Text style={styles.cardTitle}>Sky Tower</Text>
                    <Text style={styles.cardLabel}>Shangai China Tower, China</Text>
                    <Text style={styles.cardDescription}>The tallest building in China is currently the Shanghai Tower, located in the namesake city at a height of 632 m, it is the third tallest building in the world.The previous two tallest buildings in mainland China have also been in Shanghai.</Text>
                    <Text style={styles.cardFooter}>15 mins Away</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8

    },
    card: {
        width: 350,
        // height: 350,
        borderRadius: 8,
        marginVertical: 12,
        marginHorizontal: 16,

    },
    cardElevated: {
        backgroundColor: '#FFFFFF',
        elevation: 8,
        shadowOffset: {
            width: 1,
            height: 1
        }
    },
    cardImage: {
        height: 180,
        marginBottom: 8,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
    },
    cardBody: {
        flex: 1,
        flexGrow: 1,
        paddingHorizontal: 12
    },
    cardTitle: {
        fontSize: 22,
        fontWeight: 'bold',
    },
    cardLabel: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 2
    },
    cardDescription: {
        color: "#212B2E",
        fontSize: 14,
        marginTop: 6,
        marginBottom: 12,
        flexShrink: 1
    },
    cardFooter: {},
})