import { View, Text, Linking, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'

export default function ActionCard() {
    function openWebsite(websiteLink: string){
        Linking.openURL(websiteLink)
    }
    return (
        <View>
            <Text style={styles.headingText}>Blog Card</Text>
            <View style={[styles.card, styles.cardElevated]}>
                <View style={styles.headingContainer}>
                    <Text style={styles.headerText}>What`s New In JavaScript 21 - ES12</Text>
                </View>
                <Image 
                    source={{
                        uri: 'https://images.unsplash.com/photo-1607706189992-eae578626c86?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                    }}
                    style={styles.cardImage}
                />
                <View style={styles.bodyContainer}>
                    <Text numberOfLines={4}>
                            Just like every year, Javascript brings in new features. This year
                            javascript is bringing 4 new features, which are almost in
                            production rollout. I won't be wasting much more time and directly
                            jump to code with easy to understand examples.
                    </Text>
                </View>
                <View style={styles.footerContainer}>
                    <TouchableOpacity
                        onPress={() => openWebsite('https://unsocially.in')}
                    >
                        <Text style={styles.socialLinks}>Read More</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => openWebsite('https://youtube.in')}
                    >
                        <Text  style={styles.socialLinks}>Follow Me</Text>
                    </TouchableOpacity>
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
        borderRadius: 8,
        marginVertical: 12,
        marginHorizontal: 16,

    },
    cardElevated: {
        backgroundColor: '#d1dcff',
        elevation: 8,
        shadowOffset: {
            width: 1,
            height: 1
        },
        shadowColor: "#ffffff",
        shadowOpacity: 0.25,

    },
    headingContainer: {
        // height: 40,
        padding: 12,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerText: {
        color: '#0b0344',
        fontSize: 16,
        fontWeight: '600'
    },
    cardImage: {
        height: 180,
        margin: 8,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
    },
    bodyContainer: {
        padding: 16
    },
    footerContainer: {
        padding: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    socialLinks: {
        fontSize: 16,
        color: '#000',
        backgroundColor: "#fff",
        paddingVertical: 4,
        paddingHorizontal: 12,
        borderRadius: 8
    }
})