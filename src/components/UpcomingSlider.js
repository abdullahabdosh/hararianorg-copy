import React from 'react';
import Swiper from 'react-native-swiper';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const UpcomingSlider = () => (
    <View style={styles.container}>
        <Text style={styles.header}>Upcoming Events </Text>
        <Swiper
            showsButtons={false}
            autoplay={false}
            autoplayTimeout={5}
            loop={false}
            style={styles.swiper}
            paginationStyle={styles.pagination}
            dotStyle={styles.dot}
            activeDotStyle={styles.activeDot}
        >
            {[1, 2, 3].map((item, index) => (
                <View key={index} style={styles.slide}>
                    <Image
                        source={{ uri: 'https://storage.googleapis.com/islamic_lessons_images/Nabi%20Mawlud%20Invite' }}
                        style={styles.bannerImage}
                    />
                    <Text style={styles.title}>Blog Post Title</Text>
                    <Text style={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
                    <Text style={styles.author}>Author name</Text>
                    <Text style={styles.date}>13/1/2022, 3 min read</Text>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Read</Text>
                    </TouchableOpacity>
                </View>
            ))}
        </Swiper>
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingBottom: 20
    },
    header: {
        fontSize: 18,
        textAlign: 'center',
        marginVertical: 10,
    },
    swiper: {
        height: 400,
    },
    slide: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        borderRadius: 10,
        backgroundColor: '#fff',
        marginHorizontal: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    bannerImage: {
        height: 150,
        width: '100%',
        borderRadius: 10,
    },
    title: {
        fontSize: 18,
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
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginTop: 10,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        textAlign: 'center',
    },
    pagination: {
        position: 'absolute',
        bottom: 10,
        alignSelf: 'center',
    },
    dot: {
        backgroundColor: '#bbb',
        width: 8,
        height: 8,
        borderRadius: 4,
        marginHorizontal: 3,
    },
    activeDot: {
        backgroundColor: '#007bff',
        width: 8,
        height: 8,
        borderRadius: 4,
        marginHorizontal: 3,
    },
});

export default UpcomingSlider;
