import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';

const ArticlesSlider = () => (
    <View style={styles.container}>
        <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.scrollViewContainer}
        >
            {[1, 2, 3, 4, 5].map((item, index) => (
                <View key={index} style={styles.card}>
                    <Image
                        source={{ uri: 'https://storage.googleapis.com/islamic_lessons_images/Nabi%20Mawlud%20Invite' }}
                        style={styles.image}
                    />
                    <Text style={styles.title}>Blog Post Title</Text>
                    <Text style={styles.description}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </Text>
                    <Text style={styles.author}>Author name</Text>
                    <Text style={styles.date}>13/1/2022, 3 min read</Text>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Read</Text>
                    </TouchableOpacity>
                </View>
            ))}
        </ScrollView>
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#f9f9f9',
    },
    scrollViewContainer: {
        alignItems: 'center',
    },
    card: {
        width: 280,
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 15,
        marginRight: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
    },
    image: {
        width: '100%',
        height: 150,
        borderRadius: 8,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 10,
    },
    description: {
        fontSize: 14,
        color: '#666',
        marginTop: 5,
    },
    author: {
        fontSize: 12,
        color: '#999',
    },
    date: {
        fontSize: 12,
        color: '#999',
        marginBottom: 10,
    },
    button: {
        backgroundColor: '#0066ff',
        borderRadius: 20,
        paddingVertical: 8,
        paddingHorizontal: 20,
        marginTop: 10,
    },
    buttonText: {
        color: '#fff',
        fontSize: 14,
        textAlign: 'center',
    },
});

export default ArticlesSlider;
